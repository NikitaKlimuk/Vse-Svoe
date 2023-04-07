import mainLogoV from "../../assets/logo/mainLogoV.svg";
import inputLogo from "../../assets/icons/search.svg";
import cartIcon from "../../assets/icons/cart.svg";
import userIcon from "../../assets/icons/user.svg";
import "./styles.scss";

function NavbarScroll() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <div className="navbar__logo">
            <img src={mainLogoV} alt="main logo" />
          </div>
          SE SVOE
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/catalog">
                <span className="nav-link__icon" />
                Каталог
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/collect">
                Собрать
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/farms">
                Хозяйства
              </a>
            </li>
          </ul>
          <form className="nav-input d-flex" role="search">
            <img
              className="nav-input__icon"
              src={inputLogo}
              alt="search icon"
            />
            <input
              className="form-control me-2"
              type="search"
              placeholder="Найти в SVOE"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Искать
            </button>
            <img className="nav-input__cart" src={cartIcon} alt="cart icon" />
            <img className="nav-input__user" src={userIcon} alt="user icon" />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavbarScroll;
