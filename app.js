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

/* ===== 📕 Yedi İklim A1 book vocabulary pack — the full word bank ===== */
{id:'x1',tr:'Salı',en:'Tuesday',cat:'Time',skill:'Vocabulary',ex:'Salı günü ders var.'},
{id:'x2',tr:'Çarşamba',en:'Wednesday',cat:'Time',skill:'Vocabulary',ex:'Çarşamba günü sinemaya gidiyoruz.'},
{id:'x3',tr:'Perşembe',en:'Thursday',cat:'Time',skill:'Vocabulary',ex:'Perşembe akşamı boş musun?'},
{id:'x4',tr:'Cumartesi',en:'Saturday',cat:'Time',skill:'Vocabulary',ex:'Cumartesi günü çalışmıyorum.'},
{id:'x5',tr:'Pazar',en:'Sunday / market',cat:'Time',skill:'Vocabulary',ex:'Pazar günü aile ile kahvaltı yapıyoruz.'},
{id:'x6',tr:'Ocak',en:'January',cat:'Time',skill:'Vocabulary',ex:'Ocak ayında kar yağıyor.'},
{id:'x7',tr:'Şubat',en:'February',cat:'Time',skill:'Vocabulary',ex:'Şubat en kısa aydır.'},
{id:'x8',tr:'Mart',en:'March',cat:'Time',skill:'Vocabulary',ex:'Mart ayında bahar başlıyor.'},
{id:'x9',tr:'Nisan',en:'April',cat:'Time',skill:'Vocabulary',ex:'Nisan yağmurları çok güzel.'},
{id:'x10',tr:'Mayıs',en:'May',cat:'Time',skill:'Vocabulary',ex:'Mayıs ayında hava ılık.'},
{id:'x11',tr:'Haziran',en:'June',cat:'Time',skill:'Vocabulary',ex:'Haziranda okullar kapanıyor.'},
{id:'x12',tr:'Temmuz',en:'July',cat:'Time',skill:'Vocabulary',ex:'Temmuzda deniz çok sıcak.'},
{id:'x13',tr:'Ağustos',en:'August',cat:'Time',skill:'Vocabulary',ex:'Ağustosta tatile gidiyoruz.'},
{id:'x14',tr:'Eylül',en:'September',cat:'Time',skill:'Vocabulary',ex:'Eylülde okul başlıyor.'},
{id:'x15',tr:'Ekim',en:'October',cat:'Time',skill:'Vocabulary',ex:'Ekimde yapraklar dökülüyor.'},
{id:'x16',tr:'Kasım',en:'November',cat:'Time',skill:'Vocabulary',ex:'Kasımda hava soğuyor.'},
{id:'x17',tr:'Aralık',en:'December',cat:'Time',skill:'Vocabulary',ex:'Aralık yılın son ayıdır.'},
{id:'x18',tr:'İlkbahar',en:'Spring',cat:'Weather',skill:'Vocabulary',ex:'İlkbaharda çiçekler açıyor.'},
{id:'x19',tr:'Sonbahar',en:'Autumn',cat:'Weather',skill:'Vocabulary',ex:'Sonbaharda hava serin.'},
{id:'x20',tr:'Otuz',en:'Thirty (30)',cat:'Numbers',skill:'Vocabulary',ex:'Otuz gün bir ay eder.'},
{id:'x21',tr:'Kırk',en:'Forty (40)',cat:'Numbers',skill:'Vocabulary',ex:'Kırk dakika bekledim.'},
{id:'x22',tr:'Elli',en:'Fifty (50)',cat:'Numbers',skill:'Vocabulary',ex:'Bu kitap elli lira.'},
{id:'x23',tr:'Altmış',en:'Sixty (60)',cat:'Numbers',skill:'Vocabulary',ex:'Bir saat altmış dakikadır.'},
{id:'x24',tr:'Yetmiş',en:'Seventy (70)',cat:'Numbers',skill:'Vocabulary',ex:'Dedem yetmiş yaşında.'},
{id:'x25',tr:'Seksen',en:'Eighty (80)',cat:'Numbers',skill:'Vocabulary',ex:'Seksen kişi geldi.'},
{id:'x26',tr:'Doksan',en:'Ninety (90)',cat:'Numbers',skill:'Vocabulary',ex:'Doksan dakika sürdü.'},
{id:'x27',tr:'Bin',en:'Thousand (1000)',cat:'Numbers',skill:'Vocabulary',ex:'Bin teşekkür!'},
{id:'x28',tr:'Amca',en:'Uncle (paternal)',cat:'Family',skill:'Vocabulary',ex:'Amcam Ankara’da oturuyor.'},
{id:'x29',tr:'Teyze',en:'Aunt (maternal)',cat:'Family',skill:'Vocabulary',ex:'Teyzem çok güzel yemek yapıyor.'},
{id:'x30',tr:'Oğul',en:'Son',cat:'Family',skill:'Vocabulary',ex:'Onların bir oğlu var.'},
{id:'x31',tr:'Kız',en:'Girl / daughter',cat:'Family',skill:'Vocabulary',ex:'Kızım okula gidiyor.'},
{id:'x32',tr:'Kalem',en:'Pen',cat:'School',skill:'Vocabulary',ex:'Kalemim yok, senin var mı?'},
{id:'x33',tr:'Defter',en:'Notebook',cat:'School',skill:'Vocabulary',ex:'Deftere yazıyorum.'},
{id:'x34',tr:'Silgi',en:'Eraser',cat:'School',skill:'Vocabulary',ex:'Silgiyi verir misin?'},
{id:'x35',tr:'Tahta',en:'Board',cat:'School',skill:'Vocabulary',ex:'Öğretmen tahtaya yazıyor.'},
{id:'x36',tr:'Çanta',en:'Bag',cat:'School',skill:'Vocabulary',ex:'Çantam çok ağır.'},
{id:'x37',tr:'Sıra',en:'Desk / queue',cat:'School',skill:'Vocabulary',ex:'Sıra bende!'},
{id:'x38',tr:'Soru',en:'Question',cat:'School',skill:'Vocabulary',ex:'Bir sorum var.'},
{id:'x39',tr:'Cevap',en:'Answer',cat:'School',skill:'Vocabulary',ex:'Cevap çok kolay.'},
{id:'x40',tr:'Kulak',en:'Ear',cat:'Body',skill:'Vocabulary',ex:'Kulağım ağrıyor.'},
{id:'x41',tr:'Burun',en:'Nose',cat:'Body',skill:'Vocabulary',ex:'Burnu kırmızı oldu.'},
{id:'x42',tr:'Ağız',en:'Mouth',cat:'Body',skill:'Vocabulary',ex:'Ağzını aç, lütfen.'},
{id:'x43',tr:'Saç',en:'Hair',cat:'Body',skill:'Vocabulary',ex:'Saçların çok güzel.'},
{id:'x44',tr:'Yüz',en:'Face / hundred',cat:'Body',skill:'Vocabulary',ex:'Yüzünü yıka.'},
{id:'x45',tr:'Parmak',en:'Finger',cat:'Body',skill:'Vocabulary',ex:'On parmağım var.'},
{id:'x46',tr:'Kol',en:'Arm',cat:'Body',skill:'Vocabulary',ex:'Kolum yoruldu.'},
{id:'x47',tr:'Bacak',en:'Leg',cat:'Body',skill:'Vocabulary',ex:'Bacakların uzun.'},
{id:'x48',tr:'Kalp',en:'Heart',cat:'Body',skill:'Vocabulary',ex:'Kalbim hızlı atıyor.'},
{id:'x49',tr:'Koltuk',en:'Armchair / seat',cat:'Home',skill:'Vocabulary',ex:'Koltukta oturuyorum.'},
{id:'x50',tr:'Halı',en:'Carpet',cat:'Home',skill:'Vocabulary',ex:'Halı çok yumuşak.'},
{id:'x51',tr:'Perde',en:'Curtain',cat:'Home',skill:'Vocabulary',ex:'Perdeyi aç, lütfen.'},
{id:'x52',tr:'Buzdolabı',en:'Refrigerator',cat:'Home',skill:'Vocabulary',ex:'Süt buzdolabında.'},
{id:'x53',tr:'Televizyon',en:'Television',cat:'Home',skill:'Vocabulary',ex:'Akşam televizyon izliyoruz.'},
{id:'x54',tr:'Lamba',en:'Lamp',cat:'Home',skill:'Vocabulary',ex:'Lambayı kapat.'},
{id:'x55',tr:'Ayna',en:'Mirror',cat:'Home',skill:'Vocabulary',ex:'Aynaya bakıyorum.'},
{id:'x56',tr:'Dolap',en:'Wardrobe / cupboard',cat:'Home',skill:'Vocabulary',ex:'Elbiseler dolapta.'},
{id:'x57',tr:'Duvar',en:'Wall',cat:'Home',skill:'Vocabulary',ex:'Duvarda bir resim var.'},
{id:'x58',tr:'Merdiven',en:'Stairs',cat:'Home',skill:'Vocabulary',ex:'Merdivenden çık.'},
{id:'x59',tr:'Mor',en:'Purple',cat:'Colors',skill:'Vocabulary',ex:'Mor çiçekler açtı.'},
{id:'x60',tr:'Gri',en:'Grey',cat:'Colors',skill:'Vocabulary',ex:'Gökyüzü gri bugün.'},
{id:'x61',tr:'Lacivert',en:'Navy blue',cat:'Colors',skill:'Vocabulary',ex:'Lacivert bir ceket aldım.'},
{id:'x62',tr:'Meyve',en:'Fruit',cat:'Food',skill:'Vocabulary',ex:'Her gün meyve yiyorum.'},
{id:'x63',tr:'Sebze',en:'Vegetable',cat:'Food',skill:'Vocabulary',ex:'Sebze çok sağlıklı.'},
{id:'x64',tr:'Portakal',en:'Orange (fruit)',cat:'Food',skill:'Vocabulary',ex:'Portakal suyu içer misin?'},
{id:'x65',tr:'Muz',en:'Banana',cat:'Food',skill:'Vocabulary',ex:'Muz sarıdır.'},
{id:'x66',tr:'Üzüm',en:'Grapes',cat:'Food',skill:'Vocabulary',ex:'Üzüm çok tatlı.'},
{id:'x67',tr:'Domates',en:'Tomato',cat:'Food',skill:'Vocabulary',ex:'Salataya domates koy.'},
{id:'x68',tr:'Patates',en:'Potato',cat:'Food',skill:'Vocabulary',ex:'Patates kızartması seviyorum.'},
{id:'x69',tr:'Salata',en:'Salad',cat:'Food',skill:'Vocabulary',ex:'Bir salata, lütfen.'},
{id:'x70',tr:'Pilav',en:'Rice (cooked)',cat:'Food',skill:'Vocabulary',ex:'Pilav ve köfte istiyorum.'},
{id:'x71',tr:'Köfte',en:'Meatballs',cat:'Food',skill:'Vocabulary',ex:'Köfte çok lezzetli.'},
{id:'x72',tr:'Balık',en:'Fish',cat:'Food',skill:'Vocabulary',ex:'Akşam balık yedik.'},
{id:'x73',tr:'Tavuk',en:'Chicken',cat:'Food',skill:'Vocabulary',ex:'Tavuk çorbası içtim.'},
{id:'x74',tr:'Tatlı',en:'Dessert / sweet',cat:'Food',skill:'Vocabulary',ex:'Tatlı ister misiniz?'},
{id:'x75',tr:'Ayran',en:'Ayran (yogurt drink)',cat:'Food',skill:'Vocabulary',ex:'Köftenin yanında ayran iyi gider.'},
{id:'x76',tr:'Zeytin',en:'Olive',cat:'Food',skill:'Vocabulary',ex:'Kahvaltıda zeytin var.'},
{id:'x77',tr:'Bal',en:'Honey',cat:'Food',skill:'Vocabulary',ex:'Bal ve tereyağı aldım.'},
{id:'x78',tr:'Tuz',en:'Salt',cat:'Food',skill:'Vocabulary',ex:'Çorbada tuz az.'},
{id:'x79',tr:'Hemşire',en:'Nurse',cat:'Work',skill:'Vocabulary',ex:'Hemşire hastaya bakıyor.'},
{id:'x80',tr:'Polis',en:'Police officer',cat:'Work',skill:'Vocabulary',ex:'Polis trafiği yönetiyor.'},
{id:'x81',tr:'Avukat',en:'Lawyer',cat:'Work',skill:'Vocabulary',ex:'Ablam avukat.'},
{id:'x82',tr:'Aşçı',en:'Cook / chef',cat:'Work',skill:'Vocabulary',ex:'Aşçı harika yemekler yapıyor.'},
{id:'x83',tr:'Garson',en:'Waiter',cat:'Work',skill:'Vocabulary',ex:'Garson menüyü getirdi.'},
{id:'x84',tr:'Şoför',en:'Driver',cat:'Work',skill:'Vocabulary',ex:'Şoför çok hızlı sürüyor.'},
{id:'x85',tr:'Pilot',en:'Pilot',cat:'Work',skill:'Vocabulary',ex:'Pilot uçağı kullanıyor.'},
{id:'x86',tr:'Berber',en:'Barber',cat:'Work',skill:'Vocabulary',ex:'Berbere gidiyorum.'},
{id:'x87',tr:'Çiftçi',en:'Farmer',cat:'Work',skill:'Vocabulary',ex:'Çiftçi tarlada çalışıyor.'},
{id:'x88',tr:'Mimar',en:'Architect',cat:'Work',skill:'Vocabulary',ex:'Mimar yeni bir bina çiziyor.'},
{id:'x89',tr:'Futbolcu',en:'Footballer',cat:'Work',skill:'Vocabulary',ex:'Futbolcu gol attı.'},
{id:'x90',tr:'Vapur',en:'Ferry',cat:'Transport',skill:'Vocabulary',ex:'Vapurla karşıya geçiyoruz.'},
{id:'x91',tr:'Tramvay',en:'Tram',cat:'Transport',skill:'Vocabulary',ex:'Tramvay durağı nerede?'},
{id:'x92',tr:'Bisiklet',en:'Bicycle',cat:'Transport',skill:'Vocabulary',ex:'Bisikletle işe gidiyorum.'},
{id:'x93',tr:'Motosiklet',en:'Motorcycle',cat:'Transport',skill:'Vocabulary',ex:'Motosiklet çok hızlı.'},
{id:'x94',tr:'Dolmuş',en:'Shared taxi (dolmuş)',cat:'Transport',skill:'Vocabulary',ex:'Dolmuşla beş dakika sürüyor.'},
{id:'x95',tr:'Durak',en:'Stop (bus/tram)',cat:'Transport',skill:'Vocabulary',ex:'Bir sonraki durakta iniyorum.'},
{id:'x96',tr:'İstasyon',en:'Station',cat:'Transport',skill:'Vocabulary',ex:'Tren istasyonu uzak mı?'},
{id:'x97',tr:'Havalimanı',en:'Airport',cat:'Transport',skill:'Vocabulary',ex:'Havalimanına taksiyle gittik.'},
{id:'x98',tr:'Bulutlu',en:'Cloudy',cat:'Weather',skill:'Vocabulary',ex:'Bugün hava bulutlu.'},
{id:'x99',tr:'Güneşli',en:'Sunny',cat:'Weather',skill:'Vocabulary',ex:'Güneşli günleri seviyorum.'},
{id:'x100',tr:'Fırtına',en:'Storm',cat:'Weather',skill:'Vocabulary',ex:'Dün gece fırtına vardı.'},
{id:'x101',tr:'Sisli',en:'Foggy',cat:'Weather',skill:'Vocabulary',ex:'Sabah hava sisliydi.'},
{id:'x102',tr:'Derece',en:'Degree',cat:'Weather',skill:'Vocabulary',ex:'Bugün hava yirmi derece.'},
{id:'x103',tr:'Kuzey',en:'North',cat:'Directions',skill:'Vocabulary',ex:'Karadeniz kuzeyde.'},
{id:'x104',tr:'Güney',en:'South',cat:'Directions',skill:'Vocabulary',ex:'Antalya güneyde.'},
{id:'x105',tr:'Doğu',en:'East',cat:'Directions',skill:'Vocabulary',ex:'Güneş doğudan doğar.'},
{id:'x106',tr:'Batı',en:'West',cat:'Directions',skill:'Vocabulary',ex:'İzmir batıda.'},
{id:'x107',tr:'Karşı',en:'Opposite / across',cat:'Directions',skill:'Vocabulary',ex:'Eczane okulun karşısında.'},
{id:'x108',tr:'İleri',en:'Forward / ahead',cat:'Directions',skill:'Vocabulary',ex:'Biraz ileri git.'},
{id:'x109',tr:'Geri',en:'Back / backward',cat:'Directions',skill:'Vocabulary',ex:'Geri dön, lütfen.'},
{id:'x110',tr:'Dakika',en:'Minute',cat:'Time',skill:'Vocabulary',ex:'Beş dakika bekle.'},
{id:'x111',tr:'Saniye',en:'Second (time)',cat:'Time',skill:'Vocabulary',ex:'Bir saniye, lütfen!'},
{id:'x112',tr:'Öğle',en:'Noon',cat:'Time',skill:'Vocabulary',ex:'Öğle yemeği saat birde.'},
{id:'x113',tr:'Gece',en:'Night',cat:'Time',skill:'Vocabulary',ex:'Gece geç yattım.'},
{id:'x114',tr:'Şimdi',en:'Now',cat:'Time',skill:'Vocabulary',ex:'Şimdi ders çalışıyorum.'},
{id:'x115',tr:'Erken',en:'Early',cat:'Time',skill:'Vocabulary',ex:'Sabah erken kalktım.'},
{id:'x116',tr:'Geç',en:'Late',cat:'Time',skill:'Vocabulary',ex:'Özür dilerim, geç kaldım.'},
{id:'x117',tr:'Mesaj',en:'Message',cat:'Media',skill:'Vocabulary',ex:'Sana bir mesaj gönderdim.'},
{id:'x118',tr:'Numara',en:'Number (phone)',cat:'Media',skill:'Vocabulary',ex:'Telefon numaran kaç?'},
{id:'x119',tr:'Mektup',en:'Letter (mail)',cat:'Media',skill:'Vocabulary',ex:'Dedeme mektup yazdım.'},
{id:'x120',tr:'Adres',en:'Address',cat:'City',skill:'Vocabulary',ex:'Adresiniz nedir?'},
{id:'x121',tr:'E-posta',en:'E-mail',cat:'Media',skill:'Vocabulary',ex:'E-postanı kontrol et.'},
{id:'x122',tr:'Hediye',en:'Gift',cat:'Holiday',skill:'Vocabulary',ex:'Anneme hediye aldım.'},
{id:'x123',tr:'Misafir',en:'Guest',cat:'Holiday',skill:'Vocabulary',ex:'Bu akşam misafir geliyor.'},
{id:'x124',tr:'Ziyaret',en:'Visit',cat:'Holiday',skill:'Vocabulary',ex:'Bayramda dedemi ziyaret ediyoruz.'},
{id:'x125',tr:'Kutlamak',en:'To celebrate',cat:'Holiday',skill:'Grammar',ex:'Bayramı ailece kutluyoruz.'},
{id:'x126',tr:'Vermek',en:'To give',cat:'Verbs',skill:'Grammar',ex:'Kitabı bana ver.'},
{id:'x127',tr:'Görmek',en:'To see',cat:'Verbs',skill:'Grammar',ex:'Seni görmek çok güzel.'},
{id:'x128',tr:'Bilmek',en:'To know',cat:'Verbs',skill:'Grammar',ex:'Cevabı bilmiyorum.'},
{id:'x129',tr:'Bakmak',en:'To look',cat:'Verbs',skill:'Grammar',ex:'Tahtaya bak, lütfen.'},
{id:'x130',tr:'Dinlemek',en:'To listen',cat:'Verbs',skill:'Grammar',ex:'Müzik dinliyorum.'},
{id:'x131',tr:'İzlemek',en:'To watch',cat:'Verbs',skill:'Grammar',ex:'Film izlemek istiyorum.'},
{id:'x132',tr:'Oturmak',en:'To sit / to live',cat:'Verbs',skill:'Grammar',ex:'Nerede oturuyorsunuz?'},
{id:'x133',tr:'Kalkmak',en:'To get up',cat:'Verbs',skill:'Grammar',ex:'Her sabah yedide kalkıyorum.'},
{id:'x134',tr:'Uyumak',en:'To sleep',cat:'Verbs',skill:'Grammar',ex:'Bebek şimdi uyuyor.'},
{id:'x135',tr:'Uyanmak',en:'To wake up',cat:'Verbs',skill:'Grammar',ex:'Sabah erken uyanıyorum.'},
{id:'x136',tr:'Açmak',en:'To open / turn on',cat:'Verbs',skill:'Grammar',ex:'Pencereyi açar mısın?'},
{id:'x137',tr:'Kapatmak',en:'To close / turn off',cat:'Verbs',skill:'Grammar',ex:'Işığı kapat, lütfen.'},
{id:'x138',tr:'Başlamak',en:'To begin',cat:'Verbs',skill:'Grammar',ex:'Ders dokuzda başlıyor.'},
{id:'x139',tr:'Beklemek',en:'To wait',cat:'Verbs',skill:'Grammar',ex:'Beni durakta bekle.'},
{id:'x140',tr:'Sormak',en:'To ask',cat:'Verbs',skill:'Grammar',ex:'Öğretmene soru soruyorum.'},
{id:'x141',tr:'Yürümek',en:'To walk',cat:'Verbs',skill:'Grammar',ex:'Parkta yürümeyi seviyorum.'},
{id:'x142',tr:'Koşmak',en:'To run',cat:'Verbs',skill:'Grammar',ex:'Her sabah koşuyorum.'},
{id:'x143',tr:'Oynamak',en:'To play',cat:'Verbs',skill:'Grammar',ex:'Çocuklar bahçede oynuyor.'},
{id:'x144',tr:'Yüzmek',en:'To swim',cat:'Verbs',skill:'Grammar',ex:'Denizde yüzmek harika.'},
{id:'x145',tr:'Giymek',en:'To wear',cat:'Verbs',skill:'Grammar',ex:'Bugün mavi gömlek giydim.'},
{id:'x146',tr:'Ödemek',en:'To pay',cat:'Verbs',skill:'Grammar',ex:'Hesabı ben ödüyorum.'},
{id:'x147',tr:'İnmek',en:'To get off / go down',cat:'Verbs',skill:'Grammar',ex:'Bu durakta iniyorum.'},
{id:'x148',tr:'Yıkamak',en:'To wash',cat:'Verbs',skill:'Grammar',ex:'Elini yıka, yemek hazır.'},
{id:'x149',tr:'Temizlemek',en:'To clean',cat:'Verbs',skill:'Grammar',ex:'Odamı temizliyorum.'},
{id:'x150',tr:'Aramak',en:'To call / to search',cat:'Verbs',skill:'Grammar',ex:'Seni akşam ararım.'},
{id:'x151',tr:'Yavaş',en:'Slow',cat:'Adjectives',skill:'Vocabulary',ex:'Yavaş konuş, lütfen.'},
{id:'x152',tr:'Hızlı',en:'Fast',cat:'Adjectives',skill:'Vocabulary',ex:'Tren çok hızlı gidiyor.'},
{id:'x153',tr:'Boş',en:'Empty / free',cat:'Adjectives',skill:'Vocabulary',ex:'Bu koltuk boş mu?'},
{id:'x154',tr:'Dolu',en:'Full',cat:'Adjectives',skill:'Vocabulary',ex:'Otobüs çok dolu.'},
{id:'x155',tr:'Açık',en:'Open / light (color)',cat:'Adjectives',skill:'Vocabulary',ex:'Market açık mı?'},
{id:'x156',tr:'Kapalı',en:'Closed',cat:'Adjectives',skill:'Vocabulary',ex:'Pazar günü banka kapalı.'},
{id:'x157',tr:'Temiz',en:'Clean',cat:'Adjectives',skill:'Vocabulary',ex:'Oda çok temiz.'},
{id:'x158',tr:'Kirli',en:'Dirty',cat:'Adjectives',skill:'Vocabulary',ex:'Elbiseler kirli.'},
{id:'x159',tr:'Genç',en:'Young',cat:'Adjectives',skill:'Vocabulary',ex:'O çok genç görünüyor.'},
{id:'x160',tr:'Yaşlı',en:'Old (person)',cat:'Adjectives',skill:'Vocabulary',ex:'Yaşlı adama yardım ettim.'},
{id:'x161',tr:'Şişman',en:'Fat / overweight',cat:'Adjectives',skill:'Vocabulary',ex:'Kedimiz biraz şişman.'},
{id:'x162',tr:'İnce',en:'Thin / slim',cat:'Adjectives',skill:'Vocabulary',ex:'İnce bir kitap okuyorum.'},
{id:'x163',tr:'Meşgul',en:'Busy',cat:'Adjectives',skill:'Vocabulary',ex:'Bugün çok meşgulüm.'},
{id:'x164',tr:'Hazır',en:'Ready',cat:'Adjectives',skill:'Vocabulary',ex:'Yemek hazır!'},
{id:'x165',tr:'Aç',en:'Hungry',cat:'Adjectives',skill:'Vocabulary',ex:'Çok açım, hadi yiyelim.'},
{id:'x166',tr:'Tok',en:'Full (not hungry)',cat:'Adjectives',skill:'Vocabulary',ex:'Teşekkürler, tokum.'},
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
{id:'lex5',ico:'⛰️',name:'Dağcı',desc:'Pass master exam 5',test:s=>s.lexBest>=5},
{id:'lex10',ico:'🐺',name:'Bozkurt',desc:'Pass the wolf exam (E10)',test:s=>s.lexBest>=10},
{id:'blitz500',ico:'⚡',name:'Şimşek',desc:'Blitz score 500+',test:s=>s.blitzBest>=500},
{id:'blitz1500',ico:'🌩️',name:'Fırtına',desc:'Blitz score 1500+',test:s=>s.blitzBest>=1500},
{id:'echo500',ico:'🎧',name:'Yankı',desc:'Echo Blitz 500+',test:s=>s.echoBest>=500},
{id:'storm500',ico:'⌨️',name:'Daktilo',desc:'Yazı Fırtınası 500+',test:s=>s.stormBest>=500},
{id:'okul',ico:'🏫',name:'Dil Okulu',desc:'All 14 grammar lessons',test:s=>s.glDone>=14},
{id:'plan28',ico:'📅',name:'Dört Hafta',desc:'Finish the 28-day A1 plan',test:s=>s.planDone>=28},
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

/* ===== 🎓 Master Exam Hall — 10 exams, A0 → C2. The hoca shows no mercy: 8/10. ===== */
const LEXAMS=[
{id:'E1',name:'İlk Adım',cefr:'A0',ico:'🌱',desc:'Absolute basics — can you say hello?',qs:[
 {q:'“Merhaba” means…',opts:['Hello','Goodbye','Please','Sorry'],a:'Hello'},
 {q:'“Teşekkür ederim” means…',opts:['Excuse me','Thank you','Good night','Welcome'],a:'Thank you'},
 {q:'“Su” is…',opts:['Bread','Milk','Water','Tea'],a:'Water'},
 {q:'“Evet” means…',opts:['No','Yes','Maybe','Never'],a:'Yes'},
 {q:'The morning greeting is…',opts:['İyi geceler','Günaydın','Hoşça kal','Güle güle'],a:'Günaydın'},
 {q:'“Bir, iki, üç” = …',opts:['One, two, three','Two, four, six','First, last, next','Big, small, fast'],a:'One, two, three'},
 {q:'“Ekmek” is…',opts:['Cheese','Egg','Bread','Apple'],a:'Bread'},
 {q:'“Nasılsın?” asks…',opts:['Where are you?','How are you?','Who are you?','What time is it?'],a:'How are you?'},
 {q:'“Anne” is…',opts:['Father','Sister','Mother','Aunt'],a:'Mother'},
 {q:'The person LEAVING says…',opts:['Güle güle','Hoşça kal','Buyurun','Efendim'],a:'Hoşça kal'}]},
{id:'E2',name:'Temel',cefr:'A1',ico:'🍃',desc:'Core survival Turkish',qs:[
 {q:'Ben öğretmen___ (I am a teacher)',opts:['-im','-sin','-iz','-ler'],a:'-im'},
 {q:'Plural of “kitap”:',opts:['kitapler','kitaplar','kitapın','kitaplı'],a:'kitaplar'},
 {q:'“Nerelisin?” asks about your…',opts:['age','job','origin','name'],a:'origin'},
 {q:'Çay ___ (I am drinking tea)',opts:['içiyorum','yiyorum','gidiyorum','istiyorsun'],a:'içiyorum'},
 {q:'“Okula gidiyorum” = …',opts:['I came from school','I am going to school','I like school','School is far'],a:'I am going to school'},
 {q:'Opposite of “büyük”:',opts:['uzun','yeni','küçük','güzel'],a:'küçük'},
 {q:'“Saat kaç?” = …',opts:['How much is it?','What time is it?','How old are you?','Which day is it?'],a:'What time is it?'},
 {q:'Correct form: two breads =',opts:['iki ekmekler','ikiler ekmek','iki ekmek','ekmek iki'],a:'iki ekmek'},
 {q:'“Param yok” means…',opts:['I have money','I have no money','Money is here','Expensive'],a:'I have no money'},
 {q:'“Hava çok güzel” = …',opts:['The food is great','The weather is very nice','The house is big','It is very cold'],a:'The weather is very nice'}]},
{id:'E3',name:'Gelişen',cefr:'A1+',ico:'🌿',desc:'Cases and the present tense — harmony is law',qs:[
 {q:'“okul” + locative = …',opts:['okulde','okulda','okulte','okulla'],a:'okulda'},
 {q:'“kitap” + locative = … (watch the consonant!)',opts:['kitapda','kitapta','kitabda','kitapde'],a:'kitapta'},
 {q:'“ev” + dative (to the house) = …',opts:['evde','eve','evi','evden'],a:'eve'},
 {q:'Dün sinemaya ___ (gitmek, ben)',opts:['gittim','gidiyorum','giderim','gitmiş'],a:'gittim'},
 {q:'“Elmayı yedim” — the -yı shows the apple is…',opts:['any apple','a specific apple','many apples','a small apple'],a:'a specific apple'},
 {q:'“Annemin arabası” = …',opts:['my mother and the car','my mother’s car','the car’s mother','to my mother by car'],a:'my mother’s car'},
 {q:'Negative: “I am not coming” =',opts:['gelmiyorum','gelmedim','gelmem','gelmeyeceğim'],a:'gelmiyorum'},
 {q:'Question form: “Are you coming?” =',opts:['Geliyorsun mu?','Geliyor musun?','Mi geliyorsun?','Geliyorsun değil?'],a:'Geliyor musun?'},
 {q:'“benden” means…',opts:['to me','with me','from me','for me'],a:'from me'},
 {q:'“Kardeşim yok” = …',opts:['My sibling is away','I have no sibling','My sibling is young','I want a sibling'],a:'I have no sibling'}]},
{id:'E4',name:'Yolcu',cefr:'A2',ico:'🌳',desc:'Past, future, comparisons — the traveller’s kit',qs:[
 {q:'Yarın ___ (gelmek, ben — future)',opts:['geldim','geliyorum','geleceğim','gelirim'],a:'geleceğim'},
 {q:'“Yağmur yağarsa pikniğe gitmeyiz” = …',opts:['When it rained we left','If it rains we won’t go','Because it rains we go','It never rains'],a:'If it rains we won’t go'},
 {q:'“daha hızlı” = …',opts:['fastest','faster','very fast','too fast'],a:'faster'},
 {q:'“the most beautiful” =',opts:['çok güzel','daha güzel','en güzel','güzelce'],a:'en güzel'},
 {q:'Polite request: “Would you open the window?” =',opts:['Pencereyi aç!','Pencereyi açar mısınız?','Pencere açık mı?','Pencereyi açtım mı?'],a:'Pencereyi açar mısınız?'},
 {q:'“Çalışırken müzik dinlerim” — “-ken” means…',opts:['after','before','while','because'],a:'while'},
 {q:'“birinci” = …',opts:['once','first','one by one','single'],a:'first'},
 {q:'“Hiç İstanbul’a gittin mi?” asks about…',opts:['a plan','an experience','a wish','a habit'],a:'an experience'},
 {q:'“Senin kadar hızlı değilim” = …',opts:['I am faster than you','I am not as fast as you','You are not fast','We are equally slow'],a:'I am not as fast as you'},
 {q:'“alışveriş yapmak” = …',opts:['to cook','to shop','to travel','to work'],a:'to shop'}]},
{id:'E5',name:'Orta',cefr:'B1−',ico:'⛰️',desc:'Hearsay, necessity, regret — the mountain begins',qs:[
 {q:'“Kapı açık kalmış” — the -mış implies…',opts:['I saw it happen','evidently / I found out later','it will happen','I hope it happens'],a:'evidently / I found out later'},
 {q:'“Yüzemiyorum” = …',opts:['I am not swimming','I cannot swim','I will not swim','I never swam'],a:'I cannot swim'},
 {q:'“Gitmem gerekiyor” = …',opts:['I want to go','I have to go','I refuse to go','Let me go'],a:'I have to go'},
 {q:'“Yatmadan önce” = …',opts:['after sleeping','before going to bed','while in bed','instead of sleeping'],a:'before going to bed'},
 {q:'“Yedikten sonra” = …',opts:['before eating','without eating','after eating','while eating'],a:'after eating'},
 {q:'“Ali yarın gelecekmiş” = …',opts:['Ali came yesterday','Apparently Ali will come tomorrow','Ali must come','I saw Ali come'],a:'Apparently Ali will come tomorrow'},
 {q:'“Keşke gelseydin” expresses…',opts:['an order','a regret','a plan','a fear'],a:'a regret'},
 {q:'“Ne çay ne kahve istiyorum” = …',opts:['both tea and coffee','either tea or coffee','neither tea nor coffee','only tea'],a:'neither tea nor coffee'},
 {q:'“Bu ev 1950’de yapıldı” — yapıldı is…',opts:['active','passive','causative','reflexive'],a:'passive'},
 {q:'“üşenmek” means…',opts:['to freeze','to be too lazy to bother','to hurry','to be surprised'],a:'to be too lazy to bother'}]},
{id:'E6',name:'Sağlam',cefr:'B1',ico:'🏔️',desc:'Subordination — where most learners stall',qs:[
 {q:'“Geldiğini biliyorum” = …',opts:['I know that you came','You know I came','I came knowingly','We came together'],a:'I know that you came'},
 {q:'“Elimden geldiği kadar” = …',opts:['out of my hands','as much as I can','from hand to hand','at first hand'],a:'as much as I can'},
 {q:'“yaptırmak” means…',opts:['to do quickly','to have something done','to do again','to undo'],a:'to have something done'},
 {q:'“Yağmura rağmen geldi” = …',opts:['because of the rain','despite the rain','before the rain','if it rains'],a:'despite the rain'},
 {q:'“sanki” = …',opts:['certainly','as if','finally','because'],a:'as if'},
 {q:'“Nerede oturduğunu sordu” = …',opts:['He asked where she lives','He sat where she asked','She asked him to sit','He asked her to stay'],a:'He asked where she lives'},
 {q:'“Koşarak geldi” = …',opts:['he came in order to run','he came (by) running','he ran after coming','he came instead of running'],a:'he came (by) running'},
 {q:'“ya bugün ya da yarın” = …',opts:['neither today nor tomorrow','both today and tomorrow','either today or tomorrow','from today to tomorrow'],a:'either today or tomorrow'},
 {q:'You say “Kolay gelsin” to someone who is…',opts:['eating','working','sleeping','leaving'],a:'working'},
 {q:'“Çocuk bile anladı” — “bile” = …',opts:['only','even','almost','again'],a:'even'}]},
{id:'E7',name:'İleri',cefr:'B2',ico:'🦅',desc:'Idioms and fine structure — the eagle’s air',qs:[
 {q:'“Uyuyormuş gibi yapıyor” = …',opts:['he is sleeping deeply','he is pretending to sleep','he just woke up','he wants to sleep'],a:'he is pretending to sleep'},
 {q:'“görüşmek” differs from “görmek” because it is…',opts:['passive','reciprocal (each other)','causative','negative'],a:'reciprocal (each other)'},
 {q:'“Gelince haber ver” = …',opts:['let me know when you arrive','give news before coming','don’t come without news','he arrived with news'],a:'let me know when you arrive'},
 {q:'“yapılabilir” = …',opts:['it was done','it can be done','it must be done','it is being done'],a:'it can be done'},
 {q:'“Etekleri zil çalıyor” means she is…',opts:['very angry','overjoyed','in a hurry','wearing a costume'],a:'overjoyed'},
 {q:'“üstesinden gelmek” = …',opts:['to come from above','to overcome','to surrender','to climb'],a:'to overcome'},
 {q:'Active, attentive hearing is…',opts:['duymak','işitmek','dinlemek','seslenmek'],a:'dinlemek'},
 {q:'“Geç kaldığı için özür diledi” — “-DIğI için” = …',opts:['although','because','as soon as','unless'],a:'because'},
 {q:'“göz kulak olmak” = …',opts:['to gossip','to keep an eye on','to eavesdrop','to ignore'],a:'to keep an eye on'},
 {q:'The formal verb for politely requesting is…',opts:['rica etmek','emretmek','bağırmak','dilemek'],a:'rica etmek'}]},
{id:'E8',name:'Çok İleri',cefr:'C1',ico:'🔥',desc:'Nuance, litotes, rhetoric — feel the fire',qs:[
 {q:'“Pireyi deve yapmak” = …',opts:['to work very hard','to make a mountain out of a molehill','to be very patient','to act quickly'],a:'to make a mountain out of a molehill'},
 {q:'“âdeta” = …',opts:['rarely','virtually / as if','suddenly','openly'],a:'virtually / as if'},
 {q:'“Ölürcesine korktu” — “-cesine” = …',opts:['because he died','as if dying','after dying','instead of dying'],a:'as if dying'},
 {q:'“nitekim” = …',opts:['however','indeed / as a matter of fact','otherwise','meanwhile'],a:'indeed / as a matter of fact'},
 {q:'“tabir caizse” = …',opts:['strictly speaking','so to speak','in writing','word for word'],a:'so to speak'},
 {q:'“Yok değil” actually means…',opts:['there is none','there is, actually','it is forbidden','it disappeared'],a:'there is, actually'},
 {q:'“gönül koymak” = …',opts:['to fall in love','to be quietly hurt by someone','to encourage','to promise'],a:'to be quietly hurt by someone'},
 {q:'“Damlaya damlaya göl olur” teaches…',opts:['haste makes waste','small steady gains accumulate','still waters run deep','don’t cry over spilt milk'],a:'small steady gains accumulate'},
 {q:'“kaçınılmaz” = …',opts:['avoidable','inevitable','invisible','unforgivable'],a:'inevitable'},
 {q:'“Görmüşçesine anlattı” = …',opts:['he told it as if he had seen it','he saw it while telling','he told it after seeing','he refused to tell'],a:'he told it as if he had seen it'}]},
{id:'E9',name:'Usta',cefr:'C1+',ico:'🎩',desc:'The master’s chamber — poetry, aorist soul, old words',qs:[
 {q:'Yunus Emre: “Bilmeyen ne bilsin bizi, ___ selam olsun”',opts:['gelenlere','bilenlere','sevenlere','görenlere'],a:'bilenlere'},
 {q:'“Elinden geleni ardına koymamak” = …',opts:['to be generous','to do everything in one’s power (often against someone)','to forget quickly','to hold back politely'],a:'to do everything in one’s power (often against someone)'},
 {q:'“Ağzından bal damlıyor” = …',opts:['he is hungry','he speaks sweetly','he lies often','he is silent'],a:'he speaks sweetly'},
 {q:'Someone answers “Bakarız.” — the aorist here signals…',opts:['a firm promise','a noncommittal “we’ll see”','a past habit','an order'],a:'a noncommittal “we’ll see”'},
 {q:'“müsamaha” = …',opts:['punishment','tolerance / indulgence','curiosity','negotiation'],a:'tolerance / indulgence'},
 {q:'“Söylenip duruyor” = …',opts:['he said it once','he keeps on grumbling','he stopped talking','he speaks formally'],a:'he keeps on grumbling'},
 {q:'“gözden düşmek” = …',opts:['to cry','to fall from favor','to faint','to look down'],a:'to fall from favor'},
 {q:'“binaenaleyh” (old Ottoman register) = …',opts:['nevertheless','consequently','allegedly','formerly'],a:'consequently'},
 {q:'“Dile kolay!” is said about something…',opts:['easy to pronounce','immense — easier said than done','secret','funny'],a:'immense — easier said than done'},
 {q:'“kulak misafiri olmak” = …',opts:['to host a guest','to overhear','to listen to music','to go deaf'],a:'to overhear'}]},
{id:'E10',name:'Süper Güçlü',cefr:'C2',ico:'🐺',desc:'The wolf’s exam. Few pass. Fewer deserve to.',qs:[
 {q:'“müteşekkir” = …',opts:['suspicious','grateful','exhausted','famous'],a:'grateful'},
 {q:'“Ha babam de babam çalıştık” conveys…',opts:['working with one’s father','relentless, strenuous effort','working reluctantly','quick easy work'],a:'relentless, strenuous effort'},
 {q:'“İğneyle kuyu kazmak” = …',opts:['a pointless argument','an extremely laborious task','a medical procedure','a quick fix'],a:'an extremely laborious task'},
 {q:'“nev-i şahsına münhasır” = …',opts:['old-fashioned','one of a kind','selfish','aristocratic'],a:'one of a kind'},
 {q:'“akıl tutulması” = …',opts:['a brilliant idea','a lapse of reason','a memory game','an eclipse'],a:'a lapse of reason'},
 {q:'“O saatte gelmezdim” (not “gelmiyordum”) implies…',opts:['I was not coming at that moment','I wouldn’t have come / I never used to come','I cannot come','I forgot to come'],a:'I wouldn’t have come / I never used to come'},
 {q:'“velhasıl” = …',opts:['in short','at last','by chance','in vain'],a:'in short'},
 {q:'“kifayetsiz” = …',opts:['priceless','insufficient / inadequate','careless','harmless'],a:'insufficient / inadequate'},
 {q:'“Üstüne tüy dikti” = …',opts:['he decorated it','he topped it all off (made it even worse)','he fixed it neatly','he celebrated it'],a:'he topped it all off (made it even worse)'},
 {q:'“Değil mi ki sevdik, ayrılık yoktur” — “değil mi ki” here means…',opts:['isn’t it?','seeing that / since','unless','as though'],a:'seeing that / since'}]},
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

/* ===== 🏫 Dil Okulu — The Grammar School. 14 lessons by a teacher who loves this language. ===== */
const GLESSONS=[
{id:'G1',ico:'🎵',cat:'Suffixes',title:'Vowel Harmony — the master key',
 body:`<p>Turkish suffixes <b>sing in tune</b> with the word they attach to. Learn this once and every suffix in the language becomes predictable.</p>
<table class="gtable"><tr><th>Last vowel of word</th><th>2-way suffix uses</th><th>4-way suffix uses</th></tr>
<tr><td><b>e, i</b> (front)</td><td>e → ev<b>de</b></td><td>i → ev<b>im</b></td></tr>
<tr><td><b>ö, ü</b> (front round)</td><td>e → göz<b>de</b></td><td>ü → Türk<b>üm</b></td></tr>
<tr><td><b>a, ı</b> (back)</td><td>a → okul<b>da</b></td><td>ı → kız<b>ım</b></td></tr>
<tr><td><b>o, u</b> (back round)</td><td>a → yol<b>da</b></td><td>u → doktor<b>um</b></td></tr></table>
<p>💡 <b>Memory trick:</b> the suffix vowel copies the <i>mouth position</i> of the last vowel. Say <i>evde</i> and <i>okulda</i> aloud — feel how each flows.</p>`,
 qs:[{q:'“at school” = okul + …',opts:['okulde','okulda','okuldü','okuldo'],a:'okulda'},
     {q:'“I am Turkish” = Türk + …',opts:['Türküm','Türkım','Türkum','Türkem'],a:'Türküm'},
     {q:'Which vowels are FRONT vowels?',opts:['a, ı, o, u','e, i, ö, ü','a, e, i, o','only e and i'],a:'e, i, ö, ü'}]},
{id:'G2',ico:'👥',cat:'Suffixes',title:'Plural -ler / -lar',
 body:`<p>Two forms only, chosen by harmony: <b>-ler</b> after e/i/ö/ü, <b>-lar</b> after a/ı/o/u.</p>
<table class="gtable"><tr><th>Singular</th><th>Plural</th></tr>
<tr><td>ev (house)</td><td>ev<b>ler</b></td></tr><tr><td>göz (eye)</td><td>göz<b>ler</b></td></tr>
<tr><td>kitap (book)</td><td>kitap<b>lar</b></td></tr><tr><td>okul (school)</td><td>okul<b>lar</b></td></tr></table>
<p>⚠️ <b>The golden exception:</b> after a number, the noun stays SINGULAR — <b>iki kitap</b>, never <s>iki kitaplar</s>. The number already says "many"; Turkish hates saying things twice.</p>`,
 qs:[{q:'Plural of “göz”:',opts:['gözlar','gözler','gözlür','gözlör'],a:'gözler'},
     {q:'“three apples” =',opts:['üç elmalar','üç elma','elmalar üç','üçler elma'],a:'üç elma'},
     {q:'Plural of “kadın” (woman):',opts:['kadınler','kadınlar','kadınlır','kadın'],a:'kadınlar'}]},
{id:'G3',ico:'🤲',cat:'Suffixes',title:'Possessives — my, your, their',
 body:`<p>Turkish marks the owner ON the noun. The pronoun (benim…) is optional emphasis.</p>
<table class="gtable"><tr><th>Owner</th><th>ev (after consonant)</th><th>araba (after vowel)</th></tr>
<tr><td>ben (my)</td><td>ev<b>im</b></td><td>araba<b>m</b></td></tr>
<tr><td>sen (your)</td><td>ev<b>in</b></td><td>araba<b>n</b></td></tr>
<tr><td>o (his/her)</td><td>ev<b>i</b></td><td>araba<b>sı</b></td></tr>
<tr><td>biz (our)</td><td>ev<b>imiz</b></td><td>araba<b>mız</b></td></tr>
<tr><td>siz (your pl.)</td><td>ev<b>iniz</b></td><td>araba<b>nız</b></td></tr>
<tr><td>onlar (their)</td><td>ev<b>leri</b></td><td>araba<b>ları</b></td></tr></table>
<p>💡 After a vowel, "his/her" inserts a buffer <b>s</b>: araba<b>s</b>ı. Turkish never lets two vowels collide.</p>`,
 qs:[{q:'“my mother” (anne):',opts:['annem','anneim','annesi','annemiz'],a:'annem'},
     {q:'“his car”:',opts:['arabaı','arabası','arabasın','arabam'],a:'arabası'},
     {q:'“our house”:',opts:['evimiz','eviniz','evleri','evlerimiz'],a:'evimiz'}]},
{id:'G4',ico:'🧭',cat:'Suffixes',title:'Cases I — at, to, from',
 body:`<p>Three little suffixes replace a whole box of English prepositions:</p>
<table class="gtable"><tr><th>Case</th><th>Meaning</th><th>ev</th><th>okul</th><th>kitap ⚠️</th></tr>
<tr><td><b>-de/-da</b></td><td>at / in / on</td><td>ev<b>de</b></td><td>okul<b>da</b></td><td>kitap<b>ta</b></td></tr>
<tr><td><b>-e/-a</b></td><td>to</td><td>ev<b>e</b></td><td>okul<b>a</b></td><td>kitab<b>a</b></td></tr>
<tr><td><b>-den/-dan</b></td><td>from</td><td>ev<b>den</b></td><td>okul<b>dan</b></td><td>kitap<b>tan</b></td></tr></table>
<p>⚠️ Two sound rules meet here: after the voiceless sounds <b>f s t k ç ş h p</b> (mnemonic: <i>“FıSTıKÇı ŞaHaP”</i> — Şahap the pistachio seller!), <b>d becomes t</b> → kitap<b>ta</b>. And before a vowel suffix, final <b>p→b, t→d, k→ğ</b> → kitab<b>a</b>.</p>`,
 qs:[{q:'“in the book”:',opts:['kitapda','kitapta','kitabda','kitapte'],a:'kitapta'},
     {q:'“to the house”:',opts:['evde','evden','eve','evi'],a:'eve'},
     {q:'“from school”:',opts:['okuldan','okulden','okulda','okula'],a:'okuldan'}]},
{id:'G5',ico:'🎯',cat:'Suffixes',title:'Cases II — the specific object & the owner',
 body:`<p><b>Accusative -(y)ı/i/u/ü</b> marks a SPECIFIC object — it is Turkish's word "the":</p>
<table class="gtable"><tr><td><b>Elma yedim</b></td><td>I ate (an) apple — any apple</td></tr>
<tr><td><b>Elmayı yedim</b></td><td>I ate THE apple — that one we both know</td></tr></table>
<p><b>Genitive -(n)in</b> marks the owner, and pairs with a possessive on the owned thing — Turkish says "the teacher-'s book-his":</p>
<p style="text-align:center;font-size:16px"><b>öğretmen<span style="color:var(--gold)">in</span> kitab<span style="color:var(--accent2)">ı</span></b> — the teacher's book<br>
<b>anne<span style="color:var(--gold)">min</span> araba<span style="color:var(--accent2)">sı</span></b> — my mother's car</p>`,
 qs:[{q:'“I saw THE film” :',opts:['Film gördüm','Filmi gördüm','Filme gördüm','Filmde gördüm'],a:'Filmi gördüm'},
     {q:'“Ali’s house”:',opts:['Ali evi','Alinin ev','Ali’nin evi','Ali’de ev'],a:'Ali’nin evi'},
     {q:'“Elma yedim” means…',opts:['I ate the specific apple','I ate an apple (any)','I will eat apples','I like apples'],a:'I ate an apple (any)'}]},
{id:'G6',ico:'🪞',cat:'Suffixes',title:'To be, not to be, and “mi?”',
 body:`<p>Turkish has no verb "to be" in the present — the suffix does everything:</p>
<table class="gtable"><tr><th>Person</th><th>+ yorgun (tired)</th></tr>
<tr><td>ben</td><td>yorgun<b>um</b></td></tr><tr><td>sen</td><td>yorgun<b>sun</b></td></tr><tr><td>o</td><td>yorgun (bare!)</td></tr>
<tr><td>biz</td><td>yorgun<b>uz</b></td></tr><tr><td>siz</td><td>yorgun<b>sunuz</b></td></tr><tr><td>onlar</td><td>yorgun<b>lar</b></td></tr></table>
<p><b>Negation</b> uses the separate word <b>değil</b> + the same endings: <i>Yorgun değilim</i> — I'm not tired.<br>
<b>Questions</b> use the floating particle <b>mı/mi/mu/mü</b> (written separately, harmonized): <i>Yorgun musun?</i> — Are you tired? <i>Öğretmen mi?</i> — Is he a teacher?</p>`,
 qs:[{q:'“I am not ready (hazır)”:',opts:['Hazırım değil','Hazır değilim','Değil hazırım','Hazırmayım'],a:'Hazır değilim'},
     {q:'“Are you a student?”:',opts:['Öğrenci misin?','Öğrencisin mi?','Mi öğrencisin?','Öğrenci sen?'],a:'Öğrenci misin?'},
     {q:'“We are happy (mutlu)”:',opts:['mutluyuz','mutlusunuz','mutlular','mutluyum'],a:'mutluyuz'}]},
{id:'G7',ico:'▶️',cat:'Tenses',title:'Şimdiki Zaman -iyor — happening NOW',
 body:`<p>The workhorse tense: drop <b>-mek/-mak</b>, add <b>-iyor</b> + person. The i of -iyor harmonizes (ı/i/u/ü); the o never changes.</p>
<table class="gtable"><tr><th></th><th>gitmek→</th><th>bakmak→</th></tr>
<tr><td>ben</td><td>gid<b>iyorum</b></td><td>bak<b>ıyorum</b></td></tr>
<tr><td>sen</td><td>gid<b>iyorsun</b></td><td>bak<b>ıyorsun</b></td></tr>
<tr><td>o</td><td>gid<b>iyor</b></td><td>bak<b>ıyor</b></td></tr>
<tr><td>biz</td><td>gid<b>iyoruz</b></td><td>bak<b>ıyoruz</b></td></tr>
<tr><td>onlar</td><td>gid<b>iyorlar</b></td><td>bak<b>ıyorlar</b></td></tr></table>
<p>⚠️ Notice <b>git→gid</b> (t softens between vowels). Verbs ending in a vowel drop it: <b>anla→anlıyor</b>, <b>ye→yiyor</b>.<br><b>Negative:</b> insert -m- : <i>gitmiyorum</i> — I'm not going.</p>`,
 qs:[{q:'“I am coming” (gelmek):',opts:['geliyorum','gelirim','geldim','geleceğim'],a:'geliyorum'},
     {q:'“she is looking” (bakmak):',opts:['bakiyor','bakıyor','bakuyor','bakar'],a:'bakıyor'},
     {q:'“I am NOT going”:',opts:['gitmiyorum','gitmedim','gitmem','gidiyorum değil'],a:'gitmiyorum'}]},
{id:'G8',ico:'🔁',cat:'Tenses',title:'Geniş Zaman -r — habits & truths',
 body:`<p>The "wide tense" covers what is <i>generally</i> true: habits, promises, offers.</p>
<table class="gtable"><tr><td><b>Her sabah çay içerim</b></td><td>I drink tea every morning (habit)</td></tr>
<tr><td><b>Güneş doğudan doğar</b></td><td>The sun rises in the east (truth)</td></tr>
<tr><td><b>Kapıyı açar mısın?</b></td><td>Would you open the door? (polite)</td></tr></table>
<p>Form: verb stem + <b>-r / -ir / -er</b> + person: içer<b>im</b>, gider<b>sin</b>, yapar<b>ız</b>.</p>
<p>⚠️ <b>The famous irregular negative:</b> -mem/-mezsin/-mez… <i>İçmem</i> — I don't drink (flat refusal!). And the legendary noncommittal <b>Bakarız</b> — "we'll see" — half of Turkish diplomacy lives in this tense.</p>`,
 qs:[{q:'“I drink coffee every day” uses…',opts:['içiyorum','içerim','içtim','içeceğim'],a:'içerim'},
     {q:'“I do NOT eat meat” (flat habit):',opts:['Et yemiyorum','Et yemem','Et yemedim','Et yok'],a:'Et yemem'},
     {q:'“Bakarız” famously means…',opts:['We saw it','We will definitely look','Noncommittal “we’ll see”','Look at us'],a:'Noncommittal “we’ll see”'}]},
{id:'G9',ico:'⏪',cat:'Tenses',title:'Geçmiş Zaman -di — the witnessed past',
 body:`<p>For things you SAW happen: stem + <b>-di/-dı/-du/-dü</b> + person.</p>
<table class="gtable"><tr><th></th><th>gelmek</th><th>bakmak</th><th>gitmek ⚠️</th></tr>
<tr><td>ben</td><td>gel<b>dim</b></td><td>bak<b>tım</b></td><td>git<b>tim</b></td></tr>
<tr><td>sen</td><td>gel<b>din</b></td><td>bak<b>tın</b></td><td>git<b>tin</b></td></tr>
<tr><td>o</td><td>gel<b>di</b></td><td>bak<b>tı</b></td><td>git<b>ti</b></td></tr>
<tr><td>biz</td><td>gel<b>dik</b></td><td>bak<b>tık</b></td><td>git<b>tik</b></td></tr></table>
<p>⚠️ Remember Şahap the pistachio seller (<b>f s t k ç ş h p</b>)? After those sounds <b>d→t</b>: bak<b>tı</b>, git<b>ti</b>, konuş<b>tu</b>. Negative: -me- before the suffix: <i>gelmedim</i> — I didn't come.</p>`,
 qs:[{q:'“I looked” (bakmak):',opts:['bakdım','baktım','bakıtım','baktim'],a:'baktım'},
     {q:'“we went” (gitmek):',opts:['gitdik','gittik','gidik','gittiz'],a:'gittik'},
     {q:'“I did not come”:',opts:['gelmedim','gelmemdi','değil geldim','gelmiyordum'],a:'gelmedim'}]},
{id:'G10',ico:'🗣️',cat:'Tenses',title:'Rivayet -miş — the heard past',
 body:`<p>Turkish grammatically separates what you <b>witnessed</b> (-di) from what you <b>heard about or infer</b> (-mış/-miş/-muş/-müş). English can't do this in one word — Turkish does it always.</p>
<table class="gtable"><tr><td><b>Kaza oldu</b></td><td>There was an accident (I saw it)</td></tr>
<tr><td><b>Kaza olmuş</b></td><td>Apparently there was an accident (someone told me)</td></tr>
<tr><td><b>Uyumuşum!</b></td><td>I (apparently) fell asleep! (surprise at yourself)</td></tr>
<tr><td><b>Çok güzelmiş</b></td><td>They say it's beautiful / turns out it's beautiful</td></tr></table>
<p>💡 Nicknamed the <b>dedikodu</b> (gossip) tense — all rumors, fairy tales (<i>Bir varmış, bir yokmuş…</i> = once upon a time), and pleasant surprises live here.</p>`,
 qs:[{q:'You heard Ali got sick. You say:',opts:['Ali hastalandı','Ali hastalanmış','Ali hastadır','Ali hastalanıyor'],a:'Ali hastalanmış'},
     {q:'Fairy tales begin with…',opts:['Bir vardı, bir yoktu','Bir varmış, bir yokmuş','Bir var, bir yok','Vardı yokmuş'],a:'Bir varmış, bir yokmuş'},
     {q:'-miş vs -di: -miş is for…',opts:['things you saw','future plans','hearsay & inference','polite requests'],a:'hearsay & inference'}]},
{id:'G11',ico:'⏩',cat:'Tenses',title:'Gelecek Zaman -ecek — the future',
 body:`<p>Stem + <b>-ecek/-acak</b> + person:</p>
<table class="gtable"><tr><th></th><th>gelmek</th><th>yapmak</th></tr>
<tr><td>ben</td><td>gel<b>eceğim</b> ⚠️</td><td>yap<b>acağım</b> ⚠️</td></tr>
<tr><td>sen</td><td>gel<b>eceksin</b></td><td>yap<b>acaksın</b></td></tr>
<tr><td>o</td><td>gel<b>ecek</b></td><td>yap<b>acak</b></td></tr>
<tr><td>biz</td><td>gel<b>eceğiz</b></td><td>yap<b>acağız</b></td></tr></table>
<p>⚠️ Before the vowel of "I/we", <b>k softens to ğ</b>: gelece<b>ğ</b>im (never <s>gelecekim</s>). In speech you'll hear <i>gelicem, yapıcam</i> — understand it, but write the full form.<br><b>Negative:</b> gel<b>me</b>yeceğim — note the buffer y.</p>`,
 qs:[{q:'“I will do” (yapmak):',opts:['yapacakım','yapacağım','yapeceğim','yaparım'],a:'yapacağım'},
     {q:'“she will come”:',opts:['gelecek','geleceğ','gelir','geliyor'],a:'gelecek'},
     {q:'“I will NOT come”:',opts:['gelmeyeceğim','gelmeceğim','değil geleceğim','gelmem olacak'],a:'gelmeyeceğim'}]},
{id:'G12',ico:'💪',cat:'Tenses',title:'-meli & -ebil — must and can',
 body:`<p>Two suffixes that turn any verb into obligation or ability:</p>
<table class="gtable"><tr><th>Suffix</th><th>Meaning</th><th>gitmek →</th></tr>
<tr><td><b>-meli/-malı</b></td><td>must / should</td><td>git<b>meliyim</b> — I must go</td></tr>
<tr><td><b>-(y)ebil/-abil</b></td><td>can / may</td><td>gid<b>ebilirim</b> — I can go</td></tr></table>
<p>⚠️ <b>The negative of ability is its own creature</b> — not -ebil+me but <b>-eme/-ama</b>:<br>
<i>gidemem</i> — I can't go (ever) · <i>gidemiyorum</i> — I can't go (right now)<br>
<i>Yüzebilirim ama bugün yüzemem</i> — I can swim, but today I can't.</p>`,
 qs:[{q:'“I must work” (çalışmak):',opts:['çalışmalıyım','çalışabilirim','çalışırım','çalışıyorum'],a:'çalışmalıyım'},
     {q:'“Can you help?” =',opts:['Yardım edebilir misin?','Yardım etmeli misin?','Yardım eder?','Yardım edemezsin'],a:'Yardım edebilir misin?'},
     {q:'“I cannot swim (at all)”:',opts:['yüzemem','yüzmebilirim','yüzmem','yüzemiyorum değil'],a:'yüzemem'}]},
{id:'G13',ico:'🏭',cat:'Vocabulary',title:'The Word Factory — -ci, -lik, -li, -siz',
 body:`<p>Four suffixes multiply your vocabulary. Learn one root, harvest five words:</p>
<table class="gtable"><tr><th>Suffix</th><th>Makes</th><th>Examples</th></tr>
<tr><td><b>-ci/-cı/-çi/-çı</b></td><td>person who deals in it</td><td>çay→çay<b>cı</b> (tea seller), iş→iş<b>çi</b> (worker)</td></tr>
<tr><td><b>-lik/-lık</b></td><td>abstract noun / thing for</td><td>güzel→güzel<b>lik</b> (beauty), göz→göz<b>lük</b> (glasses)</td></tr>
<tr><td><b>-li/-lı</b></td><td>with / having / from</td><td>şeker<b>li</b> (with sugar), İstanbul<b>lu</b> (Istanbulite)</td></tr>
<tr><td><b>-siz/-sız</b></td><td>without</td><td>şeker<b>siz</b> (sugar-free), sabır<b>sız</b> (impatient)</td></tr></table>
<p>💡 Watch the harmony AND Şahap's rule: iş→iş<b>ç</b>i (c hardens to ç after ş). One root — <i>süt</i> (milk) → süt<b>çü</b>, süt<b>lü</b>, süt<b>süz</b>. Three new words, free of charge.</p>`,
 qs:[{q:'A “kapıcı” is…',opts:['a small door','a doorman/caretaker','with a door','doorless'],a:'a doorman/caretaker'},
     {q:'“coffee WITHOUT sugar” = şeker… kahve',opts:['şekerli','şekersiz','şekerci','şekerlik'],a:'şekersiz'},
     {q:'“çocukluk” means…',opts:['childish','with a child','childhood','babysitter'],a:'childhood'}]},
{id:'G14',ico:'❓',cat:'Vocabulary',title:'The Question Toolkit',
 body:`<p>Ten words unlock every conversation. Question words sit where the answer would sit — no word-order gymnastics:</p>
<table class="gtable"><tr><th>Word</th><th>Asks</th><th>Example</th></tr>
<tr><td><b>ne</b></td><td>what</td><td>Bu ne? — What's this?</td></tr>
<tr><td><b>kim</b></td><td>who</td><td>O kim? — Who's that?</td></tr>
<tr><td><b>nerede</b></td><td>where (at)</td><td>Neredesin? — Where are you?</td></tr>
<tr><td><b>nereye / nereden</b></td><td>where to / from</td><td>Nereye gidiyorsun?</td></tr>
<tr><td><b>ne zaman</b></td><td>when</td><td>Ne zaman geliyorsun?</td></tr>
<tr><td><b>neden / niçin</b></td><td>why</td><td>Neden ağlıyorsun?</td></tr>
<tr><td><b>nasıl</b></td><td>how</td><td>Nasılsın? — How are you?</td></tr>
<tr><td><b>kaç</b></td><td>how many/much</td><td>Kaç yaşındasın?</td></tr>
<tr><td><b>hangi</b></td><td>which</td><td>Hangi kitap? — Which book?</td></tr></table>
<p>💡 <i>Sen <b>nereye</b> gidiyorsun?</i> — the question word replaces "okula" exactly where it would stand. Answer by swapping it back: <i>Okula gidiyorum.</i></p>`,
 qs:[{q:'“WHEN are you coming?”:',opts:['Nerede geliyorsun?','Ne zaman geliyorsun?','Nasıl geliyorsun?','Kaç geliyorsun?'],a:'Ne zaman geliyorsun?'},
     {q:'“Kaç yaşındasın?” asks your…',opts:['name','age','address','job'],a:'age'},
     {q:'“WHICH tea do you want?”:',opts:['Ne çay istersin?','Hangi çayı istersin?','Nasıl çay istersin?','Kim çay istersin?'],a:'Hangi çayı istersin?'}]},
];

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
  week:{id:'',xp:0},boostUntil:0,chests:0,cultureN:0,dlg:{},writes:0,reads:0,read:{},suffixN:0,certs:{},lexams:{},blitz:{best:0,plays:0},matchN:0,sentN:0,gl:{},plan:{},planStart:null
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
function snd(kind,boost){try{
  if(!SND.on)return;const ctx=sndCtx();if(!ctx)return;const t=ctx.currentTime;const b=boost||1;
  if(kind==='ok'){tone(ctx,880*b,t,.12);tone(ctx,1318.5*b,t+.08,.18);}
  else if(kind==='no'){tone(ctx,180,t,.2,'square',.05);}
  else if(kind==='chest'){[523.25,659.25,783.99,1046.5].forEach((f,i)=>tone(ctx,f,t+i*.09,.22));}
  else if(kind==='quest'){tone(ctx,659.25,t,.15);tone(ctx,880,t+.12,.25);}
  else if(kind==='break'){tone(ctx,440,t,.12,'square',.06);tone(ctx,220,t+.1,.3,'square',.07);}
}catch(e){}}
/* 🎚️ combo → pitch: correct answers literally rise as you heat up */
function comboBoost(c){return 1+Math.min(c||0,12)*0.045;}
/* 💥 screen shake on painful moments */
function shake(){try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;}catch(e){}
  try{document.body.classList.remove('shaking');void document.body.offsetWidth;
    document.body.classList.add('shaking');setTimeout(()=>document.body.classList.remove('shaking'),450);}catch(e){}}
function toggleSnd(){SND.on=!SND.on;localStorage.setItem('tq_snd',SND.on?'1':'0');
  $('#sndChip').textContent=SND.on?'🔊':'🔇';toast(SND.on?'🔊 Sounds on':'🔇 Sounds off');if(SND.on)snd('ok');}
/* ✨ Floating XP gain */
function xpPop(n,combo){
  try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;}catch(e){}
  const s=document.createElement('div');s.className='xppop';s.textContent='+'+n+' XP';
  const c=Math.min(combo||0,12);
  s.style.fontSize=(20+c*1.6)+'px';                     // pops GROW as the streak grows
  if(c>=9)s.style.color='var(--gold)';else if(c>=5)s.style.color='var(--accent2)';
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
  $('#hocaLine').textContent=hocaSay();
  renderPlanCard();
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
  const lb=lexBest();$('#kExams').textContent=lb?(LEXAMS[lb-1].ico+' '+LEXAMS[lb-1].cefr):'—';
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
  renderJourney();
}

/* 📅 The 28-Day A1 Plan — the official Yedi İklim path, interactive */
const PLAN28=[
{w:1,t:'Merhaba! İlk adım',bk:'Ders K. Ü1A Merhaba',wb:'ÇK s.6–9',acts:['U1','U2','G1'],goal:'Say aloud: “Merhaba, ben … Memnun oldum.”'},
{w:1,t:'Nerelisiniz?',bk:'Ü1B Nerelisiniz?',wb:'ÇK s.10–12',acts:['G6','D2','FL'],goal:'Answer “Nerelisiniz?” + 3 country names'},
{w:1,t:'Sayılar & çokluk',bk:'Ü1C Selamlaşma',wb:'ÇK s.13–15',acts:['U3','G2','SL'],goal:'Count 1–20 · “iki kitap” rule perfect'},
{w:1,t:'Ünite 1 tekrar',bk:'Ü1 tekrar',wb:'ÇK s.16–17',acts:['BL','MP','FL'],goal:'Workbook Ü1 finished · bu/şu/o instant'},
{w:1,t:'Ailem ve ben',bk:'Ü2A Ailem ve Ben',wb:'ÇK s.18–21',acts:['U4','G3'],goal:'Present 4 family members: “Bu annem…”'},
{w:1,t:'Evim & renkler',bk:'Ü2B Evim',wb:'ÇK s.22–25',acts:['U5','U12','G4','R1'],goal:'5 sentences with -DE var: “Evde iki oda var”'},
{w:1,t:'Şimdiki zaman + SINAV',bk:'Ü2C Adresim + tekrar',wb:'ÇK s.26–29',acts:['G7','SB','E1'],goal:'PASS E1 (8/10) · “Türkçe öğreniyorum”'},
{w:2,t:'Saat kaçta?',bk:'Ü3A Saat Kaçta?',wb:'ÇK s.30–33',acts:['U9','G14'],goal:'Tell 5 clock times aloud'},
{w:2,t:'Kaç lira?',bk:'Ü3B Ne Kadar? Kaç Lira?',wb:'ÇK s.34–37',acts:['U6','D3','R3'],goal:'Role-play buying 3 items with prices'},
{w:2,t:'Dün ne yaptın? (-DI)',bk:'Ü3C Nerede? Ne Zaman?',wb:'ÇK s.38–39',acts:['G9','SL'],goal:'Yesterday in 5 sentences: “Dün markete gittim…”'},
{w:2,t:'“ile” + tekrar',bk:'Ü3 tekrar',wb:'ÇK s.40–41',acts:['BL','FL'],goal:'“Okula otobüsle gidiyorum” + days fluent'},
{w:2,t:'Bizim sokağımız',bk:'Ü4A Bizim Sokağımız',wb:'ÇK s.42–45',acts:['U13','D4'],goal:'Give directions: “sağa dön, düz git”'},
{w:2,t:'-DAn -A kadar',bk:'Ü4B Ne? Nerede?',wb:'ÇK s.46–49',acts:['U14','G5'],goal:'5 sentences: “Evden okula kadar yürüyorum”'},
{w:2,t:'Gelecek zaman + SINAV',bk:'Ü4C Haftalık Plan',wb:'ÇK s.50–53',acts:['G11','SB','E2'],goal:'PASS E2 · next week in -AcAk'},
{w:3,t:'Meslekler (-CI!)',bk:'Ü5A Meslekleri Tanıyalım',wb:'ÇK s.54–57',acts:['U19','G13'],goal:'8 professions from -CI + “Ne iş yapıyorsunuz?”'},
{w:3,t:'Geniş zaman',bk:'Ü5B Ne Olmak İstiyorsun?',wb:'ÇK s.58–61',acts:['G8','SP'],goal:'“Her gün kahve içerim ama çay içmem”'},
{w:3,t:'Hobiler & vücut',bk:'Ü5C Hobilerim',wb:'ÇK s.62–63',acts:['U11','D5'],goal:'3 hobbies + “Başım ağrıyor” sentences'},
{w:3,t:'Ad tamlamaları',bk:'Ü5 tekrar (tamlamalar!)',wb:'ÇK s.64–65',acts:['SL','BL'],goal:'10 compounds: “okul çantası, Ali’nin evi”'},
{w:3,t:'Yolculuk nereye?',bk:'Ü6A Yolculuk Nereye?',wb:'ÇK s.66–69',acts:['U21','R2'],goal:'Book a ticket aloud + “Kaçıncı peron?”'},
{w:3,t:'Trafikte (-DAki)',bk:'Ü6B Trafikte',wb:'ÇK s.70–73',acts:['U14','SB'],goal:'5 sentences with -ki/-DAki: “duraktaki adam”'},
{w:3,t:'Hava durumu + SINAV',bk:'Ü6C Bugün Hava Nasıl?',wb:'ÇK s.74–77',acts:['U10','D6','R4','E3'],goal:'PASS E3 · 4-season weather report'},
{w:4,t:'Telefon',bk:'Ü7A Telefon',wb:'ÇK s.78–81',acts:['SP','FL'],goal:'Phone script aloud: “Alo! … görüşmek üzere”'},
{w:4,t:'Karşılaştırma',bk:'Ü7B Bilgisayar ve İnternet',wb:'ÇK s.82–85',acts:['G12','FL'],goal:'“Tren otobüsten daha hızlı. En hızlı uçak.”'},
{w:4,t:'Bence… / -DEn beri',bk:'Ü7C Yüz Yüze',wb:'ÇK s.86–89',acts:['MP','BL'],goal:'“İki aydır Türkçe öğreniyorum”'},
{w:4,t:'Hafta sonu (-mIş bonus)',bk:'Ü8A Hafta Sonu',wb:'ÇK s.90–93',acts:['G10','R5'],goal:'Last weekend in -DI, 8 sentences'},
{w:4,t:'Tatil & bayram',bk:'Ü8B–C Yaz Tatili · Bayram',wb:'ÇK s.94–99',acts:['CD','D1','D2','D6'],goal:'Holiday plan + “Bayramınız kutlu olsun!”'},
{w:4,t:'GENEL TEKRAR',bk:'Tüm ⭐ sayfalar',wb:'ÇK s.100–101',acts:['E4','WW','FL'],goal:'PASS E4 · weak words = ZERO'},
{w:4,t:'SINAV GÜNÜ PROVASI',bk:'Self-intro ×10 satır + form',wb:'Mock exam',acts:['CP','BL'],goal:'📜 A1 Checkpoint PASSED — go get the real one'},
];
function planDay(){if(!S.planStart)return 0;
  const d=Math.floor((new Date(todayStr())-new Date(S.planStart))/86400000)+1;
  return Math.max(1,Math.min(28,d));}
const ACT_LABEL={FL:'🚀 Flow',BL:'⚡ Blitz',SL:'🧩 Suffix Lab',SB:'🧱 Sentences',MP:'🔗 Pairs',SP:'🎤 Speaking',WW:'🩹 Weak Words',CD:'🌹 Culture',CP:'📜 Checkpoint'};
function actLabel(c){
  if(ACT_LABEL[c])return ACT_LABEL[c];
  if(c[0]==='U')return '📚 '+(UNITS.find(u=>u.id===c)||{title:c}).title.split('—')[0].trim();
  if(c[0]==='G')return '🏫 '+(GLESSONS.find(g=>g.id===c)||{title:c}).title.split('—')[0].trim();
  if(c[0]==='D')return '💬 '+(DIALOGUES.find(d=>d.id===c)||{title:c}).title.split('—')[0].trim();
  if(c[0]==='R')return '📖 '+(READING.find(r=>r.id===c)||{title:c}).title;
  if(c[0]==='E')return '🎓 Exam '+c;
  return c;
}
function runPlanAct(c){
  if(c==='FL'){startFlow();return;}
  if(c==='BL'){switchView('practice');startBlitz();return;}
  if(c==='SL'){switchView('practice');startSuffix();return;}
  if(c==='SB'){switchView('practice');startSent();return;}
  if(c==='MP'){switchView('practice');startMatch();return;}
  if(c==='SP'){switchView('practice');startSpeak();return;}
  if(c==='WW'){switchView('practice');if(weakCards().length)startWeak();else toast('🩹 Zayıf kelime yok — mükemmel!');return;}
  if(c==='CD'){switchView('badges');return;}
  if(c==='CP'){switchView('practice');startExam(certNeeded()||'A1');return;}
  if(c[0]==='U'){const i=UNITS.findIndex(u=>u.id===c);switchView('learn');if(unitUnlocked(i))startUnit(UNITS[i]);else toast('🔒 Önce önceki durakları geç');return;}
  if(c[0]==='G'){switchView('learn');openGLesson(GLESSONS.find(g=>g.id===c));return;}
  if(c[0]==='D'){switchView('practice');playDialogue(DIALOGUES.find(d=>d.id===c));return;}
  if(c[0]==='R'){switchView('practice');readView(READING.find(r=>r.id===c));return;}
  if(c[0]==='E'){switchView('exams');startLexam(LEXAMS.find(e=>e.id===c));return;}
}
function actChips(p){return p.acts.map(c=>`<button class="btn ghost pchip" data-act="${c}">${actLabel(c)}</button>`).join('');}
function bindActChips(){$$('.pchip').forEach(el=>el.onclick=()=>{if(el.dataset.act)runPlanAct(el.dataset.act);});}
function markPlanDone(n){
  if(!S.plan)S.plan={};
  if(!S.plan[n]){S.plan[n]=true;addXp(15,'Reading');checkBadges();snd('quest');celebrate();toast('📅 Gün '+n+' tamam! +15 XP');}
  save();renderPlan();renderDash();
}
function renderPlanCard(){
  const el=$('#planCard');if(!el)return;
  if(!S.planStart){
    el.innerHTML=`<div class="firststeps"><div><h3>📅 The 28-Day A1 Plan</h3>
      <p>The official Yedi İklim path — book pages + app drills, one day at a time, ending at the A1 exam. Start the clock when you're ready.</p></div>
      <button class="btn green" id="planStartBtn">▶ Start Day 1</button></div>`;
    $('#planStartBtn').onclick=()=>{S.planStart=todayStr();save();renderDash();toast('📅 Plan başladı — Gün 1!');};
    return;
  }
  const d=planDay(),p=PLAN28[d-1],done=Object.keys(S.plan||{}).length;
  el.innerHTML=`<div class="firststeps" style="border-color:var(--blue)"><div style="flex:1">
    <h3>📅 Gün ${d}/28 — ${p.t} ${S.plan&&S.plan[d]?'✓':''}</h3>
    <p><b>${p.bk}</b> · ${p.wb} · hedef: <i>${p.goal}</i></p>
    <div class="row" style="margin-top:10px">${actChips(p)}</div></div>
    <div style="text-align:center;min-width:120px">
      <div class="big" style="font-size:24px;color:var(--gold)">${done}/28</div>
      <button class="btn ${S.plan&&S.plan[d]?'ghost':'green'}" id="planDoneBtn" style="margin-top:8px;padding:9px 14px;font-size:13px">${S.plan&&S.plan[d]?'📅 Full plan':'✓ Günü bitir'}</button>
    </div></div>`;
  bindActChips();
  $('#planDoneBtn').onclick=()=>{if(S.plan&&S.plan[d])switchView('plan');else markPlanDone(d);};
}
function renderPlan(){
  const d=planDay(),done=Object.keys(S.plan||{}).length;
  $('#planSub').textContent=S.planStart?('Başlangıç: '+S.planStart+' · bugün Gün '+d+' · '+done+'/28 tamam'):'Planı başlatmak için Dashboard’a git.';
  let lastW=0;
  $('#planList').innerHTML=PLAN28.map((p,i)=>{
    const n=i+1,head=p.w!==lastW?`<div class="leveltag">HAFTA ${p.w}</div>`:'';lastW=p.w;
    const isDone=S.plan&&S.plan[n],isToday=n===d&&S.planStart;
    return head+`<div class="unit ${isDone?'complete':''}" data-p="${n}" style="${isToday?'border-color:var(--accent2)':''}">
      <div class="unum">${isDone?'✓':isToday?'📍':n}</div>
      <div class="uinfo"><h4>Gün ${n} — ${p.t}</h4><p>${p.bk} · ${p.wb}</p></div></div>`;
  }).join('');
  $$('#planList .unit').forEach(el=>el.onclick=()=>openPlanDay(+el.dataset.p));
}
function openPlanDay(n){
  const p=PLAN28[n-1];
  $('#planStage').innerHTML=`<div class="pill">📅 Hafta ${p.w} · Gün ${n}</div>
    <div class="glesson"><h3 style="margin:0 0 8px">${p.t}</h3>
    <p>📖 <b>${p.bk}</b><br>✍️ ${p.wb}</p>
    <p>🎯 <b>Başarı çizgisi:</b> <i>${p.goal}</i></p>
    <div class="row">${actChips(p)}</div></div>
    <div class="row" style="justify-content:center;margin-top:14px">
      <button class="btn ${S.plan&&S.plan[n]?'ghost':'green'}" id="pdone">${S.plan&&S.plan[n]?'✓ Tamamlandı':'✓ Günü bitir (+15 XP)'}</button>
      <button class="btn ghost" id="pback">← Plan</button></div>`;
  bindActChips();
  $('#pdone').onclick=()=>markPlanDone(n);
  $('#pback').onclick=()=>{$('#planStage').innerHTML='';renderPlan();};
}

/* 🔔 Local notifications — 08:00 & 20:00, web + installed app */
function notifOK(){return typeof Notification!=='undefined'&&Notification.permission==='granted';}
function askNotif(){
  if(typeof Notification==='undefined'){toast('Bu tarayıcı bildirim desteklemiyor');return;}
  Notification.requestPermission().then(p=>{
    $('#ntfChip').textContent=p==='granted'?'🔔':'🔕';
    toast(p==='granted'?'🔔 08:00 & 20:00 hatırlatıcılar açık':'Bildirim izni verilmedi');
    if(p==='granted'){snd('ok');checkNotif();}
  });
}
function fireNotif(title,body){
  try{
    if(!notifOK())return;
    const opts={body,icon:'icon.svg',badge:'icon.svg',tag:'tq-'+title};
    if(navigator.serviceWorker&&navigator.serviceWorker.ready){
      navigator.serviceWorker.ready.then(r=>{
        if(r&&r.showNotification)r.showNotification(title,opts);else new Notification(title,opts);
      }).catch(()=>{try{new Notification(title,opts);}catch(e){}});
    }else new Notification(title,opts);
  }catch(e){}
}
function checkNotif(now){
  now=now||new Date();
  if(!notifOK())return;
  const t=todayStr(),h=now.getHours();
  const d=planDay();
  const dayLine=d?('Gün '+d+': '+PLAN28[d-1].t):'Bugünkü görevin hazır';
  if(h>=8&&h<12&&localStorage.getItem('tq_n8')!==t){
    localStorage.setItem('tq_n8',t);
    fireNotif('🌞 Günaydın! Türkçe zamanı',dayLine+' · 5 yeni kelime + tekrarlar seni bekliyor');
  }
  if(h>=20&&h<24&&localStorage.getItem('tq_n20')!==t){
    localStorage.setItem('tq_n20',t);
    fireNotif('🌙 Akşam kontrolü','Görev bitti mi? 🔥 '+S.streak+' gün — check-in yapmayı unutma');
  }
}

/* 🏫 Dil Okulu engine — read the lesson, pass 2/3, earn your seat */
function renderSchool(){
  const done=Object.keys(S.gl||{}).length;
  $('#glSub').textContent=done>=14?'Okul bitti — hoca gururlu (ama söylemez). 🏫✓'
    :done+' / 14 lessons mastered · read, then pass the mini-quiz (2/3)';
  const cats=['Suffixes','Tenses','Vocabulary'];
  $('#glList').innerHTML=cats.map(c=>`<div class="leveltag">${c==='Suffixes'?'🧬 THE SUFFIX MACHINE':c==='Tenses'?'⏳ THE TENSES':'📚 WORD POWER'}</div>`+
    GLESSONS.filter(g=>g.cat===c).map(g=>`<div class="unit ${S.gl&&S.gl[g.id]?'complete':''}" data-g="${g.id}">
      <div class="unum">${S.gl&&S.gl[g.id]?'✓':g.ico}</div>
      <div class="uinfo"><h4>${g.title}</h4><p>${g.cat} · 3-question check · +20 XP</p></div></div>`).join('')).join('');
  $$('#glList .unit').forEach(el=>el.onclick=()=>openGLesson(GLESSONS.find(g=>g.id===el.dataset.g)));
}
function openGLesson(g){
  $('#glList').innerHTML='';
  $('#glStage').innerHTML=`<div class="pill">${g.ico} ${g.cat} · ${g.title}</div>
    <div class="glesson">${g.body}</div>
    <div class="row" style="justify-content:center;margin-top:14px">
      <button class="btn" id="glQuizBtn">✍️ Take the check →</button>
      <button class="btn ghost" id="glBackBtn">← All lessons</button></div>`;
  $('#glQuizBtn').onclick=()=>glQuiz(g,0,0);
  $('#glBackBtn').onclick=()=>{$('#glStage').innerHTML='';renderSchool();};
}
function glQuiz(g,qi,score){
  if(qi>=g.qs.length){
    const pass=score>=2,first=pass&&!(S.gl&&S.gl[g.id]);
    if(pass){if(!S.gl)S.gl={};S.gl[g.id]=true;
      if(first){addXp(20,g.cat==='Tenses'?'Grammar':g.cat==='Suffixes'?'Grammar':'Vocabulary');checkBadges();}
      save();celebrate();snd('quest');}
    $('#glStage').innerHTML=`<div class="stage"><div class="flash"><div class="tr">${pass?'🏫':'📚'}</div>
      <h2>${pass?'Ders geçildi!':'Bir daha oku'}</h2>
      <p class="muted">${score}/3${pass?(first?' · +20 XP · lesson mastered':' · already mastered'):' — the hoca says: read it again, slowly this time.'}</p></div>
      <div class="row" style="justify-content:center">
        ${pass?'':'<button class="btn" id="glRe">↺ Re-read the lesson</button>'}
        <button class="btn ghost" id="glDone2">All lessons</button></div></div>`;
    if(!pass)$('#glRe').onclick=()=>openGLesson(g);
    $('#glDone2').onclick=()=>{$('#glStage').innerHTML='';renderSchool();};
    return;
  }
  const qq=g.qs[qi];
  $('#glStage').innerHTML=`<div class="stage"><div class="pill">${g.ico} Check ${qi+1} / 3</div>
    <div class="flash"><div class="cat">${g.title}</div><div class="tr" style="font-size:19px;line-height:1.5">${qq.q}</div></div>
    <div class="choices" style="max-width:520px">${shuffle(qq.opts.slice()).map(o=>`<div class="choice" data-val="${esc(o)}">${o}</div>`).join('')}</div></div>`;
  $$('.choice').forEach(ch=>ch.onclick=()=>{if(ch.dataset.done)return;$$('.choice').forEach(c=>c.dataset.done=1);
    const ok=ch.dataset.val===qq.a;buzz(ok?12:60);snd(ok?'ok':'no');
    if(ok)ch.classList.add('correct');else{ch.classList.add('wrong');$$('.choice').forEach(c=>{if(c.dataset.val===qq.a)c.classList.add('correct');});}
    setTimeout(()=>glQuiz(g,qi+1,score+(ok?1:0)),850);});
}

/* 🗺️ Journey map — the tree becomes a road across Turkey */
const CITIES={0:'🏡 Köy',7:'🌊 Bursa',14:'🏛️ Ankara',20:'🎈 Kapadokya',28:'🕌 İstanbul'};
function renderJourney(){
  let pts=[],nodes='';
  UNITS.forEach((u,i)=>{
    const x=36+i*46,y=76+Math.round(Math.sin(i*0.85)*32);
    pts.push(x+','+y);
    const done=S.units[u.id]&&S.units[u.id].complete;
    const cur=unitUnlocked(i)&&!done;
    nodes+=`<circle class="jn ${done?'jdone':cur?'jcur':'jlock'}" data-j="${i}" cx="${x}" cy="${y}" r="${cur?13:10}"><title>${u.title}</title></circle>`;
    if(CITIES[i])nodes+=`<text class="jcity" x="${x}" y="${y-22}" text-anchor="middle">${CITIES[i]}</text>`;
    if(cur)nodes+=`<text class="jyou" x="${x}" y="${y+34}" text-anchor="middle">📍 Buradasın</text>`;
  });
  const W=36+29*46;
  $('#journey').innerHTML=`<svg viewBox="0 0 ${W} 148" style="min-width:${W}px;height:148px;display:block">
    <polyline points="${pts.join(' ')}" class="jroad"/>${nodes}</svg>`;
  $$('#journey .jn').forEach(el=>el.onclick=()=>{
    const i=+el.dataset.j;
    if(unitUnlocked(i))startUnit(UNITS[i]);
    else toast('🔒 Önce önceki durakları geç — the road is walked in order');});
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
    <div class="mode" id="mBlitz" style="border-color:var(--gold)"><div class="mi">⚡</div><h4>Blitz</h4><p>60s · 3 hearts · multipliers</p><div class="cnt" style="color:var(--gold)">${(S.blitz&&S.blitz.best)||0}</div></div>
    <div class="mode" id="mEcho" style="border-color:var(--blue)"><div class="mi">🎧</div><h4>Echo Blitz</h4><p>Ears only · same rules</p><div class="cnt" style="color:var(--blue)">${(S.blitz&&S.blitz.bestL)||0}</div></div>
    <div class="mode" id="mStorm" style="border-color:var(--accent2)"><div class="mi">⌨️</div><h4>Yazı Fırtınası</h4><p>Type storm · +2s per hit</p><div class="cnt" style="color:var(--accent2)">${(S.blitz&&S.blitz.bestT)||0}</div></div>
    <div class="mode" id="mSrs"><div class="mi">🃏</div><h4>SRS Review</h4><p>Flashcards due now</p><div class="cnt" style="color:var(--accent2)">${due}</div></div>
    <div class="mode" id="mWeak"><div class="mi">🩹</div><h4>Weak Words</h4><p>The ones that keep slipping</p><div class="cnt" style="color:var(--gold)">${weak}</div></div>
    <div class="mode" id="mDlg"><div class="mi">💬</div><h4>Dialogues</h4><p>Real conversations + quiz</p><div class="cnt" style="color:var(--green)">${dlgDone}/${DIALOGUES.length}</div></div>
    <div class="mode" id="mSuffix"><div class="mi">🧩</div><h4>Suffix Lab</h4><p>Build words from pieces</p><div class="cnt" style="color:var(--purple)">${S.suffixN||0}</div></div>
    <div class="mode" id="mSent"><div class="mi">🧱</div><h4>Sentences</h4><p>Build them word by word</p><div class="cnt" style="color:var(--green)">${S.sentN||0}</div></div>
    <div class="mode" id="mMatch"><div class="mi">🔗</div><h4>Match Pairs</h4><p>Turkish ↔ meaning</p><div class="cnt" style="color:var(--blue)">${S.matchN||0}</div></div>
    <div class="mode" id="mRead"><div class="mi">📖</div><h4>Reading</h4><p>Micro-stories + question</p><div class="cnt" style="color:var(--gold)">${readDone}/${READING.length}</div></div>
    <div class="mode" id="mWrite"><div class="mi">✍️</div><h4>Writing</h4><p>Type it in Turkish</p><div class="cnt" style="color:var(--accent2)">${S.writes||0}</div></div>
    <div class="mode" id="mListen"><div class="mi">👂</div><h4>Listening</h4><p>Hear it, pick the meaning</p><div class="cnt" style="color:var(--blue)">${known}</div></div>
    <div class="mode" id="mSpeak"><div class="mi">🎤</div><h4>Speaking</h4><p>Say it back out loud</p><div class="cnt" style="color:var(--purple)">${known}</div></div>
  </div>
  <p class="muted center" style="margin-top:16px">${known<4?'Learn at least 4 words in the Learn tab to unlock the drills.':'Drills draw from your '+known+' learned words.'}</p>`;
  $('#mBlitz').onclick=()=>startBlitz();
  $('#mEcho').onclick=()=>startBlitz('listen');
  $('#mStorm').onclick=()=>startBlitz('type');
  $('#mSrs').onclick=()=>{if(!due){toast('No cards due — learn a unit first!');return;}startSrs();};
  $('#mWeak').onclick=()=>{if(!weak){toast('No weak words — keep it up! 💪');return;}startWeak();};
  $('#mDlg').onclick=()=>dlgList();
  $('#mSuffix').onclick=()=>startSuffix();
  $('#mSent').onclick=()=>startSent();
  $('#mMatch').onclick=()=>startMatch();
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

/* 🔗 Match Pairs — tap a Turkish word, tap its meaning. A new verb: connect. */
function startMatch(){
  const learned=learnedCards();
  const src=learned.length>=6?learned:VOCAB.slice(0,12);
  flow={mode:'match',pairs:shuffle(src.slice()).slice(0,6),matched:[],sel:null,tries:0};
  flow.tiles=shuffle(flow.pairs.flatMap(v=>[{id:v.id,t:v.tr,k:'tr'},{id:v.id,t:v.en,k:'en'}]));
  renderMatch();
}
function renderMatch(){
  if(!flow||flow.mode!=='match')return;
  $('#practiceStage').innerHTML=`<div class="stage"><div class="pill">🔗 Match the pairs · ${flow.matched.length} / 6</div>
    <div class="choices" style="grid-template-columns:repeat(auto-fit,minmax(120px,1fr));max-width:560px">
    ${flow.tiles.map((t,i)=>{
      const done=flow.matched.includes(t.id);
      const seld=flow.sel&&flow.sel.id===t.id&&flow.sel.k===t.k;
      return `<div class="choice ${done?'correct':''} ${seld?'msel':''}" data-i="${i}" style="justify-content:center;font-size:14px;${done?'opacity:.45;pointer-events:none':''}">${t.t}</div>`;
    }).join('')}</div></div>`;
  $$('#practiceStage .choice').forEach(el=>el.onclick=()=>{if(el.dataset.i!=null)matchTap(+el.dataset.i);});
}
function matchTap(i){
  if(!flow||flow.mode!=='match')return;
  const t=flow.tiles[i];if(!t||flow.matched.includes(t.id))return;
  if(!flow.sel){flow.sel={id:t.id,k:t.k};renderMatch();return;}
  if(flow.sel.id===t.id&&flow.sel.k===t.k){flow.sel=null;renderMatch();return;} // tap again = deselect
  flow.tries++;
  if(flow.sel.id===t.id&&flow.sel.k!==t.k){
    flow.matched.push(t.id);flow.sel=null;
    S.matchN=(S.matchN||0)+1;buzz(12);snd('ok',comboBoost(flow.matched.length));addXp(4,'Vocabulary');xpPop(4,flow.matched.length);
    if(flow.matched.length>=6){
      save();
      $('#practiceStage').innerHTML=`<div class="stage"><div class="flash"><div class="tr">🔗</div><h2>All matched!</h2><p class="muted">6 pairs · ${flow.tries} attempts · +24 XP</p></div>
        <div class="row" style="justify-content:center"><button class="btn purple" id="mAgain">🔗 Again</button><button class="btn ghost" id="mBack">Back</button></div></div>`;
      $('#mAgain').onclick=startMatch;$('#mBack').onclick=renderPracticeHome;flow=null;return;
    }
    renderMatch();
  }else{buzz(40);snd('no');flow.sel=null;renderMatch();}
}

/* 🧱 Sentence Builder — assemble real sentences word by word. Word order is a skill. */
function sentPool(){return VOCAB.filter(v=>v.ex.split(' ').length>=4);}
function startSent(){flow={mode:'sent',n:0,score:0,total:5,pool:shuffle(sentPool()).slice(0,20)};sentCard();}
function sentCard(){
  if(!flow||flow.mode!=='sent')return;
  if(flow.n>=flow.total){
    $('#practiceStage').innerHTML=`<div class="stage"><div class="flash"><div class="tr">🧱</div><h2>Builder done</h2><p class="muted">${flow.score}/${flow.total} sentences · skill: Writing</p></div>
      <div class="row" style="justify-content:center"><button class="btn purple" id="sAgain">🧱 Again</button><button class="btn ghost" id="sBack">Back</button></div></div>`;
    $('#sAgain').onclick=startSent;$('#sBack').onclick=renderPracticeHome;flow=null;return;
  }
  const v=flow.pool[flow.n%flow.pool.length];
  flow.cur=v;flow.target=v.ex.split(' ');flow.built=[];flow.used=[];
  flow.tiles=shuffle(flow.target.map((w,i)=>({w,i})));
  $('#practiceStage').innerHTML=`<div class="stage"><div class="pill">🧱 ${flow.n+1} / ${flow.total} · tap words · tap again to remove</div>
    <div class="flash"><div class="cat">${v.tr} — ${v.en}</div>
    <div class="row" id="sBuilt" style="justify-content:center;min-height:40px;gap:6px;margin-top:10px"></div></div>
    <div class="choices" id="sTiles" style="grid-template-columns:repeat(auto-fit,minmax(96px,1fr));max-width:520px">
    ${flow.tiles.map((t,i)=>`<div class="choice" data-i="${i}" style="justify-content:center;font-size:15px">${t.w}</div>`).join('')}</div>
    <div class="row" style="justify-content:center">
      <button class="btn ghost" id="sHear">🔊 Hear it</button>
      <button class="btn ghost" id="sClear">↺ Clear</button>
      <button class="btn green" id="sCheck">✓ Confirm</button>
    </div><div class="kbd">drag chips to reorder · tap ✕ to remove · nothing is judged until Confirm</div></div>`;
  $('#sHear').onclick=()=>speak(v.ex);
  $('#sClear').onclick=()=>{if(!flow)return;flow.built=[];flow.used=[];sentSync();};
  $('#sCheck').onclick=sentCheck;
  $$('#sTiles .choice').forEach(el=>el.onclick=()=>{if(el.dataset.i!=null)sentTap(+el.dataset.i);});
  sentSync();
}
let sentDragI=null;
function sentSync(){ /* redraw built chips: DRAG to reorder, tap ✕ to remove */
  if(!flow||flow.mode!=='sent')return;
  const el=$('#sBuilt');
  if(el){el.innerHTML=flow.built.length
    ?flow.built.map((w,bi)=>`<button class="btn ghost pchip schip" draggable="true" data-b="${bi}" title="Drag to reorder · tap to remove">${w} <span style="opacity:.6">✕</span></button>`).join('')
    :'<span class="muted">…tap words below</span>';
    $$('#sBuilt .pchip').forEach(c=>{
      c.onclick=()=>{if(c.dataset.b!=null)sentUndo(+c.dataset.b);};
      c.ondragstart=e=>{sentDragI=+c.dataset.b;try{e&&e.dataTransfer&&e.dataTransfer.setData('text','');}catch(x){}};
      c.ondragover=e=>{if(e&&e.preventDefault)e.preventDefault();};
      c.ondrop=e=>{if(e&&e.preventDefault)e.preventDefault();
        if(sentDragI!=null&&c.dataset.b!=null)sentMove(sentDragI,+c.dataset.b);sentDragI=null;};
    });}
  $$('#sTiles .choice').forEach(t=>{if(t.dataset.i!=null){const used=flow.used.includes(+t.dataset.i);
    t.style.opacity=used?'.35':'1';t.style.pointerEvents=used?'none':'auto';}});
  const ck=$('#sCheck');if(ck)ck.disabled=flow.built.length!==flow.target.length;
}
function sentMove(from,to){ /* drag-and-drop reorder — reform the tense before Confirm */
  if(!flow||flow.mode!=='sent')return;
  if(from===to||from<0||to<0||from>=flow.built.length||to>=flow.built.length)return;
  const [w]=flow.built.splice(from,1);flow.built.splice(to,0,w);
  const [u]=flow.used.splice(from,1);flow.used.splice(to,0,u);
  buzz(8);sentSync();
}
function sentTap(i){
  if(!flow||flow.mode!=='sent'||!flow.tiles[i]||flow.used.includes(i))return;
  flow.used.push(i);flow.built.push(flow.tiles[i].w);
  buzz(8);sentSync();
}
function sentUndo(bi){ /* remove one placed word — reform your tense before committing */
  if(!flow||flow.mode!=='sent'||bi<0||bi>=flow.built.length)return;
  flow.built.splice(bi,1);flow.used.splice(bi,1);
  buzz(8);sentSync();
}
function sentCheck(){
  if(!flow||flow.mode!=='sent'||flow.built.length!==flow.target.length)return;
  const ok=flow.built.join(' ')===flow.target.join(' ');
  S.sentN=(S.sentN||0)+1;
  if(ok){flow.score++;snd('ok',comboBoost(flow.score));addXp(9,'Writing');xpPop(9,flow.score);speak(flow.cur.ex);}
  else{snd('no');shake();toast('✏️ '+flow.cur.ex);}
  checkBadges();save();
  setTimeout(()=>{if(flow){flow.n++;sentCard();}},ok?900:1600);
}

/* 🎩 The Hoca — your stern companion, watching from the dashboard */
function hocaSay(){
  const due=dueCards().length,weak=weakCards().length;
  if(S.xp===0)return 'Yeni misin? Güzel. Tembellik etme — ilk beş kelime seni bekliyor.';
  if(due>=10)return due+' kart tekrar bekliyor. Tekrar etmeyen, unutur. Kural benim değil, beynin kuralı.';
  if(weak>=3)return 'Zayıf kelimelerin birikti. 🩹 Onlardan kaçma — karşına ben çıkarırım sonra.';
  if(S.lastActive!==todayStr())return 'Bugün daha hiç çalışmadın. Dil, bekleyeni değil çalışanı sever.';
  if(S.quest&&S.quest.claimed)return 'Bugünkü görev tamam. Fena değil… ama yarın yine geleceğim.';
  const p=['Damlaya damlaya göl olur. Devam.','Az az, her gün. Kural budur.','Kelime hazinen kılıcındır — her gün bile.','Yolun uzun, ama yürüyene kısalır.'];
  return p[new Date().getDate()%p.length];
}

/* ⚡ BLITZ — 60 seconds, 3 hearts, multiplier ×1–×5. Three arenas: see, hear, type. */
let blitzTimer=null;
const BVAR={see:{ico:'⚡',name:'Blitz',key:'best'},listen:{ico:'🎧',name:'Echo Blitz',key:'bestL'},type:{ico:'⌨️',name:'Yazı Fırtınası',key:'bestT'}};
function startBlitz(variant){
  variant=BVAR[variant]?variant:'see';
  const learned=learnedCards();
  /* the whole book is the arena: learned words first, then everything else */
  const pool=learned.length>=12?learned.concat(shuffle(unlearned())):VOCAB.slice();
  flow={mode:'blitz',variant,score:0,combo:0,mult:1,hearts:3,time:60,n:0,pool:shuffle(pool.slice())};
  clearInterval(blitzTimer);
  blitzTimer=setInterval(blitzTick,1000);
  blitzQ();
}
function blitzTick(){
  if(!flow||flow.mode!=='blitz'){clearInterval(blitzTimer);return;}
  flow.time--;
  const el=$('#bTime');if(el){el.textContent=flow.time+'s';if(flow.time<=10)el.style.color='var(--accent2)';}
  if(flow.time<=0)endBlitz();
}
function blitzHud(){
  return `<div class="row" style="justify-content:center;gap:10px;flex-wrap:wrap">
    <span class="pill" style="color:var(--accent2)">${'❤️'.repeat(flow.hearts)}${'🖤'.repeat(3-flow.hearts)}</span>
    <span class="pill" id="bTime" style="font-weight:800">${flow.time}s</span>
    <span class="pill" style="color:var(--gold)">⚡ ${flow.score}</span>
    <span class="pill" style="color:${flow.mult>=4?'var(--gold)':flow.mult>=2?'var(--accent2)':'var(--muted)'};font-weight:800">×${flow.mult}</span>
  </div>`;
}
function blitzQ(){
  if(!flow||flow.mode!=='blitz')return;
  const v=flow.pool[flow.n%flow.pool.length];flow.cur=v;flow.n++;
  const va=flow.variant||'see';
  if(va==='type'){ /* ⌨️ Yazı Fırtınası — see English, TYPE the Turkish against the clock */
    $('#practiceStage').innerHTML=`<div class="stage">${blitzHud()}
      <div class="flash" style="padding:24px"><div class="cat">⌨️ Type it in Turkish — fast!</div><div class="tr" style="font-size:24px">${v.en}</div></div>
      <input class="typein" id="btin" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Türkçe yaz…">
      <button class="btn" id="btsub">Check</button><div class="kbd">Enter to check</div></div>`;
    const inp=$('#btin');setTimeout(()=>inp.focus(),60);
    const submit=()=>{const a=norm(inp.value);if(!a)return;const t=norm(v.tr);
      blitzAnswer(a===t||lev(a,t)<=Math.max(1,Math.floor(t.length*0.2)));};
    $('#btsub').onclick=submit;
    window.__flowKey=e=>{if(e.key==='Enter')submit();};
    return;
  }
  const opts=mcChoices(v,'en');
  if(va==='listen'){ /* 🎧 Echo Blitz — ears only */
    $('#practiceStage').innerHTML=`<div class="stage">${blitzHud()}
      <div class="flash" style="padding:22px"><div class="cat">🎧 Listen! What did you hear?</div>
      <button class="micbig" id="bplay" style="background:linear-gradient(135deg,var(--blue),#2b6fb8)">🔊</button></div>
      <div class="choices">${opts.map(o=>`<div class="choice" data-val="${esc(o)}">${o}</div>`).join('')}</div></div>`;
    $('#bplay').onclick=()=>speak(v.tr);speak(v.tr);
  }else{
    $('#practiceStage').innerHTML=`<div class="stage">${blitzHud()}
      <div class="flash" style="padding:26px"><div class="cat">⚡ Quick! What does it mean?</div><div class="tr" style="font-size:30px">${v.tr}</div></div>
      <div class="choices">${opts.map(o=>`<div class="choice" data-val="${esc(o)}">${o}</div>`).join('')}</div></div>`;
  }
  $$('.choice').forEach(ch=>ch.onclick=()=>{if(ch.dataset.done)return;$$('.choice').forEach(c=>c.dataset.done=1);
    const ok=ch.dataset.val===v.en;
    if(ok)ch.classList.add('correct');else{ch.classList.add('wrong');$$('.choice').forEach(c=>{if(c.dataset.val===v.en)c.classList.add('correct');});}
    blitzAnswer(ok);});
  window.__flowKey=e=>{if(e.key>='1'&&e.key<='4'){const el=$$('.choice')[+e.key-1];if(el)el.click();}};
}
function blitzAnswer(ok){
  if(!flow||flow.mode!=='blitz')return;
  if(ok){
    flow.combo++;flow.mult=Math.min(5,1+Math.floor(flow.combo/3));
    const pts=10*flow.mult;flow.score+=pts;
    flow.time=Math.min(60,flow.time+(flow.variant==='type'?2:1)); // typing earns +2s — it's harder
    buzz(12);snd('ok',comboBoost(flow.combo));xpPop(pts,flow.combo);
    if((flow.variant||'see')!=='see')S[flow.variant==='listen'?'listen':'writes']=(S[flow.variant==='listen'?'listen':'writes']||0)+1;
    setTimeout(()=>blitzQ(),350);                           // FAST — no dawdling in blitz
  }else{
    const lost=flow.combo;flow.hearts--;flow.combo=0;flow.mult=1;
    buzz([50,40,80]);shake();
    if(lost>=6){snd('break');toast('💔 ×'+(1+Math.floor(lost/3))+' multiplier GONE');}else snd('no');
    if(flow.hearts<=0){endBlitz();return;}
    setTimeout(()=>blitzQ(),650);
  }
}
function endBlitz(){
  clearInterval(blitzTimer);
  if(!flow||flow.mode!=='blitz')return;
  const sc=flow.score,died=flow.hearts<=0,va=flow.variant||'see',bv=BVAR[va];flow=null;window.__flowKey=null;
  if(!S.blitz)S.blitz={best:0,plays:0};
  const isBest=sc>(S.blitz[bv.key]||0);
  S.blitz[bv.key]=Math.max(S.blitz[bv.key]||0,sc);S.blitz.plays=(S.blitz.plays||0)+1;
  const gain=Math.min(80,Math.round(sc/12));
  if(gain>0)addXp(gain,va==='listen'?'Listening':va==='type'?'Writing':'Vocabulary');
  checkBadges();save();
  if(isBest&&sc>0)celebrate();
  $('#practiceStage').innerHTML=`<div class="stage"><div class="flash"><div class="tr">${died?'💀':'⏱️'}</div>
    <h2>${bv.ico} ${bv.name} — ${died?'Out of hearts!':'Time!'}</h2>
    <p class="muted" style="line-height:1.9;font-size:14px">Score: <b style="color:var(--gold)">${sc}</b>${isBest&&sc>0?' — <b style="color:var(--green)">NEW BEST!</b>':' · best '+(S.blitz[bv.key]||0)}<br>+${gain} XP</p></div>
    <div class="row" style="justify-content:center">
      <button class="btn purple" id="bAgain">${bv.ico} Again!</button>
      <button class="btn ghost" id="bBack">Back</button>
    </div></div>`;
  $('#bAgain').onclick=()=>startBlitz(va);
  $('#bBack').onclick=renderPracticeHome;
}

/* 🎓 Master Exam Hall engine — separate from the roadmap; rank = highest exam passed */
function lexBest(){let best=0;LEXAMS.forEach((e,i)=>{if(((S.lexams||{})[e.id]||0)>=8)best=i+1;});return best;}
function renderExams(){
  const b=lexBest();
  $('#lexSub').textContent=b
    ?('Gerçek seviyen: '+LEXAMS[b-1].ico+' '+LEXAMS[b-1].name+' ('+LEXAMS[b-1].cefr+')'+(b===10?' — Zirvedesin, kurt.':' — Bir üst sınav seni bekliyor. Rahatına alışma.'))
    :'Hocan bekliyor. Sıralı girmene gerek yok — ama geçme notu 8/10 ve hoca taviz vermez.';
  $('#lexList').innerHTML=LEXAMS.map((e,i)=>{const sc=(S.lexams||{})[e.id];const passed=(sc||0)>=8;
    return `<div class="unit ${passed?'complete':''}" data-e="${e.id}">
      <div class="unum">${passed?'✓':e.ico}</div>
      <div class="uinfo"><h4>${i+1}. ${e.name} · ${e.cefr}</h4><p>${e.desc} · ${sc!=null?('best '+sc+'/10'):'not attempted'}</p></div></div>`;}).join('');
  $$('#lexList .unit').forEach(el=>el.onclick=()=>startLexam(LEXAMS.find(e=>e.id===el.dataset.e)));
}
function startLexam(e){flow={mode:'lex',ex:e,qi:0,score:0,order:shuffle(e.qs.map((_,i)=>i))};$('#lexList').innerHTML='';lexQ();}
function lexQ(){
  if(!flow||!flow.ex)return;
  const e=flow.ex;
  if(flow.qi>=e.qs.length){
    const sc=flow.score,passed=sc>=8,first=passed&&!(((S.lexams||{})[e.id]||0)>=8);
    if(!S.lexams)S.lexams={};
    S.lexams[e.id]=Math.max(S.lexams[e.id]||0,sc);
    if(first){addXp(40,'Grammar');checkBadges();if(e.id==='E5'||e.id==='E10')setTimeout(()=>openChest('Hocanın hediyesi'),1100);}
    save();
    const msg=passed
      ?(e.id==='E10'?'Artık benden öğrenecek bir şeyin kalmadı. Usta sensin. 🐺':'Fena değil: '+sc+'/10. Ama gurur duyma — bir üst sınav seni bekliyor.')
      :'Yetersiz: '+sc+'/10. Bu seviye senin değil… henüz. Git çalış, sonra karşıma çık.';
    $('#lexStage').innerHTML=`<div class="stage"><div class="flash"><div class="tr">${passed?'🎓':'🪵'}</div>
      <h2>${passed?e.name+' — geçtin':'Kaldın'}</h2><p class="muted" style="line-height:1.8">${msg}${first?'<br>+40 XP':''}</p></div>
      <div class="row" style="justify-content:center"><button class="btn" id="lexBack">Sınav salonu</button>${passed?'':'<button class="btn ghost" id="lexRetry">Tekrar dene</button>'}</div></div>`;
    if(passed){celebrate();snd('quest');}
    $('#lexBack').onclick=()=>{flow=null;$('#lexStage').innerHTML='';renderExams();};
    if(!passed)$('#lexRetry').onclick=()=>startLexam(e);
    return;
  }
  const qq=e.qs[flow.order?flow.order[flow.qi]:flow.qi]; // fresh order every attempt
  $('#lexStage').innerHTML=`<div class="stage"><div class="pill">${e.ico} ${e.name} · ${flow.qi+1} / ${e.qs.length} · geçme notu 8/10</div>
    <div class="flash" style="max-width:560px"><div class="cat">Hoca soruyor</div><div class="tr" style="font-size:20px;line-height:1.55">${qq.q}</div></div>
    <div class="choices" style="max-width:560px">${shuffle(qq.opts.slice()).map(o=>`<div class="choice" data-val="${esc(o)}">${o}</div>`).join('')}</div></div>`;
  $$('.choice').forEach(ch=>ch.onclick=()=>{if(ch.dataset.done)return;$$('.choice').forEach(c=>c.dataset.done=1);
    const ok=ch.dataset.val===qq.a;buzz(ok?12:60);snd(ok?'ok':'no');
    if(ok){ch.classList.add('correct');flow.score++;}
    else{ch.classList.add('wrong');$$('.choice').forEach(c=>{if(c.dataset.val===qq.a)c.classList.add('correct');});}
    setTimeout(()=>{if(flow){flow.qi++;lexQ();}},850);});
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
  suffixN:S.suffixN||0,certsN:Object.keys(S.certs||{}).length,lexBest:lexBest(),
  blitzBest:(S.blitz&&S.blitz.best)||0,echoBest:(S.blitz&&S.blitz.bestL)||0,stormBest:(S.blitz&&S.blitz.bestT)||0,
  glDone:Object.keys(S.gl||{}).length,planDone:Object.keys(S.plan||{}).length,
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
  /* 🔁 anti-repeat: remember the last 8 questions and dodge them when possible */
  const rec=F.recentIds||(F.recentIds=[]);
  const fresh=a=>{const f2=a.filter(x=>!rec.includes(x.id));return f2.length?f2:a;};
  if(newOnes.length&&(learned.length<4||(!struggling&&F.n%3===0))){item=newOnes[0];isNew=true;}
  else if(due.length){const sorted=fresh(due).slice().sort((x,y)=>((S.cards[y.id].miss||0)-(S.cards[x.id].miss||0)));
    item=sorted[Math.floor(Math.random()*Math.min(sorted.length,4))];}
  else if(learned.length){const pool2=fresh(learned);item=pool2[Math.floor(Math.random()*pool2.length)];}
  else{$('#flowStage').innerHTML='<div class="flash"><div class="tr">🎉</div><h2>Harika!</h2><p class="muted">You’ve learned every word — reviews will keep them sharp.</p></div>';return;}
  rec.push(item.id);if(rec.length>8)rec.shift();
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
  if(ok){buzz(12);F.combo++;snd('ok',comboBoost(F.combo));F.best=Math.max(F.best,F.combo);const gain=4+Math.min(F.combo,8);F.xp+=gain;xpPop(gain,F.combo);addXp(gain,mod);gradeCard(item.id,F.combo>3?3:2);c.miss=Math.max(0,(c.miss||0)-1);
    if(F.chType===4)S.writes=(S.writes||0)+1;}
  else{buzz([50,40,80]);const lost=F.combo;F.combo=0;c.miss=(c.miss||0)+1;gradeCard(item.id,0);
    if(lost>=5){snd('break');shake();toast('💔 COMBO LOST — '+lost+'🔥 gone');}else snd('no');}
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
  if(flow&&flow.mode==='blitz'&&v!=='practice'){clearInterval(blitzTimer);flow=null;} // leaving blitz forfeits the run
  if(v==='dash')renderDash();if(v==='quest')renderQuest();if(v==='flow'){if(!F)renderFlowHome();}if(v==='plan'){flow=null;$('#planStage').innerHTML='';renderPlan();}if(v==='learn'){flow=null;renderUnits();$('#glStage').innerHTML='';renderSchool();}if(v==='practice'){if(!flow)renderPracticeHome();}if(v==='exams'){flow=null;$('#lexStage').innerHTML='';renderExams();}if(v==='badges')renderBadges();}
$$('nav.tabs button').forEach(b=>b.onclick=()=>switchView(b.dataset.v));
$('#dashFlow').onclick=startFlow;
$('#kpiBadges').onclick=()=>switchView('badges');
$('#kpiExams').onclick=()=>switchView('exams');
$('#helloQuest').onclick=()=>switchView('quest');
$('#sndChip').onclick=toggleSnd;
$('#sndChip').textContent=SND.on?'🔊':'🔇';
$('#ntfChip').onclick=askNotif;
$('#ntfChip').textContent=notifOK()?'🔔':'🔕';
checkNotif();
const __ntfIv=setInterval(()=>checkNotif(),60000);
if(__ntfIv&&__ntfIv.unref)__ntfIv.unref();
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
  ['xp','bestStreak','streak','freezes','diff','lessons','reviews','quiz','questsDone','listen','speak','chests','cultureN','boostUntil','writes','reads','matchN','sentN']
    .forEach(k=>m[k]=Math.max(a[k]||0,b[k]||0));
  m.suffixN=Math.max(a.suffixN||0,b.suffixN||0);
  m.read=Object.assign({},a.read||{},b.read||{});
  m.certs=Object.assign({},a.certs||{},b.certs||{});
  m.lexams={};
  new Set([...Object.keys(a.lexams||{}),...Object.keys(b.lexams||{})])
    .forEach(k=>m.lexams[k]=Math.max((a.lexams||{})[k]||0,(b.lexams||{})[k]||0));
  m.blitz={best:Math.max((a.blitz||{}).best||0,(b.blitz||{}).best||0),
           bestL:Math.max((a.blitz||{}).bestL||0,(b.blitz||{}).bestL||0),
           bestT:Math.max((a.blitz||{}).bestT||0,(b.blitz||{}).bestT||0),
           plays:Math.max((a.blitz||{}).plays||0,(b.blitz||{}).plays||0)};
  m.gl=Object.assign({},a.gl||{},b.gl||{});
  m.plan=Object.assign({},a.plan||{},b.plan||{});
  m.planStart=(a.planStart&&b.planStart)?(a.planStart<b.planStart?a.planStart:b.planStart):(a.planStart||b.planStart||null);
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
