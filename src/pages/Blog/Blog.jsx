import Header from "../../components/Header/Header";
import LinkToDestinations from "../../components/linkToDestinations/LinkToDestinations";
import Email from "../../components/Email/Email";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import blogHero from "../../assets/blog/blogHero.png";
import BlogsList from "./components/BlogsList";


const Blog = () => {
    const heading = "Blog";
    const comment = "Blog articles for \"Inspiration\"";
    return (    
        <div>
            <Header />
            <Hero heading={heading} comment={comment} background={blogHero}/>
            <BlogsList />
            <LinkToDestinations />
            <Email />
            <Footer />
        </div>
    );
}

export default Blog;
