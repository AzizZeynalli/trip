import Header from "../../components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Trending from "./components/Trending/Trending.jsx";
import NewTrips from "./components/NewTrips/NewTrips.jsx";
import Why from "./components/Why/Why.jsx";
import LocalExperts from "./components/LocalExperts/LocalExperts.jsx";
const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Trending />
            <NewTrips />
            <Why />
            <LocalExperts />
        </div>
    );
}

export default Home;
