import { Link } from "react-router-dom";
import { useRef} from "react";
import logo from "../assets/logo.png";
import "../styles/Header.css";

const Header = () => {
  const hamburger = useRef(null);
 const visibile = () => {
    if (hamburger.current.style.display === "none") {
      hamburger.current.style.display = "block";
    } else {
      hamburger.current.style.display = "none";
    }
  };

  const reastHamburger = () => {
    hamburger.current.style.display = "none";
  }


  return ( 
    <header>
      <img src={logo} alt="Digital Innovation Club logo" />
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
      <nav>
        <button onClick={() => visibile()}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div ref={hamburger} className="hamburger">
          <nav>
            <ul>
              <li>
                <Link to="/" onClick={reastHamburger} className="nav-link nav-link-primary">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link onClick={reastHamburger}  to="/graduates" className="nav-link">
                  خريجين النادي
                </Link>
              </li>
              <li>
                <Link onClick={reastHamburger}  to="/about" className="nav-link">
                  من نحن
                </Link>
              </li>
              <li>
                <Link onClick={reastHamburger}  to="/events" className="nav-link">
                  الفعاليات
                </Link>
              </li>
              <li>
                <Link onClick={reastHamburger}  to="/team" className="nav-link">
                  الفريق
                </Link>
              </li>
              <li>
                <Link onClick={reastHamburger}  to="/contact" className="nav-link">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Header;
