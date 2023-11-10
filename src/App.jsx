import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn.jsx";
import ForgotPassword from "./pages/SignIn/ForgotPassword.jsx";
import Home from "./pages/Home/";
import Destinations from "./pages/Destinations/Destinations.jsx";
import Contact from "./pages/Contact/Contact.jsx";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path="signin" element={<SignIn />} />
                    <Route path="forgotpassword" element={<ForgotPassword />} />
                    <Route path="/destinations" element={<Destinations />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/" element={<Home />} />
                </Routes>

            </BrowserRouter>

        </>
    );
}

export default App;
