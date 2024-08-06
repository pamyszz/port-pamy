/* eslint-disable no-unused-vars */
import "./header.css";
import { links } from "../../Data";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";
import shapeOne from "../../assets/shape-1.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [theme, setTheme] = useState("light-theme");

  const scrollTop = function () {
    animateScroll.scrollToTop();
  };

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleTheme = function () {
    if (theme === "light-theme") setTheme("dark-theme");
    if (theme === "dark-theme") setTheme("light-theme");
  };

  // Toggle sticky navbar
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  // Toggle datk mode
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  // Disable scrllbar
  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  return (
    <header className={`${scrollNav ? "scroll-header" : ""} header`}>
      <nav className="nav">
        <Link to="/" onClick={scrollTop} className="nav__logo text-cs">
          pamy
        </Link>

        <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
          <div className="nav__data">
            <ul className="nav__list">
              {links.map(({ name, path }, index) => {
                return (
                  <li className="nav__item" key={index}>
                    <Link
                      className="nav__link text-cs"
                      to={path}
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="header__socials">
            <a href="https://www.linkedin.com/in/pamelami/" className="home__social-link" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/pamyy_szz" className="home__social-link" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://github.com/pamyszz" className="home__social-link" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            </div>
          </div>

          <div className="section__deco deco__left header__deco">
            <img src={shapeOne} alt="" className="shape" />
          </div>
        </div>

        <div className="nav__btns">
          <div className="theme__toggler" onClick={toggleTheme}>
            {theme === "light-theme" ? <BsSun /> : <BsMoon />}
          </div>
          <div
            className={`${
              showMenu ? "nav__toggle animate-toggle" : "nav__toggle"
            }`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;