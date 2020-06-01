const data = [
  {
    title: 'Lampa',
    description: 'Lampa wisząca FRANZ z mlecznym lub mleczno-różowym kloszem (do wyboru) to przepiękny model, którego unikatowy design harmonijnie łączy nowoczesne wzornictwo ze stylistyką orientalną i romantycznymi akcentami. ',
    price: 559,
    image: 'https://img.shmbk.pl/rimgspr/63792748_pad_223_200_.jpg?scale=canvas',
    category: 'salon'
  },
  {
    title: 'Stolik kawowy',
    description: 'Ten wyjątkowy komplet dwóch stolików kawowych to prawdziwa gratka dla miłośników funkcjonalności i stylu skandynawskiego. Dzięki nim zoptymalizujesz miejsce w pomieszczeniu – mniejszy stolik kawowy bez problemu można umieścić pod większym tak, by w razie wizyty gości wysunąć go i zaskoczyć ich niecodziennym designem.',
    price: 1900,
    image: 'https://img5.shmbk.pl/rimgspr/64266253_pad_253_200_dla-domu-do-salonu-meble-do-salonu-stoliki-i-lawy-do-salonu-zestaw-stolikow-kawowych-kodia-srednica-60-cm-i-80-cm-orzech-czarny.jpg?scale=canvas',
    category: 'salon'
  },
  {
    title: 'Fotel',
    description: 'Podłokietniki o ergonomicznym kształcie i miękka, ognioodporna tapicerka z wysokiej jakości poliestru z pewnością przekonają każdego. Głównym elementem tego fotela jest synchroniczna regulacja oparcia i podnóżka, którą można aktywować poprzez zmianę nacisku ciała.',
    price: 1200,
    image: 'https://img.shmbk.pl/rimgsph/161539_240dcd61-4b5f-495e-a702-a5fc670deebb_max_223_200_.jpg',
    category: 'salon'
  },
  {
    title: 'Sofa',
    description: 'Oszczędna w miejsce i niezwykle elegancka sofa rozświetli każdy salon. Dzięki bogatym kolorom sprawi, że każdy pokój będzie bardziej przyjazny. Zwinnie i prosto dla każdego, to zalety rozkładanej sofy. Wygodne i dobrze wyściełane siedzisko i oparcie sofy, wykonane jest z najwyższej jakości materiału w kolorze morskim. Ten łatwy w pielęgnacji i wytrzymały materiał daje uczucie niezwykłego komfortu w kontakcie ze skórą. Rozsiądź się na tej wygodnej sofie z funkcją spania. Szczegóły: Kolor: Niebieski, Srebrny.',
    price: 2290,
    image: 'https://img.shmbk.pl/rimgsph/161539_0613f018-a0f0-49c1-9a5f-0121eb9f8de0_max_253_200_.jpg',
    category: 'salon'
  },
  {
    title: 'Meble kuchenne',
    description: '',
    price: 20000,
    image: 'https://img.shmbk.pl/rimgsph/161539_8305f062-e3ba-47fd-9567-def7587a5530_max_400_300_.jpg',
    category: 'kuchnia'
  },
  {
    title: 'Naczynia',
    description: '',
    price: 59,
    image: 'https://img.shmbk.pl/rimgsph/161539_afff21dd-cac3-4cb5-9433-f45d1a70bba5_max_400_300_.jpg',
    category: 'kuchnia'
  },
  {
    title: 'Garnki i patelnie',
    description: '',
    price: 109,
    image: 'https://img.shmbk.pl/rimgsph/161539_6f39ca63-5e06-494e-b3a9-284a1b9a21f5_max_400_300_.jpg',
    category: 'kuchnia'
  },
  {
    title: 'AGD do zabudowy kuchni',
    description: '',
    price: 20000,
    image: 'https://img.shmbk.pl/rimgsph/161539_37f9dc79-2c61-4eb4-a59f-09e7444ecdc4_max_400_300_.jpg',
    category: 'kuchnia'
  },
  {
    title: 'Tekstylia',
    description: '',
    price: 109,
    image: 'https://img.shmbk.pl/rimgsph/161539_b67de241-15bf-4ad3-b6c7-349a005cd747_max_399_300_.jpg',
    category: 'dodatki'
  },
  {
    title: 'Dekoracje i akcesoria',
    description: '',
    price: 100,
    image: 'https://img.shmbk.pl/rimgsph/161539_d6643c9b-ce81-4cd7-af43-0c762d56560c_max_400_300_.jpg',
    category: 'dodatki'
  },
  {
    title: 'Zasłony',
    description: '',
    price: 500,
    image: 'https://img.shmbk.pl/rimgsph/161539_10e840a2-7aae-45b1-a957-22f35754d6d7_max_400_300_.jpg',
    category: 'dodatki'
  },
  {
    title: 'Obraz',
    description: '',
    price: 49,
    image: 'https://img.shmbk.pl/rimgspr/61323568_pad_253_200_dla-domu-do-kuchni-i-jadalni-tekstylia-do-kuchni-scierki-kuchenne-scierka-kuchenna-bloomingville.jpg',
    category: 'dodatki'
  },
  {
    title: 'Akcesoria łazienkowe',
    description: '',
    price: 39,
    image: 'https://img.shmbk.pl/rimgsph/161539_86b426f4-a2e2-48d8-aae0-06886f8ff3bc_max_400_300_.jpg',
    category: 'łazienka'
  },
  {
    title: 'Baterie łazienkowe',
    description: '',
    price: 100,
    image: 'https://img.shmbk.pl/rimgsph/161539_b70a3b77-4fe4-494d-bbdc-e42420d57159_max_400_300_.jpg',
    category: 'łazienka'
  },
  {
    title: 'Meble łazienkowe',
    description: '',
    price: 1500,
    image: 'https://img.shmbk.pl/rimgsph/161539_cc5a7850-c5fe-41bf-97e6-fa8a217d9059_max_410_300_.jpg',
    category: 'łazienka'
  },
  {
    title: 'Sprzęt AGD do łazienki',
    description: '',
    price: 699,
    image: 'https://img5.shmbk.pl/rimgspr/24555506_pad_253_200_dla-domu-do-lazienki-sprzet-agd-do-lazienki-pralki-samsung-wf60f4e5w2w-eo.jpg?scale=canvas',
    category: 'łazienka'
  },
  {
    title: 'Łóżko',
    description: '',
    price: 39,
    image: 'https://img.shmbk.pl/rimgspr/58857418_pad_253_200_lozko-kontynentalne-roten-160x200-cm-czarne-dab-z-led.jpg?scale=canvas',
    category: 'sypialnia'
  },
  {
    title: 'Komplet pościeli',
    description: '',
    price: 100,
    image: 'https://img.shmbk.pl/rimgsph/161539_e1634fc5-7553-4b65-b7fe-afb83121eb30_max_253_200_.jpg',
    category: 'sypialnia'
  },
  {
    title: 'Toaletki',
    description: '',
    price: 1500,
    image: 'https://img.shmbk.pl/rimgspr/63760899_pad_253_200_.jpg?scale=canvas',
    category: 'sypialnia'
  },
  {
    title: 'Szafy do sypialni',
    description: '',
    price: 699,
    image: 'https://img.shmbk.pl/rimgspr/50083567_pad_253_200_szafa-stanley-biala-dab-beaufort-drewno.jpg?scale=canvas',
    category: 'sypialnia'
  }
];

module.exports = {
  data
};
