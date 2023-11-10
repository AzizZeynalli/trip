import styles from './LinkToDestinations.module.scss';
import arrow from '../../assets/linkToDestinations/arrow.svg';

const LinkToDestinations = () => {
    return (
        <section className={styles.linkToDestSection}>
            <h1>Looking to go elsewhere?</h1>
            <button>Our destinations <img src={arrow} alt="" /></button>
        </section>
    );
}

export default LinkToDestinations;
