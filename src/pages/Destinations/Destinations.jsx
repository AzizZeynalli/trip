import Header from "../../components/Header/Header";
import Hero from "./components/Hero.jsx"
import DestinationsList from "./components/DestinationsList.jsx";
import Email from "../../components/Email/Email.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Comment from "./components/Comment.jsx";
import TopDestinations from "./components/TopDestinations.jsx";


const Destinations = () => {
    return (
        <div>
            <Header />
            <Hero />
            <DestinationsList />
            <TopDestinations />
            <Comment />
            <Email />
            <Footer />
        </div>
    );
}

export default Destinations;
