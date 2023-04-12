import "./styles.scss";

interface IInfoCart {
  img: string;
  alt: string;
  title: string;
  descr: string;
  isCatalogButton?: boolean;
  cartLink: string;
}

const InfoCart: React.FC<IInfoCart> = ({ title, descr }) => {
  return (
    <div className="infoCart">
      <div className="infoCart__wrapper">
        <div className="infoCart__wrapper-title">{title}</div>
        <div className="infoCart__wrapper-descr">{descr}</div>
      </div>
    </div>
  );
};

export default InfoCart;
