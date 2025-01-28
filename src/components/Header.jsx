import "../styles/Header.css"
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a href="#" className="nav-link">
                تواصل معنا
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                الفريق
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                الفعاليات
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                من نحن
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                خريجين النادي
              </a>
            </li>
            <li>
              <a href="#" className="nav-link nav-link-primary">
                الرئيسية
              </a>
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

export default Header

