import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import aboutBackground from "../../assets/about/aboutBackground.png";
import SecondHero from "./components/SecondHero";
import Email from "../../components/Email/Email";
import LinkToDestinations from "../../components/linkToDestinations/LinkToDestinations";
import Why from "../Home/components/Why/Why";
import LocalExperts from "../Home/components/LocalExperts/LocalExperts";

const About = () => {
    const heading = "About Us";
    const comment = "Discover Our Passion for Travel and Adventure.";
    return (
        <div>
            <Header />
            <Hero heading={heading} comment={comment} background={aboutBackground}/>
            <SecondHero />
            <Why />
            <LocalExperts />
            <LinkToDestinations />
            <Email />
            <Footer />
        </div>
    );
}

export default About;
