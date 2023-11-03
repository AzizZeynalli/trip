import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Trending from "./components/Hero/Trending/Trending.jsx";
const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Trending />
        </div>
    );
}

export default Home;
