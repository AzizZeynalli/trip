import "./LocalExperts.css";
import firstImage from '../../../../assets/localexperts/photo1.png';
import secondImage from '../../../../assets/localexperts/photo2.png';

const LocalExperts = () => {
    return (
        <section className="localexperts-section">
            <h1>Our Local Experts</h1>
            <div className="container">
                <div className="first-image">
                    <img src={firstImage} alt="" />
                </div>
                <div className="second-image">
                    <img src={secondImage} alt="" />
                </div>
            </div>
        </section>
    );
}

export default LocalExperts;
