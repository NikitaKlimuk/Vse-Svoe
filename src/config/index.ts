import tomato from "../assets/img/categories/all/san_marzano.jpg";
import potato from "../assets/img/categories/all/potato.png";
import bread from "../assets/img/categories/all/bread.png";
import honey from "../assets/img/categories/all/honey.png";

export const vseSvoeData = {
  footerLink: [
    { title: "Что продаем", link: "/" },
    { title: "Как работаем", link: "/" },
    { title: "Как собирать самому ", link: "/" },
    { title: "Партнерам ", link: "/" },
    { title: "Продавцам", link: "/" },
    { title: "Наши программы ", link: "/" },
    { title: "Часто задаваемые вопросы ", link: "/" },
  ],
  footerCopyright: [
    "2023 ОАО “ВсеСвое”",
    "Правила использования",
    "Пресс служба",
  ],
  footerAuthors: [
    {
      title: "UI/UX: Ivgrigorenko",
      link: "https://www.linkedin.com/in/ilya-grigorenko-093003250",
    },
    {
      title: "Frontend: Mikita Klimuk",
      link: "https://www.linkedin.com/in/nikitaklimuk",
    },
  ],
  catalog: [
    {
      title: "Помидоры",
      descr: "От Красных до Зеленых",
      alt: "раздел помидоры",
      imgUrl: tomato,
      link: "/",
    },
    {
      title: "Картофель",
      descr: "Любые сорта",
      alt: "раздел картофель",
      imgUrl: potato,
      link: "/",
    },
    {
      title: "Хлеб",
      descr: "Самый свежий!",
      alt: "раздел выпечки",
      imgUrl: bread,
      link: "/",
    },
    {
      title: "Мед",
      descr: "Натуральный",
      alt: "раздел мед",
      imgUrl: honey,
      link: "/",
    },
  ],
  mainPageText: {
    header: "Все фермерское - здесь!",
    descr:
      "Покупайте продукты напрямую по первой цене более чем у 150 хозяйств по все Беларуси",
    work: "О Работе",
    collect: "О Сборе",
    delivery: "О Доставке",
    season: "Сейчас в сезоне",
    allCatalog: "Смотреть все",
  },
};
