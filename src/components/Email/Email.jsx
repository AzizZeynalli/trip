import styles from "./Email.module.scss";

const Email = () => {
  return (
    <section className={styles.emailSection}>
      <h1>Join our travel revolution</h1>
      <p>
        <span>Sign up to stay in the know - hot new travel spots,</span>
        how we strive to make the world a better place, and all sorts of
        surprises.
      </p>
      <input type="email" placeholder="Email" />
      <button>Sign up</button>
    </section>
  );
};

export default Email;
