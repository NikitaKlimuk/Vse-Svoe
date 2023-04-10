import "./styles.scss";

const MainPage = () => {
  return (
    <div className="mainPage">
      <section className="header">
        <div className="header__main">
          <h1 className="header__main-title">Все фермерское - здесь!</h1>
          <h2 className="header__main-descr">
            Покупайте продукты напрямую по первой цене более чем у 150 хозяйств
            по все Беларуси
          </h2>
        </div>
        <div className="header__additional">
          <div className="header__additional-work">
            <a href="/">О Работе</a>
          </div>
          <div className="header__additional-collect">
            <a href="/">О Сборе</a>
          </div>
          <div className="header__additional-delivery">
            <a href="/">О Доставке</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
