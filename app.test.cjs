/* Türkçe Quest — unit test suite.
 * Run:  node --test --experimental-test-coverage app.test.cjs
 * Strategy: a permissive fake DOM + fake Firebase/Speech/Chart lets the whole
 * browser app boot headlessly in Node; pure logic is asserted directly, UI
 * paths are executed via the cached fake elements.
 */
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');

/* ---------------- fake DOM ---------------- */
const elCache = new Map();   // selector -> element(s); stable across queries
function mkEl() {
  const store = {
    style: {}, dataset: {}, children: [],
    classList: {
      _s: new Set(),
      add(...c) { c.forEach(x => this._s.add(x)); },
      remove(...c) { c.forEach(x => this._s.delete(x)); },
      toggle(c, f) { (f === undefined ? !this._s.has(c) : f) ? this._s.add(c) : this._s.delete(c); },
      contains(c) { return this._s.has(c); }
    }
  };
  return new Proxy(store, {
    get(t, k) {
      if (k in t) return t[k];
      switch (k) {
        case 'querySelector': case 'closest': return () => mkEl();
        case 'querySelectorAll': return () => [mkEl(), mkEl(), mkEl(), mkEl()];
        case 'appendChild': case 'removeChild': return c => c;
        case 'addEventListener': case 'remove': case 'focus': case 'blur': return () => {};
        case 'click': return () => { if (t.onclick) t.onclick({}); };
        case 'getContext': return () => ({});
        case 'textContent': case 'innerHTML': case 'value': case 'title':
        case 'src': case 'placeholder': return t[k] ?? '';
        case 'disabled': return !!t.disabled;
        default: return t[k];
      }
    },
    set(t, k, v) { t[k] = v; return true; }
  });
}
function q(sel) { if (!elCache.has(sel)) elCache.set(sel, mkEl()); return elCache.get(sel); }
function qa(sel) {
  const key = 'ALL:' + sel;
  if (!elCache.has(key)) elCache.set(key, [mkEl(), mkEl(), mkEl(), mkEl()]);
  return elCache.get(key);
}

const listeners = { doc: {}, win: {} };
global.document = {
  visibilityState: 'visible',
  body: mkEl(),
  documentElement: mkEl(),
  querySelector: q,
  querySelectorAll: qa,
  getElementById: id => q('#' + id),
  createElement: () => mkEl(),
  addEventListener: (ev, fn) => { listeners.doc[ev] = fn; }
};
global.window = global;
global.addEventListener = (ev, fn) => { listeners.win[ev] = fn; };

const lsStore = new Map();
global.localStorage = {
  getItem: k => (lsStore.has(k) ? lsStore.get(k) : null),
  setItem: (k, v) => lsStore.set(k, String(v)),
  removeItem: k => lsStore.delete(k)
};
global.navigator = { vibrate: () => true };
global.matchMedia = () => ({ matches: false });
global.confirm = () => true;
global.alert = () => {};
global.SpeechSynthesisUtterance = function (t) { this.text = t; };
global.AudioContext = class {
  constructor() { this.currentTime = 0; this.destination = {}; }
  createOscillator() { return { type: '', frequency: { value: 0 }, connect() {}, start() {}, stop() {} }; }
  createGain() { return { gain: { setValueAtTime() {}, exponentialRampToValueAtTime() {} }, connect() {} }; }
};
global.speechSynthesis = { cancel() {}, speak() {}, getVoices: () => [{ lang: 'tr-TR' }], onvoiceschanged: null };
global.Chart = class { constructor(ctx, cfg) { this.data = cfg.data; } update() {} destroy() {} };

/* fake SpeechRecognition that immediately "hears" a configurable phrase */
global.__heard = 'merhaba';
global.SpeechRecognition = function () {
  this.start = () => { this.onresult && this.onresult({ results: [[{ transcript: global.__heard }]] }); this.onend && this.onend(); };
};

/* ---------------- fake Firebase ---------------- */
let authCb = null;
const cloud = {};
const authApi = {
  currentUser: null,
  onAuthStateChanged(cb) { authCb = cb; cb(null); },
  getRedirectResult() { return Promise.resolve(); },
  signInWithPopup() { return Promise.reject({ code: 'auth/popup-blocked' }); },
  signInWithRedirect() {},
  signOut() { return Promise.resolve(); }
};
const dbApi = {
  collection() {
    return { doc() { return {
      get: async () => ({ exists: !!cloud.s, data: () => ({ state: cloud.s }) }),
      set: async d => { cloud.s = d.state; }
    }; } };
  }
};
global.firebase = {
  initializeApp() {},
  auth: Object.assign(() => authApi, { GoogleAuthProvider: function () {} }),
  firestore: Object.assign(() => dbApi, { FieldValue: { serverTimestamp: () => 0 } })
};

/* fast timers */
const realSetTimeout = setTimeout;
global.setTimeout = (fn, ms) => realSetTimeout(fn, 0);
global.location = { reload() {} };
const sleep = ms => new Promise(r => realSetTimeout(r, ms));

/* ---------------- load app under test ---------------- */
const src = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');
const shim = `\nmodule.exports={VOCAB,UNITS,LEVELS,BADGES,CULTURE,DIALOGUES,WEEK_TIERS,ID2UNIT,
norm,lev,speechMatch,isShortWord,shuffle,esc,mcChoices,
blank,loadRaw,load,save,card,gradeCard,dueCards,learnedCards,unlearned,weakCards,
levelInfo,addXp,markActive,openChest,weekId,ensureWeek,
mergeStates,pushCloud,pullCloud,bootGuest,bootApp,signInGoogle,
ensureQuest,renderQuest,renderDash,renderHeader,renderAll,renderUnits,renderBadges,renderWeek,renderHeat,renderCharts,
unitProgress,unitUnlocked,startUnit,renderLesson,renderLearnCard,renderQuiz,nextQuiz,
renderPracticeHome,startSrs,srsCard,startWeak,startListen,listenCard,startSpeak,speakCard,
dlgList,playDialogue,dlgQuiz,speakSeq,speak,toast,buzz,celebrate,
flowMax,curDiff,renderFlowHome,startFlow,endFlow,updateFlowHud,flowNext,teachThenTest,renderChallenge,
bindChoices,chMC,chListen,chType,chSpeak,flowAnswer,adaptDiff,showExplain,
badgeStats,checkBadges,switchView,
getS:()=>S,setS:v=>{S=v;},getF:()=>F,setF:v=>{F=v;},getKEY:()=>KEY,
getFlow:()=>flow,setFlow:v=>{flow=v;},_setLastPull:v=>{lastPullAt=v;},
snd,toggleSnd,xpPop,sndCtx,tone,_SND:()=>SND,
READING,startWrite,writeCard,readList,readView,readQuiz,
SUFFIX,startSuffix,suffixCard,certNeeded,examPool,startExam,examQ,startPlacement,placeQ,
LEXAMS,lexBest,renderExams,startLexam,lexQ};`;
const utPath = path.join(__dirname, '.app.under-test.cjs');
fs.writeFileSync(utPath, src + shim);
const A = require(utPath);

const today = () => new Date().toISOString().slice(0, 10);
function freshS() { A.setS(A.blank()); A.ensureQuest(); return A.getS(); }
function resetChoices() { qa('.choice').forEach(e => { e.dataset = {}; e.textContent = ''; }); return qa('.choice'); }

/* ---------------- data integrity ---------------- */
test('vocab has unique ids and required fields', () => {
  const seen = new Set();
  for (const v of A.VOCAB) {
    assert.ok(v.id && v.tr && v.en && v.cat && v.skill && v.ex, 'fields ' + v.id);
    assert.ok(!seen.has(v.id), 'dup ' + v.id); seen.add(v.id);
  }
  assert.ok(A.VOCAB.length >= 270);
});
test('every unit id resolves to vocab; 29 units across A1/A2/B1', () => {
  const ids = new Set(A.VOCAB.map(v => v.id));
  for (const u of A.UNITS) { assert.ok(u.lesson.title && u.lesson.body); u.ids.forEach(i => assert.ok(ids.has(i), i)); }
  assert.equal(A.UNITS.length, 29);
  assert.deepEqual([...new Set(A.UNITS.map(u => u.lvl))], ['A1', 'A2', 'B1']);
});
test('dialogue answers are always among options', () => {
  assert.equal(A.DIALOGUES.length, 6);
  for (const d of A.DIALOGUES) for (const qq of d.q) assert.ok(qq.opts.includes(qq.a), d.id);
});
test('levels ascend and culture deck has 12 entries', () => {
  for (let i = 1; i < A.LEVELS.length; i++) assert.ok(A.LEVELS[i].xp > A.LEVELS[i - 1].xp);
  assert.equal(A.LEVELS.at(-1).name, 'B1.4');
  assert.equal(A.CULTURE.length, 12);
  A.CULTURE.forEach(c => assert.ok(c.tr && c.en && c.by));
});

/* ---------------- text & speech matching ---------------- */
test('norm lowercases with Turkish locale and strips punctuation', () => {
  assert.equal(A.norm('Merhaba!'), 'merhaba');
  assert.equal(A.norm('İYİ'), 'iyi');
  assert.equal(A.norm('  Çay, lütfen. '), 'çay lütfen');
});
test('lev edit distance', () => {
  assert.equal(A.lev('abc', 'abc'), 0);
  assert.equal(A.lev('abc', 'abd'), 1);
  assert.equal(A.lev('', 'ab'), 2);
});
test('speechMatch accepts the hard "O" cases', () => {
  const o = A.VOCAB.find(v => v.tr === 'O');
  assert.ok(A.speechMatch(['oh'], o), 'oh');
  assert.ok(A.speechMatch(['ö'], o), 'ö');
  assert.ok(A.speechMatch(['o bir doktor'], o), 'phrase');
  assert.ok(A.speechMatch(['bir doktor'], o), 'half phrase');
  assert.ok(!A.speechMatch(['tamamen farklı bir şey'], o), 'reject unrelated');
});
test('speechMatch normal words: exact, fuzzy, token, reject', () => {
  const m = A.VOCAB.find(v => v.tr === 'Merhaba');
  assert.ok(A.speechMatch(['merhaba'], m));
  assert.ok(A.speechMatch(['merhabaa'], m));
  assert.ok(A.speechMatch(['selam merhaba dostum'], m));
  assert.ok(!A.speechMatch(['görüşürüz'], m));
  assert.ok(!A.speechMatch([''], m));
});
test('isShortWord boundary', () => {
  assert.ok(A.isShortWord('O'));
  assert.ok(A.isShortWord('Çay'));
  assert.ok(!A.isShortWord('Merhaba'));
});
test('esc and shuffle and mcChoices', () => {
  assert.equal(A.esc('a"b'), 'a&quot;b');
  assert.equal(A.esc(''), '');
  const arr = [1, 2, 3, 4, 5];
  assert.equal(A.shuffle(arr).length, 5);
  const item = A.VOCAB[0];
  const opts = A.mcChoices(item, 'en');
  assert.equal(opts.length, 4);
  assert.ok(opts.includes(item.en));
  assert.equal(new Set(opts).size, 4);
});

/* ---------------- SRS engine ---------------- */
test('gradeCard: again resets interval and lowers ease (floored)', () => {
  freshS();
  const id = A.VOCAB[0].id;
  const c = A.card(id); c.learned = true;
  for (let i = 0; i < 20; i++) A.gradeCard(id, 0);
  assert.equal(c.interval, 0);
  assert.ok(c.ease >= 1.3);
  assert.equal(c.due, today());
});
test('gradeCard: good/easy schedule grows; ease capped at 3', () => {
  freshS();
  const id = A.VOCAB[1].id;
  const c = A.card(id); c.learned = true;
  A.gradeCard(id, 2); assert.equal(c.interval, 1);
  A.gradeCard(id, 2); assert.equal(c.interval, 3);
  const before = c.interval;
  for (let i = 0; i < 15; i++) A.gradeCard(id, 3);
  assert.ok(c.interval > before);
  assert.ok(c.interval <= 365, 'interval capped (overflow bug fix)');
  assert.ok(c.ease <= 3.0);
  assert.ok(c.due > today());
});
test('due/learned/unlearned/weak partitions', () => {
  freshS();
  const S = A.getS();
  const a = A.VOCAB[0].id, b = A.VOCAB[1].id;
  S.cards[a] = { ease: 2.5, interval: 0, reps: 3, due: today(), learned: true, miss: 3 };
  S.cards[b] = { ease: 2.5, interval: 9, reps: 3, due: '2999-01-01', learned: true, miss: 0 };
  assert.deepEqual(A.dueCards().map(v => v.id), [a]);
  assert.equal(A.learnedCards().length, 2);
  assert.equal(A.unlearned().length, A.VOCAB.length - 2);
  assert.deepEqual(A.weakCards().map(v => v.id), [a]);
});

/* ---------------- XP, levels, streaks, chests ---------------- */
test('levelInfo at boundaries', () => {
  const S = freshS();
  S.xp = 0; assert.equal(A.levelInfo().cur.name, 'A1.1');
  S.xp = 199; assert.equal(A.levelInfo().cur.name, 'A1.1');
  S.xp = 200; assert.equal(A.levelInfo().cur.name, 'A1.2');
  S.xp = 6000; assert.equal(A.levelInfo().cur.name, 'B1.4');
  assert.equal(A.levelInfo().nxt, null);
});
test('addXp adds skill xp, daily log, weekly xp; boost doubles', () => {
  const S = freshS();
  A.addXp(10, 'Grammar');
  assert.equal(S.xp, 10);
  assert.equal(S.skills.Grammar, 10);
  assert.equal(S.xpLog[today()], 10);
  assert.equal(S.week.xp, 10);
  S.boostUntil = Date.now() + 60000;
  A.addXp(10, 'Grammar');
  assert.equal(S.xp, 30, '2x boost');
  S.boostUntil = 0;
  A.addXp(5); // no skill arg branch
  assert.equal(S.xp, 35);
});
test('markActive: consecutive day increments, freeze bridges 1 missed day, gap resets', () => {
  const S = freshS();
  const d = n => { const x = new Date(); x.setDate(x.getDate() - n); return x.toISOString().slice(0, 10); };
  S.lastActive = d(1); S.streak = 5;
  A.markActive(); assert.equal(S.streak, 6);
  A.markActive(); assert.equal(S.streak, 6, 'same day no-op');
  S.lastActive = d(2); S.streak = 6; S.freezes = 1;
  A.markActive(); assert.equal(S.streak, 7); assert.equal(S.freezes, 0);
  S.lastActive = d(5); S.streak = 9;
  A.markActive(); assert.equal(S.streak, 1, 'gap resets');
  A.setS(A.blank()); A.getS().lastActive = null;
  A.markActive(); assert.equal(A.getS().streak, 1, 'first ever day');
});
test('openChest covers all three reward branches', () => {
  const S = freshS();
  const realRandom = Math.random;
  Math.random = () => 0.1; A.openChest('t'); // bonus xp
  assert.ok(S.xp >= 20);
  Math.random = () => 0.5; const fz = S.freezes; A.openChest('t');
  assert.equal(S.freezes, Math.min(5, fz + 1));
  Math.random = () => 0.9; A.openChest('t');
  assert.ok(S.boostUntil > Date.now());
  Math.random = realRandom;
  assert.equal(S.chests, 3);
});
test('weekId is a Monday and ensureWeek resets stale weeks', () => {
  const S = freshS();
  assert.equal(new Date(A.weekId() + 'T00:00:00Z').getUTCDay(), 1);
  S.week = { id: '2000-01-03', xp: 500 };
  A.ensureWeek();
  assert.equal(S.week.xp, 0);
  assert.equal(S.week.id, A.weekId());
});

/* ---------------- merge engine (sync) ---------------- */
test('mergeStates: null handling and max/union semantics', () => {
  assert.equal(A.mergeStates(null, null), null);
  const a = A.blank(), b = A.blank();
  a.xp = 100; b.xp = 900;
  a.cards.x1 = { reps: 5, learned: true, interval: 3, due: today(), ease: 2.5 };
  b.cards.x1 = { reps: 2, learned: false, interval: 1, due: today(), ease: 2.5 };
  b.cards.x2 = { reps: 1, learned: true, interval: 0, due: today(), ease: 2.5 };
  a.units.U1 = { complete: true }; b.units.U2 = { lessonDone: true };
  a.badges = ['first']; b.badges = ['first', 'streak3'];
  a.dlg = { D1: true }; b.dlg = { D2: true };
  a.skills.Grammar = 50; b.skills.Grammar = 20;
  a.xpLog['2026-01-01'] = 30; b.xpLog['2026-01-01'] = 80;
  a.week = { id: A.weekId(), xp: 120 }; b.week = { id: '2000-01-03', xp: 999 };
  const t = today();
  a.quest = { date: t, newWords: 3, reviews: 2, lesson: true, listen: false, claimed: false };
  b.quest = { date: t, newWords: 1, reviews: 9, lesson: false, listen: true, claimed: true };
  const m = A.mergeStates(a, b);
  assert.equal(m.xp, 900);
  assert.equal(m.cards.x1.reps, 5);
  assert.equal(m.cards.x1.learned, true, 'learned is OR');
  assert.ok(m.cards.x2);
  assert.ok(m.units.U1.complete && m.units.U2.lessonDone);
  assert.deepEqual(m.badges.sort(), ['first', 'streak3']);
  assert.ok(m.dlg.D1 && m.dlg.D2);
  assert.equal(m.skills.Grammar, 50);
  assert.equal(m.xpLog['2026-01-01'], 80);
  assert.equal(m.week.xp, 120, 'stale week ignored');
  assert.equal(m.quest.newWords, 3);
  assert.equal(m.quest.reviews, 9);
  assert.ok(m.quest.lesson && m.quest.listen && m.quest.claimed);
  assert.equal(A.mergeStates(a, null), a);
  assert.equal(A.mergeStates(null, b), b);
});
test('mergeStates: one-sided stale quest falls back to blank quest', () => {
  const a = A.blank(), b = A.blank();
  a.quest = { date: '2000-01-01', newWords: 5 };
  b.quest = { date: '2000-01-01', newWords: 9 };
  const m = A.mergeStates(a, b);
  assert.equal(m.quest.date, null);
});

/* ---------------- quest & badges ---------------- */
test('ensureQuest resets on a new day', () => {
  const S = freshS();
  S.quest = { date: '2000-01-01', newWords: 9, reviews: 9, lesson: true, listen: true };
  A.ensureQuest();
  assert.equal(S.quest.date, today());
  assert.equal(S.quest.newWords, 0);
});
test('renderQuest claims bonus when all goals met', async () => {
  const S = freshS();
  S.quest = { date: today(), newWords: 5, reviews: 10, lesson: true, listen: true, claimed: false };
  const xp = S.xp;
  A.renderQuest();
  assert.ok(S.quest.claimed);
  assert.ok(S.xp >= xp + 50);
  assert.equal(S.questsDone, 1);
  A.renderQuest(); // idempotent second render
  assert.equal(S.questsDone, 1);
  await sleep(20);
});
test('every badge can unlock and checkBadges records them + culture cards', () => {
  const S = freshS();
  const maxed = { lessons: 99, bestStreak: 999, known: 999, reviews: 999, quiz: 99, questsDone: 9, listen: 99, speak: 99, chests: 99, cultureN: 12, dlgDone: 6, unitsDone: 29, a1Done: 15, writes: 99, readDone: 6, suffixN: 99, certsN: 2, lexBest: 10 };
  for (const b of A.BADGES) assert.ok(b.test(maxed), b.id + ' unlockable');
  S.xp = 450; // 3 culture cards
  S.lessons = 1; S.bestStreak = 7;
  A.checkBadges();
  assert.equal(S.cultureN, 3);
  assert.ok(S.badges.includes('first'));
  assert.ok(S.badges.includes('streak3') && S.badges.includes('streak7'));
});
test('badgeStats counts dialogue completions', () => {
  const S = freshS();
  S.dlg = { D1: true, D2: true, D3: false };
  assert.equal(A.badgeStats().dlgDone, 2);
});

/* ---------------- units & flow engine ---------------- */
test('unitProgress and unlock chain', () => {
  const S = freshS();
  const u0 = A.UNITS[0];
  assert.equal(A.unitUnlocked(0), true);
  assert.ok(!A.unitUnlocked(1));
  S.units[u0.id] = { complete: true };
  assert.equal(A.unitUnlocked(1), true);
  u0.ids.slice(0, 3).forEach(id => { A.card(id).learned = true; });
  const p = A.unitProgress(u0);
  assert.equal(p.learned, 3);
  assert.equal(p.total, u0.ids.length);
});
test('flowMax grows with vocabulary knowledge', () => {
  freshS();
  assert.equal(A.flowMax(), 2);
  const S = A.getS();
  A.VOCAB.slice(0, 6).forEach(v => S.cards[v.id] = { learned: true, reps: 1, interval: 1, due: '2999-01-01', ease: 2.5 });
  assert.equal(A.flowMax(), 3);
  A.VOCAB.slice(6, 10).forEach(v => S.cards[v.id] = { learned: true, reps: 1, interval: 1, due: '2999-01-01', ease: 2.5 });
  assert.equal(A.flowMax(), 4);
  A.VOCAB.slice(10, 14).forEach(v => S.cards[v.id] = { learned: true, reps: 1, interval: 1, due: '2999-01-01', ease: 2.5 });
  assert.equal(A.flowMax(), 5, 'speech tier (fake SR present)');
  assert.ok(A.curDiff() >= 1);
});
test('adaptDiff raises on hot streak and lowers on struggle', () => {
  const S = freshS();
  A.VOCAB.slice(0, 14).forEach(v => S.cards[v.id] = { learned: true, reps: 1, interval: 1, due: '2999-01-01', ease: 2.5 });
  A.setF({ combo: 0, best: 0, xp: 0, n: 0, recent: [1, 1, 1, 1, 1] });
  S.diff = 1; A.adaptDiff();
  assert.equal(S.diff, 2, 'difficulty up');
  A.setF({ combo: 0, best: 0, xp: 0, n: 0, recent: [0, 0, 0, 1] });
  A.adaptDiff();
  assert.equal(S.diff, 1, 'difficulty down');
  A.setF({ combo: 0, best: 0, xp: 0, n: 0, recent: [1] });
  A.adaptDiff(); // too few samples — unchanged
  assert.equal(S.diff, 1);
});
test('flowAnswer: correct builds combo & schedules card; wrong resets and explains', async () => {
  const S = freshS();
  const item = A.VOCAB[0];
  A.card(item.id).learned = true;
  A.setF({ combo: 0, best: 0, xp: 0, n: 1, recent: [] });
  A.flowAnswer(true, item);
  let F = A.getF();
  assert.equal(F.combo, 1);
  assert.ok(F.xp >= 5);
  A.flowAnswer(false, item);
  F = A.getF();
  assert.equal(F.combo, 0);
  assert.equal(S.cards[item.id].miss, 1);
  await sleep(20);
});
test('flow lifecycle: start, hud, next, teach, challenges, end', async () => {
  const S = freshS();
  A.startFlow();
  assert.ok(A.getF());
  A.updateFlowHud();
  A.flowNext();              // teaches first new word (no learned words yet)
  A.teachThenTest(A.VOCAB[2]);
  A.renderChallenge(A.VOCAB[2], 1);
  A.renderChallenge(A.VOCAB[2], 2);
  A.renderChallenge(A.VOCAB[2], 3);
  A.renderChallenge(A.VOCAB[2], 4);
  A.renderChallenge(A.VOCAB[2], 5);
  A.showExplain(A.VOCAB[2]);
  A.bindChoices(A.VOCAB[2].en, A.VOCAB[2]);
  // due-card path with weighting
  S.cards[A.VOCAB[3].id] = { learned: true, reps: 2, interval: 0, due: today(), ease: 2.5, miss: 4 };
  A.setF({ combo: 0, best: 0, xp: 9, n: 3, recent: [0, 0] }); // struggling → no new word
  A.flowNext();
  A.setF({ combo: 2, best: 3, xp: 70, n: 2, recent: [1] });
  A.endFlow();
  assert.equal(A.getF(), null);
  A.renderFlowHome();
  await sleep(30);
});
test('flowNext: all-words-done branch and learned-only fallback', () => {
  const S = freshS();
  A.VOCAB.forEach(v => S.cards[v.id] = { learned: true, reps: 1, interval: 9, due: '2999-01-01', ease: 2.5 });
  A.setF({ combo: 0, best: 0, xp: 0, n: 1, recent: [] });
  A.flowNext(); // learned-only random pick path
  assert.ok(A.getF().n >= 2);
});
test('flowNext picks weighted due card when struggling with enough vocabulary', () => {
  const S = freshS();
  A.VOCAB.slice(0, 4).forEach(v => S.cards[v.id] = { learned: true, reps: 2, interval: 9, due: '2999-01-01', ease: 2.5, miss: 0 });
  S.cards[A.VOCAB[4].id] = { learned: true, reps: 2, interval: 0, due: today(), ease: 2.5, miss: 5 };
  A.setF({ combo: 0, best: 0, xp: 0, n: 1, recent: [0, 0, 0, 0] });   // struggling → no new word
  A.flowNext();                                                        // → due-branch weighted pick
  assert.ok(A.getF().n >= 2);
});

/* ---------------- practice modes ---------------- */
test('unit lesson → learn → quiz pipeline executes', async () => {
  freshS();
  const u = A.UNITS[0];
  A.startUnit(u);
  A.renderLesson();
  q('#lessonNext').click();      // marks lesson done, starts learn
  const S = A.getS();
  assert.ok(S.units[u.id].lessonDone);
  assert.equal(S.lessons, 1);
  A.renderLearnCard();
  q('#reveal').click();
  A.renderQuiz();
  A.nextQuiz();
  // force a pass
  A.setF && void 0;
  await sleep(30);
});
test('srs review, weak drill, listening, speaking, dialogues all run', async () => {
  const S = freshS();
  S.cards[A.VOCAB[0].id] = { learned: true, reps: 2, interval: 0, due: today(), ease: 2.5, miss: 2 };
  S.cards[A.VOCAB[1].id] = { learned: true, reps: 2, interval: 0, due: today(), ease: 2.5, miss: 0 };
  A.renderPracticeHome();
  A.startSrs(); q('#reveal').click();
  A.startWeak();
  A.startListen(); A.listenCard();
  A.startSpeak(); A.speakCard();
  global.__heard = A.VOCAB[0].tr; q('#mic').click();   // recognised
  global.__heard = 'xxxxxxxx';   q('#mic').click();    // not recognised → retry path
  q('#saidIt').click();
  A.dlgList();
  const d = A.DIALOGUES[0];
  A.playDialogue(d);
  q('#playAll').click();
  A.dlgQuiz(d, 0, 0);
  A.dlgQuiz(d, d.q.length, d.q.length);  // completion path
  assert.ok(A.getS().dlg[d.id]);
  A.speakSeq(['merhaba', 'çay']);
  await sleep(30);
});
test('chSpeak short-word phrase mode + chType fuzzy check', async () => {
  freshS();
  const o = A.VOCAB.find(v => v.tr === 'O');
  A.setF({ combo: 0, best: 0, xp: 0, n: 1, recent: [] });
  A.chSpeak(o);
  global.__heard = 'o bir doktor';
  q('#mic').click();
  A.chType(A.VOCAB[0]);
  q('#tin').value = 'merhaba';
  q('#tsub').click();
  A.chType(A.VOCAB[1]);
  q('#tin').value = '';      // empty input guard
  q('#tsub').click();
  await sleep(30);
});

/* ---------------- rendering & misc ---------------- */
test('all dashboard renderers execute without throwing', () => {
  const S = freshS();
  S.xp = 1836; S.streak = 3; S.xpLog[today()] = 262;
  A.renderHeader(); A.renderDash(); A.renderWeek(); A.renderHeat(); A.renderCharts();
  A.renderCharts(); // in-place update branch
  A.renderUnits(); A.renderBadges(); A.renderAll();
  S.xp = 99999; A.renderDash(); // max-level branch (no nxt)
  S.xpLog = {}; A.renderDash(); // zero-pace ETA branch
  for (const v of ['dash', 'flow', 'quest', 'learn', 'practice', 'badges']) A.switchView(v);
});
test('helpers: toast, buzz, celebrate, speak, blank/load/save', () => {
  A.toast('hi'); A.buzz(10); A.celebrate(); A.speak('merhaba');
  const b = A.blank();
  assert.equal(b.xp, 0);
  assert.equal(b.freezes, 2);
  lsStore.set('turkce_quest_v2_test', '{bad json');
  assert.equal(A.loadRaw('turkce_quest_v2_test'), null, 'corrupt json → null');
  const S = freshS(); S.xp = 7; A.save();
  assert.ok(lsStore.get(A.getKEY()).includes('"xp":7'));
});

/* ---------------- cloud sync ---------------- */
test('guest boot, sign-in merge, pushCloud/pullCloud round trip', async () => {
  lsStore.clear();
  A.bootGuest();
  const S = A.getS(); S.xp = 50; A.save();
  // simulate cloud already holding richer progress
  const rich = A.blank(); rich.xp = 700;
  cloud.s = JSON.stringify(rich);
  authApi.currentUser = { uid: 'u1', displayName: 'Test User', email: 't@x.com', photoURL: 'p.png' };
  await authCb(authApi.currentUser);
  await sleep(40);
  assert.ok(A.getS().xp >= 700, 'cloud merged in');
  const pulled = await A.pullCloud();
  assert.ok(pulled && pulled.xp >= 700);
  A.getS().xp = 9999; A.pushCloud(true);
  await sleep(40);
  assert.ok(JSON.parse(cloud.s).xp >= 9999, 'pushed');
  // visibility handlers
  document.visibilityState = 'hidden'; await listeners.win.visibilitychange();
  document.visibilityState = 'visible'; await listeners.win.visibilitychange();
  await sleep(40);
  // sign-out → auth screen branch
  authApi.currentUser = null;
  lsStore.delete('tq_mode');
  await authCb(null);
  lsStore.set('tq_mode', 'guest');
  await authCb(null); // guest fast-path
  A.signInGoogle();   // popup rejects → redirect fallback
  await sleep(30);
});
test('unit quiz: pass with chest, fail with retry, choice clicks', async () => {
  freshS();
  const u = A.UNITS[0];
  // render one question and click correct + wrong choices
  A.setFlow({ mode: 'unit', unit: u, phase: 'quiz', qIdx: 0, qScore: 0, qItems: u.ids.slice(0, 2).map(id => A.VOCAB.find(v => v.id === id)) });
  A.nextQuiz();
  let els = qa('.choice');
  const v0 = A.getFlow().qItems[0];
  els[0].textContent = v0.en; els[1].textContent = 'wrong';
  els[0].click();                       // correct branch
  els[0].click();                       // dataset.done guard
  A.setFlow({ mode: 'unit', unit: u, phase: 'quiz', qIdx: 0, qScore: 0, qItems: [v0] });
  A.nextQuiz();
  els = qa('.choice');
  els[1].textContent = 'nope'; els[1].click();   // wrong branch
  // completion: pass
  A.setFlow({ mode: 'unit', unit: u, phase: 'quiz', qIdx: 9, qScore: 9, qItems: Array(9).fill(v0) });
  A.nextQuiz();
  assert.ok(A.getS().units[u.id].complete, 'unit marked complete');
  // completion: fail
  A.setFlow({ mode: 'unit', unit: u, phase: 'quiz', qIdx: 9, qScore: 0, qItems: Array(9).fill(v0) });
  A.nextQuiz();
  q('#retry').click();
  await sleep(30);
});
test('dialogue + listening choice handlers fire both branches', async () => {
  freshS();
  const d = A.DIALOGUES[0];
  A.dlgQuiz(d, 0, 0);
  let els = qa('.choice');
  els[0].dataset.val = d.q[0].a; els[0].click();          // correct
  A.dlgQuiz(d, 0, 0);
  els = qa('.choice');
  els[1].dataset.val = 'WRONG'; els[1].click();           // wrong
  const S = A.getS();
  A.VOCAB.slice(0, 6).forEach(v => S.cards[v.id] = { learned: true, reps: 1, interval: 1, due: '2999-01-01', ease: 2.5 });
  A.startListen();
  els = qa('.choice');
  const heardWord = A.getFlow().pool[0];
  els[0].textContent = heardWord.en; els[0].click();       // correct listen
  await sleep(15);                                          // let the advance timer run while flow is live
  A.listenCard();
  els = resetChoices();
  const f = A.getFlow();
  const cur = f.pool[f.n % f.pool.length];
  els[0].textContent = cur.en;                              // present so highlight body runs
  els[1].textContent = 'WRONG'; els[1].click();             // wrong listen
  // finished session screens
  A.setFlow({ mode: 'listen', n: 99, total: 8, score: 5, pool: [heardWord] });
  A.listenCard();
  A.setFlow({ mode: 'speak', n: 99, total: 6, score: 5, pool: [heardWord] });
  A.speakCard();
  q('#again').click();
  // guards: stale timers with switched mode
  A.setFlow(null);
  A.srsCard(); A.listenCard(); A.speakCard();
  await sleep(30);
});
test('flow bindChoices wrong branch + chMC direction 2', async () => {
  freshS();
  const item = A.VOCAB[0];
  A.card(item.id).learned = true;
  A.setF({ combo: 0, best: 0, xp: 0, n: 1, recent: [] });
  A.chMC(item, 2);                       // EN→TR recall direction
  let els = resetChoices();
  els[0].dataset.val = item.tr;          // present so the highlight loop body runs
  els[2].dataset.val = 'totally-wrong';
  els[2].click();                        // wrong → combo reset + explain + highlight correct
  A.setF({ combo: 0, best: 0, xp: 0, n: 1, recent: [] });
  A.chMC(item, 1);                       // TR→EN recognise direction
  els = resetChoices();
  els[0].dataset.val = item.en;
  els[0].click();                        // correct branch via click
  await sleep(30);
});
test('pushCloud merges stale cloud before writing; pullCloud survives db errors', async () => {
  freshS();
  authApi.currentUser = { uid: 'u1', displayName: 'T', email: 't@x.com' };
  const rich = A.blank(); rich.xp = 5000;
  cloud.s = JSON.stringify(rich);
  A._setLastPull(0);                      // force the throttled merge read
  A.getS().xp = 10;
  A.pushCloud(true);
  await sleep(50);
  assert.ok(A.getS().xp >= 5000, 'merged cloud xp before push');
  // db error path
  const realGet = dbApi.collection;
  dbApi.collection = () => ({ doc: () => ({ get: async () => { throw new Error('net'); }, set: async () => { throw new Error('net'); } }) });
  A._setLastPull(0);
  assert.equal(await A.pullCloud(), null);
  A.pushCloud(true);                      // offline branch
  await sleep(40);
  dbApi.collection = realGet;
});
test('signInGoogle fallback matrix + header sync/signout clicks', async () => {
  authApi.signInWithPopup = () => Promise.reject({ code: 'auth/popup-blocked' });
  A.signInGoogle();                       // → redirect fallback
  authApi.signInWithPopup = () => Promise.reject({ code: 'auth/internal-error', message: 'boom' });
  A.signInGoogle();                       // → alert branch
  authApi.signInWithPopup = () => Promise.reject({ code: 'auth/popup-closed-by-user' });
  A.signInGoogle();                       // → silent
  authApi.signInWithPopup = () => Promise.resolve();
  A.signInGoogle();                       // → success
  await sleep(20);
  authApi.currentUser = null;
  await q('#syncChip').onclick();         // not signed in → toast branch
  authApi.currentUser = { uid: 'u1', displayName: 'T', email: 't@x.com' };
  cloud.s = JSON.stringify(A.blank());
  await q('#syncChip').onclick();         // signed in → pull+merge+push
  q('#signOut').click();
  await sleep(40);
});
test('keydown listener guards on flow visibility', () => {
  global.__flowKey = null;
  listeners.doc.keydown({ key: 'Enter' });
  q('#flow').classList.add('active');
  let hit = 0;
  global.__flowKey = () => hit++;
  listeners.doc.keydown({ key: '1' });
  assert.equal(hit, 1);
});
test('flowNext "Harika" end-state when every word is mastered', () => {
  freshS();
  const saved = A.VOCAB.splice(0, A.VOCAB.length);   // temporarily empty the vocabulary
  A.setF({ combo: 0, best: 0, xp: 0, n: 1, recent: [] });
  A.flowNext();                                       // → celebration end-state branch
  A.VOCAB.push(...saved);
  assert.equal(A.VOCAB.length, saved.length, 'vocab restored');
});
test('sound engine: all cues, mute toggle, missing-AudioContext fallback', () => {
  A._SND().on = true; A._SND().ctx = null;
  A.snd('ok'); A.snd('no'); A.snd('chest'); A.snd('quest'); A.snd('ok'); // second call reuses ctx
  A.toggleSnd(); assert.equal(A._SND().on, false);
  A.snd('ok');                                   // muted early-return
  A.toggleSnd(); assert.equal(A._SND().on, true); // back on + confirmation ding
  const AC = global.AudioContext;
  global.AudioContext = undefined; A._SND().ctx = null;
  A.snd('ok');                                   // no AudioContext → graceful null
  assert.equal(A.sndCtx(), null);
  global.AudioContext = AC;
});
test('xpPop floats and respects reduced motion', () => {
  A.xpPop(8);
  const mm = global.matchMedia;
  global.matchMedia = () => ({ matches: true });
  A.xpPop(8);                                    // reduced-motion early return
  global.matchMedia = mm;
});
test('onboarding card shows at 0 XP, starts flow, then disappears', async () => {
  const S = freshS();
  S.xp = 0;
  A.renderDash();
  assert.ok(q('#fsWrap').innerHTML.includes('Hoş geldin'), 'first-steps visible');
  q('#fsStart').click();                         // big friendly start button
  S.xp = 50;
  A.renderDash();
  assert.equal(q('#fsWrap').innerHTML, '', 'gone after first XP');
  assert.ok(q('#helloQuest').textContent.includes('Quest'), 'quest pill rendered');
  q('#helloQuest').onclick && q('#helloQuest').onclick();
  q('#sndChip').onclick && q('#sndChip').onclick(); q('#sndChip').onclick && q('#sndChip').onclick();
  S.quest = { date: today(), newWords: 5, reviews: 10, lesson: true, listen: true, claimed: true };
  A.renderDash();                                // quest-complete pill branch
  assert.ok(q('#helloQuest').textContent.includes('✓'));
  await sleep(20);
});
test('endFlow shows summary with celebration and chest', async () => {
  freshS();
  const realRandom = Math.random;
  Math.random = () => 0.1;                       // guarantee chest branch
  A.setF({ combo: 4, best: 6, xp: 120, n: 15, recent: [] });
  A.endFlow();
  assert.equal(A.getF(), null);
  q('#flowDone').click();                        // back to dashboard
  A.setF({ combo: 1, best: 1, xp: 10, n: 2, recent: [] });
  Math.random = () => 0.9;                       // small session → no chest
  A.endFlow();
  q('#flowAgain').click();                       // keep flowing
  Math.random = realRandom;
  await sleep(30);
});
test('reading data integrity: answers among options, unique ids', () => {
  assert.equal(A.READING.length, 6);
  const seen = new Set();
  for (const r of A.READING) {
    assert.ok(r.q.opts.includes(r.q.a), r.id);
    assert.ok(r.txt.length > 30 && r.title && r.ico);
    assert.ok(!seen.has(r.id)); seen.add(r.id);
  }
});
test('writing drill: correct, fuzzy, wrong, show-answer, empty guard, finish', async () => {
  const S = freshS();
  A.VOCAB.slice(0, 6).forEach(v => S.cards[v.id] = { learned: true, reps: 1, interval: 1, due: '2999-01-01', ease: 2.5 });
  A.startWrite();
  let v = A.getFlow().pool[0];
  q('#win').value = '';   q('#wsub').click();          // empty input guard
  q('#win').value = v.tr; q('#wsub').click();          // exact correct → +8 Writing
  await sleep(15);
  const w1 = S.skills.Writing;
  assert.ok(w1 >= 8, 'Writing XP credited');
  v = A.getFlow().pool[A.getFlow().n % A.getFlow().pool.length];
  q('#win').value = 'zzzzzzzz'; q('#wsub').click();    // wrong → shows answer
  await sleep(15);
  q('#wshow').click();                                  // show-answer path
  await sleep(15);
  A.setFlow({ mode: 'write', n: 99, total: 8, score: 5, pool: [v] });
  A.writeCard();                                        // finished screen
  q('#again').click();
  A.setFlow(null); A.writeCard();                       // stale guard
  assert.ok(S.writes >= 3);
});
test('reading corner: list, view, read-aloud, quiz right/wrong, repeat XP', async () => {
  const S = freshS();
  A.readList();
  A.readView(A.READING[0]);
  q('#readAloud').click();
  q('#toRQuiz').click();
  let els = resetChoices();
  els[0].dataset.val = A.READING[0].q.a; els[0].click();          // correct first time → +12 Reading
  await sleep(15);
  assert.ok(S.read.R1, 'story marked read');
  assert.ok(S.skills.Reading >= 12);
  A.readQuiz(A.READING[0]);
  els = resetChoices();
  els[0].dataset.val = A.READING[0].q.a; els[0].click();          // repeat → +4
  await sleep(15);
  A.readQuiz(A.READING[1]);
  els = resetChoices();
  els[1].dataset.val = 'WRONG'; els[0].dataset.val = A.READING[1].q.a; els[1].click(); // wrong branch
  await sleep(15);
  assert.ok(!S.read.R2, 'wrong answer does not mark story');
  assert.ok(S.reads >= 3);
});
test('flow credits the exercised modality, not the word category', () => {
  const S = freshS();
  const item = A.VOCAB.find(v => v.skill === 'Vocabulary');
  A.card(item.id).learned = true;
  A.setF({ combo: 0, best: 0, xp: 0, n: 1, recent: [], chType: 3 });   // listening challenge
  A.flowAnswer(true, item);
  assert.ok(S.skills.Listening >= 5, 'Listening credited');
  A.setF({ combo: 0, best: 0, xp: 0, n: 1, recent: [], chType: 4 });   // typing challenge
  A.flowAnswer(true, item);
  assert.ok(S.skills.Writing >= 5, 'Writing credited');
  assert.equal(S.writes, 1, 'flow typing counts as a write');
  A.setF({ combo: 0, best: 0, xp: 0, n: 1, recent: [], chType: 5 });   // speaking challenge
  A.flowAnswer(true, item);
  assert.ok(S.skills.Speaking >= 5, 'Speaking credited');
  A.renderChallenge(item, 3);                                          // renderChallenge stamps chType
  assert.equal(A.getF().chType, 3);
});
test('merge keeps read map and writes/reads counters', () => {
  const a = A.blank(), b = A.blank();
  a.read = { R1: true }; b.read = { R2: true };
  a.writes = 9; b.writes = 4; b.reads = 7;
  const m = A.mergeStates(a, b);
  assert.ok(m.read.R1 && m.read.R2);
  assert.equal(m.writes, 9);
  assert.equal(m.reads, 7);
});
test('suffix data integrity: parts join to real words, notes exist', () => {
  assert.ok(A.SUFFIX.length >= 15);
  for (const s of A.SUFFIX) {
    assert.ok(s.en && s.note, s.en);
    assert.ok(s.parts.length >= 2 && s.parts.length <= 4);
    assert.ok(s.parts.join('').length >= 3);
  }
});
test('suffix lab: correct build, wrong order, clear, finish, stale guard', async () => {
  freshS();
  A.startSuffix();
  const s = A.getFlow().cur;
  // build in correct order via stable fake tiles
  let tiles = qa('#tileRow .choice');
  tiles.forEach(t => { t.dataset = {}; t.classList.remove('correct'); });
  s.parts.forEach((p, i) => { tiles[i].dataset.t = p; tiles[i].click(); });
  q('#sufCheck').click();
  await sleep(15);
  const S = A.getS();
  assert.ok(S.skills.Grammar >= 10, 'Grammar XP credited');
  assert.equal(S.suffixN, 1);
  // wrong order on next card
  const s2 = A.getFlow().cur;
  tiles = qa('#tileRow .choice');
  tiles.forEach(t => { t.dataset = {}; t.classList.remove('correct'); });
  tiles[0].dataset.t = s2.parts[s2.parts.length - 1]; tiles[0].click();   // reversed start
  tiles[1].dataset.t = s2.parts[0]; tiles[1].click();
  q('#sufClear').click();                                                  // clear works
  tiles[0].click();                                                        // rebuild partial (wrong length)
  q('#sufCheck').click();
  await sleep(15);
  assert.equal(S.suffixN, 2, 'attempt counted even when wrong');
  A.setFlow({ mode: 'suffix', n: 99, total: 8, score: 6, pool: A.SUFFIX.slice() });
  A.suffixCard();                                                          // finish screen
  q('#again').click();
  A.setFlow(null); A.suffixCard();                                         // stale guard
});
test('certNeeded gates labels until exams are passed', () => {
  const S = freshS();
  S.xp = 100; assert.equal(A.certNeeded(), null, 'A1 band needs nothing');
  S.xp = 1200; assert.equal(A.certNeeded(), 'A1', 'A2 band needs A1 cert');
  S.certs = { A1: true }; assert.equal(A.certNeeded(), null);
  S.xp = 3400; assert.equal(A.certNeeded(), 'A2', 'B1 band needs A2 cert');
  S.certs = { A1: true, A2: true }; assert.equal(A.certNeeded(), null);
  assert.ok(A.examPool('A1').length >= 100);
});
test('checkpoint exam: question clicks, pass certifies, fail offers retry', async () => {
  const S = freshS();
  A.startExam('A1');
  assert.equal(A.getFlow().qs.length, 10);
  // answer one question correctly and one wrongly via clicks
  let v = A.getFlow().qs[0];
  let els = resetChoices();
  els[0].dataset.val = v.en; els[0].click();          // qi 0 is TR→EN
  await sleep(15);
  v = A.getFlow().qs[1];
  els = resetChoices();
  els[1].dataset.val = 'WRONG'; els[0].dataset.val = v.tr; els[1].click();
  await sleep(15);
  // force pass ending
  const realRandom = Math.random; Math.random = () => 0.9;
  A.setFlow({ mode: 'exam', lvl: 'A1', qi: 10, score: 9, qs: Array(10).fill(v) });
  A.examQ();
  assert.ok(S.certs.A1, 'certified');
  assert.ok(S.badges.includes('cert1'), 'cert badge');
  q('#backC').click();
  // fail ending
  A.setFlow({ mode: 'exam', lvl: 'A2', qi: 10, score: 5, qs: Array(10).fill(v) });
  A.examQ();
  assert.ok(!S.certs.A2);
  q('#backC').click();
  A.setFlow({ mode: 'exam', lvl: 'A2', qi: 10, score: 5, qs: Array(10).fill(v) });
  A.examQ(); q('#retryC').click();                    // retry restarts exam
  Math.random = realRandom;
  A.setFlow(null); A.examQ();                          // stale guard
  await sleep(20);
});
test('placement test unlocks the right tier of the tree', async () => {
  let S = freshS();
  A.startPlacement();
  assert.equal(A.getFlow().qs.length, 12);
  const v = A.getFlow().qs[0];
  let els = resetChoices();
  els[0].dataset.val = v.en; els[0].click();           // one correct click (band 0)
  await sleep(10);
  els = resetChoices();
  els[1].dataset.val = 'WRONG'; els[1].click();        // one wrong click
  await sleep(10);
  const tiers = [[[4,4,4],21],[[4,4,0],15],[[4,0,0],8],[[1,0,0],0]];
  for (const [bands, expect] of tiers) {
    S = freshS();
    A.setFlow({ mode: 'place', qi: 12, bands: bands.slice(), qs: Array(12).fill(v) });
    A.placeQ();
    assert.equal(Object.values(S.units).filter(u => u.complete).length, expect, 'tier ' + expect);
  }
  q('#goTree').click();
  A.setFlow(null); A.placeQ();                          // stale guard
});
test('dashboard cert row: exam button, verified text, placement entry', async () => {
  const S = freshS();
  S.xp = 1200;                                          // A2 band, no cert
  A.renderDash();
  assert.ok(q('#certRow').innerHTML.includes('checkpoint exam'));
  q('#certBtn').click();                                // launches exam
  S.certs = { A1: true };
  A.renderDash();
  assert.ok(q('#certRow').innerHTML.includes('Verified'));
  S.xp = 0; S.certs = {};
  A.renderDash();
  assert.ok(q('#fsWrap').innerHTML.includes('I know some Turkish'));
  q('#fsPlace').click();                                // placement from onboarding
  await sleep(20);
});
test('merge keeps suffix count and certs union', () => {
  const a = A.blank(), b = A.blank();
  a.suffixN = 12; b.suffixN = 30;
  a.certs = { A1: true }; b.certs = { A2: true };
  const m = A.mergeStates(a, b);
  assert.equal(m.suffixN, 30);
  assert.ok(m.certs.A1 && m.certs.A2);
});
test('master exams: 10 exams × 10 questions, answers valid, difficulty ladder labelled', () => {
  assert.equal(A.LEXAMS.length, 10);
  const ids = new Set();
  for (const e of A.LEXAMS) {
    assert.ok(e.name && e.cefr && e.ico && e.desc, e.id);
    assert.ok(!ids.has(e.id)); ids.add(e.id);
    assert.equal(e.qs.length, 10, e.id + ' has 10 questions');
    for (const qq of e.qs) {
      assert.equal(qq.opts.length, 4, e.id);
      assert.ok(qq.opts.includes(qq.a), e.id + ': ' + qq.q);
      assert.equal(new Set(qq.opts).size, 4, e.id + ' unique options');
    }
  }
  assert.equal(A.LEXAMS[0].cefr, 'A0');
  assert.equal(A.LEXAMS[9].cefr, 'C2');
});
test('lexBest reflects highest exam passed with 8/10', () => {
  const S = freshS();
  assert.equal(A.lexBest(), 0);
  S.lexams = { E1: 10, E2: 8, E3: 7 };
  assert.equal(A.lexBest(), 2, 'E3 at 7/10 does not count');
  S.lexams.E10 = 9;
  assert.equal(A.lexBest(), 10, 'rank is the HIGHEST passed');
});
test('master exam run: clicks, harsh fail, pass with reward, wolf ending', async () => {
  const S = freshS();
  A.renderExams();
  assert.ok(q('#lexSub').textContent.includes('Hocan bekliyor'));
  A.startLexam(A.LEXAMS[0]);
  const qq = A.getFlow().ex.qs[0];
  let els = resetChoices();
  els[0].dataset.val = qq.a; els[0].click();                    // correct click
  await sleep(15);
  const q2 = A.getFlow().ex.qs[1];
  els = resetChoices();
  els[1].dataset.val = 'WRONG'; els[0].dataset.val = q2.a; els[1].click(); // wrong click
  await sleep(15);
  // harsh fail ending
  A.setFlow({ mode: 'lex', ex: A.LEXAMS[0], qi: 10, score: 5 });
  A.lexQ();
  assert.equal(S.lexams.E1, 5, 'best score recorded');
  assert.ok(!q('#lexStage').innerHTML.includes('geçtin'));
  q('#lexRetry').click();                                       // retry restarts
  // pass ending with first-time reward
  const realRandom = Math.random; Math.random = () => 0.9;
  A.setFlow({ mode: 'lex', ex: A.LEXAMS[0], qi: 10, score: 9 });
  const xp = S.xp;
  A.lexQ();
  assert.equal(S.lexams.E1, 9);
  assert.ok(S.xp >= xp + 40, 'first-pass XP');
  q('#lexBack').click();
  // re-pass gives no double XP
  const xp2 = S.xp;
  A.setFlow({ mode: 'lex', ex: A.LEXAMS[0], qi: 10, score: 10 });
  A.lexQ();
  assert.equal(S.xp, xp2, 'no farming the hoca');
  // E5 pass triggers chest; E10 pass shows wolf line + badges
  A.setFlow({ mode: 'lex', ex: A.LEXAMS[4], qi: 10, score: 8 });
  A.lexQ();
  A.setFlow({ mode: 'lex', ex: A.LEXAMS[9], qi: 10, score: 8 });
  A.lexQ();
  assert.ok(q('#lexStage').innerHTML.includes('Usta sensin'));
  assert.ok(S.badges.includes('lex5') && S.badges.includes('lex10'));
  Math.random = realRandom;
  A.renderExams();
  assert.ok(q('#lexSub').textContent.includes('Zirvedesin'));
  q('#kpiExams').onclick && q('#kpiExams').onclick();           // dashboard entry
  A.setFlow(null); A.lexQ();                                    // stale guard
  await sleep(30);
});
test('merge keeps best exam scores per exam', () => {
  const a = A.blank(), b = A.blank();
  a.lexams = { E1: 9, E2: 6 }; b.lexams = { E2: 8, E3: 10 };
  const m = A.mergeStates(a, b);
  assert.deepEqual(m.lexams, { E1: 9, E2: 8, E3: 10 });
});
test('boots straight to guest when Firebase is absent', () => {
  const savedFb = global.firebase;
  global.firebase = undefined;
  delete require.cache[require.resolve(utPath)];
  lsStore.clear();
  const B = require(utPath);                          // re-run module top-level → else bootGuest()
  assert.equal(typeof B.getS().xp, 'number', 'guest state booted');
  global.firebase = savedFb;
});
