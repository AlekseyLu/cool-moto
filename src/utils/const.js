export const navigateList = [
  {
    dataId: "linkToSection",
    label: "Главная",
    anchorSection: "#home",
  },
  {
    dataId: "linkToSection",
    label: "О нас",
    anchorSection: "#about",
  },
  {
    dataId: "linkToSection",
    label: "Мы предлагаем",
    anchorSection: "#weAreOffering",
  },
  {
    dataId: "linkToSection",
    label: "Техника",
    anchorSection: "#moto",
  },
  {
    dataId: "linkToSection",
    label: "Маршруты",
    anchorSection: "#road",
  },
  {
    dataId: "linkToSection",
    label: "Контакты",
    anchorSection: "#contacts",
  },
  {
    dataId: "linkToSection",
    label: "Подарочные сертификаты",
    anchorSection: "#sertificate",
  },
];

export const moto = [
  {
    id: "1",
    title: "Питбайк KAYO basic 125",
    model: "KAYO basic 125",
    img: "./images/moto-1.png",
    engine:
      "одноцилиндровый 4-тактный двигатель объёмом 125 см³ мощностью 9 л. с.",
    transmission: "4-ступенчатая N-1-2-3-4 полуавтоматическая коробка передач",
    seat_height: "высота по седлу, мм: 885",
    weight: "вес, кг: 73",
    description:
      "Это один из лучших мотоциклов для обучения и первых шагов в эндуро и мотокроссе. Подходит для обучения детей.",
  },
  {
    id: "2",
    title: "Мотоцикл KAYO K1",
    model: "KAYO K1",
    img: "./images/moto-2.png",
    engine:
      "одноцилиндровый 4-тактный двигатель объёмом 249 см³ мощностью 21 л. с.",
    transmission: "5-ступенчатая коробка передач",
    seat_height: "высота по седлу, мм: 875",
    weight: "вес, кг: 105",
    description:
      "У модели KAYO K1 оптимальный баланс производительности и технической оснащённости, поэтому он идеально подходит как новичкам, так и опытным райдерам",
  },
  {
    id: "3",
    title: "Мотоцикл KAYO K4",
    model: "KAYO K4",
    img: "./images/moto-3.png",
    engine:
      "одноцилиндровый 4-тактный двигатель объёмом 271 см³ мощностью 24 л. с.",
    transmission: "5-ступенчатая коробка передач",
    seat_height: "высота по седлу, мм: 960",
    weight: "вес, кг: 119",
    description:
      "Мотоцикл достаточно компактен, поэтому он комфортен в эксплуатации для райдеров крупного телосложения и опытных рейдеров",
  },
  {
    id: "4",
    title: "Мотоцикл K2R 250",
    model: "K2R 250",
    img: "./images/moto-4.png",
    engine:
      "одноцилиндровый 4-тактный двигатель объёмом 271 см³ мощностью 34 л. с.",
    transmission: "5-ступенчатая коробка передач",
    seat_height: "высота по седлу, мм: 900",
    weight: "вес, кг: 108",
    description:
      "Надёжный, производительный и мощный мотоцикл с современным агрессивным дизайном для тех, кто не ищет лёгких путей",
  },
];

export const videos = [
  "https://motoru.ru/userfiles/video/otzyv3.mp4",
  "https://motoru.ru/userfiles/video/otzyv2.mp4",
  "https://motoru.ru/userfiles/video/otzyv1.mp4",
];

const custonSvg = `
          <svg
            class="md:group-hover:text-red-400 md:group-hover:translate-x-1 group-active:text-red-400 group-active:translate-x-1 transition"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
              fill="currentColor"
            />
          </svg>`;

export const giftCertificates = [
  {
    id: "certificate-cart-element",
    dataId: "certificate-more-button",
    title: "Универсальный",
    image: "./images/sert_bg.png",
    priceStart: 1500,
    priceFull: 15000,
    time: "1 час",
    description:
      "Не знаете, какой сертификат выбрать? Почему бы не дать обладателю сертификата возможность выбрать самому? Теперь у вас есть отличный вариант - подарочный сертификат на сумму! Покупая сертификат в Мотору вы можете быть уверенными, что вы сделали самый лучший и незабываемый подарок!",
    icon: custonSvg,
    feature: [
      "- краткий инструктаж;",
      "- безопасная экипировка;",
      "- обучение вождению;",
      "- сопровождение инструктора",
      "- купон на скидку 15% для друзей",
      "- срок действия сертификата 1 год",
    ],
  },
  {
    id: "certificate-cart-element",
    dataId: "certificate-more-button",
    title: "Индивидуальная тренировка на мотоцикле",
    image: "./images/sert_bg.png",
    priceStart: 5000,
    priceFull: 15000,
    time: "1 час",
    feature: [],
    description:
      "Индивидуальная тренировка на мотоцикле. 1 час адреналина и навыков. Мотоцикл, экипировка и профессиональные инструкторы. Незабываемые моменты и фотографии на память.",
    icon: custonSvg,
  },
  {
    id: "certificate-cart-element",
    dataId: "certificate-more-button",
    title: "Индивидуальная тренировка на питбайке",
    image: "./images/sert_bg.png",
    priceStart: 5000,
    priceFull: 15000,
    time: "1 час",
    feature: [],
    description:
      "Хотите подарить новые ощущения скорости? Но у вас есть сомнения, что не получится или хотите персональное внимание инструктора? Тогда покупайте сертификат на индивидуальную тернировку на питбайке.",
    icon: custonSvg,
  },
  {
    id: "certificate-cart-element",
    dataId: "certificate-more-button",
    title: "На сноубайке",
    image: "./images/sert_bg.png",
    priceStart: 4500,
    priceFull: 15000,
    time: "1 час",
    feature: [],
    description:
      "Сноубайк — это не снегоход и даже не его замена. Это самостоятельный вид зимнего экстрима. Идеальный подарок для тех, кто любит кросс и эндуро.",
    icon: custonSvg,
  },
  {
    id: "certificate-cart-element",
    dataId: "certificate-more-button",
    title: "На снегоходе",
    image: "./images/sert_bg.png",
    priceStart: 4500,
    priceFull: 15000,
    time: "1 час",
    feature: [],
    description:
      "Подарите незабываемую прогулку по зимнему лесу! Общение с живой природой — это возможность расслабиться и отдохнуть от повседневных забот.",
    icon: custonSvg,
  },
  {
    id: "certificate-cart-element",
    dataId: "certificate-more-button",
    title: "На мотоцикл",
    image: "./images/sert_bg.png",
    priceStart: 4500,
    priceFull: 15000,
    time: "1 час",
    feature: [],
    description:
      "Сертификат на прокат мотоцикла KAYO K4 - отличный подарок для тех, кто хочет попробовать что-то новое и захватывающее. Подарите этот сертификат себе или своим близким, и вы обретете уникальный опыт, который запомнится на всю жизнь. Не упустите шанс ощутить мир мото-приключений на мотоцикле KAYO K4 уже сегодня!",
    icon: custonSvg,
  },
  {
    id: "certificate-cart-element",
    dataId: "certificate-more-button",
    title: "На питбайк",
    image: "./images/sert_bg.png",
    priceStart: 3500,
    priceFull: 15000,
    time: "1 час",
    feature: [
      "- краткий инструктаж;",
      "- безопасная экипировка;",
      "- обучение вождению на питбайке;",
      "- сопровождение инструктора",
      "- купон на скидку 15%",
    ],
    description:
      "Не знаете, какой сертификат выбрать? Почему бы не дать обладателю сертификата возможность выбрать самому? Теперь у вас есть отличный вариант - подарочный сертификат на сумму! Покупая сертификат в Мотору вы можете быть уверенными, что вы сделали самый лучший и незабываемый подарок!",
    icon: custonSvg,
  },
  {
    id: "certificate-cart-element",
    dataId: "certificate-more-button",
    title: "На квадроцикл",
    image: "./images/sert_bg.png",
    priceStart: 4500,
    priceFull: 15000,
    time: "1 час",
    feature: [
      "квадроцикл для двоих;",
      "- подробный инструктаж;",
      "- безопасная экипировка;",
      "- маршрут на 1 час;",
      "- сопровождение инструктора",
      "- купон на скидку 15% для друзей",
    ],
    description:
      "Не знаете, какой сертификат выбрать? Почему бы не дать обладателю сертификата возможность выбрать самому? Теперь у вас есть отличный вариант - подарочный сертификат на сумму! Покупая сертификат в Мотору вы можете быть уверенными, что вы сделали самый лучший и незабываемый подарок!",
    icon: custonSvg,
  },
];

export const faqList = [
  {
    dataId: "faq-item",
    title: "Сколько стоит?",
    description: "ответ по вопросу, может быть очень длинным",
  },
  {
    dataId: "faq-item",
    title: "Как добраться?",
    description:
      "ответ по вопросу, может быть очень длинным,ответ по вопросу, может быть очень длинным,ответ по вопросу, может быть очень длинным,ответ по вопросу, может быть очень длинным,ответ по вопросу, может быть очень длинным",
  },
  {
    dataId: "faq-item",
    title: "Нужны права?",
    description:
      "ответ по вопросу, может быть очень длинным ответ по вопросу, может быть очень длинным ответ по вопросу, может быть очень длинным",
  },
  {
    dataId: "faq-item",
    title: "Страшно?",
    description:
      "1 ответ по вопросу, может быть очень длинным, ответ по вопросу, может быть очень длинным, ответ по вопросу, может быть очень длинным, ответ по вопросу, может быть очень длинным, ответ по вопросу, может быть очень длинным, ответ по вопросу, может быть очень длинным 2",
  },
];
