/* Sightfeast site: language switch, flap turns and the swipe demo. No dependencies, no tracking. */
(function () {
  'use strict';

  var LANGS = ['en', 'tr', 'fr', 'it', 'es'];
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var T = {
    en: {
      'meta.title': 'Sightfeast: swipe your way through a trip',
      skip: 'Skip to content',
      lang: 'Language',
      'nav.how': 'How it works',
      'nav.coverage': 'Cities',
      'nav.sources': 'Sources',
      'hero.title': 'Swipe your way through a trip',
      'hero.lead':
        'Pick a city, then say yes or no to one real place at a time. Every yes lands on your map, and one tap turns the list into a route in Google Maps.',
      'launch.soon': 'Soon',
      'launch.languages': 'Languages',
      'cta.notify': 'Tell me when it launches',
      'cta.how': 'How it works',
      'board.type': 'Type',
      'board.admission': 'Admission',
      'board.distance': 'Distance',
      'board.paid': 'Paid',
      'act.skip': 'Skip',
      'act.like': 'Add to trip',
      'stamp.like': 'Add',
      'stamp.skip': 'Skip',
      'demo.trip': 'Your trip',
      'demo.caption': 'Four of the 5,905 places in the app. Try the buttons, or drag the card. Photos: Wikimedia Commons, credits below.',
      'demo.endNote': 'In the app they go straight onto the map, ready for a route.',
      'demo.replay': 'Play again',
      'how.title': 'From a swipe to a route',
      'how.intro':
        'A decision deck, not a guidebook. You choose one place at a time, and your choices become the map and the route with no extra step.',
      'how.discover': 'Discover places',
      'how.discoverBody':
        'Swipe right on the sights you want to see. Each card is a real place with its Wikipedia summary, photos and, where the official site lists one, the ticket price.',
      'how.eat': 'Taste local dishes',
      'how.eatBody':
        '381 dishes from seven countries, from simit to okonomiyaki, each with a quick way to find where to try it in your city.',
      'how.route': 'Route in one tap',
      'how.routeBody':
        'Your picks go on the map. Split them into days, let Sightfeast put the stops in a sensible order, and start the route in Google Maps.',
      'how.country': 'Know the country',
      'how.countryBody':
        'Currency and exchange rate, emergency numbers, plug type, tipping, card or cash, plus the weather and public holidays for your travel dates.',
      'how.friend': 'Plan with a friend',
      'how.friendBody':
        'Swap codes with a friend, swipe the same city on your own phones, and see the places you both picked. No account needed.',
      'coverage.title': 'Seven countries, 105 cities',
      'coverage.intro':
        'Every city ships inside the app with at least 30 places, so the deck opens at once, even on a slow connection.',
      'coverage.code': 'Code',
      'coverage.country': 'Country',
      'coverage.cities': 'Cities',
      'coverage.places': 'Places',
      'coverage.dishes': 'Dishes',
      'coverage.total': 'Total',
      'coverage.note':
        'Places come from Wikidata, ranked by how many Wikipedia languages write about them. Türkiye, France, Italy, Spain, Greece, Germany and Japan.',
      'sources.title': 'Only what can be sourced',
      'sources.intro':
        'No made-up ratings or reviews. Every fact in the app comes from a public source, and ticket prices show the day they were checked.',
      'sources.descriptions': 'Descriptions',
      'sources.descriptionsBody': 'Wikipedia, in your language when it exists',
      'sources.photos': 'Photos',
      'sources.photosBody': "Wikimedia Commons, with the photographer's licence",
      'sources.places': 'Places',
      'sources.venues': 'Food venues',
      'sources.venuesBody': 'OpenStreetMap contributors',
      'sources.admission': 'Admission',
      'sources.admissionBody': 'The official ticket page, with the date it was checked. Louvre: €22–32, checked 7 October 2026.',
      'sources.weather': 'Weather',
      'sources.holidays': 'Public holidays',
      'sources.rates': 'Exchange rates',
      'sources.ratesBody': 'European Central Bank, via Frankfurter',
      'closing.title': 'Boarding soon on <span lang="en">iOS</span> and <span lang="en">Android</span>',
      'closing.intro': 'Sightfeast is in its final round of testing. Write to us and we will send you one email when it launches.',
      'footer.privacy': 'Privacy policy',
      'footer.credits': 'Credits',
      'footer.cropped': 'Photos cropped to the card format.',
      'footer.fonts': 'Typeface: Barlow by Jeremy Tribby,',
      'privacy.title': 'Privacy policy',
      'privacy.meta': 'Sightfeast privacy policy',
      'privacy.updated': 'Updated',
      'privacy.contact': 'Contact',
      'privacy.onlyIn': '',
      saved: function (n) {
        return n === 1 ? '1 place saved' : n + ' places saved';
      },
    },
    tr: {
      'meta.title': 'Sightfeast: kaydırarak gezini planla',
      skip: 'İçeriğe geç',
      lang: 'Dil',
      'nav.how': 'Nasıl çalışır',
      'nav.coverage': 'Şehirler',
      'nav.sources': 'Kaynaklar',
      'hero.title': 'Kaydırarak gezini planla',
      'hero.lead':
        'Bir şehir seç, sonra gerçek yerlere tek tek evet ya da hayır de. Her evet haritana düşer, tek dokunuşla liste Google Maps’te bir rotaya dönüşür.',
      'launch.soon': 'Yakında',
      'launch.languages': 'Dil',
      'cta.notify': 'Çıkınca haber ver',
      'cta.how': 'Nasıl çalışır',
      'board.type': 'Tür',
      'board.admission': 'Giriş',
      'board.distance': 'Mesafe',
      'board.paid': 'Ücretli',
      'act.skip': 'Geç',
      'act.like': 'Gezime ekle',
      'stamp.like': 'Ekle',
      'stamp.skip': 'Geç',
      'demo.trip': 'Gezin',
      'demo.caption': 'Uygulamadaki 5.905 yerden dördü. Butonları dene ya da kartı sürükle. Fotoğraflar: Wikimedia Commons, künyeler aşağıda.',
      'demo.endNote': 'Uygulamada doğrudan haritaya düşerler, rotaya hazır.',
      'demo.replay': 'Yeniden oynat',
      'how.title': 'Kaydırmaktan rotaya',
      'how.intro':
        'Bir rehber kitap değil, bir karar destesi. Yerleri tek tek seçersin, seçtiklerin ek bir adım olmadan haritaya ve rotaya dönüşür.',
      'how.discover': 'Yerleri keşfet',
      'how.discoverBody':
        'Görmek istediğin yerlere sağa kaydır. Her kart gerçek bir yer: Wikipedia özeti, fotoğrafları ve resmî sitesi yayımlıyorsa bilet fiyatı.',
      'how.eat': 'Yerel lezzetleri tat',
      'how.eatBody':
        'Simitten okonomiyakiye yedi ülkeden 381 yemek; her birini şehrinde nerede deneyeceğini hızlıca bulursun.',
      'how.route': 'Tek dokunuşla rota',
      'how.routeBody':
        'Seçtiklerin haritaya düşer. Günlere böl, durakları Sightfeast mantıklı bir sıraya koysun, rotayı Google Maps’te başlat.',
      'how.country': 'Ülkeyi tanı',
      'how.countryBody':
        'Para birimi ve döviz kuru, acil numaralar, priz tipi, bahşiş, kart mı nakit mi; gezi tarihlerin için hava durumu ve resmî tatiller.',
      'how.friend': 'Arkadaşınla planla',
      'how.friendBody':
        'Arkadaşınla kod değiş, aynı şehri kendi telefonlarınızda kaydırın, ikinizin de seçtiği yerleri görün. Hesap gerekmez.',
      'coverage.title': 'Yedi ülke, 105 şehir',
      'coverage.intro':
        'Her şehir en az 30 yerle uygulamanın içinde gelir; deste yavaş bağlantıda bile hemen açılır.',
      'coverage.code': 'Kod',
      'coverage.country': 'Ülke',
      'coverage.cities': 'Şehir',
      'coverage.places': 'Yer',
      'coverage.dishes': 'Yemek',
      'coverage.total': 'Toplam',
      'coverage.note':
        'Yerler Wikidata’dan gelir ve kaç dilde Wikipedia maddesi olduğuna göre sıralanır. Türkiye, Fransa, İtalya, İspanya, Yunanistan, Almanya ve Japonya.',
      'sources.title': 'Yalnızca kaynağı olan bilgi',
      'sources.intro':
        'Uydurma puan ya da yorum yok. Uygulamadaki her bilgi açık bir kaynaktan gelir, bilet fiyatları kontrol edildiği tarihle görünür.',
      'sources.descriptions': 'Açıklamalar',
      'sources.descriptionsBody': 'Wikipedia, varsa senin dilinde',
      'sources.photos': 'Fotoğraflar',
      'sources.photosBody': 'Wikimedia Commons, fotoğrafçının lisansıyla',
      'sources.places': 'Yerler',
      'sources.venues': 'Yemek mekânları',
      'sources.venuesBody': 'OpenStreetMap katkıcıları',
      'sources.admission': 'Giriş ücreti',
      'sources.admissionBody': 'Resmî bilet sayfası, kontrol tarihiyle. Louvre: 22–32 €, 7 Ekim 2026’da kontrol edildi.',
      'sources.weather': 'Hava durumu',
      'sources.holidays': 'Resmî tatiller',
      'sources.rates': 'Döviz kurları',
      'sources.ratesBody': 'Avrupa Merkez Bankası, Frankfurter aracılığıyla',
      'closing.title': 'Yakında <span lang="en">iOS</span> ve <span lang="en">Android</span>’de',
      'closing.intro': 'Sightfeast son test aşamasında. Bize yaz, çıktığında sana tek bir e-posta gönderelim.',
      'footer.privacy': 'Gizlilik politikası',
      'footer.credits': 'Künyeler',
      'footer.cropped': 'Fotoğraflar kart biçimine kırpıldı.',
      'footer.fonts': 'Yazı karakteri: Barlow, Jeremy Tribby,',
      'privacy.title': 'Gizlilik politikası',
      'privacy.meta': 'Sightfeast gizlilik politikası',
      'privacy.updated': 'Güncelleme',
      'privacy.contact': 'İletişim',
      'privacy.onlyIn': '',
      saved: function (n) {
        return n + ' yer kaydedildi';
      },
    },
    fr: {
      'meta.title': 'Sightfeast : composez votre voyage en balayant',
      skip: 'Aller au contenu',
      lang: 'Langue',
      'nav.how': 'Comment ça marche',
      'nav.coverage': 'Villes',
      'nav.sources': 'Sources',
      'hero.title': 'Composez votre voyage en balayant',
      'hero.lead':
        'Choisissez une ville, puis dites oui ou non à un vrai lieu à la fois. Chaque oui arrive sur votre carte, et d’un geste la liste devient un itinéraire dans Google Maps.',
      'launch.soon': 'Bientôt',
      'launch.languages': 'Langues',
      'cta.notify': 'Prévenez-moi au lancement',
      'cta.how': 'Comment ça marche',
      'board.type': 'Type',
      'board.admission': 'Entrée',
      'board.distance': 'Distance',
      'board.paid': 'Payant',
      'act.skip': 'Passer',
      'act.like': 'Ajouter au voyage',
      'stamp.like': 'Ajouter',
      'stamp.skip': 'Passer',
      'demo.trip': 'Votre voyage',
      'demo.caption': 'Quatre des 5 905 lieux de l’app. Essayez les boutons ou faites glisser la carte. Photos : Wikimedia Commons, crédits en bas de page.',
      'demo.endNote': 'Dans l’app, ils arrivent directement sur la carte, prêts pour un itinéraire.',
      'demo.replay': 'Rejouer',
      'how.title': 'Du geste à l’itinéraire',
      'how.intro':
        'Un jeu de décisions, pas un guide. Vous choisissez un lieu à la fois, et vos choix deviennent la carte et l’itinéraire, sans étape de plus.',
      'how.discover': 'Découvrez des lieux',
      'how.discoverBody':
        'Balayez à droite les sites que vous voulez voir. Chaque carte est un vrai lieu, avec son résumé Wikipédia, ses photos et, quand le site officiel l’indique, le prix du billet.',
      'how.eat': 'Goûtez les plats locaux',
      'how.eatBody':
        '381 plats de sept pays, du simit à l’okonomiyaki, avec un moyen rapide de trouver où les goûter dans votre ville.',
      'how.route': 'Un itinéraire en un geste',
      'how.routeBody':
        'Vos choix arrivent sur la carte. Répartissez-les sur plusieurs jours, laissez Sightfeast ordonner les étapes, puis lancez l’itinéraire dans Google Maps.',
      'how.country': 'Connaître le pays',
      'how.countryBody':
        'Monnaie et taux de change, numéros d’urgence, type de prise, pourboire, carte ou espèces, plus la météo et les jours fériés à vos dates.',
      'how.friend': 'À deux',
      'how.friendBody':
        'Échangez un code avec un ami, balayez la même ville chacun sur votre téléphone, et voyez les lieux que vous avez choisis tous les deux. Sans compte.',
      'coverage.title': 'Sept pays, 105 villes',
      'coverage.intro':
        'Chaque ville est livrée dans l’app avec au moins 30 lieux : le jeu s’ouvre tout de suite, même avec une connexion lente.',
      'coverage.code': 'Code',
      'coverage.country': 'Pays',
      'coverage.cities': 'Villes',
      'coverage.places': 'Lieux',
      'coverage.dishes': 'Plats',
      'coverage.total': 'Total',
      'coverage.note':
        'Les lieux viennent de Wikidata, classés selon le nombre de langues de Wikipédia qui en parlent. Turquie, France, Italie, Espagne, Grèce, Allemagne et Japon.',
      'sources.title': 'Seulement ce qui est sourcé',
      'sources.intro':
        'Aucune note ni avis inventé. Chaque information de l’app vient d’une source publique, et les prix des billets indiquent leur date de vérification.',
      'sources.descriptions': 'Descriptions',
      'sources.descriptionsBody': 'Wikipédia, dans votre langue quand elle existe',
      'sources.photos': 'Photos',
      'sources.photosBody': 'Wikimedia Commons, avec la licence du photographe',
      'sources.places': 'Lieux',
      'sources.venues': 'Restaurants',
      'sources.venuesBody': 'Contributeurs d’OpenStreetMap',
      'sources.admission': 'Entrée',
      'sources.admissionBody': 'La billetterie officielle, avec la date de vérification. Louvre : 22–32 €, vérifié le 7 octobre 2026.',
      'sources.weather': 'Météo',
      'sources.holidays': 'Jours fériés',
      'sources.rates': 'Taux de change',
      'sources.ratesBody': 'Banque centrale européenne, via Frankfurter',
      'closing.title': 'Bientôt sur <span lang="en">iOS</span> et <span lang="en">Android</span>',
      'closing.intro': 'Sightfeast est dans sa dernière phase de test. Écrivez-nous et nous vous enverrons un seul e-mail au lancement.',
      'footer.privacy': 'Politique de confidentialité',
      'footer.credits': 'Crédits',
      'footer.cropped': 'Photos recadrées au format carte.',
      'footer.fonts': 'Police : Barlow, de Jeremy Tribby,',
      'privacy.title': 'Politique de confidentialité',
      'privacy.meta': 'Politique de confidentialité de Sightfeast',
      'privacy.updated': 'Mise à jour',
      'privacy.contact': 'Contact',
      'privacy.onlyIn': 'Cette politique est disponible en anglais et en turc. Voici la version anglaise.',
      saved: function (n) {
        return n <= 1 ? n + ' lieu enregistré' : n + ' lieux enregistrés';
      },
    },
    it: {
      'meta.title': 'Sightfeast: organizza il viaggio scorrendo',
      skip: 'Vai al contenuto',
      lang: 'Lingua',
      'nav.how': 'Come funziona',
      'nav.coverage': 'Città',
      'nav.sources': 'Fonti',
      'hero.title': 'Organizza il viaggio scorrendo',
      'hero.lead':
        'Scegli una città, poi di’ sì o no a un luogo reale alla volta. Ogni sì finisce sulla tua mappa e con un tocco la lista diventa un percorso in Google Maps.',
      'launch.soon': 'Presto',
      'launch.languages': 'Lingue',
      'cta.notify': 'Avvisami al lancio',
      'cta.how': 'Come funziona',
      'board.type': 'Tipo',
      'board.admission': 'Ingresso',
      'board.distance': 'Distanza',
      'board.paid': 'A pagamento',
      'act.skip': 'Salta',
      'act.like': 'Aggiungi al viaggio',
      'stamp.like': 'Aggiungi',
      'stamp.skip': 'Salta',
      'demo.trip': 'Il tuo viaggio',
      'demo.caption': 'Quattro dei 5.905 luoghi dell’app. Prova i pulsanti o trascina la carta. Foto: Wikimedia Commons, crediti in fondo.',
      'demo.endNote': 'Nell’app finiscono subito sulla mappa, pronti per un percorso.',
      'demo.replay': 'Riproduci',
      'how.title': 'Da un gesto a un percorso',
      'how.intro':
        'Un mazzo di decisioni, non una guida. Scegli un luogo alla volta e le tue scelte diventano mappa e percorso, senza passaggi in più.',
      'how.discover': 'Scopri i luoghi',
      'how.discoverBody':
        'Scorri a destra i luoghi che vuoi vedere. Ogni carta è un luogo reale, con il riassunto di Wikipedia, le foto e, se il sito ufficiale lo indica, il prezzo del biglietto.',
      'how.eat': 'Assaggia i piatti locali',
      'how.eatBody':
        '381 piatti da sette paesi, dal simit all’okonomiyaki, con un modo rapido per trovare dove provarli nella tua città.',
      'how.route': 'Un percorso con un tocco',
      'how.routeBody':
        'Le tue scelte finiscono sulla mappa. Dividile in giorni, lascia che Sightfeast metta le tappe in un ordine sensato e avvia il percorso in Google Maps.',
      'how.country': 'Conosci il paese',
      'how.countryBody':
        'Valuta e cambio, numeri di emergenza, tipo di presa, mance, carta o contanti, più meteo e festività nazionali per le date del viaggio.',
      'how.friend': 'Organizza con un amico',
      'how.friendBody':
        'Scambiate un codice, scorrete la stessa città ognuno sul proprio telefono e guardate i luoghi scelti da entrambi. Nessun account.',
      'coverage.title': 'Sette paesi, 105 città',
      'coverage.intro':
        'Ogni città arriva dentro l’app con almeno 30 luoghi, così il mazzo si apre subito, anche con una connessione lenta.',
      'coverage.code': 'Codice',
      'coverage.country': 'Paese',
      'coverage.cities': 'Città',
      'coverage.places': 'Luoghi',
      'coverage.dishes': 'Piatti',
      'coverage.total': 'Totale',
      'coverage.note':
        'I luoghi vengono da Wikidata, ordinati per numero di lingue di Wikipedia che ne parlano. Turchia, Francia, Italia, Spagna, Grecia, Germania e Giappone.',
      'sources.title': 'Solo ciò che ha una fonte',
      'sources.intro':
        'Nessun voto o recensione inventati. Ogni informazione dell’app viene da una fonte pubblica e i prezzi dei biglietti mostrano il giorno del controllo.',
      'sources.descriptions': 'Descrizioni',
      'sources.descriptionsBody': 'Wikipedia, nella tua lingua quando esiste',
      'sources.photos': 'Foto',
      'sources.photosBody': 'Wikimedia Commons, con la licenza del fotografo',
      'sources.places': 'Luoghi',
      'sources.venues': 'Locali',
      'sources.venuesBody': 'Contributori di OpenStreetMap',
      'sources.admission': 'Ingresso',
      'sources.admissionBody': 'La pagina ufficiale dei biglietti, con la data del controllo. Louvre: 22–32 €, controllato il 7 ottobre 2026.',
      'sources.weather': 'Meteo',
      'sources.holidays': 'Festività',
      'sources.rates': 'Tassi di cambio',
      'sources.ratesBody': 'Banca centrale europea, tramite Frankfurter',
      'closing.title': 'Presto su <span lang="en">iOS</span> e <span lang="en">Android</span>',
      'closing.intro': 'Sightfeast è nell’ultima fase di test. Scrivici e ti manderemo una sola e-mail al lancio.',
      'footer.privacy': 'Informativa sulla privacy',
      'footer.credits': 'Crediti',
      'footer.cropped': 'Foto ritagliate nel formato della carta.',
      'footer.fonts': 'Carattere: Barlow di Jeremy Tribby,',
      'privacy.title': 'Informativa sulla privacy',
      'privacy.meta': 'Informativa sulla privacy di Sightfeast',
      'privacy.updated': 'Aggiornata',
      'privacy.contact': 'Contatto',
      'privacy.onlyIn': 'Questa informativa è disponibile in inglese e in turco. Qui sotto la versione inglese.',
      saved: function (n) {
        return n === 1 ? '1 luogo salvato' : n + ' luoghi salvati';
      },
    },
    es: {
      'meta.title': 'Sightfeast: planifica tu viaje deslizando',
      skip: 'Ir al contenido',
      lang: 'Idioma',
      'nav.how': 'Cómo funciona',
      'nav.coverage': 'Ciudades',
      'nav.sources': 'Fuentes',
      'hero.title': 'Planifica tu viaje deslizando',
      'hero.lead':
        'Elige una ciudad y di sí o no a un lugar real cada vez. Cada sí aparece en tu mapa, y con un toque la lista se convierte en una ruta en Google Maps.',
      'launch.soon': 'Pronto',
      'launch.languages': 'Idiomas',
      'cta.notify': 'Avísame cuando salga',
      'cta.how': 'Cómo funciona',
      'board.type': 'Tipo',
      'board.admission': 'Entrada',
      'board.distance': 'Distancia',
      'board.paid': 'De pago',
      'act.skip': 'Omitir',
      'act.like': 'Añadir al viaje',
      'stamp.like': 'Añadir',
      'stamp.skip': 'Omitir',
      'demo.trip': 'Tu viaje',
      'demo.caption': 'Cuatro de los 5905 lugares de la app. Prueba los botones o arrastra la tarjeta. Fotos: Wikimedia Commons, créditos abajo.',
      'demo.endNote': 'En la app van directos al mapa, listos para una ruta.',
      'demo.replay': 'Repetir',
      'how.title': 'Del gesto a la ruta',
      'how.intro':
        'Una baraja de decisiones, no una guía. Eliges un lugar cada vez y tus elecciones se convierten en el mapa y la ruta, sin pasos de más.',
      'how.discover': 'Descubre lugares',
      'how.discoverBody':
        'Desliza a la derecha los sitios que quieras ver. Cada tarjeta es un lugar real, con su resumen de Wikipedia, sus fotos y, si la web oficial lo publica, el precio de la entrada.',
      'how.eat': 'Prueba los platos locales',
      'how.eatBody':
        '381 platos de siete países, del simit al okonomiyaki, con una forma rápida de encontrar dónde probarlos en tu ciudad.',
      'how.route': 'Una ruta con un toque',
      'how.routeBody':
        'Tus elegidos van al mapa. Repártelos en días, deja que Sightfeast ordene las paradas con sentido y empieza la ruta en Google Maps.',
      'how.country': 'Conoce el país',
      'how.countryBody':
        'Moneda y tipo de cambio, números de emergencia, tipo de enchufe, propinas, tarjeta o efectivo, además del tiempo y los festivos de tus fechas.',
      'how.friend': 'Planifica con un amigo',
      'how.friendBody':
        'Intercambiad un código, deslizad la misma ciudad cada uno en su móvil y ved los lugares que habéis elegido los dos. Sin cuenta.',
      'coverage.title': 'Siete países, 105 ciudades',
      'coverage.intro':
        'Cada ciudad viene dentro de la app con al menos 30 lugares, así la baraja se abre al instante, incluso con una conexión lenta.',
      'coverage.code': 'Código',
      'coverage.country': 'País',
      'coverage.cities': 'Ciudades',
      'coverage.places': 'Lugares',
      'coverage.dishes': 'Platos',
      'coverage.total': 'Total',
      'coverage.note':
        'Los lugares vienen de Wikidata, ordenados según cuántas ediciones de Wikipedia hablan de ellos. Turquía, Francia, Italia, España, Grecia, Alemania y Japón.',
      'sources.title': 'Solo lo que tiene fuente',
      'sources.intro':
        'Sin valoraciones ni reseñas inventadas. Cada dato de la app viene de una fuente pública, y los precios de las entradas muestran el día en que se comprobaron.',
      'sources.descriptions': 'Descripciones',
      'sources.descriptionsBody': 'Wikipedia, en tu idioma cuando existe',
      'sources.photos': 'Fotos',
      'sources.photosBody': 'Wikimedia Commons, con la licencia del fotógrafo',
      'sources.places': 'Lugares',
      'sources.venues': 'Locales',
      'sources.venuesBody': 'Colaboradores de OpenStreetMap',
      'sources.admission': 'Entrada',
      'sources.admissionBody': 'La página oficial de entradas, con la fecha de comprobación. Louvre: 22–32 €, comprobado el 7 de octubre de 2026.',
      'sources.weather': 'Tiempo',
      'sources.holidays': 'Festivos',
      'sources.rates': 'Tipos de cambio',
      'sources.ratesBody': 'Banco Central Europeo, a través de Frankfurter',
      'closing.title': 'Pronto en <span lang="en">iOS</span> y <span lang="en">Android</span>',
      'closing.intro': 'Sightfeast está en su última fase de pruebas. Escríbenos y te enviaremos un solo correo cuando salga.',
      'footer.privacy': 'Política de privacidad',
      'footer.credits': 'Créditos',
      'footer.cropped': 'Fotos recortadas al formato de tarjeta.',
      'footer.fonts': 'Tipografía: Barlow, de Jeremy Tribby,',
      'privacy.title': 'Política de privacidad',
      'privacy.meta': 'Política de privacidad de Sightfeast',
      'privacy.updated': 'Actualizada',
      'privacy.contact': 'Contacto',
      'privacy.onlyIn': 'Esta política está disponible en inglés y en turco. A continuación, la versión inglesa.',
      saved: function (n) {
        return n === 1 ? '1 lugar guardado' : n + ' lugares guardados';
      },
    },
  };

  var COUNTRIES = {
    TR: { tr: 'Türkiye', en: 'Türkiye', fr: 'Turquie', it: 'Turchia', es: 'Turquía' },
    FR: { tr: 'Fransa', en: 'France', fr: 'France', it: 'Francia', es: 'Francia' },
    IT: { tr: 'İtalya', en: 'Italy', fr: 'Italie', it: 'Italia', es: 'Italia' },
    ES: { tr: 'İspanya', en: 'Spain', fr: 'Espagne', it: 'Spagna', es: 'España' },
    GR: { tr: 'Yunanistan', en: 'Greece', fr: 'Grèce', it: 'Grecia', es: 'Grecia' },
    DE: { tr: 'Almanya', en: 'Germany', fr: 'Allemagne', it: 'Germania', es: 'Alemania' },
    JP: { tr: 'Japonya', en: 'Japan', fr: 'Japon', it: 'Giappone', es: 'Japón' },
  };

  // Four real places from the app's bundled seed (sights.json, admissions.json, categories.json).
  var PLACES = [
    {
      img: 'img/galata-tower-card.jpg',
      names: { tr: 'Galata Kulesi', en: 'Galata Tower', fr: 'Tour de Galata', it: 'Torre di Galata', es: 'Torre de Gálata' },
      city: { tr: 'İstanbul', en: 'Istanbul', fr: 'Istanbul', it: 'Istanbul', es: 'Estambul' },
      type: { tr: 'Müzeler', en: 'Museums', fr: 'Musées', it: 'Musei', es: 'Museos' },
      admission: null,
      km: 2.0,
    },
    {
      img: 'img/louvre-card.jpg',
      names: { tr: 'Louvre Müzesi', en: 'Louvre Museum', fr: 'Musée du Louvre', it: 'Museo del Louvre', es: 'Museo del Louvre' },
      city: { tr: 'Paris', en: 'Paris', fr: 'Paris', it: 'Parigi', es: 'París' },
      type: { tr: 'Müzeler', en: 'Museums', fr: 'Musées', it: 'Musei', es: 'Museos' },
      admission: { min: 22, max: 32, currency: 'EUR' },
      km: 1.3,
    },
    {
      img: 'img/colosseum-card.jpg',
      names: { tr: 'Kolezyum', en: 'Colosseum', fr: 'Colisée', it: 'Colosseo', es: 'Coliseo' },
      city: { tr: 'Roma', en: 'Rome', fr: 'Rome', it: 'Roma', es: 'Roma' },
      type: { tr: 'Tarihi yerler', en: 'Historical sites', fr: 'Sites historiques', it: 'Siti storici', es: 'Sitios históricos' },
      admission: { min: 18, currency: 'EUR' },
      km: 1.4,
    },
    {
      img: 'img/kinkaku-ji-card.jpg',
      names: { tr: 'Kinkaku-ji', en: 'Kinkaku-ji Temple', fr: 'Kinkaku-ji', it: 'Kinkaku-ji', es: 'Kinkaku-ji' },
      city: { tr: 'Kyoto', en: 'Kyoto', fr: 'Kyoto', it: 'Kyoto', es: 'Kioto' },
      type: { tr: 'Dini yapılar', en: 'Religious sites', fr: 'Lieux de culte', it: 'Luoghi di culto', es: 'Lugares de culto' },
      admission: { min: 500, currency: 'JPY' },
      km: 4.8,
    },
  ];
  var SCRIPT = ['like', 'like', 'skip', 'like'];

  var lang = pickLang();

  function storageGet() {
    try {
      return window.localStorage.getItem('sightfeast-site-lang');
    } catch (e) {
      return null;
    }
  }
  function storageSet(value) {
    try {
      window.localStorage.setItem('sightfeast-site-lang', value);
    } catch (e) {
      /* private mode: the choice lasts this visit only */
    }
  }

  function pickLang() {
    var fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (fromUrl && LANGS.indexOf(fromUrl) >= 0) return fromUrl;
    var saved = storageGet();
    if (saved && LANGS.indexOf(saved) >= 0) return saved;
    var prefs = navigator.languages || [navigator.language || 'en'];
    for (var i = 0; i < prefs.length; i++) {
      var code = String(prefs[i]).slice(0, 2).toLowerCase();
      if (LANGS.indexOf(code) >= 0) return code;
    }
    return 'en';
  }

  function t(key) {
    var table = T[lang] || T.en;
    return table[key] !== undefined ? table[key] : T.en[key];
  }

  // ---------- Flap turn: fold down, take the new value, fold back up ----------

  // Timers, not animation promises, carry the value swap, so the value always lands even when the
  // animation is throttled (background tab, headless capture). A newer turn replaces a pending one.
  var HALF = 110;
  var STAGGER = 70;
  function flip(face, value, index) {
    var current = face._flapPending ? face._flapTarget : face.textContent;
    if (current === value) return Promise.resolve();
    face._flapTarget = value;
    face._flapPending = true;
    clearTimeout(face._flapTimer);
    clearTimeout(face._flapDone);
    if (reduceMotion) {
      face._flapPending = false;
      face.textContent = value;
      face.style.transform = '';
      return Promise.resolve();
    }
    var delay = (index || 0) * STAGGER;
    return new Promise(function (resolve) {
      face.style.transition = 'transform ' + HALF + 'ms cubic-bezier(0.55, 0, 1, 0.45) ' + delay + 'ms';
      face.style.transform = 'rotateX(90deg)';
      face._flapTimer = setTimeout(function () {
        face.style.transition = 'none';
        face.textContent = value;
        face.style.transform = 'rotateX(-90deg)';
        void face.offsetHeight;
        face.style.transition = 'transform ' + HALF + 'ms cubic-bezier(0, 0.55, 0.45, 1)';
        face.style.transform = '';
        face._flapPending = false;
        face._flapDone = setTimeout(resolve, HALF);
      }, delay + HALF);
    });
  }

  // ---------- Formatting ----------

  function formatNumber(n) {
    try {
      return new Intl.NumberFormat(lang).format(n);
    } catch (e) {
      return String(n);
    }
  }
  function formatAdmission(adm) {
    if (!adm) return t('board.paid');
    try {
      var nf = new Intl.NumberFormat(lang, { style: 'currency', currency: adm.currency, maximumFractionDigits: 0 });
      if (adm.max && adm.max !== adm.min) {
        return nf.formatRange ? nf.formatRange(adm.min, adm.max) : nf.format(adm.min) + '–' + nf.format(adm.max);
      }
      return nf.format(adm.min);
    } catch (e) {
      return adm.min + (adm.max ? '–' + adm.max : '') + ' ' + adm.currency;
    }
  }
  function formatKm(km) {
    try {
      return new Intl.NumberFormat(lang, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(km) + ' km';
    } catch (e) {
      return km.toFixed(1) + ' km';
    }
  }

  // ---------- Language ----------

  function applyLang(next, animate) {
    lang = next;
    document.documentElement.lang = lang;
    var titleKey = document.body.getAttribute('data-title-key') || 'meta.title';
    document.title = t(titleKey);

    var nodes = document.querySelectorAll('[data-t]');
    var turn = 0;
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var value = t(node.getAttribute('data-t'));
      if (typeof value !== 'string') continue;
      if (node.hasAttribute('data-t-html')) {
        node.innerHTML = value;
      } else if (animate && node.classList.contains('face') && isVisible(node)) {
        flip(node, value, turn++ % 6);
      } else {
        node.textContent = value;
      }
    }
    var labelled = document.querySelectorAll('[data-t-aria]');
    for (var j = 0; j < labelled.length; j++) {
      labelled[j].setAttribute('aria-label', t(labelled[j].getAttribute('data-t-aria')));
    }
    var buttons = document.querySelectorAll('.lang button');
    for (var k = 0; k < buttons.length; k++) {
      buttons[k].setAttribute('aria-pressed', String(buttons[k].getAttribute('data-lang') === lang));
    }

    localizeCoverage(animate);
    if (deck) deck.relabel(animate);
    if (window.sightfeastPrivacy) window.sightfeastPrivacy(lang, t);
  }

  function isVisible(el) {
    var r = el.getBoundingClientRect();
    return r.bottom > 0 && r.top < window.innerHeight;
  }

  function bindLangButtons() {
    var buttons = document.querySelectorAll('.lang button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function (event) {
        var next = event.currentTarget.getAttribute('data-lang');
        if (next === lang) return;
        storageSet(next);
        var url = new URL(window.location.href);
        url.searchParams.set('lang', next);
        window.history.replaceState(null, '', url);
        applyLang(next, true);
      });
    }
  }

  // ---------- Brand marquee: flips in from blank flaps on first load ----------

  function runMarquee() {
    var cells = document.querySelectorAll('.marquee .face');
    if (!cells.length || reduceMotion) return;
    for (var i = 0; i < cells.length; i++) cells[i].textContent = '';
    var steps = ['', 'X', 'R', ''];
    Array.prototype.forEach.call(cells, function (face, index) {
      var target = face.parentNode.getAttribute('data-letter');
      var chain = Promise.resolve();
      var seq = steps.slice(0, 1 + ((index + 1) % 3)).concat([target]);
      setTimeout(function () {
        seq.forEach(function (letter) {
          chain = chain.then(function () {
            return flip(face, letter === '' ? ' ' : letter, 0);
          });
        });
      }, 200 + index * 90);
    });
  }

  // ---------- Coverage board ----------

  var coverageShown = false;
  function localizeCoverage(animate) {
    var rows = document.querySelectorAll('[data-country]');
    for (var i = 0; i < rows.length; i++) {
      var code = rows[i].getAttribute('data-country');
      var nameFace = rows[i].querySelector('[data-name]');
      var name = COUNTRIES[code][lang] || COUNTRIES[code].en;
      if (animate && coverageShown && isVisible(nameFace)) flip(nameFace, name, i);
      else nameFace.textContent = name;
    }
    var nums = document.querySelectorAll('[data-n]');
    for (var j = 0; j < nums.length; j++) {
      if (!coverageShown && !reduceMotion && 'IntersectionObserver' in window) {
        nums[j].textContent = '–';
      } else {
        nums[j].textContent = formatNumber(Number(nums[j].getAttribute('data-n')));
      }
    }
  }

  function watchCoverage() {
    var table = document.querySelector('[data-departures]');
    if (!table) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      coverageShown = true;
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        coverageShown = true;
        var rows = table.querySelectorAll('tr');
        Array.prototype.forEach.call(rows, function (row, r) {
          var faces = row.querySelectorAll('[data-n]');
          Array.prototype.forEach.call(faces, function (face, c) {
            setTimeout(function () {
              flip(face, formatNumber(Number(face.getAttribute('data-n'))), c);
            }, r * 90);
          });
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(table);
  }

  // ---------- Swipe demo ----------

  var deck = null;

  function createDeck() {
    var stack = document.querySelector('[data-stack]');
    if (!stack) return null;
    var end = stack.querySelector('[data-end]');
    var endCount = stack.querySelector('[data-end-count]');
    var endList = stack.querySelector('[data-end-list]');
    var replay = stack.querySelector('[data-replay]');
    var tally = document.querySelector('[data-tally]');
    var cols = {
      type: document.querySelector('[data-col="type"]'),
      admission: document.querySelector('[data-col="admission"]'),
      distance: document.querySelector('[data-col="distance"]'),
    };
    var likeBtn = document.querySelector('[data-act="like"]');
    var skipBtn = document.querySelector('[data-act="skip"]');

    var cards = PLACES.map(function (place, i) {
      var card = document.createElement('article');
      card.className = 'card';
      card.style.zIndex = String(PLACES.length - i + 1);
      card.innerHTML =
        '<img alt="" decoding="async"' +
        (i > 1 ? ' loading="lazy"' : '') +
        '>' +
        '<div class="scrim"></div>' +
        '<span class="stamp like"></span><span class="stamp skip"></span>' +
        '<div class="meta"><span class="key"></span><h3 class="name"></h3><p class="city"></p></div>';
      card.querySelector('img').src = place.img;
      stack.appendChild(card);
      return card;
    });

    var index = 0;
    var decisions = [];
    var timer = null;
    var autoplay = true;
    var paused = false;
    var started = false;

    function label(i) {
      var place = PLACES[i];
      var card = cards[i];
      card.querySelector('.key').textContent = place.type[lang];
      card.querySelector('.name').textContent = place.names[lang];
      card.querySelector('.city').textContent = place.city[lang];
      card.querySelector('.stamp.like').textContent = t('stamp.like');
      card.querySelector('.stamp.skip').textContent = t('stamp.skip');
      card.setAttribute('aria-label', place.names[lang] + ', ' + place.city[lang]);
    }

    function boardValues() {
      var place = PLACES[index];
      if (!place) return { type: '–', admission: '–', distance: '–' };
      return { type: place.type[lang], admission: formatAdmission(place.admission), distance: formatKm(place.km) };
    }

    function updateBoard(animate) {
      var v = boardValues();
      var keys = ['type', 'admission', 'distance'];
      keys.forEach(function (key, i) {
        if (animate) flip(cols[key], v[key], i);
        else cols[key].textContent = v[key];
      });
    }

    function liked() {
      return decisions.filter(function (d) {
        return d === 'like';
      }).length;
    }

    function layout() {
      cards.forEach(function (card, i) {
        card.classList.remove('behind', 'hidden', 'out-like', 'out-skip');
        card.style.transform = '';
        if (i < index) card.classList.add(decisions[i] === 'like' ? 'out-like' : 'out-skip');
        else if (i === index + 1) card.classList.add('behind');
        else if (i > index + 1) card.classList.add('hidden');
        card.setAttribute('aria-hidden', String(i !== index));
        card.inert = i !== index;
      });
      var done = index >= cards.length;
      end.classList.toggle('shown', done);
      likeBtn.disabled = done;
      skipBtn.disabled = done;
      if (done) fillEnd();
    }

    function fillEnd() {
      endCount.textContent = t('saved')(liked());
      endList.innerHTML = '';
      decisions.forEach(function (d, i) {
        if (d !== 'like') return;
        var li = document.createElement('li');
        li.className = 'cell';
        var face = document.createElement('span');
        face.className = 'face';
        face.textContent = PLACES[i].names[lang];
        li.appendChild(face);
        endList.appendChild(li);
      });
    }

    function decide(kind, fromUser) {
      if (index >= cards.length) return;
      if (fromUser) stopAutoplay();
      var button = kind === 'like' ? likeBtn : skipBtn;
      button.classList.add('pressed');
      setTimeout(function () {
        button.classList.remove('pressed');
      }, 160);
      decisions[index] = kind;
      index += 1;
      layout();
      updateBoard(true);
      flip(tally, String(liked()), 0);
    }

    function reset() {
      index = 0;
      decisions = [];
      layout();
      updateBoard(true);
      flip(tally, '0', 0);
    }

    function schedule(delay) {
      clearTimeout(timer);
      if (!autoplay || paused) return;
      timer = setTimeout(function () {
        if (!autoplay || paused) return;
        decide(SCRIPT[index], false);
        if (index < cards.length) schedule(2400);
      }, delay);
    }
    function stopAutoplay() {
      autoplay = false;
      clearTimeout(timer);
    }

    likeBtn.addEventListener('click', function () {
      decide('like', true);
    });
    skipBtn.addEventListener('click', function () {
      decide('skip', true);
    });
    replay.addEventListener('click', function () {
      reset();
      autoplay = true;
      schedule(1400);
      likeBtn.focus();
    });

    // Drag the top card like in the app; past the threshold it decides
    stack.addEventListener('pointerdown', function (event) {
      var card = cards[index];
      if (!card || !card.contains(event.target) || event.button > 0) return;
      stopAutoplay();
      var startX = event.clientX;
      var dx = 0;
      card.setPointerCapture(event.pointerId);
      card.style.transition = 'none';
      function move(e) {
        dx = e.clientX - startX;
        card.style.transform = 'translateX(' + dx + 'px) rotate(' + dx / 18 + 'deg)';
        card.querySelector('.stamp.like').style.opacity = String(Math.max(0, Math.min(1, dx / 90)));
        card.querySelector('.stamp.skip').style.opacity = String(Math.max(0, Math.min(1, -dx / 90)));
      }
      function up() {
        card.removeEventListener('pointermove', move);
        card.removeEventListener('pointerup', up);
        card.removeEventListener('pointercancel', up);
        card.style.transition = '';
        card.querySelector('.stamp.like').style.opacity = '';
        card.querySelector('.stamp.skip').style.opacity = '';
        var threshold = stack.clientWidth * 0.35;
        if (Math.abs(dx) > threshold) decide(dx > 0 ? 'like' : 'skip', true);
        else card.style.transform = '';
      }
      card.addEventListener('pointermove', move);
      card.addEventListener('pointerup', up);
      card.addEventListener('pointercancel', up);
    });

    var demo = stack.closest('.demo');
    demo.addEventListener('pointerenter', function () {
      paused = true;
      clearTimeout(timer);
    });
    demo.addEventListener('pointerleave', function () {
      paused = false;
      if (started) schedule(1600);
    });
    demo.addEventListener('focusin', function () {
      paused = true;
      clearTimeout(timer);
    });
    demo.addEventListener('focusout', function (e) {
      if (demo.contains(e.relatedTarget)) return;
      paused = false;
      if (started) schedule(1600);
    });
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) clearTimeout(timer);
      else if (started && !paused) schedule(1600);
    });

    function start() {
      if (started) return;
      started = true;
      schedule(reduceMotion ? 3000 : 1800);
    }
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(
        function (entries) {
          if (entries[0].isIntersecting) {
            io.disconnect();
            start();
          }
        },
        { threshold: 0.5 }
      );
      io.observe(stack);
    } else {
      start();
    }

    cards.forEach(function (card, i) {
      label(i);
    });
    layout();
    updateBoard(false);

    return {
      relabel: function (animate) {
        cards.forEach(function (card, i) {
          label(i);
        });
        updateBoard(animate);
        if (index >= cards.length) fillEnd();
      },
    };
  }

  // ---------- Start ----------

  deck = createDeck();
  bindLangButtons();
  applyLang(lang, false);
  watchCoverage();
  runMarquee();
})();
