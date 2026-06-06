# 🌙 Türkçe Quest

A gamified Turkish learning app (CEFR **A1 → A2**) based on the **Yunus Emre Institute / Yedi İklim Türkçe** curriculum. It's a single-page Progressive Web App — installable on Android and desktop, works offline, and stores all progress locally in your browser.

## ✨ Features

- **🚀 Flow Mode** — an endless, adaptive roadmap. It auto-picks your next challenge, ramps difficulty up when you're cruising (Recognise → Recall → Listen → Type → Speak), and instantly explains the grammar when you stumble. Minimal clicks, keyboard shortcuts, combo/momentum HUD.
- **📚 Skill tree** — 21 units across A1 (greetings, numbers, family, food, present tense, time, weather, body, home, city, transport, adjectives) and A2 (past & future tense, shopping, work, feelings, travel), each with a grammar lesson and a quiz.
- **🃏 Spaced repetition (SM-2)** — ~200 vocab cards resurface right before you'd forget them.
- **👂 Listening & 🎤 Speaking** — text-to-speech drills and microphone speech-recognition practice (tr-TR).
- **📊 Analytics dashboard** — CEFR progress, streaks with freeze tokens, skill-balance radar, XP-over-time, activity heatmap, retention rate.
- **🎯 Daily quest & 🏆 achievements** — daily goals, badges, and check-ins to keep the streak alive.

## 📲 Install

**Android (Chrome):** open the site → menu (⋮) → **Add to Home screen / Install app**.

**Desktop (Chrome / Edge):** open the site → click the **install icon** in the address bar (or menu → *Install Türkçe Quest*).

Once installed it launches in its own window like a native app and works offline.

## 🛠️ Tech

Plain HTML/CSS/JS in a single file, [Chart.js](https://www.chartjs.org/) for charts, a service worker for offline caching, and the Web Speech API for audio. No build step, no backend, no tracking — progress lives in `localStorage`.

## 🧪 Tests

The logic core (SRS scheduler, sync merge engine, speech matching, levels/streaks/chests, flow engine, data integrity) is covered by a zero-dependency Node test suite — **42 tests, >99% line coverage**:

```bash
node --test --experimental-test-coverage app.test.cjs
```

No npm install needed; the suite fakes the DOM, Firebase, and the Web Speech API.

## ▶️ Run locally

Just open `index.html` in a browser. For full PWA/offline behaviour, serve it over HTTP:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

---
Yapımı kolay, öğrenmesi keyifli. **İyi çalışmalar!** 🇹🇷
