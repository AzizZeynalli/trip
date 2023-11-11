import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn.jsx";
import ForgotPassword from "./pages/SignIn/ForgotPassword.jsx";
import CreateAccount from "./pages/SignIn/CreateAccount.jsx";
import Home from "./pages/Home/";
import Destinations from "./pages/Destinations/Destinations.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Faq from "./pages/Faq/Faq.jsx";
import About from "./pages/About/About.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Italy from './pages/Italy/Italy.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/italy" element={<Italy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <h1 style={{ textAlign: "center", marginTop: "300px" }}>
                Not Found
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
