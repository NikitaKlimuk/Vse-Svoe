import { CatalogButton } from "../buttons";

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
      <img src={img} alt={alt} />
      <div className="catalogCart__title">{title}</div>
      <div className="catalogCart__descr">{descr}</div>
      {isCatalogButton && <CatalogButton title="В каталог" link={cartLink} />}
    </div>
  );
};

export default CatalogCart;
