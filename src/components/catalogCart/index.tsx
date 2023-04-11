import { CatalogButton } from "../buttons";
import "./styles.scss";

interface ICatalogCart {
  img: string;
  alt: string;
  title: string;
  descr: string;
  isCatalogButton?: boolean;
  cartLink: string;
}

const CatalogCart: React.FC<ICatalogCart> = ({
  img,
  alt,
  title,
  descr,
  isCatalogButton,
  cartLink,
}) => {
  return (
    <div className="catalogCart">
      <div className="catalogCart__wrapper">
        <img className="catalogCart__wrapper-img" src={img} alt={alt} />
        <div className="catalogCart__wrapper-title">{title}</div>
        <div className="catalogCart__wrapper-descr">{descr}</div>
      </div>
      {isCatalogButton && <CatalogButton title="В каталог" link={cartLink} />}
    </div>
  );
};

export default CatalogCart;
