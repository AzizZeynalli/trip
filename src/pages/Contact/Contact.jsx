import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import LinkToDestinations from "../../components/linkToDestinations/LinkToDestinations";
import ContactsList from "./components/ContactsList";
import Email from "../../components/Email/Email";
import heroImage from "../../assets/contact/contact-hero.png";

const Contact = () => {
    const heading = "Contact us";
    const comment = "Your Journey Begins with a Conversation - Reach Out to Us Today!";
    return (
        <div>
            <Header />
            <Hero heading={heading} comment={comment} background={heroImage}/>
            <ContactsList />
            <LinkToDestinations />
            <Email />
            <Footer />
        </div>
    );
}

export default Contact;
