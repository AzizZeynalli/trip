import styles from "./Footer.module.scss";
import logo from "../../assets/Logo.svg";
import { footerLinks } from "../../constants/";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles["footer-left"]}>
        <img src={logo} alt="" />{" "}
        <p>
          Discover the world's wonders and let us be <br />
          your trusted guide to extraordinary destinations.
        </p>
        <p>© Copyright 2023 Tourista Ltd. All Rights Reserved.</p>
      </section>
      <section className={styles["footer-right"]}>
        {Object.keys(footerLinks).map((title) => {
          return (
            <div key={title}>
              <h5>{title}</h5>
              <ul>
                {footerLinks[title].map((link) => {
                  return <li key={link}>{link}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </section>
    </footer>
  );
};

export default Footer;
