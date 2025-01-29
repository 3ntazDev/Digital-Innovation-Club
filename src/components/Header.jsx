import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link nav-link-primary">
              الرئيسية
            </Link>
          </li>

          <li>
            <Link to="/graduates" className="nav-link">
              خريجين النادي
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              من نحن
            </Link>
          </li>
          <li>
            <Link to="/events" className="nav-link">
              الفعاليات
            </Link>
          </li>
          <li>
            <Link to="/team" className="nav-link">
              الفريق
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              تواصل معنا
            </Link>
          </li>
        </ul>
      </nav>
      <img src={logo} alt="Digital Innovation Club logo" />
    </header>
  );
};

export default Header;
