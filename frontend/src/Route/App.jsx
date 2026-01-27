import Login from "../Pages/Auth/Login"
import Register from "../Pages/Auth/Register";
import LandingPage from "../Pages/Landing/LandingPage";
import OTP from "../Pages/Auth/OTP";
import   NotFound  from '../Pages/NotFound/NotFound';

import { Routes, Route } from "react-router-dom";

// import './App.css'

function App() {
    return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Register/verify-otp" element={<OTP />} />
      <Route path="/login/verify-otp" element={<OTP />} />


      <Route path="*" element={<NotFound />} />
    </Routes>
    );
}

export default App;
