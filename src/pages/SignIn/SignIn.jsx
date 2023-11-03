import logo from "../../assets/Logo.svg";
import FacebookLogo from "../../assets/FacebookLogo.svg";
import GoogleLogo from "../../assets/GoogleLogo.svg";
import AppleLogo from "../../assets/AppleLogo.svg";
import eye from "../../assets/eye.svg";
import "./style.css";

const SignIn = () => {
  return (
    <div className="container">
      <aside></aside>
      <main>
        <div className="appLogoContainer">
          <img src={logo} alt="" />
        </div>
        <h1>Sign in for your exciting journey</h1>
        <form>
          <div>
            {" "}
            <label htmlFor="">Email</label>
            <input type="text" placeholder="someone@example.com" />
          </div>
          <div>
            {" "}
            <label htmlFor="">Password</label>
            <input type="password" />
            <img src={eye} alt="" width={"20"} />
          </div>
        </form>
        <p>Forgot password?</p>
        <button className="signinButton">Sign in</button>
        <p>or use one of this</p>
        <div className="logosContainer">
          <button className="signInLogo">
            <img src={GoogleLogo} alt="google" />
          </button>
          <button className="signInLogo">
            <img src={AppleLogo} alt="apple" />
          </button>
          <button className="signInLogo">
            <img src={FacebookLogo} alt="facebook" />
          </button>
        </div>
        <p>
          Don't have an account? <span>Create new for adventure!</span>
        </p>
      </main>
    </div>
  );
};

export default SignIn;
