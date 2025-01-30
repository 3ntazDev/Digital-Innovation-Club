import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <img src={logo} alt="Digital Innovation Club logo" />
      <nav>
        <ul className={isOpen ? "active" : ""}>
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
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;