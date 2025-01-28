
import { Link } from 'react-router-dom';
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <Link to="/contact" className="nav-link">
                تواصل معنا
              </Link>
            </li>
            <li>
              <Link to="/team" className="nav-link">
                الفريق
              </Link>
            </li>
            <li>
              <Link to="/events" className="nav-link">
                الفعاليات
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                من نحن
              </Link>
            </li>
            <li>
              <Link to="/graduates" className="nav-link">
                خريجين النادي
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link nav-link-primary">
                الرئيسية
              </Link>
            </li>
          </ul>
        </nav>
        <div className="logo">
          <img src="/DIC.png" alt="Digital Innovation Club" />
        </div>
      </div>
    </header>
  )
}

export default Header;

