// Header.js

import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import arrows from "../../assets/arrows.svg";
import logo from "../../assets/Logo.svg";
import burger from "../../assets/burger.svg";
import cancel from "../../assets/cancel.svg";
import avatar from "../../assets/avatar.svg";
import { useAppContext } from "../../Context.jsx";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { menuOpened, toggleMenu } = useAppContext();

  const location = useLocation();

  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#4A21EF" : "",
  });

  useEffect(() => {
    console.log('menuOpened', menuOpened);
  }, [menuOpened]);
  

  useEffect(() => {
    if (!menuOpened && location.pathname !== "/") {
      // Close the menu when the route changes (except on the home page and about page)
      toggleMenu();
    }
  }, [menuOpened, location.pathname, toggleMenu]);


  return (
    <header className={styles.header}>
      <section className={styles.topHeader}>
        <nav>
          <ul>
            <li>
              <Link to="/about">
                About us
              </Link>
            </li>
            <li>
              <NavLink to="/faq" style={linkStyle}>
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" style={linkStyle}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" style={linkStyle}>
                Contact us
              </NavLink>
            </li>
          </ul>
        </nav>
        <button>
          US$ <img src={arrows} alt="" />
        </button>
      </section>
      <section className={styles.bottomHeader}>
        <div className={styles.leftButtons}>
          <NavLink to="/destinations" style={linkStyle}>
            Destinations
          </NavLink>
          <Link to="#">Private trips</Link>
        </div>
        <div className={styles.burgerMenu} onClick={toggleMenu}>
          {menuOpened ? (
            <>
              <img src={cancel} alt="Cancel" />
              <Navbar />
            </>
          ) : (
            <img src={burger} alt="Burger" />
          )}
        </div>

        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className={styles.rightButtons}>
          <button>I'm Feeling Lucky</button>
          <button>
            <Link to="/signin">Login</Link>
          </button>
        </div>
        <div className={styles.avatar}>
          <img src={avatar} alt="Avatar" />
        </div>
      </section>
    </header>
  );
};

const Navbar = () => {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#4A21EF" : "",
  });

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/about" style={linkStyle}>
            About us
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq" style={linkStyle}>
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" style={linkStyle}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={linkStyle}>
            Contact us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;