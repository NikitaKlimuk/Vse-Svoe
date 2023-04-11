import CatalogCart from "../../components/catalogCart";
import { vseSvoeData } from "../../config";
import { v4 as uuidv4 } from "uuid";
import "./styles.scss";

const MainPage = () => {
  const catalog = vseSvoeData.catalog;
  const mainPageText = vseSvoeData.mainPageText;

  return (
    <div className="mainPage">
      <section className="header">
        <div className="header__main">
          <h1 className="header__main-title">{mainPageText.header}</h1>
          <h2 className="header__main-descr">{mainPageText.descr}</h2>
        </div>
        <div className="header__additional">
          <div className="header__additional-work">
            <a href="/">{mainPageText.work}</a>
          </div>
          <div className="header__additional-collect">
            <a href="/">{mainPageText.collect}</a>
          </div>
          <div className="header__additional-delivery">
            <a href="/">{mainPageText.delivery}</a>
          </div>
        </div>
      </section>

      <section className="catalog">
        <div className="catalog__header">
          <h3 className="catalog__header-title">{mainPageText.season}</h3>
          <button type="button" className="btn btn-sm catalog__header-btn">
            {mainPageText.allCatalog}
          </button>
        </div>
        <div className="catalog__container">
          {catalog.map((item) => {
            return (
              <CatalogCart
                title={item.title}
                descr={item.descr}
                img={item.imgUrl}
                alt={item.alt}
                cartLink={item.link}
                key={uuidv4()}
                isCatalogButton
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default MainPage;
