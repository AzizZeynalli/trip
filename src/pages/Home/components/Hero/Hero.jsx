import heroVideo from '../../../../assets/Homepage.mp4';
import './Hero.css';
import searchIcon from '../../../../assets/search.svg'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='video-container'>
            <video id="background-video" autoPlay loop muted >
                <source src={heroVideo} type='video/mp4'/>
            </video>
            </div>
            <div className='text-container'>
                <h1>We create trips you love</h1>
                <p>Trips you couldn't plan, even if you wanted to.</p>
                <input type="text" placeholder='Where do you want to go?' />
                <div className='searchIconContainer'>
                    <img src={searchIcon} alt="" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
