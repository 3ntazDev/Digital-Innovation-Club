import "../styles/Footer.css";
import logo from "../assets/logoWhait.png";
import logo2 from "../assets/PSAU.png";


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <img
          src={logo2}
          alt="جامعة الأمير سطام بن عبدالعزيز"
          className="footer-logo"
        />
        <div className="footer-center">
          <nav className="footer-links">
            <a href="/contact">تواصل معنا</a>
            <a href="/help">المساعدة الرئيسية</a>
            <a href="/about">من نحن</a>
          </nav>
          <div className="social-icons">
            <a href="https://www.linkedin.com">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
        <img src={logo} alt="Digital Innovation Club" className="footer-logo" />
      </div>
      <hr />
      <p className="footer-bottom">
        جميع الحقوق محفوظة لنادي الابتكار الرقمي © {year}
      </p>
    </footer>
  );
};

export default Footer;
