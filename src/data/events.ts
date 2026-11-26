export type Event = {
  id: string;
  day: string;
  month: string;
  title: string;
  description: string;
  category: string;
  time: string;
  place: string;
};

export const events: Event[] = [
  {
    id: "1",
    day: "15",
    month: "ДЕК",
    title: "Новогодний концерт хоровой студии",
    description:
      "Праздничная программа с участием детских и взрослых коллективов.",
    category: "Концерт",
    time: "18:00",
    place: "Большой зал",
  },
  {
    id: "2",
    day: "20",
    month: "ДЕК",
    title: "Спектакль «Щелкунчик»",
    description:
      "Театральная студия «Маска» представляет классическую постановку.",
    category: "Театр",
    time: "19:00",
    place: "Малый зал",
  },
  {
    id: "3",
    day: "25",
    month: "ДЕК",
    title: "Мастер-класс по народному танцу",
    description: "Открытое занятие для всех желающих. Вход свободный.",
    category: "Мастер-класс",
    time: "12:00",
    place: "Фойе",
  },
  {
    id: "4",
    day: "10",
    month: "ЯНВ",
    title: "Рождественский вечер органной музыки",
    description:
      "Классические произведения в исполнении приглашённых музыкантов.",
    category: "Концерт",
    time: "18:30",
    place: "Большой зал",
  },
  {
    id: "5",
    day: "18",
    month: "ЯНВ",
    title: "Выставка детского рисунка",
    description: "Работы воспитанников изостудии «Палитра».",
    category: "Выставка",
    time: "10:00",
    place: "Фойе",
  },
  {
    id: "6",
    day: "25",
    month: "ЯНВ",
    title: "Спектакль «Три сестры»",
    description:
      "Совместная постановка театральной студии и приглашённого режиссёра.",
    category: "Театр",
    time: "19:00",
    place: "Малый зал",
  },
];
