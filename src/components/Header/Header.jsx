import './style.css';
import arrows from '../../assets/arrows.svg';
import logo from '../../assets/Logo.svg';

const Header = () => {
    return (
        <header>
            <section className='topHeader'>
                <nav>
                    <ul>
                        <li>About us</li>
                        <li>FAQ</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                    </ul>
                </nav>
                <button>
                    US$
                    <img src={arrows} alt="" />
                </button>
            </section>
            <section className='bottomHeader'>
                <div className='leftButtons'>
                    <button>Destinations</button>
                    <button>Private trips</button>
                </div>
                <img src={logo} alt="logo" />
                <div className='rightButtons'>
                    <button>I'm Feeling Lucky</button>
                    <button>Login</button>
                </div>
            </section>
        </header>
    );
}

export default Header;
