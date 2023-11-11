import "./style.css";
import arrows from "../../assets/arrows.svg";
import logo from "../../assets/Logo.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <section className="topHeader">
        <nav>
          <ul>
            <li>
              <NavLink to="/about" activeClassName="active">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" activeClassName="active">
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" activeClassName="active">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact us
              </NavLink>
            </li>
          </ul>
        </nav>
        <button>
          US$
          <img src={arrows} alt="" />
        </button>
      </section>
      <section className="bottomHeader">
        <div className="leftButtons">
          <NavLink to="/destinations" activeClassName="active">
            Destinations
          </NavLink>
          <Link to="#">Private trips</Link>
        </div>
        <Link to="/"><img src={logo} alt="logo" /></Link>
        <div className="rightButtons">
          <button>I'm Feeling Lucky</button>
          <button>
            <Link to="/signin">Login</Link>
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
