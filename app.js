/* ===================== DATA: Turkish A1 + A2 (Yedi İklim) ===================== */
const VOCAB = [
/* A1 — U1 Greetings */
{id:'g1',tr:'Merhaba',en:'Hello',cat:'Greetings',skill:'Speaking',ex:'Merhaba, nasılsın?'},
{id:'g2',tr:'Günaydın',en:'Good morning',cat:'Greetings',skill:'Speaking',ex:'Günaydın! İyi günler.'},
{id:'g3',tr:'İyi akşamlar',en:'Good evening',cat:'Greetings',skill:'Speaking',ex:'İyi akşamlar efendim.'},
{id:'g4',tr:'İyi geceler',en:'Good night',cat:'Greetings',skill:'Speaking',ex:'İyi geceler, yarın görüşürüz.'},
{id:'g5',tr:'Teşekkür ederim',en:'Thank you',cat:'Greetings',skill:'Speaking',ex:'Yardımın için teşekkür ederim.'},
{id:'g6',tr:'Rica ederim',en:"You're welcome",cat:'Greetings',skill:'Speaking',ex:'— Teşekkürler. — Rica ederim.'},
{id:'g7',tr:'Lütfen',en:'Please',cat:'Greetings',skill:'Speaking',ex:'Bir su, lütfen.'},
{id:'g8',tr:'Evet',en:'Yes',cat:'Greetings',skill:'Speaking',ex:'Evet, doğru.'},
{id:'g9',tr:'Hayır',en:'No',cat:'Greetings',skill:'Speaking',ex:'Hayır, teşekkürler.'},
{id:'g10',tr:'Görüşürüz',en:'See you',cat:'Greetings',skill:'Speaking',ex:'Hadi, görüşürüz!'},
{id:'g11',tr:'Hoşça kal',en:'Goodbye (to one leaving)',cat:'Greetings',skill:'Speaking',ex:'Hoşça kal, kendine iyi bak.'},
{id:'g12',tr:'Güle güle',en:'Goodbye (to one staying)',cat:'Greetings',skill:'Speaking',ex:'Güle güle, görüşürüz.'},

/* A1 — U2 Introductions */
{id:'i1',tr:'Ben',en:'I',cat:'Pronouns',skill:'Grammar',ex:'Ben öğrenciyim.'},
{id:'i2',tr:'Sen',en:'You',cat:'Pronouns',skill:'Grammar',ex:'Sen nerelisin?'},
{id:'i3',tr:'O',en:'He / she / it',cat:'Pronouns',skill:'Grammar',ex:'O bir doktor.'},
{id:'i4',tr:'Biz',en:'We',cat:'Pronouns',skill:'Grammar',ex:'Biz arkadaşız.'},
{id:'i5',tr:'Siz',en:'You (plural/formal)',cat:'Pronouns',skill:'Grammar',ex:'Siz nerede oturuyorsunuz?'},
{id:'i6',tr:'Onlar',en:'They',cat:'Pronouns',skill:'Grammar',ex:'Onlar öğretmen.'},
{id:'i7',tr:'İsim',en:'Name',cat:'Introductions',skill:'Vocabulary',ex:'Benim ismim Ali.'},
{id:'i8',tr:'Memnun oldum',en:'Nice to meet you',cat:'Introductions',skill:'Speaking',ex:'Tanıştığımıza memnun oldum.'},
{id:'i9',tr:'Nerelisin?',en:'Where are you from?',cat:'Introductions',skill:'Speaking',ex:'Merhaba, nerelisin?'},
{id:'i10',tr:'Öğrenci',en:'Student',cat:'Introductions',skill:'Vocabulary',ex:'Ben bir öğrenciyim.'},
{id:'i11',tr:'Arkadaş',en:'Friend',cat:'Introductions',skill:'Vocabulary',ex:'O benim arkadaşım.'},

/* A1 — U3 Numbers */
{id:'n1',tr:'Bir',en:'One (1)',cat:'Numbers',skill:'Vocabulary',ex:'Bir kahve, lütfen.'},
{id:'n2',tr:'İki',en:'Two (2)',cat:'Numbers',skill:'Vocabulary',ex:'İki kardeşim var.'},
{id:'n3',tr:'Üç',en:'Three (3)',cat:'Numbers',skill:'Vocabulary',ex:'Saat üç.'},
{id:'n4',tr:'Dört',en:'Four (4)',cat:'Numbers',skill:'Vocabulary',ex:'Dört mevsim.'},
{id:'n5',tr:'Beş',en:'Five (5)',cat:'Numbers',skill:'Vocabulary',ex:'Beş dakika.'},
{id:'n6',tr:'Altı',en:'Six (6)',cat:'Numbers',skill:'Vocabulary',ex:'Altı kişi.'},
{id:'n7',tr:'Yedi',en:'Seven (7)',cat:'Numbers',skill:'Vocabulary',ex:'Yedi iklim.'},
{id:'n8',tr:'Sekiz',en:'Eight (8)',cat:'Numbers',skill:'Vocabulary',ex:'Sekiz saat.'},
{id:'n9',tr:'Dokuz',en:'Nine (9)',cat:'Numbers',skill:'Vocabulary',ex:'Dokuz numara.'},
{id:'n10',tr:'On',en:'Ten (10)',cat:'Numbers',skill:'Vocabulary',ex:'On lira.'},
{id:'n11',tr:'Yirmi',en:'Twenty (20)',cat:'Numbers',skill:'Vocabulary',ex:'Yirmi yaşındayım.'},
{id:'n12',tr:'Yüz',en:'Hundred (100)',cat:'Numbers',skill:'Vocabulary',ex:'Yüz lira.'},

/* A1 — U4 Family */
{id:'f1',tr:'Anne',en:'Mother',cat:'Family',skill:'Vocabulary',ex:'Annem çok iyi.'},
{id:'f2',tr:'Baba',en:'Father',cat:'Family',skill:'Vocabulary',ex:'Babam çalışıyor.'},
{id:'f3',tr:'Kardeş',en:'Sibling',cat:'Family',skill:'Vocabulary',ex:'Bir kardeşim var.'},
{id:'f4',tr:'Abla',en:'Older sister',cat:'Family',skill:'Vocabulary',ex:'Ablam İstanbul’da.'},
{id:'f5',tr:'Ağabey',en:'Older brother',cat:'Family',skill:'Vocabulary',ex:'Ağabeyim mühendis.'},
{id:'f6',tr:'Dede',en:'Grandfather',cat:'Family',skill:'Vocabulary',ex:'Dedem köyde yaşıyor.'},
{id:'f7',tr:'Nine',en:'Grandmother',cat:'Family',skill:'Vocabulary',ex:'Ninem çok yaşlı.'},
{id:'f8',tr:'Eş',en:'Spouse',cat:'Family',skill:'Vocabulary',ex:'Eşim doktor.'},
{id:'f9',tr:'Çocuk',en:'Child',cat:'Family',skill:'Vocabulary',ex:'İki çocuk.'},
{id:'f10',tr:'Aile',en:'Family',cat:'Family',skill:'Vocabulary',ex:'Ailem büyük.'},

/* A1 — U5 Colors */
{id:'c1',tr:'Kırmızı',en:'Red',cat:'Colors',skill:'Vocabulary',ex:'Kırmızı elma.'},
{id:'c2',tr:'Mavi',en:'Blue',cat:'Colors',skill:'Vocabulary',ex:'Mavi deniz.'},
{id:'c3',tr:'Yeşil',en:'Green',cat:'Colors',skill:'Vocabulary',ex:'Yeşil çay.'},
{id:'c4',tr:'Sarı',en:'Yellow',cat:'Colors',skill:'Vocabulary',ex:'Sarı limon.'},
{id:'c5',tr:'Siyah',en:'Black',cat:'Colors',skill:'Vocabulary',ex:'Siyah kahve.'},
{id:'c6',tr:'Beyaz',en:'White',cat:'Colors',skill:'Vocabulary',ex:'Beyaz peynir.'},
{id:'c7',tr:'Turuncu',en:'Orange',cat:'Colors',skill:'Vocabulary',ex:'Turuncu portakal.'},
{id:'c8',tr:'Pembe',en:'Pink',cat:'Colors',skill:'Vocabulary',ex:'Pembe çiçek.'},
{id:'c9',tr:'Kahverengi',en:'Brown',cat:'Colors',skill:'Vocabulary',ex:'Kahverengi göz.'},

/* A1 — U6 Food */
{id:'d1',tr:'Su',en:'Water',cat:'Food',skill:'Vocabulary',ex:'Bir bardak su.'},
{id:'d2',tr:'Ekmek',en:'Bread',cat:'Food',skill:'Vocabulary',ex:'Taze ekmek.'},
{id:'d3',tr:'Çay',en:'Tea',cat:'Food',skill:'Vocabulary',ex:'Bir çay, lütfen.'},
{id:'d4',tr:'Kahve',en:'Coffee',cat:'Food',skill:'Vocabulary',ex:'Türk kahvesi.'},
{id:'d5',tr:'Peynir',en:'Cheese',cat:'Food',skill:'Vocabulary',ex:'Beyaz peynir.'},
{id:'d6',tr:'Elma',en:'Apple',cat:'Food',skill:'Vocabulary',ex:'Kırmızı bir elma.'},
{id:'d7',tr:'Süt',en:'Milk',cat:'Food',skill:'Vocabulary',ex:'Bir bardak süt.'},
{id:'d8',tr:'Yumurta',en:'Egg',cat:'Food',skill:'Vocabulary',ex:'İki yumurta.'},
{id:'d9',tr:'Et',en:'Meat',cat:'Food',skill:'Vocabulary',ex:'Et yemiyorum.'},
{id:'d10',tr:'Çorba',en:'Soup',cat:'Food',skill:'Vocabulary',ex:'Mercimek çorbası.'},
{id:'d11',tr:'Şeker',en:'Sugar / candy',cat:'Food',skill:'Vocabulary',ex:'Şekersiz çay.'},
{id:'d12',tr:'Kahvaltı',en:'Breakfast',cat:'Food',skill:'Vocabulary',ex:'Kahvaltı hazır.'},

/* A1 — U7 Verbs & present continuous */
{id:'v1',tr:'Gitmek',en:'To go',cat:'Verbs',skill:'Grammar',ex:'Okula gidiyorum.'},
{id:'v2',tr:'Gelmek',en:'To come',cat:'Verbs',skill:'Grammar',ex:'Eve geliyorum.'},
{id:'v3',tr:'Yemek',en:'To eat',cat:'Verbs',skill:'Grammar',ex:'Elma yiyorum.'},
{id:'v4',tr:'İçmek',en:'To drink',cat:'Verbs',skill:'Grammar',ex:'Çay içiyorum.'},
{id:'v5',tr:'Okumak',en:'To read',cat:'Verbs',skill:'Reading',ex:'Kitap okuyorum.'},
{id:'v6',tr:'Yazmak',en:'To write',cat:'Verbs',skill:'Writing',ex:'Mektup yazıyorum.'},
{id:'v7',tr:'Konuşmak',en:'To speak',cat:'Verbs',skill:'Speaking',ex:'Türkçe konuşuyorum.'},
{id:'v8',tr:'Sevmek',en:'To like / love',cat:'Verbs',skill:'Grammar',ex:'Çayı seviyorum.'},
{id:'v9',tr:'İstemek',en:'To want',cat:'Verbs',skill:'Grammar',ex:'Su istiyorum.'},
{id:'v10',tr:'Çalışmak',en:'To work / study',cat:'Verbs',skill:'Grammar',ex:'Bankada çalışıyorum.'},

/* A1 — U8 Daily phrases */
{id:'p1',tr:'Var',en:'There is / have',cat:'Daily',skill:'Grammar',ex:'Bir sorum var.'},
{id:'p2',tr:'Yok',en:'There isn’t / none',cat:'Daily',skill:'Grammar',ex:'Param yok.'},
{id:'p3',tr:'Çok',en:'Very / a lot',cat:'Daily',skill:'Vocabulary',ex:'Çok güzel!'},
{id:'p4',tr:'Güzel',en:'Beautiful / nice',cat:'Daily',skill:'Vocabulary',ex:'Hava çok güzel.'},
{id:'p5',tr:'Nerede?',en:'Where?',cat:'Daily',skill:'Speaking',ex:'Tuvalet nerede?'},
{id:'p6',tr:'Ne?',en:'What?',cat:'Daily',skill:'Speaking',ex:'Bu ne?'},
{id:'p7',tr:'Ne kadar?',en:'How much?',cat:'Daily',skill:'Speaking',ex:'Bu ne kadar?'},
{id:'p8',tr:'Anlamadım',en:'I didn’t understand',cat:'Daily',skill:'Speaking',ex:'Pardon, anlamadım.'},
{id:'p9',tr:'Tamam',en:'OK',cat:'Daily',skill:'Speaking',ex:'Tamam, anladım.'},
{id:'p10',tr:'Pardon',en:'Excuse me / sorry',cat:'Daily',skill:'Speaking',ex:'Pardon, geç kaldım.'},

/* A1 — U9 Time, days, months */
{id:'t1',tr:'Gün',en:'Day',cat:'Time',skill:'Vocabulary',ex:'Güzel bir gün.'},
{id:'t2',tr:'Hafta',en:'Week',cat:'Time',skill:'Vocabulary',ex:'Bu hafta meşgulüm.'},
{id:'t3',tr:'Ay',en:'Month / moon',cat:'Time',skill:'Vocabulary',ex:'Gelecek ay tatil.'},
{id:'t4',tr:'Yıl',en:'Year',cat:'Time',skill:'Vocabulary',ex:'Bu yıl çok soğuk.'},
{id:'t5',tr:'Saat',en:'Hour / clock',cat:'Time',skill:'Vocabulary',ex:'Saat kaç?'},
{id:'t6',tr:'Bugün',en:'Today',cat:'Time',skill:'Vocabulary',ex:'Bugün pazartesi.'},
{id:'t7',tr:'Yarın',en:'Tomorrow',cat:'Time',skill:'Vocabulary',ex:'Yarın görüşürüz.'},
{id:'t8',tr:'Dün',en:'Yesterday',cat:'Time',skill:'Vocabulary',ex:'Dün evdeydim.'},
{id:'t9',tr:'Sabah',en:'Morning',cat:'Time',skill:'Vocabulary',ex:'Sabah erken kalkıyorum.'},
{id:'t10',tr:'Akşam',en:'Evening',cat:'Time',skill:'Vocabulary',ex:'Akşam yemeği.'},
{id:'t11',tr:'Pazartesi',en:'Monday',cat:'Time',skill:'Vocabulary',ex:'Pazartesi okul var.'},
{id:'t12',tr:'Cuma',en:'Friday',cat:'Time',skill:'Vocabulary',ex:'Cuma günü.'},

/* A1 — U10 Weather & seasons */
{id:'w1',tr:'Hava',en:'Weather / air',cat:'Weather',skill:'Vocabulary',ex:'Hava nasıl?'},
{id:'w2',tr:'Güneş',en:'Sun',cat:'Weather',skill:'Vocabulary',ex:'Güneş açtı.'},
{id:'w3',tr:'Yağmur',en:'Rain',cat:'Weather',skill:'Vocabulary',ex:'Yağmur yağıyor.'},
{id:'w4',tr:'Kar',en:'Snow',cat:'Weather',skill:'Vocabulary',ex:'Kar yağıyor.'},
{id:'w5',tr:'Rüzgar',en:'Wind',cat:'Weather',skill:'Vocabulary',ex:'Bugün çok rüzgar var.'},
{id:'w6',tr:'Sıcak',en:'Hot',cat:'Weather',skill:'Vocabulary',ex:'Hava çok sıcak.'},
{id:'w7',tr:'Soğuk',en:'Cold',cat:'Weather',skill:'Vocabulary',ex:'Su soğuk.'},
{id:'w8',tr:'Mevsim',en:'Season',cat:'Weather',skill:'Vocabulary',ex:'En güzel mevsim ilkbahar.'},
{id:'w9',tr:'Yaz',en:'Summer',cat:'Weather',skill:'Vocabulary',ex:'Yazın denize giderim.'},
{id:'w10',tr:'Kış',en:'Winter',cat:'Weather',skill:'Vocabulary',ex:'Kış çok soğuk.'},

/* A1 — U11 Body & health */
{id:'b1',tr:'Baş',en:'Head',cat:'Body',skill:'Vocabulary',ex:'Başım ağrıyor.'},
{id:'b2',tr:'Göz',en:'Eye',cat:'Body',skill:'Vocabulary',ex:'Mavi gözler.'},
{id:'b3',tr:'El',en:'Hand',cat:'Body',skill:'Vocabulary',ex:'Ellerini yıka.'},
{id:'b4',tr:'Ayak',en:'Foot',cat:'Body',skill:'Vocabulary',ex:'Ayağım ağrıyor.'},
{id:'b5',tr:'Diş',en:'Tooth',cat:'Body',skill:'Vocabulary',ex:'Dişim ağrıyor.'},
{id:'b6',tr:'Hasta',en:'Sick / patient',cat:'Health',skill:'Vocabulary',ex:'Bugün hastayım.'},
{id:'b7',tr:'Doktor',en:'Doctor',cat:'Health',skill:'Vocabulary',ex:'Doktora gidiyorum.'},
{id:'b8',tr:'İlaç',en:'Medicine',cat:'Health',skill:'Vocabulary',ex:'İlaç içiyorum.'},
{id:'b9',tr:'Ağrı',en:'Pain / ache',cat:'Health',skill:'Vocabulary',ex:'Bu ağrı geçmiyor.'},
{id:'b10',tr:'Geçmiş olsun',en:'Get well soon',cat:'Health',skill:'Speaking',ex:'Hastaymışsın, geçmiş olsun.'},

/* A1 — U12 Home */
{id:'h1',tr:'Ev',en:'House / home',cat:'Home',skill:'Vocabulary',ex:'Evdeyim.'},
{id:'h2',tr:'Oda',en:'Room',cat:'Home',skill:'Vocabulary',ex:'Üç odalı ev.'},
{id:'h3',tr:'Mutfak',en:'Kitchen',cat:'Home',skill:'Vocabulary',ex:'Mutfakta yemek var.'},
{id:'h4',tr:'Banyo',en:'Bathroom',cat:'Home',skill:'Vocabulary',ex:'Banyo nerede?'},
{id:'h5',tr:'Kapı',en:'Door',cat:'Home',skill:'Vocabulary',ex:'Kapıyı kapat.'},
{id:'h6',tr:'Pencere',en:'Window',cat:'Home',skill:'Vocabulary',ex:'Pencereyi aç.'},
{id:'h7',tr:'Masa',en:'Table',cat:'Home',skill:'Vocabulary',ex:'Masada kitap var.'},
{id:'h8',tr:'Sandalye',en:'Chair',cat:'Home',skill:'Vocabulary',ex:'Bir sandalye, lütfen.'},
{id:'h9',tr:'Yatak',en:'Bed',cat:'Home',skill:'Vocabulary',ex:'Yatak çok rahat.'},

/* A1 — U13 City & places */
{id:'y1',tr:'Şehir',en:'City',cat:'City',skill:'Vocabulary',ex:'İstanbul büyük bir şehir.'},
{id:'y2',tr:'Sokak',en:'Street',cat:'City',skill:'Vocabulary',ex:'Sokakta çocuklar var.'},
{id:'y3',tr:'Okul',en:'School',cat:'City',skill:'Vocabulary',ex:'Okula gidiyorum.'},
{id:'y4',tr:'Hastane',en:'Hospital',cat:'City',skill:'Vocabulary',ex:'Hastane yakın mı?'},
{id:'y5',tr:'Market',en:'Grocery / market',cat:'City',skill:'Vocabulary',ex:'Markete gidiyorum.'},
{id:'y6',tr:'Eczane',en:'Pharmacy',cat:'City',skill:'Vocabulary',ex:'Eczane nerede?'},
{id:'y7',tr:'Banka',en:'Bank',cat:'City',skill:'Vocabulary',ex:'Banka kapalı.'},
{id:'y8',tr:'Restoran',en:'Restaurant',cat:'City',skill:'Vocabulary',ex:'Güzel bir restoran.'},
{id:'y9',tr:'Park',en:'Park',cat:'City',skill:'Vocabulary',ex:'Parkta yürüyorum.'},
{id:'y10',tr:'Cami',en:'Mosque',cat:'City',skill:'Vocabulary',ex:'Cami çok eski.'},

/* A1 — U14 Transport & directions */
{id:'r1',tr:'Araba',en:'Car',cat:'Transport',skill:'Vocabulary',ex:'Arabam yok.'},
{id:'r2',tr:'Otobüs',en:'Bus',cat:'Transport',skill:'Vocabulary',ex:'Otobüse biniyorum.'},
{id:'r3',tr:'Tren',en:'Train',cat:'Transport',skill:'Vocabulary',ex:'Tren geç kaldı.'},
{id:'r4',tr:'Uçak',en:'Plane',cat:'Transport',skill:'Vocabulary',ex:'Uçak saat üçte.'},
{id:'r5',tr:'Taksi',en:'Taxi',cat:'Transport',skill:'Vocabulary',ex:'Bir taksi çağır.'},
{id:'r6',tr:'Metro',en:'Metro',cat:'Transport',skill:'Vocabulary',ex:'Metro çok hızlı.'},
{id:'r7',tr:'Sağ',en:'Right',cat:'Directions',skill:'Vocabulary',ex:'Sağa dön.'},
{id:'r8',tr:'Sol',en:'Left',cat:'Directions',skill:'Vocabulary',ex:'Sola dön.'},
{id:'r9',tr:'Yakın',en:'Near',cat:'Directions',skill:'Vocabulary',ex:'Ev çok yakın.'},
{id:'r10',tr:'Uzak',en:'Far',cat:'Directions',skill:'Vocabulary',ex:'Okul uzak mı?'},

/* A1 — U15 Adjectives & opposites */
{id:'a1',tr:'Büyük',en:'Big',cat:'Adjectives',skill:'Vocabulary',ex:'Büyük bir ev.'},
{id:'a2',tr:'Küçük',en:'Small',cat:'Adjectives',skill:'Vocabulary',ex:'Küçük bir köpek.'},
{id:'a3',tr:'Yeni',en:'New',cat:'Adjectives',skill:'Vocabulary',ex:'Yeni telefon.'},
{id:'a4',tr:'Eski',en:'Old',cat:'Adjectives',skill:'Vocabulary',ex:'Eski bir araba.'},
{id:'a5',tr:'İyi',en:'Good',cat:'Adjectives',skill:'Vocabulary',ex:'İyi bir fikir.'},
{id:'a6',tr:'Kötü',en:'Bad',cat:'Adjectives',skill:'Vocabulary',ex:'Kötü hava.'},
{id:'a7',tr:'Uzun',en:'Long / tall',cat:'Adjectives',skill:'Vocabulary',ex:'Uzun bir yol.'},
{id:'a8',tr:'Kısa',en:'Short',cat:'Adjectives',skill:'Vocabulary',ex:'Kısa bir film.'},
{id:'a9',tr:'Kolay',en:'Easy',cat:'Adjectives',skill:'Vocabulary',ex:'Türkçe kolay.'},
{id:'a10',tr:'Zor',en:'Hard / difficult',cat:'Adjectives',skill:'Vocabulary',ex:'Bu soru zor.'},

/* A2 — U16 Past tense */
{id:'k1',tr:'Geldim',en:'I came',cat:'Past',skill:'Grammar',ex:'Dün eve geç geldim.'},
{id:'k2',tr:'Gittim',en:'I went',cat:'Past',skill:'Grammar',ex:'Markete gittim.'},
{id:'k3',tr:'Yedim',en:'I ate',cat:'Past',skill:'Grammar',ex:'Kahvaltı yedim.'},
{id:'k4',tr:'Gördüm',en:'I saw',cat:'Past',skill:'Grammar',ex:'Onu dün gördüm.'},
{id:'k5',tr:'Yaptım',en:'I did / made',cat:'Past',skill:'Grammar',ex:'Ödevimi yaptım.'},
{id:'k6',tr:'Dün gece',en:'Last night',cat:'Past',skill:'Vocabulary',ex:'Dün gece geç yattım.'},
{id:'k7',tr:'Geçen hafta',en:'Last week',cat:'Past',skill:'Vocabulary',ex:'Geçen hafta hastaydım.'},
{id:'k8',tr:'Önce',en:'Before / ago',cat:'Past',skill:'Vocabulary',ex:'Bir saat önce geldi.'},

/* A2 — U17 Future & plans */
{id:'fu1',tr:'Geleceğim',en:'I will come',cat:'Future',skill:'Grammar',ex:'Yarın geleceğim.'},
{id:'fu2',tr:'Gideceğim',en:'I will go',cat:'Future',skill:'Grammar',ex:'Tatile gideceğim.'},
{id:'fu3',tr:'Yapacağım',en:'I will do',cat:'Future',skill:'Grammar',ex:'Yarın yapacağım.'},
{id:'fu4',tr:'Plan',en:'Plan',cat:'Future',skill:'Vocabulary',ex:'Hafta sonu planın ne?'},
{id:'fu5',tr:'Gelecek',en:'Future / next',cat:'Future',skill:'Vocabulary',ex:'Gelecek hafta.'},
{id:'fu6',tr:'Belki',en:'Maybe',cat:'Future',skill:'Vocabulary',ex:'Belki yarın gelirim.'},
{id:'fu7',tr:'Sonra',en:'Later / after',cat:'Future',skill:'Vocabulary',ex:'Sonra konuşuruz.'},

/* A2 — U18 Shopping & money */
{id:'s1',tr:'Alışveriş',en:'Shopping',cat:'Shopping',skill:'Vocabulary',ex:'Alışverişe çıktım.'},
{id:'s2',tr:'Para',en:'Money',cat:'Shopping',skill:'Vocabulary',ex:'Param yok.'},
{id:'s3',tr:'Fiyat',en:'Price',cat:'Shopping',skill:'Vocabulary',ex:'Fiyat ne kadar?'},
{id:'s4',tr:'Ucuz',en:'Cheap',cat:'Shopping',skill:'Vocabulary',ex:'Çok ucuz!'},
{id:'s5',tr:'Pahalı',en:'Expensive',cat:'Shopping',skill:'Vocabulary',ex:'Bu çok pahalı.'},
{id:'s6',tr:'İndirim',en:'Discount / sale',cat:'Shopping',skill:'Vocabulary',ex:'İndirim var mı?'},
{id:'s7',tr:'Kaç para?',en:'How much (money)?',cat:'Shopping',skill:'Speaking',ex:'Bu kaç para?'},
{id:'s8',tr:'Almak',en:'To buy / take',cat:'Shopping',skill:'Grammar',ex:'Bir ekmek aldım.'},

/* A2 — U19 Work & study */
{id:'j1',tr:'İş',en:'Job / work',cat:'Work',skill:'Vocabulary',ex:'İşim çok yoğun.'},
{id:'j2',tr:'Meslek',en:'Profession',cat:'Work',skill:'Vocabulary',ex:'Mesleğin ne?'},
{id:'j3',tr:'Ofis',en:'Office',cat:'Work',skill:'Vocabulary',ex:'Ofiste çalışıyorum.'},
{id:'j4',tr:'Toplantı',en:'Meeting',cat:'Work',skill:'Vocabulary',ex:'Saat 10’da toplantı var.'},
{id:'j5',tr:'Öğretmen',en:'Teacher',cat:'Work',skill:'Vocabulary',ex:'O bir öğretmen.'},
{id:'j6',tr:'Mühendis',en:'Engineer',cat:'Work',skill:'Vocabulary',ex:'Ben mühendisim.'},
{id:'j7',tr:'Ders',en:'Lesson / class',cat:'Work',skill:'Vocabulary',ex:'Türkçe dersi var.'},
{id:'j8',tr:'Sınav',en:'Exam',cat:'Work',skill:'Vocabulary',ex:'Yarın sınav var.'},

/* A2 — U20 Feelings & people */
{id:'e1',tr:'Mutlu',en:'Happy',cat:'Feelings',skill:'Vocabulary',ex:'Çok mutluyum.'},
{id:'e2',tr:'Üzgün',en:'Sad',cat:'Feelings',skill:'Vocabulary',ex:'Bugün biraz üzgünüm.'},
{id:'e3',tr:'Yorgun',en:'Tired',cat:'Feelings',skill:'Vocabulary',ex:'Çok yorgunum.'},
{id:'e4',tr:'Kızgın',en:'Angry',cat:'Feelings',skill:'Vocabulary',ex:'Bana kızgın mısın?'},
{id:'e5',tr:'Heyecanlı',en:'Excited',cat:'Feelings',skill:'Vocabulary',ex:'Çok heyecanlıyım.'},
{id:'e6',tr:'Çalışkan',en:'Hardworking',cat:'People',skill:'Vocabulary',ex:'O çok çalışkan.'},
{id:'e7',tr:'Tembel',en:'Lazy',cat:'People',skill:'Vocabulary',ex:'Bugün biraz tembelim.'},
{id:'e8',tr:'Akıllı',en:'Smart',cat:'People',skill:'Vocabulary',ex:'Çok akıllı bir çocuk.'},
{id:'e9',tr:'Nazik',en:'Kind / polite',cat:'People',skill:'Vocabulary',ex:'Çok nazik birisin.'},

/* A2 — U21 Travel & holiday */
{id:'tr1',tr:'Seyahat',en:'Travel / trip',cat:'Travel',skill:'Vocabulary',ex:'İyi seyahatler!'},
{id:'tr2',tr:'Tatil',en:'Holiday / vacation',cat:'Travel',skill:'Vocabulary',ex:'Tatile çıkıyorum.'},
{id:'tr3',tr:'Otel',en:'Hotel',cat:'Travel',skill:'Vocabulary',ex:'Otel deniz kenarında.'},
{id:'tr4',tr:'Bilet',en:'Ticket',cat:'Travel',skill:'Vocabulary',ex:'İki bilet, lütfen.'},
{id:'tr5',tr:'Pasaport',en:'Passport',cat:'Travel',skill:'Vocabulary',ex:'Pasaportunuz lütfen.'},
{id:'tr6',tr:'Valiz',en:'Suitcase',cat:'Travel',skill:'Vocabulary',ex:'Valizim ağır.'},
{id:'tr7',tr:'Plaj',en:'Beach',cat:'Travel',skill:'Vocabulary',ex:'Plaja gidelim.'},
{id:'tr8',tr:'Deniz',en:'Sea',cat:'Travel',skill:'Vocabulary',ex:'Deniz çok güzel.'},
{id:'tr9',tr:'Gezmek',en:'To wander / sightsee',cat:'Travel',skill:'Grammar',ex:'Şehri geziyoruz.'},
{id:'tr10',tr:'Rezervasyon',en:'Reservation',cat:'Travel',skill:'Vocabulary',ex:'Rezervasyon yaptım.'},

/* B1 — U22 Connectors & opinions */
{id:'ba1',tr:'Çünkü',en:'Because',cat:'Connectors',skill:'Grammar',ex:'Gelmedim çünkü hastaydım.'},
{id:'ba2',tr:'Ama',en:'But',cat:'Connectors',skill:'Grammar',ex:'İstiyorum ama param yok.'},
{id:'ba3',tr:'Bence',en:'In my opinion',cat:'Opinions',skill:'Speaking',ex:'Bence bu film çok güzel.'},
{id:'ba4',tr:'Yani',en:'So / I mean',cat:'Connectors',skill:'Speaking',ex:'Yani, anlaştık mı?'},
{id:'ba5',tr:'Mesela',en:'For example',cat:'Connectors',skill:'Speaking',ex:'Mesela pazartesi buluşalım.'},
{id:'ba6',tr:'Önemli',en:'Important',cat:'Opinions',skill:'Vocabulary',ex:'Bu çok önemli bir konu.'},
{id:'ba7',tr:'Fikir',en:'Idea / opinion',cat:'Opinions',skill:'Vocabulary',ex:'Harika bir fikir!'},
{id:'ba8',tr:'Katılıyorum',en:'I agree',cat:'Opinions',skill:'Speaking',ex:'Sana katılıyorum.'},
{id:'ba9',tr:'Haklısın',en:'You are right',cat:'Opinions',skill:'Speaking',ex:'Evet, haklısın.'},
{id:'ba10',tr:'Ancak',en:'However',cat:'Connectors',skill:'Grammar',ex:'Geldim ancak seni bulamadım.'},
/* B1 — U23 Ability (-ebil) */
{id:'ye1',tr:'Yapabilmek',en:'To be able to do',cat:'Ability',skill:'Grammar',ex:'Bunu yapabilirim.'},
{id:'ye2',tr:'Mümkün',en:'Possible',cat:'Ability',skill:'Vocabulary',ex:'Bu mümkün değil.'},
{id:'ye3',tr:'İmkânsız',en:'Impossible',cat:'Ability',skill:'Vocabulary',ex:'İmkânsız bir şey yok.'},
{id:'ye4',tr:'İzin',en:'Permission',cat:'Ability',skill:'Vocabulary',ex:'İzin alabilir miyim?'},
{id:'ye5',tr:'Kesinlikle',en:'Definitely',cat:'Ability',skill:'Vocabulary',ex:'Kesinlikle katılıyorum.'},
{id:'ye6',tr:'Asla',en:'Never',cat:'Ability',skill:'Vocabulary',ex:'Asla pes etme!'},
{id:'ye7',tr:'Tabii ki',en:'Of course',cat:'Ability',skill:'Speaking',ex:'Tabii ki gelebilirsin.'},
{id:'ye8',tr:'Yardım edebilir misiniz?',en:'Can you help me?',cat:'Ability',skill:'Speaking',ex:'Pardon, yardım edebilir misiniz?'},
/* B1 — U24 Conditionals (-se) */
{id:'sa1',tr:'Eğer',en:'If',cat:'Conditionals',skill:'Grammar',ex:'Eğer gelirsen sevinirim.'},
{id:'sa2',tr:'Keşke',en:'If only / I wish',cat:'Conditionals',skill:'Grammar',ex:'Keşke daha erken gelseydim.'},
{id:'sa3',tr:'Umarım',en:'I hope',cat:'Conditionals',skill:'Speaking',ex:'Umarım her şey yolundadır.'},
{id:'sa4',tr:'Şans',en:'Luck',cat:'Conditionals',skill:'Vocabulary',ex:'Bol şans!'},
{id:'sa5',tr:'Fırsat',en:'Opportunity',cat:'Conditionals',skill:'Vocabulary',ex:'Bu büyük bir fırsat.'},
{id:'sa6',tr:'Karar',en:'Decision',cat:'Conditionals',skill:'Vocabulary',ex:'Doğru bir karar verdin.'},
{id:'sa7',tr:'Karar vermek',en:'To decide',cat:'Conditionals',skill:'Grammar',ex:'Gitmeye karar verdim.'},
{id:'sa8',tr:'Plan yapmak',en:'To make a plan',cat:'Conditionals',skill:'Grammar',ex:'Hafta sonu için plan yapalım.'},
/* B1 — U25 Reported past (-miş) */
{id:'ge1',tr:'Hiç',en:'Ever / never',cat:'Reported past',skill:'Grammar',ex:'Hiç Türkiye’ye gittin mi?'},
{id:'ge2',tr:'Daha önce',en:'Before / previously',cat:'Reported past',skill:'Vocabulary',ex:'Daha önce burada çalıştım.'},
{id:'ge3',tr:'Deneyim',en:'Experience',cat:'Reported past',skill:'Vocabulary',ex:'Bu işte deneyimim var.'},
{id:'ge4',tr:'Galiba',en:'Probably / I think',cat:'Reported past',skill:'Vocabulary',ex:'Galiba yağmur yağacak.'},
{id:'ge5',tr:'Duydum',en:'I heard',cat:'Reported past',skill:'Grammar',ex:'Haberi yeni duydum.'},
{id:'ge6',tr:'Olmuş',en:'Apparently happened',cat:'Reported past',skill:'Grammar',ex:'Kaza olmuş, yol kapalı.'},
{id:'ge7',tr:'Demiş',en:'He/she apparently said',cat:'Reported past',skill:'Grammar',ex:'Yarın gelirim demiş.'},
{id:'ge8',tr:'Hatırlamak',en:'To remember',cat:'Reported past',skill:'Grammar',ex:'O günü hatırlıyorum.'},
{id:'ge9',tr:'Unutmak',en:'To forget',cat:'Reported past',skill:'Grammar',ex:'Şifremi unuttum.'},
/* B1 — U26 Deep feelings */
{id:'du1',tr:'Özlemek',en:'To miss (someone)',cat:'Feelings II',skill:'Grammar',ex:'Seni çok özledim.'},
{id:'du2',tr:'Güvenmek',en:'To trust',cat:'Feelings II',skill:'Grammar',ex:'Sana güveniyorum.'},
{id:'du3',tr:'İnanmak',en:'To believe',cat:'Feelings II',skill:'Grammar',ex:'Buna inanmıyorum!'},
{id:'du4',tr:'Umut',en:'Hope',cat:'Feelings II',skill:'Vocabulary',ex:'Umut her zaman var.'},
{id:'du5',tr:'Korku',en:'Fear',cat:'Feelings II',skill:'Vocabulary',ex:'Korku filmi sevmem.'},
{id:'du6',tr:'Endişe',en:'Worry',cat:'Feelings II',skill:'Vocabulary',ex:'Endişe etme, her şey yolunda.'},
{id:'du7',tr:'Gurur',en:'Pride',cat:'Feelings II',skill:'Vocabulary',ex:'Seninle gurur duyuyorum.'},
{id:'du8',tr:'Saygı',en:'Respect',cat:'Feelings II',skill:'Vocabulary',ex:'Herkese saygı göstermeliyiz.'},
/* B1 — U27 Professional life */
{id:'is1',tr:'Başvuru',en:'Application',cat:'Work II',skill:'Vocabulary',ex:'İş başvurusu yaptım.'},
{id:'is2',tr:'Mülakat',en:'Interview',cat:'Work II',skill:'Vocabulary',ex:'Yarın mülakatım var.'},
{id:'is3',tr:'Maaş',en:'Salary',cat:'Work II',skill:'Vocabulary',ex:'Maaş ne kadar?'},
{id:'is4',tr:'Sorumluluk',en:'Responsibility',cat:'Work II',skill:'Vocabulary',ex:'Bu benim sorumluluğum.'},
{id:'is5',tr:'Başarı',en:'Success',cat:'Work II',skill:'Vocabulary',ex:'Başarılar dilerim!'},
{id:'is6',tr:'Hedef',en:'Goal / target',cat:'Work II',skill:'Vocabulary',ex:'Hedefim C1 seviyesi.'},
{id:'is7',tr:'Proje',en:'Project',cat:'Work II',skill:'Vocabulary',ex:'Yeni bir projede çalışıyorum.'},
{id:'is8',tr:'Müşteri',en:'Customer',cat:'Work II',skill:'Vocabulary',ex:'Müşteri her zaman haklı mı?'},
/* B1 — U28 Media & tech */
{id:'me1',tr:'Haber',en:'News',cat:'Media',skill:'Vocabulary',ex:'Haberleri izledin mi?'},
{id:'me2',tr:'Gazete',en:'Newspaper',cat:'Media',skill:'Vocabulary',ex:'Babam her sabah gazete okur.'},
{id:'me3',tr:'Paylaşmak',en:'To share',cat:'Media',skill:'Grammar',ex:'Fotoğrafı paylaştım.'},
{id:'me4',tr:'İndirmek',en:'To download',cat:'Media',skill:'Grammar',ex:'Uygulamayı indirdim.'},
{id:'me5',tr:'Ekran',en:'Screen',cat:'Media',skill:'Vocabulary',ex:'Ekrana bak.'},
{id:'me6',tr:'Şifre',en:'Password',cat:'Media',skill:'Vocabulary',ex:'Şifreni kimseye verme.'},
{id:'me7',tr:'Bağlantı',en:'Connection / link',cat:'Media',skill:'Vocabulary',ex:'İnternet bağlantısı yok.'},
{id:'me8',tr:'Sosyal medya',en:'Social media',cat:'Media',skill:'Vocabulary',ex:'Sosyal medyada çok zaman geçiriyorum.'},
/* B1 — U29 Discussion */
{id:'go1',tr:'Tartışmak',en:'To discuss / argue',cat:'Discussion',skill:'Speaking',ex:'Bu konuyu tartışalım.'},
{id:'go2',tr:'Savunmak',en:'To defend',cat:'Discussion',skill:'Grammar',ex:'Fikrini iyi savundun.'},
{id:'go3',tr:'Karşı',en:'Against',cat:'Discussion',skill:'Vocabulary',ex:'Bu karara karşıyım.'},
{id:'go4',tr:'Neden',en:'Reason / why',cat:'Discussion',skill:'Vocabulary',ex:'Nedenini bilmiyorum.'},
{id:'go5',tr:'Sonuç',en:'Result',cat:'Discussion',skill:'Vocabulary',ex:'Sonuç çok iyi.'},
{id:'go6',tr:'Örnek',en:'Example',cat:'Discussion',skill:'Vocabulary',ex:'Bir örnek verebilir misin?'},
{id:'go7',tr:'Açıklamak',en:'To explain',cat:'Discussion',skill:'Grammar',ex:'Kuralı açıklar mısın?'},
{id:'go8',tr:'Anlatmak',en:'To tell / narrate',cat:'Discussion',skill:'Grammar',ex:'Bana her şeyi anlat.'},
];

/* ===================== UNITS (skill tree) ===================== */
const UNITS=[
{id:'U1',lvl:'A1',title:'Selamlaşma — Greetings',desc:'Hello, thanks & goodbye',ids:['g1','g2','g3','g4','g5','g6','g7','g8','g9','g10','g11','g12'],
 lesson:{title:'Greetings & politeness',body:'Greetings change by time of day: <b>Günaydın</b> (morning), <b>İyi günler</b> (day), <b>İyi akşamlar</b> (evening). The person leaving says <b>Hoşça kal</b>; the one staying replies <b>Güle güle</b>. “Thank you” is <b>Teşekkür ederim</b>; the reply is <b>Rica ederim</b>.'}},
{id:'U2',lvl:'A1',title:'Tanışma — Introductions',desc:'Pronouns & meeting people',ids:['i1','i2','i3','i4','i5','i6','i7','i8','i9','i10','i11'],
 lesson:{title:'Pronouns & “to be” suffix',body:'Pronouns: <b>ben, sen, o, biz, siz, onlar</b>. Turkish has no separate verb “to be” — add a suffix: <b>öğrenci-yim</b> (I am a student), <b>öğrenci-sin</b> (you are). The suffix vowel follows 4-way harmony with the LAST vowel of the word: a/ı → <b>-ım</b> (kızım), e/i → <b>-im</b> (öğrenciyim), o/u → <b>-um</b> (doktorum), ö/ü → <b>-üm</b> (Türküm).'}},
{id:'U3',lvl:'A1',title:'Sayılar — Numbers',desc:'Count to 100',ids:['n1','n2','n3','n4','n5','n6','n7','n8','n9','n10','n11','n12'],
 lesson:{title:'Numbers',body:'1–10: bir, iki, üç, dört, beş, altı, yedi, sekiz, dokuz, on. Then yirmi(20), otuz(30)… yüz(100). The noun after a number stays singular: <b>iki kitap</b> (two books), never “kitaplar”.'}},
{id:'U4',lvl:'A1',title:'Aile — Family',desc:'Talk about your family',ids:['f1','f2','f3','f4','f5','f6','f7','f8','f9','f10'],
 lesson:{title:'Possessive “my” + var/yok',body:'Add a possessive suffix for “my”: <b>anne-m</b> (my mother), <b>baba-m</b>. To say you have something use <b>var</b>: <b>Bir kardeşim var</b>. The negative is <b>yok</b>: <b>Param yok</b>.'}},
{id:'U5',lvl:'A1',title:'Renkler — Colors',desc:'Describe with color',ids:['c1','c2','c3','c4','c5','c6','c7','c8','c9'],
 lesson:{title:'Adjectives before nouns',body:'Adjectives come <b>before</b> the noun and don’t change: <b>kırmızı elma</b> (red apple), <b>mavi deniz</b> (blue sea). Add <b>çok</b> for emphasis: <b>çok güzel</b>.'}},
{id:'U6',lvl:'A1',title:'Yiyecekler — Food',desc:'Order food & drink',ids:['d1','d2','d3','d4','d5','d6','d7','d8','d9','d10','d11','d12'],
 lesson:{title:'Ordering politely',body:'Order with <b>… lütfen</b>: <b>Bir çay, lütfen</b>. Say what you want with <b>istiyorum</b>: <b>Su istiyorum</b>. Turkish breakfast (<b>kahvaltı</b>) — peynir, ekmek, çay — is a cultural cornerstone.'}},
{id:'U7',lvl:'A1',title:'Fiiller — Present tense',desc:'Present continuous -iyor',ids:['v1','v2','v3','v4','v5','v6','v7','v8','v9','v10'],
 lesson:{title:'Present continuous (-iyor)',body:'For “I am doing”, drop <b>-mek/-mak</b> and add <b>-iyor</b> + person ending: <b>git → gidiyorum</b> (I’m going), <b>iç → içiyorum</b>. The vowel harmonizes: -ıyor/-iyor/-uyor/-üyor.'}},
{id:'U8',lvl:'A1',title:'Günlük — Daily phrases',desc:'Survival phrases & questions',ids:['p1','p2','p3','p4','p5','p6','p7','p8','p9','p10'],
 lesson:{title:'Question words & mı',body:'Question words: <b>ne</b> (what), <b>nerede</b> (where), <b>ne kadar</b> (how much). Yes/no questions add <b>mı/mi/mu/mü</b>: <b>Çay var mı?</b> = Is there tea?'}},
{id:'U9',lvl:'A1',title:'Zaman — Time & days',desc:'Days, months, telling time',ids:['t1','t2','t3','t4','t5','t6','t7','t8','t9','t10','t11','t12'],
 lesson:{title:'Time & the locative -de',body:'<b>Saat kaç?</b> = What time is it? Days take <b>günü</b> when specific: <b>Pazartesi günü</b> (on Monday). The locative <b>-de/-da</b> means “at/in/on” and follows vowel harmony: <b>ev-de</b> (at home), <b>okul-da</b> (at school), <b>saat üç-te</b> (at three — d becomes t after voiceless consonants).'}},
{id:'U10',lvl:'A1',title:'Hava — Weather',desc:'Weather & seasons',ids:['w1','w2','w3','w4','w5','w6','w7','w8','w9','w10'],
 lesson:{title:'Weather expressions',body:'<b>Hava nasıl?</b> = How’s the weather? Use the verb <b>yağmak</b> for falling weather: <b>Yağmur yağıyor</b> (it’s raining), <b>Kar yağıyor</b> (it’s snowing). Seasons: ilkbahar, yaz, sonbahar, kış.'}},
{id:'U11',lvl:'A1',title:'Vücut — Body & health',desc:'Body parts & the doctor',ids:['b1','b2','b3','b4','b5','b6','b7','b8','b9','b10'],
 lesson:{title:'Saying what hurts',body:'Use the verb <b>ağrımak</b> (to ache) with a possessive: <b>Başım ağrıyor</b> = My head hurts, <b>Dişim ağrıyor</b>. To someone ill you say <b>Geçmiş olsun</b> (get well soon).'}},
{id:'U12',lvl:'A1',title:'Ev — Home',desc:'Rooms & furniture',ids:['h1','h2','h3','h4','h5','h6','h7','h8','h9'],
 lesson:{title:'Location with -de + var',body:'Combine locative + var: <b>Masada kitap var</b> = There’s a book on the table. <b>Mutfakta</b> (in the kitchen), <b>banyoda</b> (in the bathroom).'}},
{id:'U13',lvl:'A1',title:'Şehir — City & places',desc:'Places around town',ids:['y1','y2','y3','y4','y5','y6','y7','y8','y9','y10'],
 lesson:{title:'Going places with -e/-a (dative)',body:'The dative <b>-e/-a</b> means “to”: <b>okul-a</b> (to school), <b>market-e</b> (to the market). With the verb gitmek: <b>Markete gidiyorum</b>.'}},
{id:'U14',lvl:'A1',title:'Ulaşım — Transport',desc:'Getting around & directions',ids:['r1','r2','r3','r4','r5','r6','r7','r8','r9','r10'],
 lesson:{title:'binmek & directions',body:'Use <b>binmek</b> (to board) with the dative: <b>Otobüse biniyorum</b>. Directions: <b>sağ</b> (right), <b>sol</b> (left), <b>Sağa dön</b> (turn right). <b>yakın/uzak</b> = near/far.'}},
{id:'U15',lvl:'A1',title:'Sıfatlar — Adjectives',desc:'Opposites & describing',ids:['a1','a2','a3','a4','a5','a6','a7','a8','a9','a10'],
 lesson:{title:'Opposites & comparison',body:'Pairs: büyük/küçük, yeni/eski, iyi/kötü, uzun/kısa, kolay/zor. For “more” use <b>daha</b>: <b>daha büyük</b> (bigger). “The most” uses <b>en</b>: <b>en güzel</b>.'}},
{id:'U16',lvl:'A2',title:'Geçmiş Zaman — Past',desc:'Definite past tense -di',ids:['k1','k2','k3','k4','k5','k6','k7','k8'],
 lesson:{title:'Past tense (-di)',body:'Add <b>-di</b> + person ending (harmonizes to -dı/-di/-du/-dü, and -tı/-ti after voiceless): <b>gel → geldim</b> (I came), <b>git → gittim</b>, <b>ye → yedim</b>. Time markers: <b>dün</b>, <b>geçen hafta</b>.'}},
{id:'U17',lvl:'A2',title:'Gelecek Zaman — Future',desc:'Future tense -ecek & plans',ids:['fu1','fu2','fu3','fu4','fu5','fu6','fu7'],
 lesson:{title:'Future tense (-ecek/-acak)',body:'Add <b>-ecek/-acak</b> + person: <b>gel → geleceğim</b> (I will come), <b>git → gideceğim</b>, <b>yap → yapacağım</b>. Soften with <b>belki</b> (maybe): <b>Belki yarın geleceğim</b>.'}},
{id:'U18',lvl:'A2',title:'Alışveriş — Shopping',desc:'Money & bargaining',ids:['s1','s2','s3','s4','s5','s6','s7','s8'],
 lesson:{title:'Prices & buying',body:'Ask <b>Bu ne kadar?</b> / <b>Kaç para?</b> = How much? Useful: <b>ucuz</b> (cheap), <b>pahalı</b> (expensive), <b>indirim</b> (discount). The verb <b>almak</b> = to buy: <b>Bunu aldım</b>.'}},
{id:'U19',lvl:'A2',title:'İş — Work & study',desc:'Jobs & the office',ids:['j1','j2','j3','j4','j5','j6','j7','j8'],
 lesson:{title:'Professions & schedules',body:'Ask <b>Mesleğin ne?</b> = What’s your job? State it with the “to be” suffix: <b>mühendis-im</b> (I am an engineer). Time: <b>Saat 10’da toplantı var</b> (meeting at 10).'}},
{id:'U20',lvl:'A2',title:'Duygular — Feelings',desc:'Emotions & character',ids:['e1','e2','e3','e4','e5','e6','e7','e8','e9'],
 lesson:{title:'Describing how you feel',body:'Use the “to be” suffix: <b>mutlu-yum</b> (I’m happy), <b>yorgun-um</b> (I’m tired). Character adjectives describe people: <b>O çok çalışkan</b> (he/she is hardworking).'}},
{id:'U21',lvl:'A2',title:'Seyahat — Travel',desc:'Holidays & getting around',ids:['tr1','tr2','tr3','tr4','tr5','tr6','tr7','tr8','tr9','tr10'],
 lesson:{title:'Travel essentials',body:'Wish someone <b>İyi seyahatler!</b> (have a good trip). Key words: <b>bilet</b> (ticket), <b>otel</b>, <b>rezervasyon</b>. The verb <b>gezmek</b> = to wander/sightsee: <b>Şehri geziyoruz</b>. This completes Yedi İklim A2! 🎉'}},
{id:'U22',lvl:'B1',title:'Bağlaçlar — Connectors & opinions',desc:'Link ideas, give your view',ids:['ba1','ba2','ba3','ba4','ba5','ba6','ba7','ba8','ba9','ba10'],
 lesson:{title:'Linking ideas & giving opinions',body:'B1 is about connected speech. Link clauses with <b>çünkü</b> (because), <b>ama/ancak</b> (but/however), <b>yani</b> (so), <b>mesela</b> (for example). Give opinions with <b>bence</b> (in my view) and react: <b>katılıyorum</b> (I agree), <b>haklısın</b> (you’re right).'}},
{id:'U23',lvl:'B1',title:'Yetenek — Ability (-ebil)',desc:'Can, may & polite requests',ids:['ye1','ye2','ye3','ye4','ye5','ye6','ye7','ye8'],
 lesson:{title:'The -ebil/-abil suffix',body:'Add <b>-ebil/-abil</b> for ability or permission: <b>yap-abil-irim</b> (I can do), <b>gel-ebil-irsin</b> (you may come). The negative is <b>-ama/-eme</b>: <b>yapamam</b> (I can’t). Polite requests: <b>Alabilir miyim?</b> (May I take?), <b>Yardım edebilir misiniz?</b>'}},
{id:'U24',lvl:'B1',title:'Şart — Conditionals (-se)',desc:'If, wishes & hopes',ids:['sa1','sa2','sa3','sa4','sa5','sa6','sa7','sa8'],
 lesson:{title:'Conditional -se/-sa',body:'Attach <b>-se/-sa</b> for “if”: <b>gelirsen</b> (if you come), <b>olursa</b> (if it happens). <b>Eğer</b> is optional emphasis. Wishes use <b>keşke</b> + past conditional: <b>Keşke gelseydin</b> (I wish you had come). Hopes: <b>umarım</b>.'}},
{id:'U25',lvl:'B1',title:'Rivayet — Reported past (-miş)',desc:'Hearsay & experiences',ids:['ge1','ge2','ge3','ge4','ge5','ge6','ge7','ge8','ge9'],
 lesson:{title:'The -miş past (hearsay)',body:'Turkish has TWO pasts: <b>-di</b> for what you witnessed, <b>-miş</b> for what you heard or infer: <b>Kaza olmuş</b> (apparently there was an accident), <b>demiş</b> (he supposedly said). Ask about experiences with <b>hiç</b>: <b>Hiç İstanbul’a gittin mi?</b>'}},
{id:'U26',lvl:'B1',title:'Duygular II — Deep feelings',desc:'Miss, trust, believe, hope',ids:['du1','du2','du3','du4','du5','du6','du7','du8'],
 lesson:{title:'Emotion verbs & their cases',body:'Emotion verbs demand specific cases: <b>seni özledim</b> (I missed YOU — accusative), <b>sana güveniyorum</b> (I trust you — dative), <b>buna inanmıyorum</b> (I don’t believe this — dative). <b>Gurur duymak</b> = to feel proud: <b>Seninle gurur duyuyorum</b>.'}},
{id:'U27',lvl:'B1',title:'İş Hayatı — Professional life',desc:'Applications, interviews, goals',ids:['is1','is2','is3','is4','is5','is6','is7','is8'],
 lesson:{title:'Work talk & -meli (should)',body:'Job vocabulary: <b>başvuru</b> (application), <b>mülakat</b> (interview), <b>maaş</b> (salary). Obligation uses <b>-meli/-malı</b>: <b>çalışmalıyım</b> (I should work), <b>erken kalkmalısın</b> (you should get up early).'}},
{id:'U28',lvl:'B1',title:'Medya — Media & tech',desc:'News, internet & devices',ids:['me1','me2','me3','me4','me5','me6','me7','me8'],
 lesson:{title:'Tech verbs & noun compounds',body:'Modern life verbs: <b>paylaşmak</b> (share), <b>indirmek</b> (download). Turkish builds compounds with possessive endings: <b>internet bağlantı-sı</b> (internet connection), <b>iş başvuru-su</b> (job application).'}},
{id:'U29',lvl:'B1',title:'Tartışma — Discussion',desc:'Argue your point like a pro',ids:['go1','go2','go3','go4','go5','go6','go7','go8'],
 lesson:{title:'Structuring an argument',body:'Build a B1 argument: <b>Bence…</b> (opinion) → <b>çünkü…</b> (reason) → <b>mesela…</b> (example) → <b>sonuç olarak…</b> (in conclusion). Agree/disagree: <b>katılıyorum / karşıyım</b>. Finishing this unit completes the B1 starter pack! 🎓'}},
];

const BADGES=[
{id:'first',ico:'🐣',name:'İlk Adım',desc:'First lesson done',test:s=>s.lessons>=1},
{id:'streak3',ico:'🔥',name:'Üç Gün',desc:'3-day streak',test:s=>s.bestStreak>=3},
{id:'streak7',ico:'🌟',name:'Bir Hafta',desc:'7-day streak',test:s=>s.bestStreak>=7},
{id:'words50',ico:'📖',name:'Kelime Avcısı',desc:'50 words learned',test:s=>s.known>=50},
{id:'words100',ico:'🧠',name:'Söz Ustası',desc:'100 words learned',test:s=>s.known>=100},
{id:'rev100',ico:'🃏',name:'Tekrarcı',desc:'100 reviews',test:s=>s.reviews>=100},
{id:'listen',ico:'👂',name:'Kulak Dolgunu',desc:'25 listening reps',test:s=>s.listen>=25},
{id:'speak',ico:'🎤',name:'Konuşkan',desc:'25 speaking reps',test:s=>s.speak>=25},
{id:'quiz10',ico:'✅',name:'Sınav Kralı',desc:'10 quizzes passed',test:s=>s.quiz>=10},
{id:'a1done',ico:'⛰️',name:'A1 Bitti',desc:'All 15 A1 units',test:s=>s.a1Done>=15},
{id:'a2done',ico:'🏔️',name:'Yedi İklim',desc:'All A1+A2 units',test:s=>s.unitsDone>=21},
{id:'quest',ico:'🎯',name:'Görev Tamam',desc:'A daily quest done',test:s=>s.questsDone>=1},
{id:'streak30',ico:'🗓️',name:'Bir Ay',desc:'30-day streak',test:s=>s.bestStreak>=30},
{id:'chest5',ico:'🎁',name:'Hazine Avcısı',desc:'Open 5 chests',test:s=>s.chests>=5},
{id:'dlg6',ico:'💬',name:'Konuşkan Usta',desc:'All 6 dialogues',test:s=>s.dlgDone>=6},
{id:'cult12',ico:'🌹',name:'Gönül Eri',desc:'Full culture deck',test:s=>s.cultureN>=12},
{id:'b1done',ico:'🎓',name:'B1 Yolcusu',desc:'All 29 units done',test:s=>s.unitsDone>=29},
{id:'write25',ico:'✍️',name:'Kalem Ustası',desc:'25 writing reps',test:s=>s.writes>=25},
{id:'read6',ico:'📖',name:'Kitap Kurdu',desc:'All 6 readings',test:s=>s.readDone>=6},
{id:'suffix25',ico:'🧩',name:'Ek Ustası',desc:'25 suffix builds',test:s=>s.suffixN>=25},
{id:'cert1',ico:'📜',name:'Sertifikalı',desc:'Pass a checkpoint exam',test:s=>s.certsN>=1},
];

/* ===== Mini-dialogues — Yedi İklim communicative method: language in context ===== */
const DIALOGUES=[
{id:'D1',ico:'☕',title:'Kafede — At the café',lines:[
  ['Garson','Hoş geldiniz! Ne istersiniz?','Welcome! What would you like?'],
  ['Ayşe','Bir çay, lütfen.','One tea, please.'],
  ['Garson','Şekerli mi?','With sugar?'],
  ['Ayşe','Hayır, şekersiz. Teşekkürler.','No, without sugar. Thank you.']],
 q:[{q:'What does Ayşe order?',opts:['Coffee','Tea','Water','Juice'],a:'Tea'},
    {q:'How does she take it?',opts:['With sugar','Without sugar','With milk','Iced'],a:'Without sugar'}]},
{id:'D2',ico:'🤝',title:'Tanışma — Meeting someone',lines:[
  ['Ali','Merhaba! Benim adım Ali. Senin adın ne?','Hi! My name is Ali. What is your name?'],
  ['Sara','Merhaba Ali, ben Sara. Memnun oldum.','Hi Ali, I am Sara. Nice to meet you.'],
  ['Ali','Ben de memnun oldum. Nerelisin?','Nice to meet you too. Where are you from?'],
  ['Sara','Ben Suudi Arabistanlıyım.','I am from Saudi Arabia.']],
 q:[{q:'Where is Sara from?',opts:['Turkey','Saudi Arabia','Egypt','Germany'],a:'Saudi Arabia'},
    {q:'“Memnun oldum” means…',opts:['Goodbye','Nice to meet you','How are you?','See you'],a:'Nice to meet you'}]},
{id:'D3',ico:'🛒',title:'Markette — At the market',lines:[
  ['Müşteri','Pardon, ekmek ne kadar?','Excuse me, how much is the bread?'],
  ['Satıcı','On lira.','Ten lira.'],
  ['Müşteri','İki ekmek, lütfen. Su var mı?','Two breads, please. Is there water?'],
  ['Satıcı','Evet, var. Buyurun.','Yes, there is. Here you go.']],
 q:[{q:'How much is the bread?',opts:['5 lira','10 lira','20 lira','2 lira'],a:'10 lira'},
    {q:'“Su var mı?” asks about…',opts:['Bread','Milk','Water','Tea'],a:'Water'}]},
{id:'D4',ico:'🧭',title:'Yol Sorma — Asking directions',lines:[
  ['Turist','Affedersiniz, eczane nerede?','Excuse me, where is the pharmacy?'],
  ['Adam','Sağa dönün. Eczane okulun yanında.','Turn right. The pharmacy is next to the school.'],
  ['Turist','Uzak mı?','Is it far?'],
  ['Adam','Hayır, çok yakın. Beş dakika.','No, very near. Five minutes.']],
 q:[{q:'Where is the pharmacy?',opts:['Next to the school','Next to the bank','Far away','On the left'],a:'Next to the school'},
    {q:'How long does it take?',opts:['One hour','Five minutes','Ten minutes','Two hours'],a:'Five minutes'}]},
{id:'D5',ico:'🩺',title:'Doktorda — At the doctor',lines:[
  ['Doktor','Geçmiş olsun. Neyiniz var?','Get well soon. What is wrong?'],
  ['Hasta','Başım ağrıyor ve çok yorgunum.','My head hurts and I am very tired.'],
  ['Doktor','Bu ilacı içiniz ve bol su içiniz.','Take this medicine and drink plenty of water.'],
  ['Hasta','Teşekkür ederim, doktor bey.','Thank you, doctor.']],
 q:[{q:'What hurts?',opts:['His foot','His head','His tooth','His hand'],a:'His head'},
    {q:'The doctor says to drink…',opts:['Tea','Coffee','Lots of water','Milk'],a:'Lots of water'}]},
{id:'D6',ico:'⛅',title:'Hava Durumu — The weather',lines:[
  ['Zeynep','Bugün hava nasıl?','How is the weather today?'],
  ['Murat','Çok güzel! Güneşli ve sıcak.','Very nice! Sunny and warm.'],
  ['Zeynep','Yarın yağmur var mı?','Is there rain tomorrow?'],
  ['Murat','Evet, yarın yağmur yağacak.','Yes, it will rain tomorrow.']],
 q:[{q:'How is the weather today?',opts:['Rainy','Sunny and warm','Cold','Windy'],a:'Sunny and warm'},
    {q:'What about tomorrow?',opts:['Snow','Sun','Rain','Wind'],a:'Rain'}]},
];

/* ===== 🧩 Suffix Lab — assemble Turkish words from pieces (the REAL skill) ===== */
const SUFFIX=[
{en:'I am a student',parts:['öğrenci','yim'],note:'“to be”: e/i vowels take -(y)im'},
{en:'I am a doctor',parts:['doktor','um'],note:'“to be”: o/u vowels take -um'},
{en:'I am Turkish',parts:['Türk','üm'],note:'“to be”: ö/ü vowels take -üm'},
{en:'at home',parts:['ev','de'],note:'locative -de/-da = at/in/on'},
{en:'at school',parts:['okul','da'],note:'a/ı vowels take -da'},
{en:'in the kitchen',parts:['mutfak','ta'],note:'after voiceless k → -ta'},
{en:'to school',parts:['okul','a'],note:'dative -e/-a = “to”'},
{en:'to the house',parts:['ev','e'],note:'dative after e/i → -e'},
{en:'my mother',parts:['anne','m'],note:'possessive after vowel → just -m'},
{en:'my house',parts:['ev','im'],note:'possessive after consonant → -im'},
{en:'the houses',parts:['ev','ler'],note:'plural after e/i → -ler'},
{en:'the books',parts:['kitap','lar'],note:'plural after a/ı → -lar'},
{en:'I am going',parts:['gid','iyor','um'],note:'git → gid (t softens) + -iyor + -um'},
{en:'I am drinking',parts:['iç','iyor','um'],note:'present continuous -iyor + person'},
{en:'you are coming',parts:['gel','iyor','sun'],note:'“you” ending is -sun'},
{en:'I came',parts:['gel','di','m'],note:'past -di + -m (I)'},
{en:'I went',parts:['git','ti','m'],note:'after voiceless t → -ti'},
{en:'I can do it',parts:['yap','abil','irim'],note:'ability -abil(ir)'},
];
const SUFFIX_POOL=['de','da','te','ta','e','a','ler','lar','im','ım','um','üm','iyor','ıyor','di','dı','ti','sun','sen','m','yim'];

/* ===== Reading corner — A1 micro-stories with comprehension checks ===== */
const READING=[
{id:'R1',ico:'🏠',title:'Ali’nin Evi',txt:'Ali’nin evi küçük ama çok güzel. Evde iki oda var. Mutfak temiz ve aydınlık.',
 q:{q:'How is Ali’s house?',opts:['Big and old','Small but beautiful','Dark and cold','New and expensive'],a:'Small but beautiful'}},
{id:'R2',ico:'☀️',title:'Sabah',txt:'Zeynep her sabah saat yedide kalkıyor. Kahvaltıda peynir, ekmek ve çay var. Sonra okula gidiyor.',
 q:{q:'What time does Zeynep get up?',opts:['At six','At seven','At eight','At nine'],a:'At seven'}},
{id:'R3',ico:'🛒',title:'Markette',txt:'Murat markette. İki ekmek, bir kilo elma ve süt alıyor. Toplam yüz lira ödüyor.',
 q:{q:'How much does Murat pay?',opts:['Ten lira','Fifty lira','One hundred lira','Two hundred lira'],a:'One hundred lira'}},
{id:'R4',ico:'🌧️',title:'Hava',txt:'Bugün hava soğuk ve yağmurlu. Elif şemsiyesini alıyor ve otobüse biniyor. Otobüs çok kalabalık.',
 q:{q:'How is the bus?',opts:['Empty','Fast','Very crowded','Late'],a:'Very crowded'}},
{id:'R5',ico:'🎂',title:'Doğum Günü',txt:'Yarın annemin doğum günü. Ona kırmızı çiçekler ve bir kitap alıyorum. Akşam ailece pasta yiyeceğiz.',
 q:{q:'What is the narrator buying?',opts:['A cake and tea','Red flowers and a book','A red dress','Bread and milk'],a:'Red flowers and a book'}},
{id:'R6',ico:'🐈',title:'Kedi',txt:'Bizim bir kedimiz var. Adı Boncuk. Boncuk bütün gün uyuyor, akşam evde koşuyor ve oynuyor.',
 q:{q:'What does Boncuk do all day?',opts:['Eats','Runs','Sleeps','Plays outside'],a:'Sleeps'}},
];

/* ===== Culture deck — Yunus Emre & Turkish proverbs (1 card per 150 XP) ===== */
const CULTURE=[
{tr:'Sevelim, sevilelim.',en:'Let us love, let us be loved.',by:'Yunus Emre'},
{tr:'İlim ilim bilmektir, ilim kendin bilmektir.',en:'Knowledge is to know — to know yourself.',by:'Yunus Emre'},
{tr:'Yaratılanı severiz, Yaratan’dan ötürü.',en:'We love the created, for the Creator’s sake.',by:'Yunus Emre'},
{tr:'Bilmeyen ne bilsin bizi, bilenlere selam olsun.',en:'How can the unknowing know us — greetings to those who know.',by:'Yunus Emre'},
{tr:'Damlaya damlaya göl olur.',en:'Drop by drop, a lake forms.',by:'Atasözü · proverb'},
{tr:'Bir fincan kahvenin kırk yıl hatırı vardır.',en:'A cup of coffee is remembered for forty years.',by:'Atasözü · proverb'},
{tr:'Tatlı dil yılanı deliğinden çıkarır.',en:'A sweet tongue charms the snake out of its hole.',by:'Atasözü · proverb'},
{tr:'Ağaç yaşken eğilir.',en:'A tree bends while it is young.',by:'Atasözü · proverb'},
{tr:'Gülü seven dikenine katlanır.',en:'Who loves the rose endures its thorns.',by:'Atasözü · proverb'},
{tr:'Ne ekersen onu biçersin.',en:'You reap what you sow.',by:'Atasözü · proverb'},
{tr:'Akıl akıldan üstündür.',en:'Two minds are better than one.',by:'Atasözü · proverb'},
{tr:'Sabır acıdır, meyvesi tatlıdır.',en:'Patience is bitter, but its fruit is sweet.',by:'Atasözü · proverb'},
];

/* ===================== STATE ===================== */
const KEY_BASE='turkce_quest_v2';let KEY=KEY_BASE;
const todayStr=()=>new Date().toISOString().slice(0,10);
function blank(){return{
  xp:0,streak:0,bestStreak:0,freezes:2,lastActive:null,diff:1,
  lessons:0,reviews:0,quiz:0,questsDone:0,listen:0,speak:0,
  cards:{},units:{},skills:{Vocabulary:0,Grammar:0,Speaking:0,Listening:0,Reading:0,Writing:0},
  xpLog:{},quest:{date:null,newWords:0,reviews:0,lesson:false,listen:false},badges:[],
  week:{id:'',xp:0},boostUntil:0,chests:0,cultureN:0,dlg:{},writes:0,reads:0,read:{},suffixN:0,certs:{}
};}
let S=blank();
function loadRaw(k){try{const d=JSON.parse(localStorage.getItem(k));return d?Object.assign(blank(),d):null;}catch(e){return null;}}
function load(){return loadRaw(KEY)||blank();}
function save(){localStorage.setItem(KEY,JSON.stringify(S));pushCloud();}

const LEVELS=[{xp:0,name:'A1.1'},{xp:200,name:'A1.2'},{xp:450,name:'A1.3'},{xp:750,name:'A1.4'},
{xp:1100,name:'A2.1'},{xp:1500,name:'A2.2'},{xp:2000,name:'A2.3'},{xp:2600,name:'A2.4'},
{xp:3300,name:'B1.1'},{xp:4100,name:'B1.2'},{xp:5000,name:'B1.3'},{xp:6000,name:'B1.4'}];
function levelInfo(){let cur=LEVELS[0],nxt=null;for(let i=0;i<LEVELS.length;i++){if(S.xp>=LEVELS[i].xp){cur=LEVELS[i];nxt=LEVELS[i+1]||null;}}return{cur,nxt};}

function weekId(){const d=new Date();const day=(d.getDay()+6)%7;d.setDate(d.getDate()-day);return d.toISOString().slice(0,10);}
function ensureWeek(){const id=weekId();if(!S.week||S.week.id!==id)S.week={id,xp:0};}
function addXp(n,skill){
  if(Date.now()<(S.boostUntil||0))n*=2; // 🚀 2× XP boost active
  S.xp+=n;if(skill&&S.skills[skill]!=null)S.skills[skill]+=n;
  const t=todayStr();S.xpLog[t]=(S.xpLog[t]||0)+n;
  ensureWeek();S.week.xp+=n;
  markActive();save();}
function markActive(){const t=todayStr();if(S.lastActive===t)return;
  if(S.lastActive){const diff=Math.round((new Date(t)-new Date(S.lastActive))/86400000);
    if(diff===1)S.streak++;else if(diff===2&&S.freezes>0){S.freezes--;S.streak++;toast('❄️ Streak freeze used!');}else S.streak=1;}
  else S.streak=1;
  S.lastActive=t;S.bestStreak=Math.max(S.bestStreak,S.streak);
  if([3,7,30,100].includes(S.streak))setTimeout(()=>openChest('🔥 '+S.streak+'-day streak'),800);}
/* 🎁 Variable rewards — random chest (research: variable rewards + earned freezes drive retention) */
function openChest(reason){
  S.chests=(S.chests||0)+1;
  const r=Math.random();let msg;
  if(r<0.4){const amt=20+Math.floor(Math.random()*5)*10;S.xp+=amt;ensureWeek();S.week.xp+=amt;const t=todayStr();S.xpLog[t]=(S.xpLog[t]||0)+amt;msg='+'+amt+' bonus XP ⚡';}
  else if(r<0.7){S.freezes=Math.min(5,(S.freezes||0)+1);msg='+1 Streak Freeze ❄️';}
  else{S.boostUntil=Date.now()+15*60*1000;msg='2× XP for 15 minutes! 🚀';}
  save();renderHeader();celebrate();buzz([20,30,20,30,60]);snd('chest');toast('🎁 '+reason+' — '+msg);}

/* SRS (SM-2 lite) */
function card(id){return S.cards[id]||(S.cards[id]={ease:2.5,interval:0,reps:0,due:todayStr(),learned:false});}
function dueCards(){const t=todayStr();return VOCAB.filter(v=>S.cards[v.id]&&S.cards[v.id].learned&&S.cards[v.id].due<=t);}
function learnedCards(){return VOCAB.filter(v=>S.cards[v.id]&&S.cards[v.id].learned);}
function unlearned(){return VOCAB.filter(v=>!(S.cards[v.id]&&S.cards[v.id].learned));}
function gradeCard(id,q){const c=card(id);c.reps++;
  if(q===0){c.interval=0;c.ease=Math.max(1.3,c.ease-0.2);}
  else{if(c.interval===0)c.interval=1;else if(c.interval===1)c.interval=q===3?6:3;else c.interval=Math.min(365,Math.round(c.interval*(c.ease+(q-2)*0.15)));c.ease=Math.min(3.0,c.ease+(q-2)*0.1);}
  const d=new Date();d.setDate(d.getDate()+c.interval);c.due=d.toISOString().slice(0,10);
  S.reviews++;if(q>0)addXp(5,VOCAB.find(v=>v.id===id).skill);else save();}

/* ===================== HELPERS ===================== */
const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(toast._t);toast._t=setTimeout(()=>t.classList.remove('show'),2400);}
function buzz(p){try{if(navigator.vibrate)navigator.vibrate(p);}catch(e){}}
/* 🎵 Feedback sounds — tiny WebAudio tones, no assets, mutable */
let SND={on:localStorage.getItem('tq_snd')!=='0',ctx:null};
function sndCtx(){const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return null;if(!SND.ctx)SND.ctx=new AC();return SND.ctx;}
function tone(ctx,f,t0,d,type,g0){const o=ctx.createOscillator(),g=ctx.createGain();o.type=type||'sine';o.frequency.value=f;
  g.gain.setValueAtTime(g0||.12,t0);g.gain.exponentialRampToValueAtTime(.001,t0+d);o.connect(g);g.connect(ctx.destination);o.start(t0);o.stop(t0+d);}
function snd(kind){try{
  if(!SND.on)return;const ctx=sndCtx();if(!ctx)return;const t=ctx.currentTime;
  if(kind==='ok'){tone(ctx,880,t,.12);tone(ctx,1318.5,t+.08,.18);}
  else if(kind==='no'){tone(ctx,180,t,.2,'square',.05);}
  else if(kind==='chest'){[523.25,659.25,783.99,1046.5].forEach((f,i)=>tone(ctx,f,t+i*.09,.22));}
  else if(kind==='quest'){tone(ctx,659.25,t,.15);tone(ctx,880,t+.12,.25);}
}catch(e){}}
function toggleSnd(){SND.on=!SND.on;localStorage.setItem('tq_snd',SND.on?'1':'0');
  $('#sndChip').textContent=SND.on?'🔊':'🔇';toast(SND.on?'🔊 Sounds on':'🔇 Sounds off');if(SND.on)snd('ok');}
/* ✨ Floating XP gain */
function xpPop(n){
  try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;}catch(e){}
  const s=document.createElement('div');s.className='xppop';s.textContent='+'+n+' XP';
  document.body.appendChild(s);setTimeout(()=>s.remove(),900);
}
function celebrate(){ /* Duolingo-style confetti — clear positive feedback */
  try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;}catch(e){}
  const c=document.createElement('div');c.className='confetti';
  const cols=['#e30a17','#f6c34a','#36c98b','#4aa8ff','#a987ff','#ffffff'];
  for(let i=0;i<36;i++){const s=document.createElement('i');
    s.style.left=(Math.random()*100)+'vw';s.style.background=cols[i%cols.length];
    s.style.animationDelay=(Math.random()*0.4)+'s';s.style.animationDuration=(1.4+Math.random())+'s';
    c.appendChild(s);}
  document.body.appendChild(c);setTimeout(()=>c.remove(),3400);
}
function speak(t){try{const u=new SpeechSynthesisUtterance(t);u.lang='tr-TR';u.rate=.9;const vs=speechSynthesis.getVoices().filter(v=>v.lang&&v.lang.toLowerCase().startsWith('tr'));if(vs[0])u.voice=vs[0];speechSynthesis.cancel();speechSynthesis.speak(u);}catch(e){}}
function shuffle(a){return a.slice().sort(()=>Math.random()-0.5);}
function norm(s){return (s||'').toLocaleLowerCase('tr-TR').replace(/[.,!?¡¿'"’]/g,'').trim();}
function lev(a,b){const m=a.length,n=b.length,d=Array.from({length:m+1},(_,i)=>[i,...Array(n).fill(0)]);for(let j=0;j<=n;j++)d[0][j]=j;
  for(let i=1;i<=m;i++)for(let j=1;j<=n;j++)d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a[i-1]===b[j-1]?0:1));return d[m][n];}
/* Lenient speech matching — handles short words like "O" that recognizers mangle */
function isShortWord(tr){return norm(tr).replace(/[^a-zçğıöşüâîû]/g,'').length<=3;}
function speechMatch(alts,item){
  const t=norm(item.tr),phrase=norm(item.ex);
  const thr=w=>w.length<=3?1:Math.max(1,Math.floor(w.length*0.25));
  for(const raw of alts){const a=norm(raw);if(!a)continue;
    if(a===t||a.includes(t)||lev(a,t)<=thr(t))return true;
    const toks=a.split(/\s+/).filter(Boolean);
    if(toks.some(w=>w===t||lev(w,t)<=thr(t)))return true;
    if(t.length<=3){const p=phrase.split(/\s+/).filter(Boolean);
      const hit=p.filter(x=>toks.some(w=>w===x||lev(w,x)<=1)).length;
      if(p.length&&hit>=Math.ceil(p.length/2))return true;}
  }
  return false;
}

/* ===================== HEADER & DASHBOARD ===================== */
function renderHeader(){const{cur}=levelInfo();$('#cLevel').textContent=cur.name;
  $('#cXp').textContent=S.xp+((Date.now()<(S.boostUntil||0))?' ⚡2×':'');$('#cStreak').textContent=S.streak;}
function renderDash(){
  const{cur,nxt}=levelInfo();const lo=cur.xp,hi=nxt?nxt.xp:cur.xp+500;
  const pct=Math.min(100,Math.round((S.xp-lo)/(hi-lo)*100));
  /* honest CEFR: labels above A1 stay “unverified” until the checkpoint exam is passed */
  const need=certNeeded();
  $('#cefrSub').textContent='Level '+cur.name+(need?' · '+need+' unverified':'');
  $('#certRow').innerHTML=need
    ?`<button class="btn ghost" id="certBtn" style="margin-top:12px;padding:9px 14px;font-size:13px">📜 Take the ${need} checkpoint exam</button>`
    :((S.certs&&Object.keys(S.certs).length)?`<div class="sub" style="margin-top:8px;color:var(--green)">📜 Verified: ${Object.keys(S.certs).join(' ✓ · ')} ✓</div>`:'');
  if(need)$('#certBtn').onclick=()=>startExam(need);
  $('#cefrPct').textContent=pct+'%';
  $('#cefrLevel').textContent=cur.name;
  $('#cefrXpFrac').textContent=S.xp+' / '+(nxt?hi:S.xp)+' XP';
  $('#ringTo').textContent=nxt?('to '+nxt.name):'max level';
  $('#ringFg').style.strokeDashoffset=326.7*(1-pct/100);
  const nm=window.TQ_NAME;
  $('#helloName').textContent='Merhaba'+(nm?', '+nm:'')+'! 👋';
  const subs=['Az az, her gün — başarı böyle gelir.','Bugün 5 dakika yeter. Hadi!','Tekrar etmek, hatırlamaktır. Devam!'];
  $('#helloSub').textContent=subs[new Date().getDate()%subs.length];
  /* one-glance status: quest pill + personalised CTA */
  ensureQuest();
  const qd=(S.quest.newWords>=5?1:0)+(S.quest.reviews>=10?1:0)+(S.quest.lesson?1:0)+(S.quest.listen?1:0);
  $('#helloQuest').textContent=qd>=4?'🎯 Quest complete ✓':'🎯 Quest '+qd+'/4';
  const dueN=dueCards().length;
  $('#ctaSub').textContent=(dueN?dueN+' cards due for review · ':'')+'quest '+qd+'/4 · adapts to you · ~5 min';
  /* first-time onboarding — disappears automatically after first XP */
  $('#fsWrap').innerHTML=S.xp===0?`<div class="firststeps">
    <div><h3>🐣 Hoş geldin! Start in 3 tiny steps</h3>
    <p>1️⃣ Tap <b>Start learning</b> · 2️⃣ learn your first 5 words (we say them out loud) · 3️⃣ open your first 🎁 reward chest. That’s it — the app handles the rest.</p></div>
    <div class="row"><button class="btn green" id="fsStart">▶ Start learning</button>
    <button class="btn ghost" id="fsPlace">🧭 I know some Turkish</button></div></div>`:'';
  if(S.xp===0){$('#fsStart').onclick=startFlow;$('#fsPlace').onclick=startPlacement;}
  $('#cefrNext').textContent=nxt?(hi-S.xp)+' XP to '+nxt.name:'Top of the A1–B1 track 🎉';
  /* 📅 ETA to next level — based on your average pace over the last 7 days */
  let sum7=0;for(let i=0;i<7;i++){const d=new Date();d.setDate(d.getDate()-i);sum7+=S.xpLog[d.toISOString().slice(0,10)]||0;}
  const pace=Math.round(sum7/7);
  if(!nxt)$('#cefrEta').textContent='';
  else if(pace>0){const days=Math.max(1,Math.ceil((hi-S.xp)/pace));
    $('#cefrEta').textContent='📅 ≈ '+days+(days===1?' day':' days')+' to '+nxt.name+' at your pace ('+pace+' XP/day)';}
  else $('#cefrEta').textContent='📅 Practice today to unlock your pace estimate';
  $('#streakBig').textContent=S.streak;$('#freezes').textContent=S.freezes;$('#bestStreak').textContent=S.bestStreak;
  const known=learnedCards().length;$('#knownWords').textContent=known;$('#totalWords').textContent=VOCAB.length;
  const reviewed=Object.values(S.cards).filter(c=>c.reps>0);const matured=reviewed.filter(c=>c.interval>=3).length;
  $('#retention').textContent=reviewed.length?Math.round(matured/reviewed.length*100)+'%':'—';
  $('#dueToday').textContent=dueCards().length;
  $('#kUnits').textContent=Object.values(S.units).filter(u=>u.complete).length;
  $('#kLessons').textContent=S.lessons;$('#kReviews').textContent=S.reviews;
  $('#kLS').textContent=S.listen+' / '+S.speak;$('#kBadges').textContent=S.badges.length+' / '+BADGES.length;
  renderWeek();renderHeat();renderCharts();
}
const WEEK_TIERS=[{xp:300,t:'🥉 Bronze'},{xp:700,t:'🥈 Silver'},{xp:1500,t:'🏆 Gold'}];
function renderWeek(){
  ensureWeek();const w=S.week.xp||0;
  $('#weekXp').textContent=w;
  const earned=WEEK_TIERS.filter(x=>w>=x.xp);
  $('#weekTrophy').textContent=earned.length?earned[earned.length-1].t.split(' ')[0]:'';
  const next=WEEK_TIERS.find(x=>w<x.xp);
  $('#weekBar').style.width=Math.min(100,Math.round(w/1500*100))+'%';
  $('#weekNext').textContent=next?((next.xp-w)+' XP to '+next.t):'🏆 Gold week — efsane!';
}
function renderHeat(){const wrap=$('#heat');wrap.innerHTML='';const arr=[];
  for(let i=34;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);arr.push(d.toISOString().slice(0,10));}
  arr.forEach(ds=>{const xp=S.xpLog[ds]||0;let l=0;if(xp>0)l=1;if(xp>=50)l=2;if(xp>=100)l=3;
    const s=document.createElement('span');s.dataset.l=l;s.title=ds+' · '+xp+' XP';wrap.appendChild(s);});}
let radarChart,lineChart;
function renderCharts(){
  /* perf: update charts in place instead of destroy/recreate */
  const labels=Object.keys(S.skills),data=Object.values(S.skills);
  if(radarChart){radarChart.data.datasets[0].data=data;radarChart.update('none');}
  else radarChart=new Chart($('#radar').getContext('2d'),{type:'radar',data:{labels,datasets:[{data,fill:true,backgroundColor:'rgba(227,10,23,.18)',borderColor:'#e30a17',pointBackgroundColor:'#ff5a64',borderWidth:2}]},
    options:{plugins:{legend:{display:false}},scales:{r:{angleLines:{color:'#2a2f3e'},grid:{color:'#2a2f3e'},pointLabels:{color:'#9aa0b4',font:{size:11}},ticks:{display:false,backdropColor:'transparent'}}}}});
  const ll=[],ld=[];
  for(let i=13;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);const ds=d.toISOString().slice(0,10);ll.push(ds.slice(5));ld.push(S.xpLog[ds]||0);}
  if(lineChart){lineChart.data.labels=ll;lineChart.data.datasets[0].data=ld;lineChart.update('none');}
  else lineChart=new Chart($('#line').getContext('2d'),{type:'line',data:{labels:ll,datasets:[{data:ld,fill:true,tension:.35,backgroundColor:'rgba(54,201,139,.15)',borderColor:'#36c98b',pointRadius:2,borderWidth:2}]},
    options:{plugins:{legend:{display:false}},scales:{x:{grid:{display:false},ticks:{color:'#9aa0b4',font:{size:9},maxRotation:0,autoSkip:true,maxTicksLimit:7}},y:{grid:{color:'#222637'},ticks:{color:'#9aa0b4',font:{size:10}},beginAtZero:true}}}});
}

/* ===================== DAILY QUEST ===================== */
function ensureQuest(){const t=todayStr();if(S.quest.date!==t){S.quest={date:t,newWords:0,reviews:0,lesson:false,listen:false};save();}}
function renderQuest(){
  ensureQuest();
  $('#questDate').textContent=new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long'});
  const goals=[
    {ico:'📖',title:'Learn 5 new words',meta:S.quest.newWords+' / 5',done:S.quest.newWords>=5,xp:'+50'},
    {ico:'🃏',title:'Review 10 cards',meta:S.quest.reviews+' / 10',done:S.quest.reviews>=10,xp:'+50'},
    {ico:'📚',title:'Complete 1 lesson',meta:S.quest.lesson?'done':'0 / 1',done:S.quest.lesson,xp:'+20'},
    {ico:'👂',title:'Do a listening drill',meta:S.quest.listen?'done':'0 / 1',done:S.quest.listen,xp:'+15'},
  ];
  const done=goals.filter(g=>g.done).length;
  $('#questList').innerHTML=goals.map(g=>`<div class="quest ${g.done?'done':''}">
    <div class="qdot">${g.done?'✓':g.ico}</div>
    <div><div class="qtitle">${g.title}</div><div class="qmeta">${g.meta}</div></div>
    <div class="qright">${g.xp}</div></div>`).join('');
  $('#questStatus').textContent=done+' / 4 done';
  if(done===4&&!S.quest.claimed){S.quest.claimed=true;S.questsDone++;addXp(50);checkBadges();snd('quest');toast('🎯 Quest complete! +50 XP');save();setTimeout(()=>openChest('Daily quest'),1200);}
  const checked=S.lastActive===todayStr();
  $('#checkinBtn').disabled=checked;
  $('#checkinMsg').textContent=checked?('✓ Checked in. Streak: '+S.streak+' days 🔥'):'You haven’t logged today yet.';
}

/* ===================== LEARN / UNITS ===================== */
function unitProgress(u){const learned=u.ids.filter(id=>S.cards[id]&&S.cards[id].learned).length;return{learned,total:u.ids.length};}
function unitUnlocked(idx){if(idx===0)return true;const prev=UNITS[idx-1];return S.units[prev.id]&&S.units[prev.id].complete;}
function renderUnits(){
  const wrap=$('#units');wrap.innerHTML='';let lastLvl='';
  UNITS.forEach((u,idx)=>{
    if(u.lvl!==lastLvl){lastLvl=u.lvl;const tag=document.createElement('div');tag.className='leveltag';
      tag.textContent=({A1:'CEFR A1 · Yedi İklim 1',A2:'CEFR A2 · Yedi İklim 2',B1:'CEFR B1 · Yedi İklim 3 (starter)'})[u.lvl]||u.lvl;wrap.appendChild(tag);}
    const{learned,total}=unitProgress(u);const complete=S.units[u.id]&&S.units[u.id].complete;const unlocked=unitUnlocked(idx);const pct=Math.round(learned/total*100);
    const el=document.createElement('div');el.className='unit'+(complete?' complete':'')+(unlocked?'':' locked');
    el.innerHTML=`<div class="unum">${complete?'✓':(unlocked?idx+1:'🔒')}</div>
      <div class="uinfo"><h4>${u.title}</h4><p>${u.desc} · ${learned}/${total} words</p></div>
      <div class="ubar"><div style="width:${pct}%"></div></div>`;
    if(unlocked)el.onclick=()=>startUnit(u);
    wrap.appendChild(el);
  });
}

/* Unit flow: lesson -> learn -> quiz */
let flow=null;
function startUnit(u){switchView('practice');$('#practiceSub').textContent='Unit: '+u.title;flow={mode:'unit',unit:u,phase:'lesson'};renderLesson();}
function renderLesson(){const u=flow.unit,l=u.lesson;
  $('#practiceStage').innerHTML=`<div class="stage">
    <div class="flash" style="max-width:580px"><div class="cat">📚 Lesson · ${u.title}</div>
    <h2 style="margin:10px 0">${l.title}</h2>
    <p style="font-size:15px;line-height:1.7;text-align:left;color:var(--txt)">${l.body}</p></div>
    <button class="btn" id="lessonNext">Start learning words →</button></div>`;
  $('#lessonNext').onclick=()=>{if(!S.units[u.id])S.units[u.id]={};
    if(!S.units[u.id].lessonDone){S.units[u.id].lessonDone=true;S.lessons++;S.quest.lesson=true;addXp(20,'Reading');toast('📚 +20 XP');}
    flow.phase='learn';flow.queue=u.ids.slice();flow.i=0;save();renderLearnCard();};
}
function renderLearnCard(){
  if(flow.i>=flow.queue.length)return renderQuiz();
  const v=VOCAB.find(x=>x.id===flow.queue[flow.i]);const c=card(v.id);const isNew=!c.learned;
  $('#practiceStage').innerHTML=`<div class="stage">
    <div class="pill">${flow.i+1} / ${flow.queue.length} · ${isNew?'NEW':'review'}</div>
    <div class="flash"><div class="cat">${v.cat}</div>
    <div class="tr">${v.tr} <button class="speak" title="listen">🔊</button></div>
    <div class="en" id="rev" style="opacity:0">${v.en}</div>
    <div class="ex" id="rex" style="opacity:0">“${v.ex}”</div></div>
    <div id="learnCtrl"><button class="btn ghost" id="reveal">Show meaning</button></div></div>`;
  $('.speak').onclick=()=>speak(v.tr);speak(v.tr);
  $('#reveal').onclick=()=>{$('#rev').style.opacity=1;$('#rex').style.opacity=1;
    $('#learnCtrl').innerHTML=`<div class="srsbtns"><button class="btn ghost" data-q="0">Again</button><button class="btn" data-q="2">Got it 👍</button><button class="btn green" data-q="3">Easy ⚡</button></div>`;
    $$('#learnCtrl [data-q]').forEach(b=>b.onclick=()=>{const q=+b.dataset.q;
      if(isNew){c.learned=true;addXp(10,v.skill);S.quest.newWords++;}gradeCard(v.id,q);S.quest.reviews++;flow.i++;save();renderLearnCard();});};
}
function renderQuiz(){flow.phase='quiz';flow.qIdx=0;flow.qScore=0;flow.qItems=shuffle(flow.unit.ids.map(id=>VOCAB.find(v=>v.id===id))).slice(0,6);nextQuiz();}
function nextQuiz(){
  if(!flow||!flow.qItems)return; // guard: mode switched mid-timeout
  if(flow.qIdx>=flow.qItems.length){
    const pass=flow.qScore>=Math.ceil(flow.qItems.length*0.6);
    if(pass){S.quiz++;addXp(15,'Grammar');if(!S.units[flow.unit.id])S.units[flow.unit.id]={};S.units[flow.unit.id].complete=true;checkBadges();save();setTimeout(()=>openChest('Unit complete'),1100);
      $('#practiceStage').innerHTML=`<div class="stage"><div class="flash"><div class="tr">🎉</div><h2>Aferin! Unit complete</h2><p class="muted">Score ${flow.qScore}/${flow.qItems.length} · +15 XP · next unit unlocked</p></div><button class="btn" onclick="flow=null;switchView('learn')">Back to tree</button></div>`;
      toast('🏆 Unit complete!');}
    else{$('#practiceStage').innerHTML=`<div class="stage"><div class="flash"><div class="tr">😅</div><h2>Almost!</h2><p class="muted">Score ${flow.qScore}/${flow.qItems.length}. Need 60% — try again.</p></div><button class="btn" id="retry">Retry unit</button></div>`;
      $('#retry').onclick=()=>startUnit(flow.unit);}
    save();return;
  }
  const v=flow.qItems[flow.qIdx];const opts=[v.en];const pool=shuffle(VOCAB.filter(x=>x.id!==v.id));
  while(opts.length<4)opts.push(pool.pop().en);
  $('#practiceStage').innerHTML=`<div class="stage"><div class="pill">Quiz ${flow.qIdx+1} / ${flow.qItems.length}</div>
    <div class="flash"><div class="cat">Choose the meaning</div><div class="tr">${v.tr} <button class="speak">🔊</button></div></div>
    <div class="choices">${shuffle(opts).map(o=>`<div class="choice">${o}</div>`).join('')}</div></div>`;
  $('.speak').onclick=()=>speak(v.tr);
  $$('.choice').forEach(ch=>ch.onclick=()=>{if(ch.dataset.done)return;$$('.choice').forEach(c=>c.dataset.done=1);
    if(ch.textContent===v.en){buzz(12);snd('ok');ch.classList.add('correct');flow.qScore++;}else{buzz(60);snd('no');ch.classList.add('wrong');$$('.choice').forEach(c=>{if(c.textContent===v.en)c.classList.add('correct');});}
    setTimeout(()=>{if(flow){flow.qIdx++;nextQuiz();}},800);});
}

/* ===================== PRACTICE HUB ===================== */
function weakCards(){return VOCAB.filter(v=>{const c=S.cards[v.id];return c&&c.learned&&(c.miss||0)>=2;});}
function renderPracticeHome(){
  flow=null;$('#practiceSub').textContent='Pick a drill. Reviews resurface words right before you’d forget them (SM-2).';
  const due=dueCards().length,known=learnedCards().length,weak=weakCards().length;
  const dlgDone=Object.values(S.dlg||{}).filter(Boolean).length;
  const readDone=Object.values(S.read||{}).filter(Boolean).length;
  $('#practiceStage').innerHTML=`<div class="modehub">
    <div class="mode" id="mSrs"><div class="mi">🃏</div><h4>SRS Review</h4><p>Flashcards due now</p><div class="cnt" style="color:var(--accent2)">${due}</div></div>
    <div class="mode" id="mWeak"><div class="mi">🩹</div><h4>Weak Words</h4><p>The ones that keep slipping</p><div class="cnt" style="color:var(--gold)">${weak}</div></div>
    <div class="mode" id="mDlg"><div class="mi">💬</div><h4>Dialogues</h4><p>Real conversations + quiz</p><div class="cnt" style="color:var(--green)">${dlgDone}/${DIALOGUES.length}</div></div>
    <div class="mode" id="mSuffix"><div class="mi">🧩</div><h4>Suffix Lab</h4><p>Build words from pieces</p><div class="cnt" style="color:var(--purple)">${S.suffixN||0}</div></div>
    <div class="mode" id="mRead"><div class="mi">📖</div><h4>Reading</h4><p>Micro-stories + question</p><div class="cnt" style="color:var(--gold)">${readDone}/${READING.length}</div></div>
    <div class="mode" id="mWrite"><div class="mi">✍️</div><h4>Writing</h4><p>Type it in Turkish</p><div class="cnt" style="color:var(--accent2)">${S.writes||0}</div></div>
    <div class="mode" id="mListen"><div class="mi">👂</div><h4>Listening</h4><p>Hear it, pick the meaning</p><div class="cnt" style="color:var(--blue)">${known}</div></div>
    <div class="mode" id="mSpeak"><div class="mi">🎤</div><h4>Speaking</h4><p>Say it back out loud</p><div class="cnt" style="color:var(--purple)">${known}</div></div>
  </div>
  <p class="muted center" style="margin-top:16px">${known<4?'Learn at least 4 words in the Learn tab to unlock the drills.':'Drills draw from your '+known+' learned words.'}</p>`;
  $('#mSrs').onclick=()=>{if(!due){toast('No cards due — learn a unit first!');return;}startSrs();};
  $('#mWeak').onclick=()=>{if(!weak){toast('No weak words — keep it up! 💪');return;}startWeak();};
  $('#mDlg').onclick=()=>dlgList();
  $('#mSuffix').onclick=()=>startSuffix();
  $('#mRead').onclick=()=>readList();
  $('#mWrite').onclick=()=>{if(known<4){toast('Learn 4+ words first');return;}startWrite();};
  $('#mListen').onclick=()=>{if(known<4){toast('Learn 4+ words first');return;}startListen();};
  $('#mSpeak').onclick=()=>{if(known<4){toast('Learn 4+ words first');return;}startSpeak();};
}
/* 🧩 Suffix Lab — tap tiles to assemble agglutinated words */
function startSuffix(){flow={mode:'suffix',n:0,score:0,total:8,pool:shuffle(SUFFIX.slice())};suffixCard();}
function suffixCard(){
  if(!flow||!flow.pool)return;
  if(flow.n>=flow.total){$('#practiceStage').innerHTML=`<div class="stage"><div class="flash"><div class="tr">🧩</div><h2>Suffix Lab done</h2><p class="muted">${flow.score}/${flow.total} built correctly · skill: Grammar</p></div><button class="btn" id="again">Back to practice</button></div>`;$('#again').onclick=renderPracticeHome;return;}
  const s=flow.pool[flow.n%flow.pool.length];
  let tiles=s.parts.slice();
  if(tiles.length<4){const d=shuffle(SUFFIX_POOL.filter(x=>!s.parts.includes(x)))[0];tiles.push(d);}
  tiles=shuffle(tiles);
  flow.cur=s;flow.built=[];
  $('#practiceStage').innerHTML=`<div class="stage"><div class="pill">🧩 ${flow.n+1} / ${flow.total} · tap the pieces in order</div>
    <div class="flash"><div class="cat">Build it in Turkish</div><div class="tr" style="font-size:22px">${s.en}</div>
    <div class="en" id="builtRow" style="opacity:1;min-height:32px;letter-spacing:1px">…</div></div>
    <div class="choices" id="tileRow" style="grid-template-columns:repeat(auto-fit,minmax(86px,1fr));max-width:420px">${tiles.map(t=>`<div class="choice" data-t="${esc(t)}" style="justify-content:center;font-size:18px">${t}</div>`).join('')}</div>
    <div class="row" style="justify-content:center"><button class="btn ghost" id="sufClear">↺ Clear</button><button class="btn" id="sufCheck">Check</button></div></div>`;
  const upd=()=>{$('#builtRow').textContent=flow.built.length?flow.built.join(' + '):'…';};upd();
  $$('#tileRow .choice').forEach(el=>el.onclick=()=>{if(el.dataset.done)return;el.dataset.done=1;el.classList.add('correct');flow.built.push(el.dataset.t);upd();});
  $('#sufClear').onclick=()=>{flow.built=[];$$('#tileRow .choice').forEach(el=>{el.dataset.done='';el.classList.remove('correct');});upd();};
  $('#sufCheck').onclick=()=>{
    const ok=flow.built.length===s.parts.length&&flow.built.every((t,i)=>t===s.parts[i]);
    buzz(ok?12:60);snd(ok?'ok':'no');
    S.suffixN=(S.suffixN||0)+1;
    if(ok){flow.score++;addXp(10,'Grammar');xpPop(10);toast('🧩 '+s.parts.join('')+' ✓ — '+s.note);}
    else toast('✏️ '+s.parts.join(' + ')+' = '+s.parts.join('')+' · '+s.note);
    checkBadges();save();
    setTimeout(()=>{if(flow){flow.n++;suffixCard();}},1500);
  };
}

/* 📜 Checkpoint exams — CEFR labels must be EARNED (8/10 to certify) */
function certNeeded(){
  const n=levelInfo().cur.name;
  if(n.startsWith('A2')&&!(S.certs&&S.certs.A1))return 'A1';
  if(n.startsWith('B1')&&!(S.certs&&S.certs.A2))return 'A2';
  return null;
}
function examPool(lvl){return UNITS.filter(u=>u.lvl===lvl).flatMap(u=>u.ids).map(id=>VOCAB.find(v=>v.id===id));}
function startExam(lvl){switchView('practice');flow={mode:'exam',lvl,qi:0,score:0,qs:shuffle(examPool(lvl)).slice(0,10)};examQ();}
function examQ(){
  if(!flow||!flow.qs)return;
  if(flow.qi>=flow.qs.length){
    const pass=flow.score>=8,lvl=flow.lvl,sc=flow.score;
    if(pass){
      if(!S.certs)S.certs={};S.certs[lvl]=true;
      addXp(60,'Grammar');checkBadges();save();celebrate();snd('quest');
      $('#practiceStage').innerHTML=`<div class="stage"><div class="flash"><div class="tr">📜</div><h2>${lvl} Certified!</h2><p class="muted">${sc}/10 — your ${lvl} level is now verified. +60 XP</p></div><button class="btn" id="backC">Back to dashboard</button></div>`;
      $('#backC').onclick=()=>switchView('dash');
      setTimeout(()=>openChest('Checkpoint passed'),1100);
    }else{
      $('#practiceStage').innerHTML=`<div class="stage"><div class="flash"><div class="tr">📚</div><h2>Not yet — ${sc}/10</h2><p class="muted">You need 8/10. Drill your 🩹 weak words and 🧩 suffixes, then come back.</p></div>
        <div class="row" style="justify-content:center"><button class="btn" id="retryC">Try again</button><button class="btn ghost" id="backC">Practice first</button></div></div>`;
      $('#retryC').onclick=()=>startExam(lvl);
      $('#backC').onclick=renderPracticeHome;
    }
    return;
  }
  const v=flow.qs[flow.qi];const dir=flow.qi%2===0;
  const field=dir?'en':'tr';const prompt=dir?v.tr:v.en;const correct=v[field];
  const opts=mcChoices(v,field);
  $('#practiceStage').innerHTML=`<div class="stage"><div class="pill">📜 ${flow.lvl} exam · ${flow.qi+1} / ${flow.qs.length}</div>
    <div class="flash"><div class="cat">${dir?'Choose the meaning':'Choose the Turkish'}</div><div class="tr" style="font-size:28px">${prompt}</div></div>
    <div class="choices">${opts.map(o=>`<div class="choice" data-val="${esc(o)}">${o}</div>`).join('')}</div></div>`;
  $$('.choice').forEach(ch=>ch.onclick=()=>{if(ch.dataset.done)return;$$('.choice').forEach(c=>c.dataset.done=1);
    const ok=ch.dataset.val===correct;buzz(ok?12:60);snd(ok?'ok':'no');
    if(ok){ch.classList.add('correct');flow.score++;}
    else{ch.classList.add('wrong');$$('.choice').forEach(c=>{if(c.dataset.val===correct)c.classList.add('correct');});}
    setTimeout(()=>{if(flow){flow.qi++;examQ();}},800);});
}

/* 🧭 Placement test — skip ahead honestly if you already know Turkish */
function startPlacement(){
  switchView('practice');
  const early=UNITS.slice(0,4).flatMap(u=>u.ids),late=UNITS.slice(8,15).flatMap(u=>u.ids),
        a2=UNITS.filter(u=>u.lvl==='A2').flatMap(u=>u.ids);
  const pick=(ids,n)=>shuffle(ids.slice()).slice(0,n).map(id=>VOCAB.find(v=>v.id===id));
  flow={mode:'place',qi:0,bands:[0,0,0],qs:[...pick(early,4),...pick(late,4),...pick(a2,4)]};
  placeQ();
}
function placeQ(){
  if(!flow||!flow.qs)return;
  if(flow.qi>=12){
    const e=flow.bands[0],l=flow.bands[1],a=flow.bands[2];
    let upto=0,msg='Starting from the beginning — the perfect place to grow solid roots. 🌱';
    if(e>=3&&l>=3&&a>=3){upto=21;msg='Güçlüsün! A1 and A2 unlocked — you start at B1. 🎓';}
    else if(e>=3&&l>=3){upto=15;msg='Çok iyi! A1 unlocked — you start at A2. 🚀';}
    else if(e>=3){upto=8;msg='İyi bir temel! The first 8 units are unlocked. 👍';}
    if(upto){UNITS.slice(0,upto).forEach(u=>{S.units[u.id]={complete:true,lessonDone:true};});checkBadges();save();}
    $('#practiceStage').innerHTML=`<div class="stage"><div class="flash"><div class="tr">🧭</div><h2>Placement result</h2><p class="muted" style="line-height:1.8">${msg}</p></div><button class="btn" id="goTree">Open the skill tree →</button></div>`;
    $('#goTree').onclick=()=>switchView('learn');
    return;
  }
  const v=flow.qs[flow.qi];const opts=mcChoices(v,'en');
  $('#practiceStage').innerHTML=`<div class="stage"><div class="pill">🧭 Placement · ${flow.qi+1} / 12</div>
    <div class="flash"><div class="cat">What does it mean? (it’s fine not to know!)</div><div class="tr" style="font-size:28px">${v.tr}</div></div>
    <div class="choices">${opts.map(o=>`<div class="choice" data-val="${esc(o)}">${o}</div>`).join('')}</div></div>`;
  $$('.choice').forEach(ch=>ch.onclick=()=>{if(ch.dataset.done)return;$$('.choice').forEach(c=>c.dataset.done=1);
    const ok=ch.dataset.val===v.en;if(ok){ch.classList.add('correct');flow.bands[Math.floor(flow.qi/4)]++;}
    else ch.classList.add('wrong');
    setTimeout(()=>{if(flow){flow.qi++;placeQ();}},600);});
}

/* ✍️ Writing drill — recall + spelling, credits the Writing skill */
function startWrite(){flow={mode:'write',n:0,score:0,total:8,pool:shuffle(learnedCards())};writeCard();}
function writeCard(){
  if(!flow||!flow.pool)return;
  if(flow.n>=flow.total){$('#practiceStage').innerHTML=`<div class="stage"><div class="flash"><div class="tr">✍️</div><h2>Writing done</h2><p class="muted">${flow.score}/${flow.total} correct · skill: Writing</p></div><button class="btn" id="again">Back to practice</button></div>`;$('#again').onclick=renderPracticeHome;return;}
  const v=flow.pool[flow.n%flow.pool.length];
  $('#practiceStage').innerHTML=`<div class="stage"><div class="pill">✍️ ${flow.n+1} / ${flow.total}</div>
    <div class="flash"><div class="cat">Write it in Turkish</div><div class="tr" style="font-size:26px">${v.en}</div>
    <button class="speak" style="margin-top:8px">🔊 hint</button></div>
    <input class="typein" id="win" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="type Turkish…">
    <div class="row" style="justify-content:center"><button class="btn" id="wsub">Check</button>
    <button class="btn ghost" id="wshow">Show answer</button></div><div class="kbd">press Enter to check</div></div>`;
  $('.speak').onclick=()=>speak(v.tr);
  const inp=$('#win');setTimeout(()=>inp.focus(),60);
  const adv=(ok)=>{if(ok){flow.score++;addXp(8,'Writing');xpPop(8);}S.writes=(S.writes||0)+1;checkBadges();save();
    setTimeout(()=>{if(flow){flow.n++;writeCard();}},800);};
  const submit=()=>{const a=norm(inp.value),t=norm(v.tr);if(!a)return;
    const ok=a===t||lev(a,t)<=Math.max(1,Math.floor(t.length*0.2));
    inp.style.borderColor=ok?'var(--green)':'var(--accent)';inp.disabled=true;$('#wsub').disabled=true;
    buzz(ok?12:60);snd(ok?'ok':'no');
    if(!ok)$('#win').value=inp.value+'  →  '+v.tr;
    adv(ok);};
  $('#wsub').onclick=submit;
  $('#wshow').onclick=()=>{inp.value=v.tr;speak(v.tr);inp.disabled=true;$('#wsub').disabled=true;snd('no');adv(false);};
  window.__flowKey=e=>{if(e.key==='Enter')submit();};
}
/* 📖 Reading corner — comprehension on tiny authentic texts */
function readList(){
  flow={mode:'read'};
  $('#practiceStage').innerHTML=`<div class="units">${READING.map(r=>`
    <div class="unit ${S.read&&S.read[r.id]?'complete':''}" data-r="${r.id}">
      <div class="unum">${S.read&&S.read[r.id]?'✓':r.ico}</div>
      <div class="uinfo"><h4>${r.title}</h4><p>${r.txt.split(' ').length} words · read, listen, answer · +12 XP</p></div>
    </div>`).join('')}</div>
    <p class="center" style="margin-top:14px"><button class="btn ghost" id="backPR">← Back to practice</button></p>`;
  $$('#practiceStage .unit').forEach(el=>el.onclick=()=>readView(READING.find(r=>r.id===el.dataset.r)));
  $('#backPR').onclick=renderPracticeHome;
}
function readView(r){
  $('#practiceStage').innerHTML=`<div class="pill">📖 ${r.title}</div>
    <div class="flash" style="max-width:560px;text-align:left">
      <p style="font-size:17px;line-height:2;margin:0">${r.txt}</p>
    </div>
    <div class="row" style="justify-content:center;margin-top:14px">
      <button class="btn blue" id="readAloud">🔊 Read to me</button>
      <button class="btn" id="toRQuiz">Question →</button>
    </div>`;
  $('#readAloud').onclick=()=>speakSeq(r.txt.split('. ').map(s=>s.trim()).filter(Boolean));
  $('#toRQuiz').onclick=()=>readQuiz(r);
}
function readQuiz(r){
  $('#practiceStage').innerHTML=`<div class="stage"><div class="pill">📖 ${r.title}</div>
    <div class="flash"><div class="cat">Did you understand?</div><div class="tr" style="font-size:21px">${r.q.q}</div></div>
    <div class="choices">${shuffle(r.q.opts.slice()).map(o=>`<div class="choice" data-val="${esc(o)}">${o}</div>`).join('')}</div></div>`;
  $$('.choice').forEach(ch=>ch.onclick=()=>{if(ch.dataset.done)return;$$('.choice').forEach(c=>c.dataset.done=1);
    const ok=ch.dataset.val===r.q.a;buzz(ok?12:60);snd(ok?'ok':'no');
    if(ok)ch.classList.add('correct');else{ch.classList.add('wrong');$$('.choice').forEach(c=>{if(c.dataset.val===r.q.a)c.classList.add('correct');});}
    const first=!(S.read&&S.read[r.id]);
    if(!S.read)S.read={};
    if(ok){S.read[r.id]=true;addXp(first?12:4,'Reading');xpPop(first?12:4);}
    S.reads=(S.reads||0)+1;checkBadges();save();
    setTimeout(()=>readList(),1000);});
}
/* Weak-words drill — retrieval practice on your personal trouble list */
function startWeak(){flow={mode:'srs',queue:shuffle(weakCards()).map(v=>v.id),i:0};srsCard();}
/* Dialogues — communicative practice with TTS + comprehension check */
function speakSeq(texts){try{speechSynthesis.cancel();texts.forEach(t=>{const u=new SpeechSynthesisUtterance(t);u.lang='tr-TR';u.rate=.9;speechSynthesis.speak(u);});}catch(e){}}
function dlgList(){
  flow={mode:'dlg'};
  $('#practiceStage').innerHTML=`<div class="units">${DIALOGUES.map(d=>`
    <div class="unit ${S.dlg&&S.dlg[d.id]?'complete':''}" data-d="${d.id}">
      <div class="unum">${S.dlg&&S.dlg[d.id]?'✓':d.ico}</div>
      <div class="uinfo"><h4>${d.title}</h4><p>${d.lines.length} lines · listen, read, answer · +25 XP</p></div>
    </div>`).join('')}</div>
    <p class="center" style="margin-top:14px"><button class="btn ghost" id="backP">← Back to practice</button></p>`;
  $$('#practiceStage .unit').forEach(el=>el.onclick=()=>playDialogue(DIALOGUES.find(d=>d.id===el.dataset.d)));
  $('#backP').onclick=renderPracticeHome;
}
function playDialogue(d){
  $('#practiceStage').innerHTML=`<div class="pill">💬 ${d.title}</div>
    <div class="flash" style="max-width:560px;text-align:left">
      ${d.lines.map((l,i)=>`<div class="dlgline"><div class="dlgwho">${l[0]}</div>
        <div><div class="dlgtr">${l[1]} <button class="speak" data-i="${i}">🔊</button></div><div class="dlgen">${l[2]}</div></div></div>`).join('')}
    </div>
    <div class="row" style="justify-content:center;margin-top:14px">
      <button class="btn blue" id="playAll">▶ Play all</button>
      <button class="btn" id="toQuiz">Questions →</button>
    </div>`;
  $$('#practiceStage .speak').forEach(b=>b.onclick=()=>speak(d.lines[+b.dataset.i][1]));
  $('#playAll').onclick=()=>speakSeq(d.lines.map(l=>l[1]));
  $('#toQuiz').onclick=()=>dlgQuiz(d,0,0);
}
function dlgQuiz(d,qi,score){
  if(qi>=d.q.length){
    const first=!(S.dlg&&S.dlg[d.id]);
    if(!S.dlg)S.dlg={};S.dlg[d.id]=true;
    if(first){addXp(15,'Listening');addXp(10,'Reading');toast('💬 Dialogue complete! +25 XP');}
    S.quest.listen=true;checkBadges();save();
    $('#practiceStage').innerHTML=`<div class="stage"><div class="flash"><div class="tr">${score===d.q.length?'🎉':'👍'}</div>
      <h2>${d.title.split('—')[0]} done</h2><p class="muted">${score}/${d.q.length} correct${first?' · +25 XP':''}</p></div>
      <button class="btn" id="backD">More dialogues →</button></div>`;
    $('#backD').onclick=dlgList;return;
  }
  const q=d.q[qi];
  $('#practiceStage').innerHTML=`<div class="stage"><div class="pill">💬 Question ${qi+1} / ${d.q.length}</div>
    <div class="flash"><div class="cat">${d.title}</div><div class="tr" style="font-size:22px">${q.q}</div></div>
    <div class="choices">${shuffle(q.opts.slice()).map(o=>`<div class="choice" data-val="${esc(o)}">${o}</div>`).join('')}</div></div>`;
  $$('.choice').forEach(ch=>ch.onclick=()=>{if(ch.dataset.done)return;$$('.choice').forEach(c=>c.dataset.done=1);
    const ok=ch.dataset.val===q.a;buzz(ok?12:60);snd(ok?'ok':'no');
    if(ok)ch.classList.add('correct');else{ch.classList.add('wrong');$$('.choice').forEach(c=>{if(c.dataset.val===q.a)c.classList.add('correct');});}
    setTimeout(()=>dlgQuiz(d,qi+1,score+(ok?1:0)),900);});
}

/* SRS review session */
function startSrs(){flow={mode:'srs',queue:dueCards().map(v=>v.id),i:0};srsCard();}
function srsCard(){
  if(!flow||!flow.queue)return; // guard: mode switched mid-timeout
  if(flow.i>=flow.queue.length){toast('🃏 Review done!');renderPracticeHome();return;}
  const v=VOCAB.find(x=>x.id===flow.queue[flow.i]);
  $('#practiceStage').innerHTML=`<div class="stage"><div class="pill">${flow.i+1} / ${flow.queue.length} · review</div>
    <div class="flash"><div class="cat">${v.cat}</div><div class="tr">${v.tr} <button class="speak">🔊</button></div>
    <div class="en" id="rev" style="opacity:0">${v.en}</div></div>
    <div id="learnCtrl"><button class="btn ghost" id="reveal">Show meaning</button></div></div>`;
  $('.speak').onclick=()=>speak(v.tr);
  $('#reveal').onclick=()=>{$('#rev').style.opacity=1;speak(v.tr);
    $('#learnCtrl').innerHTML=`<div class="srsbtns"><button class="btn ghost" data-q="0">Again</button><button class="btn" data-q="2">Good 👍</button><button class="btn green" data-q="3">Easy ⚡</button></div>`;
    $$('#learnCtrl [data-q]').forEach(b=>b.onclick=()=>{gradeCard(v.id,+b.dataset.q);S.quest.reviews++;flow.i++;save();srsCard();});};
}

/* Listening drill */
function startListen(){flow={mode:'listen',n:0,score:0,total:8,pool:shuffle(learnedCards())};listenCard();}
function listenCard(){
  if(!flow||!flow.pool)return; // guard: mode switched mid-timeout
  if(flow.n>=flow.total){$('#practiceStage').innerHTML=`<div class="stage"><div class="flash"><div class="tr">👂</div><h2>Listening done</h2><p class="muted">${flow.score}/${flow.total} correct · skill: Listening</p></div><button class="btn" id="again">Back to practice</button></div>`;$('#again').onclick=renderPracticeHome;return;}
  const v=flow.pool[flow.n%flow.pool.length];const opts=[v.en];const pool=shuffle(VOCAB.filter(x=>x.id!==v.id));while(opts.length<4)opts.push(pool.pop().en);
  $('#practiceStage').innerHTML=`<div class="stage"><div class="pill">👂 ${flow.n+1} / ${flow.total}</div>
    <div class="flash"><div class="cat">Listen & choose the meaning</div>
    <button class="micbig" id="play" style="background:linear-gradient(135deg,var(--blue),#2b6fb8)">🔊</button>
    <p class="muted" style="margin:12px 0 0;font-size:13px">Tap to replay</p></div>
    <div class="choices">${shuffle(opts).map(o=>`<div class="choice">${o}</div>`).join('')}</div></div>`;
  $('#play').onclick=()=>speak(v.tr);speak(v.tr);
  $$('.choice').forEach(ch=>ch.onclick=()=>{if(ch.dataset.done)return;$$('.choice').forEach(c=>c.dataset.done=1);
    const ok=ch.textContent===v.en;snd(ok?'ok':'no');if(ok){ch.classList.add('correct');flow.score++;addXp(6,'Listening');}else{ch.classList.add('wrong');$$('.choice').forEach(c=>{if(c.textContent===v.en)c.classList.add('correct');});}
    S.listen++;S.quest.listen=true;checkBadges();save();setTimeout(()=>{if(flow){flow.n++;listenCard();}},900);});
}

/* Speaking practice */
function startSpeak(){flow={mode:'speak',n:0,score:0,total:6,pool:shuffle(learnedCards())};speakCard();}
function speakCard(){
  if(!flow||!flow.pool)return; // guard: mode switched mid-timeout
  if(flow.n>=flow.total){$('#practiceStage').innerHTML=`<div class="stage"><div class="flash"><div class="tr">🎤</div><h2>Speaking done</h2><p class="muted">${flow.score}/${flow.total} good · skill: Speaking</p></div><button class="btn" id="again">Back to practice</button></div>`;$('#again').onclick=renderPracticeHome;return;}
  const v=flow.pool[flow.n%flow.pool.length];
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  const short=isShortWord(v.tr);
  const sayText=short?v.ex:v.tr;
  $('#practiceStage').innerHTML=`<div class="stage"><div class="pill">🎤 ${flow.n+1} / ${flow.total}${short?' · say the whole phrase':''}</div>
    <div class="flash"><div class="cat">Say this in Turkish</div>
    <div class="tr" style="font-size:${short?24:40}px">${sayText} <button class="speak">🔊</button></div>
    <div class="ex" style="opacity:1">${v.en}${short?' · phrase contains <b>'+v.tr+'</b>':''}</div></div>
    <button class="micbig purple" id="mic">🎤</button>
    <p class="heard" id="heard">${SR?'Tap the mic and speak':'No speech recognition in this browser — use the button below'}</p>
    <div class="row" style="justify-content:center"><button class="btn ghost" id="saidIt">🎙️ Mic trouble? I said it 👍</button></div></div>`;
  $('.speak').onclick=()=>speak(sayText);
  const adv=(good)=>{if(good){flow.score++;addXp(8,'Speaking');toast('👏 Güzel!');}S.speak++;checkBadges();save();setTimeout(()=>{if(flow){flow.n++;speakCard();}},650);};
  $('#saidIt').onclick=()=>adv(true);
  $('#mic').onclick=()=>{
    if(!SR){speak(sayText);return;}
    const rec=new SR();rec.lang='tr-TR';rec.interimResults=false;rec.maxAlternatives=5;
    $('#mic').classList.add('rec');$('#heard').textContent='Listening…';
    rec.onresult=ev=>{const alts=[...ev.results[0]].map(r=>r.transcript);
      $('#mic').classList.remove('rec');$('#heard').innerHTML='You said: <b>'+(norm(alts[0])||'—')+'</b>';
      if(speechMatch(alts,v))adv(true);
      else $('#heard').innerHTML+=' — not quite, try again or tap “I said it”';};
    rec.onerror=()=>{$('#mic').classList.remove('rec');$('#heard').textContent='Mic error — tap “I said it” below';};
    rec.onend=()=>$('#mic').classList.remove('rec');
    try{rec.start();}catch(e){$('#heard').textContent='Mic error — tap “I said it” below';}};
}

/* ===================== BADGES ===================== */
function badgeStats(){return{lessons:S.lessons,bestStreak:S.bestStreak,known:learnedCards().length,reviews:S.reviews,quiz:S.quiz,questsDone:S.questsDone,listen:S.listen,speak:S.speak,
  chests:S.chests||0,cultureN:S.cultureN||0,dlgDone:Object.values(S.dlg||{}).filter(Boolean).length,
  writes:S.writes||0,readDone:Object.values(S.read||{}).filter(Boolean).length,
  suffixN:S.suffixN||0,certsN:Object.keys(S.certs||{}).length,
  unitsDone:Object.values(S.units).filter(u=>u.complete).length,
  a1Done:UNITS.filter(u=>u.lvl==='A1'&&S.units[u.id]&&S.units[u.id].complete).length};}
function checkBadges(){
  const n=Math.min(CULTURE.length,Math.floor((S.xp||0)/150));
  if(n>(S.cultureN||0)){S.cultureN=n;toast('🌹 New culture card unlocked! See Achievements');}
  const st=badgeStats();BADGES.forEach(b=>{if(b.test(st)&&!S.badges.includes(b.id)){S.badges.push(b.id);toast('🏆 Badge: '+b.name);}});save();}
function renderBadges(){
  $('#badgeGrid').innerHTML=BADGES.map(b=>`<div class="badge ${S.badges.includes(b.id)?'unlocked':''}"><div class="ico">${b.ico}</div><div class="bname">${b.name}</div><div class="bdesc">${b.desc}</div></div>`).join('');
  const n=S.cultureN||0;
  $('#cultureGrid').innerHTML=CULTURE.map((c,i)=>i<n
    ?`<div class="cultcard"><div class="ctr">“${c.tr}” <button class="speak" onclick="speak('${c.tr.replace(/'/g,"\\'")}')">🔊</button></div><div class="cen">${c.en}</div><div class="cby">— ${c.by}</div></div>`
    :`<div class="cultcard locked"><div class="ctr">🔒</div><div class="cen">Unlocks at ${(i+1)*150} XP</div></div>`).join('');
  $('#cultSub').textContent='Collected '+n+' / '+CULTURE.length+' — one card per 150 XP';
}

/* ===================== FLOW — adaptive endless roadmap ===================== */
const ID2UNIT={};UNITS.forEach(u=>u.ids.forEach(id=>{ID2UNIT[id]=u;}));
let F=null;
const DIFF_LABEL={1:'Tanıma · Recognise',2:'Hatırlama · Recall',3:'Dinleme · Listen',4:'Yazma · Type',5:'Konuşma · Speak'};
function flowMax(){const known=learnedCards().length;let m=2;if(known>=6)m=3;if(known>=10)m=4;
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(known>=14&&SR)m=5;return m;}
function curDiff(){return Math.min(S.diff,flowMax());}

function renderFlowHome(){
  $('#flowHud').innerHTML='';
  const known=learnedCards().length,due=dueCards().length;
  $('#flowStage').innerHTML=`<div class="flash" style="max-width:540px"><div class="cat">🚀 Flow Mode</div>
    <h2 style="margin:10px 0">Endless adaptive roadmap</h2>
    <p style="font-size:14px;line-height:1.7;color:var(--txt)">One continuous stream of challenges that picks your next step automatically — it gets <b>harder</b> when you're on a roll and <b>explains the grammar</b> when you slip. No menus, no dead ends.</p>
    <p class="muted" style="font-size:12.5px">${known} words learned · ${due} due to review · starting at <b>${DIFF_LABEL[curDiff()]}</b></p></div>
    <button class="btn purple" id="goFlow">▶ Start Flow</button>
    <div class="kbd">⌨️ keys 1–4 pick answers · Enter to continue</div>`;
  $('#goFlow').onclick=startFlow;
}
function startFlow(){F={combo:0,best:0,xp:0,n:0,recent:[]};switchView('flow');flowNext();}
function endFlow(){
  const sx=F.xp,best=F.best,nn=F.n;F=null;
  $('#flowHud').innerHTML='';
  $('#flowStage').innerHTML=`<div class="flash" style="max-width:480px"><div class="tr">${sx>=100?'🏆':'🎉'}</div>
    <h2 style="margin:8px 0">Session complete!</h2>
    <p class="muted" style="font-size:14px;line-height:1.8">⚡ <b style="color:var(--green)">+${sx} XP</b> earned<br>
    🔥 best combo <b>${best}</b> · 🃏 <b>${Math.max(0,nn-1)}</b> challenges faced</p></div>
    <div class="row" style="justify-content:center">
      <button class="btn purple" id="flowAgain">▶ Keep flowing</button>
      <button class="btn ghost" id="flowDone">Dashboard</button>
    </div>`;
  $('#flowAgain').onclick=startFlow;
  $('#flowDone').onclick=()=>switchView('dash');
  renderHeader();renderDash();
  if(sx>=100)celebrate();
  if(sx>=60&&Math.random()<0.35)setTimeout(()=>openChest('Great session'),1200);
}
function updateFlowHud(){if(!F)return;const mom=Math.min(100,F.combo*12);
  $('#flowHud').innerHTML=`<div class="hud combo">🔥 ${F.combo}</div><div class="hud sxp">+${F.xp} XP</div>
    <div class="hud diff">🎚️ ${DIFF_LABEL[curDiff()]}</div>
    <div class="momentum"><div style="width:${mom}%"></div></div>
    <span class="endlink" id="endFlow">end</span>`;
  $('#endFlow').onclick=endFlow;}
function flowNext(){
  window.__flowKey=null;F.n++;updateFlowHud();
  const newOnes=unlearned(),due=dueCards(),learned=learnedCards();
  const struggling=F.recent.slice(-4).filter(x=>!x).length>=2;
  let item,isNew=false;
  if(newOnes.length&&(learned.length<4||(!struggling&&F.n%3===0))){item=newOnes[0];isNew=true;}
  else if(due.length){const sorted=due.slice().sort((x,y)=>((S.cards[y.id].miss||0)-(S.cards[x.id].miss||0)));
    item=sorted[Math.floor(Math.random()*Math.min(sorted.length,4))];}
  else if(learned.length){item=learned[Math.floor(Math.random()*learned.length)];}
  else{$('#flowStage').innerHTML='<div class="flash"><div class="tr">🎉</div><h2>Harika!</h2><p class="muted">You’ve learned every word — reviews will keep them sharp.</p></div>';return;}
  if(isNew)return teachThenTest(item);
  let d=curDiff();const c=card(item.id);if((c.miss||0)>=2)d=Math.min(d,2);
  renderChallenge(item,d);
}
function teachThenTest(item){
  const c=card(item.id),u=ID2UNIT[item.id];
  $('#flowStage').innerHTML=`<div class="pill">✨ New word${u?' · '+u.title:''}</div>
    <div class="flash"><div class="cat">${item.cat}</div><div class="tr">${item.tr} <button class="speak">🔊</button></div>
    <div class="en" style="opacity:1">${item.en}</div><div class="ex" style="opacity:1">“${item.ex}”</div></div>
    <button class="btn green" id="gotit">Got it 👍</button><div class="kbd">it'll be tested right away — press Enter</div>`;
  $('.speak').onclick=()=>speak(item.tr);speak(item.tr);
  const go=()=>{if(!c.learned){c.learned=true;addXp(10,item.skill);S.quest.newWords++;save();}renderChallenge(item,1);};
  $('#gotit').onclick=go;window.__flowKey=e=>{if(e.key==='Enter')go();};
}
function renderChallenge(item,d){if(F)F.chType=d; /* remember modality so XP credits the skill you used */
  if(d===3)return chListen(item);if(d===4)return chType(item);if(d===5)return chSpeak(item);return chMC(item,d);}
function mcChoices(item,field){const opts=[item[field]];const pool=shuffle(VOCAB.filter(x=>x.id!==item.id&&x[field]!==item[field]));
  while(opts.length<4&&pool.length)opts.push(pool.pop()[field]);return shuffle(opts);}
function bindChoices(correctText,item){
  $$('.choice').forEach((ch,i)=>{const num=ch.querySelector('.num');if(num)num.textContent=i+1;
    ch.onclick=()=>{if(ch.dataset.done)return;$$('.choice').forEach(c=>c.dataset.done=1);
      const ok=ch.dataset.val===correctText;
      if(ok)ch.classList.add('correct');else{ch.classList.add('wrong');$$('.choice').forEach(c=>{if(c.dataset.val===correctText)c.classList.add('correct');});}
      flowAnswer(ok,item);};});
  window.__flowKey=e=>{if(e.key>='1'&&e.key<='4'){const el=$$('.choice')[+e.key-1];if(el)el.click();}};
}
function esc(s){return (s||'').replace(/"/g,'&quot;');}
function chMC(item,d){
  const ask=(d===2);const prompt=ask?item.en:item.tr;const correct=ask?item.tr:item.en;const field=ask?'tr':'en';
  const opts=mcChoices(item,field);
  $('#flowStage').innerHTML=`<div class="pill">${ask?'Pick the Turkish':'Pick the meaning'}</div>
    <div class="flash"><div class="cat">${item.cat}</div><div class="tr">${prompt} ${ask?'':'<button class="speak">🔊</button>'}</div></div>
    <div class="choices">${opts.map(o=>`<div class="choice" data-val="${esc(o)}"><span class="num"></span>${o}</div>`).join('')}</div>`;
  const sp=$('.speak');if(sp)sp.onclick=()=>speak(item.tr);if(!ask)speak(item.tr);
  bindChoices(correct,item);
}
function chListen(item){
  const opts=mcChoices(item,'en');
  $('#flowStage').innerHTML=`<div class="pill">👂 Listen & choose</div>
    <div class="flash"><div class="cat">What did you hear?</div>
    <button class="micbig" id="play" style="background:linear-gradient(135deg,var(--blue),#2b6fb8)">🔊</button>
    <p class="muted" style="margin:12px 0 0;font-size:12px">tap to replay</p></div>
    <div class="choices">${opts.map(o=>`<div class="choice" data-val="${esc(o)}"><span class="num"></span>${o}</div>`).join('')}</div>`;
  $('#play').onclick=()=>speak(item.tr);speak(item.tr);
  S.listen++;S.quest.listen=true;
  bindChoices(item.en,item);
}
function chType(item){
  $('#flowStage').innerHTML=`<div class="pill">⌨️ Type it in Turkish</div>
    <div class="flash"><div class="cat">${item.cat}</div><div class="tr" style="font-size:26px">${item.en}</div>
    <button class="speak" style="margin-top:8px">🔊 hint</button></div>
    <input class="typein" id="tin" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="type Turkish…">
    <button class="btn" id="tsub">Check</button><div class="kbd">press Enter to check</div>`;
  $('.speak').onclick=()=>speak(item.tr);
  const inp=$('#tin');setTimeout(()=>inp.focus(),60);
  const submit=()=>{const a=norm(inp.value),t=norm(item.tr);if(!a)return;
    const ok=a===t||lev(a,t)<=Math.max(1,Math.floor(t.length*0.2));
    inp.style.borderColor=ok?'var(--green)':'var(--accent)';inp.disabled=true;$('#tsub').disabled=true;flowAnswer(ok,item);};
  $('#tsub').onclick=submit;window.__flowKey=e=>{if(e.key==='Enter')submit();};
}
function chSpeak(item){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  const short=isShortWord(item.tr);
  const sayText=short?item.ex:item.tr;
  $('#flowStage').innerHTML=`<div class="pill">🎤 ${short?'Short word — say the whole phrase':'Say it in Turkish'}</div>
    <div class="flash"><div class="cat">${item.en}</div>
    <div class="tr" style="font-size:${short?24:40}px">${sayText} <button class="speak">🔊</button></div>
    ${short?`<div class="ex" style="opacity:1">tiny words are hard for mics — the phrase contains <b>${item.tr}</b></div>`:''}</div>
    <button class="micbig purple" id="mic">🎤</button><p class="heard" id="heard">tap & speak</p>
    <div class="row" style="justify-content:center"><button class="btn ghost" id="saidIt">🎙️ Mic trouble? I said it 👍</button></div>`;
  $('.speak').onclick=()=>speak(sayText);S.speak++;
  $('#saidIt').onclick=()=>flowAnswer(true,item);
  $('#mic').onclick=()=>{
    if(!SR){$('#heard').textContent='No speech recognition in this browser — use the button below';return;}
    const rec=new SR();rec.lang='tr-TR';rec.maxAlternatives=5;
    $('#mic').classList.add('rec');$('#heard').textContent='listening…';
    rec.onresult=ev=>{const alts=[...ev.results[0]].map(r=>r.transcript);
      $('#mic').classList.remove('rec');$('#heard').innerHTML='you said: <b>'+(norm(alts[0])||'—')+'</b>';
      if(speechMatch(alts,item))flowAnswer(true,item);
      else $('#heard').innerHTML+=' — not quite, try again or tap the button below';};
    rec.onerror=()=>{$('#mic').classList.remove('rec');$('#heard').textContent='mic issue — tap “I said it” below';};
    rec.onend=()=>$('#mic').classList.remove('rec');
    try{rec.start();}catch(e){$('#heard').textContent='mic issue — tap “I said it” below';}};
}
function flowAnswer(ok,item){
  const c=card(item.id);
  const mod=({3:'Listening',4:'Writing',5:'Speaking'})[F.chType]||item.skill; // credit the exercised skill
  if(ok){buzz(12);snd('ok');F.combo++;F.best=Math.max(F.best,F.combo);const gain=4+Math.min(F.combo,8);F.xp+=gain;xpPop(gain);addXp(gain,mod);gradeCard(item.id,F.combo>3?3:2);c.miss=Math.max(0,(c.miss||0)-1);
    if(F.chType===4)S.writes=(S.writes||0)+1;}
  else{buzz(60);snd('no');F.combo=0;c.miss=(c.miss||0)+1;gradeCard(item.id,0);}
  S.quest.reviews++;F.recent.push(ok?1:0);if(F.recent.length>6)F.recent.shift();
  adaptDiff();checkBadges();save();updateFlowHud();
  if(ok){window.__flowKey=null;setTimeout(flowNext,650);}else showExplain(item);
}
function adaptDiff(){if(F.recent.length<4)return;const acc=F.recent.reduce((a,b)=>a+b,0)/F.recent.length;
  if(acc>=0.8&&S.diff<flowMax()){S.diff++;F.recent=[];toast('⚡ Difficulty up — '+DIFF_LABEL[curDiff()]);}
  else if(acc<=0.4&&S.diff>1){S.diff--;F.recent=[];toast('🧩 Easing up — more practice first');}
  save();}
function showExplain(item){
  const u=ID2UNIT[item.id];const tip=u?('💡 <b>'+u.lesson.title+'</b><br>'+u.lesson.body):'';
  const hard=(card(item.id).miss||0)>=2;
  $('#flowStage').innerHTML=`<div class="explain">
    <div class="x-tr">${item.tr} <button class="speak">🔊</button></div>
    <div class="x-en">${item.en}</div><div class="x-ex">“${item.ex}”</div>
    ${tip?`<div class="tip">${tip}</div>`:''}
    ${hard?'<div class="tip" style="border:1px solid var(--accent2)">🔁 This one keeps catching you — easing the difficulty so it sticks.</div>':''}
  </div><button class="btn green" id="cont">Got it — continue</button><div class="kbd">press Enter</div>`;
  $('.speak').onclick=()=>speak(item.tr);speak(item.tr);
  const go=()=>{window.__flowKey=null;flowNext();};
  $('#cont').onclick=go;window.__flowKey=e=>{if(e.key==='Enter')go();};
}

/* ===================== NAV ===================== */
function switchView(v){$$('nav.tabs button').forEach(b=>b.classList.toggle('active',b.dataset.v===v));$$('.view').forEach(s=>s.classList.toggle('active',s.id===v));
  if(v==='dash')renderDash();if(v==='quest')renderQuest();if(v==='flow'){if(!F)renderFlowHome();}if(v==='learn'){flow=null;renderUnits();}if(v==='practice'){if(!flow)renderPracticeHome();}if(v==='badges')renderBadges();}
$$('nav.tabs button').forEach(b=>b.onclick=()=>switchView(b.dataset.v));
$('#dashFlow').onclick=startFlow;
$('#kpiBadges').onclick=()=>switchView('badges');
$('#helloQuest').onclick=()=>switchView('quest');
$('#sndChip').onclick=toggleSnd;
$('#sndChip').textContent=SND.on?'🔊':'🔇';
document.addEventListener('keydown',e=>{if(!document.getElementById('flow').classList.contains('active'))return;if(window.__flowKey)window.__flowKey(e);});
$('#checkinBtn').onclick=()=>{markActive();checkBadges();save();renderHeader();renderQuest();renderDash();toast('✓ Checked in! 🔥 '+S.streak);};
$('#resetBtn').onclick=()=>{if(confirm('Erase all progress? This also clears your cloud save.')){localStorage.removeItem(KEY);S=blank();skipMergeOnce=true;save();renderAll();switchView('dash');}};

function renderAll(){renderHeader();renderDash();renderQuest();renderUnits();renderBadges();}
if('speechSynthesis' in window)speechSynthesis.onvoiceschanged=()=>{};

/* ===================== ACCOUNTS & CLOUD SYNC (Firebase) ===================== */
const FB_CFG={apiKey:"AIzaSyAlMK7LmTg4hZ2ESxSeOSntPuCpw5ewOto",authDomain:"turkce-quest.firebaseapp.com",
  projectId:"turkce-quest",storageBucket:"turkce-quest.firebasestorage.app",
  messagingSenderId:"733118751053",appId:"1:733118751053:web:025fc85604072ae36ad704"};
let auth=null,db=null,pushTimer=null,lastPushed='';
function setSync(t){const c=$('#syncChip');if(c){c.style.display='';$('#syncTxt').textContent=t;}}
function showAuth(){$('#authScreen').style.display='grid';}
function hideAuth(){$('#authScreen').style.display='none';}
function bootApp(){ensureQuest();checkBadges();renderAll();}
function bootGuest(){KEY=KEY_BASE;S=load();localStorage.setItem('tq_mode','guest');window.TQ_NAME=null;
  $('#userChip').style.display='none';setSync('local only');hideAuth();bootApp();}

/* merge two states — keeps the best of both devices, never loses progress */
function mergeStates(a,b){
  if(!a)return b;if(!b)return a;
  const m=blank(),t=todayStr();
  ['xp','bestStreak','streak','freezes','diff','lessons','reviews','quiz','questsDone','listen','speak','chests','cultureN','boostUntil','writes','reads']
    .forEach(k=>m[k]=Math.max(a[k]||0,b[k]||0));
  m.suffixN=Math.max(a.suffixN||0,b.suffixN||0);
  m.read=Object.assign({},a.read||{},b.read||{});
  m.certs=Object.assign({},a.certs||{},b.certs||{});
  const wid=weekId();
  m.week={id:wid,xp:Math.max((a.week&&a.week.id===wid)?a.week.xp:0,(b.week&&b.week.id===wid)?b.week.xp:0)};
  m.dlg=Object.assign({},a.dlg||{},b.dlg||{});
  m.lastActive=((a.lastActive||'')>(b.lastActive||''))?a.lastActive:b.lastActive;
  const cids=new Set([...Object.keys(a.cards||{}),...Object.keys(b.cards||{})]);
  cids.forEach(id=>{const ca=(a.cards||{})[id],cb=(b.cards||{})[id];
    if(!ca){m.cards[id]=cb;return;}if(!cb){m.cards[id]=ca;return;}
    const w=(ca.reps||0)>=(cb.reps||0)?ca:cb;
    m.cards[id]=Object.assign({},w,{learned:!!(ca.learned||cb.learned)});});
  const uids=new Set([...Object.keys(a.units||{}),...Object.keys(b.units||{})]);
  uids.forEach(id=>{const ua=(a.units||{})[id]||{},ub=(b.units||{})[id]||{};
    m.units[id]={complete:!!(ua.complete||ub.complete),lessonDone:!!(ua.lessonDone||ub.lessonDone)};});
  Object.keys(m.skills).forEach(k=>m.skills[k]=Math.max(((a.skills||{})[k])||0,((b.skills||{})[k])||0));
  new Set([...Object.keys(a.xpLog||{}),...Object.keys(b.xpLog||{})])
    .forEach(d=>m.xpLog[d]=Math.max(((a.xpLog||{})[d])||0,((b.xpLog||{})[d])||0));
  const qa=(a.quest&&a.quest.date===t)?a.quest:null,qb=(b.quest&&b.quest.date===t)?b.quest:null;
  if(qa&&qb)m.quest={date:t,newWords:Math.max(qa.newWords||0,qb.newWords||0),reviews:Math.max(qa.reviews||0,qb.reviews||0),
    lesson:!!(qa.lesson||qb.lesson),listen:!!(qa.listen||qb.listen),claimed:!!(qa.claimed||qb.claimed)};
  else m.quest=qa||qb||blank().quest;
  m.badges=[...new Set([...(a.badges||[]),...(b.badges||[])])];
  return m;
}
let skipMergeOnce=false;
function pushCloud(force){
  if(!auth||!auth.currentUser)return;
  clearTimeout(pushTimer);
  pushTimer=setTimeout(async()=>{try{
    let payload=JSON.stringify(S);if(!force&&payload===lastPushed)return;
    if(skipMergeOnce){skipMergeOnce=false;}
    else if(Date.now()-lastPullAt>30000){ // merge with cloud first (throttled: max 1 read / 30s)
      const cloud=await pullCloud();
      if(cloud){const m=mergeStates(cloud,S);const mp=JSON.stringify(m);
        if(mp!==payload){S=m;localStorage.setItem(KEY,mp);payload=mp;renderAll();}}
    }
    await db.collection('users').doc(auth.currentUser.uid).set({
      state:payload,xp:S.xp||0,updatedAt:firebase.firestore.FieldValue.serverTimestamp(),
      name:auth.currentUser.displayName||'',email:auth.currentUser.email||''});
    lastPushed=payload;setSync('synced ✓');
  }catch(e){setSync('offline');}},force?150:1200);
}
let lastPullAt=0;
async function pullCloud(){
  if(!auth||!auth.currentUser)return null;
  try{const d=await db.collection('users').doc(auth.currentUser.uid).get();
    lastPullAt=Date.now();
    if(d.exists&&d.data().state)return Object.assign(blank(),JSON.parse(d.data().state));}
  catch(e){setSync('offline');}
  return null;
}
function signInGoogle(){
  const p=new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(p).catch(e=>{
    if(e&&(e.code==='auth/popup-blocked'||e.code==='auth/operation-not-supported-in-this-environment'))auth.signInWithRedirect(p);
    else if(e&&e.code!=='auth/popup-closed-by-user'&&e.code!=='auth/cancelled-popup-request')alert('Sign-in failed: '+(e.message||e));
  });
}
if(typeof firebase!=='undefined'){
  firebase.initializeApp(FB_CFG);auth=firebase.auth();db=firebase.firestore();
  setSync('…');
  auth.getRedirectResult().catch(()=>{});
  auth.onAuthStateChanged(async user=>{
    if(user){
      KEY=KEY_BASE+'_'+user.uid;localStorage.setItem('tq_mode','user');
      setSync('syncing…');
      const local=loadRaw(KEY),guest=loadRaw(KEY_BASE),cloud=await pullCloud();
      S=mergeStates(mergeStates(cloud,local),guest)||blank();
      if(guest)localStorage.removeItem(KEY_BASE);
      localStorage.setItem(KEY,JSON.stringify(S));pushCloud(true);
      $('#userChip').style.display='';
      $('#userChip').title=user.email||'';
      window.TQ_NAME=(user.displayName||'').split(' ')[0]||null;
      $('#uName').textContent=(user.displayName||user.email||'me').split(' ')[0];
      const av=$('#uAvatar');if(user.photoURL){av.src=user.photoURL;av.style.display='';}else av.style.display='none';
      hideAuth();bootApp();
    }else{
      if(localStorage.getItem('tq_mode')==='guest')bootGuest();else showAuth();
    }
  });
  $('#gSignIn').onclick=signInGoogle;
  $('#guestBtn').onclick=bootGuest;
  $('#signOut').onclick=()=>{localStorage.removeItem('tq_mode');auth.signOut().then(()=>location.reload());};
  $('#syncChip').onclick=async()=>{if(!auth.currentUser){toast('Sign in to sync');return;}
    setSync('syncing…');const cloud=await pullCloud();S=mergeStates(cloud,S)||S;
    localStorage.setItem(KEY,JSON.stringify(S));renderAll();pushCloud(true);toast('☁️ Synced');};
  window.addEventListener('visibilitychange',async()=>{
    if(document.visibilityState==='hidden'){pushCloud(true);return;}
    /* auto-pull whenever the app regains focus — keeps devices converged */
    if(document.visibilityState==='visible'&&auth.currentUser){
      setSync('syncing…');
      const cloud=await pullCloud();
      if(cloud){const m=mergeStates(cloud,S);
        if(JSON.stringify(m)!==JSON.stringify(S)){S=m;localStorage.setItem(KEY,JSON.stringify(S));renderAll();toast('☁️ Updated from your other device');}}
      setSync('synced ✓');
    }
  });
}else{
  bootGuest();
}
