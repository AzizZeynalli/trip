import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn.jsx";
import ForgotPassword from "./pages/SignIn/ForgotPassword.jsx";
import Home from "./pages/Home/";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path="signin" element={<SignIn />} />
                    <Route path="forgotpassword" element={<ForgotPassword />} />
                    <Route path="/" element={<Home />} />
                </Routes>

            </BrowserRouter>

        </>
    );
}

export default App;
