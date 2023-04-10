import "./styles.scss";

interface IButton {
  title: string;
  link: string;
}

export const CatalogButton: React.FC<IButton> = ({ title, link }) => {
  return (
    <a href={link} type="button" className="btn btn-lg">
      {title}
    </a>
  );
};

export const CartButton: React.FC<IButton> = ({ title, link }) => {
  return (
    <a href={link} type="button" className="btn btn-sm cartButton">
      {title}
    </a>
  );
};
