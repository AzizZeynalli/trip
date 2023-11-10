import Header from "../../components/Header/Header";
import Hero from "./components/Hero";
import Footer from "../../components/Footer/Footer";
import LinkToDestinations from "../../components/linkToDestinations/LinkToDestinations";
import ContactsList from "./components/ContactsList";
import Email from "../../components/Email/Email";

const Contact = () => {
    return (
        <div>
            <Header />
            <Hero />
            <ContactsList />
            <LinkToDestinations />
            <Email />
            <Footer />
        </div>
    );
}

export default Contact;
