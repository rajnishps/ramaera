import Arrow from "../assets/arrow.svg"
import Search from "../assets/search.svg"
import Logo from "../assets/logo.svg"
import "./Header.css"

function Header() {
  return (
    <header>
      <img className="logo" src={Logo} alt="Logo" />
      <nav className="navbar">
        <ul className="navbar-links">
          <li className="navbar-dropdown">
            <a href="#">HOME</a>
          </li>
          <li className="navbar-dropdown">
            <a href="#info">
              OUT INDUSTRIES
              <img className="arrow" src={Arrow} />
            </a>
            <div className="dropdown">
              <a href="#info">Info</a>
              <a href="#tech">Technologies</a>
              <a href="#hotel">Hotel</a>
              <a href="#packing">Packing</a>
            </div>
          </li>
          <li className="navbar-dropdown">
            <a href="#fmcg">
              OUR COMPANIES
              <img className="arrow" src={Arrow} />
            </a>
            <div className="dropdown">
              <a href="#fmcg">FMCG</a>
              <a href="#agri">Agriculture</a>
              <a href="#ecom">E-Commerce</a>
            </div>
          </li>
        </ul>
        <ul className="second-nav">
          <a href="#" className="second-li">
            Career
          </a>
          <a href="#" className="second-li">
            Contact
          </a>
          <a href="#" className="second-li">
            <img className="search-icon" src={Search} />
          </a>
        </ul>
      </nav>
    </header>
  )
}

export default Header
