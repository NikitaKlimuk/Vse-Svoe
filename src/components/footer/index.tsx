import "./styles.scss";
import mainLogoV from "../../assets/logo/mainLogoV.svg";
import android from "../../assets/icons/android.svg";
import iphone from "../../assets/icons/iphone.svg";
import { vseSvoeData } from "../../config";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__app">
        <a className="footer__app-logo" href="/">
          <img src={mainLogoV} alt="main logo" />
          <div className="footer__app-text">SE SVOE</div>
        </a>
        <div className="footer__app-links">
          <a href="https://play.google.com/store/apps?hl=ru&gl=US&pli=1">
            <img src={android} alt="google play market" />
          </a>
          <a href="https://www.apple.com/pl/app-store/">
            <img src={iphone} alt="apple store" />
          </a>
        </div>
      </div>

      <hr className="footer__hr" />

      <div className="footer__links">
        {vseSvoeData.footerLink.map((item) => {
          return <a href={item.link}>{item.title}</a>;
        })}
      </div>
      <hr className="footer__hr" />
      <div className="footer__copyright">
        <div className="d-flex gap-3">
          {vseSvoeData.footerCopyright.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
        <div className="d-flex gap-3">
          {vseSvoeData.footerAuthors.map((item) => {
            return (
              <a href={item.link} target="_blank" rel="noreferrer noopener">
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
