import logo from "../assets/logo.png";
import arrow from "../assets/arrow-up-right.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav-header">
      <nav className="nav-container">

        <img src={logo} alt="logo" className="nav-logo" />

        <button className="nav-button">
          Free Calculator <span style={{padding:0,margin:0}}><img src={arrow} alt="" /></span>
        </button>

      </nav>
    </header>
  );
}
