import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "./assets/logo.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const handleClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Break Sickle Cycle" className="logo-image" />
        </Link>
      </div>

      {/* Bouton burger */}
      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "line open" : "line"}></div>
        <div className={menuOpen ? "line open" : "line"}></div>
        <div className={menuOpen ? "line open" : "line"}></div>
      </div>

      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <ul className="navbar-menu">
          <li
            className={activeSection === "home" && isHomePage ? "active" : ""}
            onClick={() => handleClick("home")}
          >
            {isHomePage ? (
              <a href="#home">Home</a>
            ) : (
              <Link to="/">Home</Link>
            )}
          </li>
          <li
            className={activeSection === "impact" && isHomePage ? "active" : ""}
            onClick={() => handleClick("impact")}
          >
            {isHomePage ? (
              <a href="#impact">Impact</a>
            ) : (
              <Link to="/#impact">Impact</Link>
            )}
          </li>
          <li
            className={activeSection === "learn" && isHomePage ? "active" : ""}
            onClick={() => handleClick("learn")}
          >
            {isHomePage ? (
              <a href="#learn">Learn</a>
            ) : (
              <Link to="/#learn">Learn</Link>
            )}
          </li>

          <li
            className={activeSection === "programs" && isHomePage ? "active" : ""}
            onClick={() => handleClick("programs")}
          >
            {isHomePage ? (
              <a href="#programs">Programs</a>
            ) : (
              <Link to="/#programs">Programs</Link>
            )}
          </li>

          <li
            className={location.pathname.startsWith("/news") ? "active" : ""}
            onClick={() => handleClick("news")}
          >
            <Link to="/news">News</Link>
          </li>

          <li
            className={location.pathname.startsWith("/activities") ? "active" : ""}
            onClick={() => handleClick("activities")}
          >
            <Link to="/activities">Activities</Link>
          </li>

          <li
            className={activeSection === "team" && isHomePage ? "active" : ""}
            onClick={() => handleClick("team")}
          >
            {isHomePage ? (
              <a href="#team">Team</a>
            ) : (
              <Link to="/#team">Team</Link>
            )}
          </li>

          <li
            className={activeSection === "ambassadors" && isHomePage ? "active" : ""}
            onClick={() => handleClick("ambassadors")}
          >
            {isHomePage ? (
              <a href="#ambassadors">Ambassadors</a>
            ) : (
              <Link to="/#ambassadors">Ambassadors</Link>
            )}
          </li>

          <li
            className={activeSection === "about" && isHomePage ? "active" : ""}
            onClick={() => handleClick("about")}
          >
            {isHomePage ? (
              <a href="#about">About</a>
            ) : (
              <Link to="/#about">About</Link>
            )}
          </li>

          <li
            className={activeSection === "gallery" && isHomePage ? "active" : ""}
            onClick={() => handleClick("gallery")}
          >
            {isHomePage ? (
              <a href="#gallery">Gallery</a>
            ) : (
              <Link to="/#gallery">Gallery</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
