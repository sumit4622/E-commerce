import Login from "./Pages/Login";
// import Header from './component/Header'
import Register from "./Pages/Register";
import Landingpage from "./Pages/Landingpage";
import OTP from "./Pages/OTP";
import   NotFound  from './Pages/NotFound';

import { Routes, Route } from "react-router-dom";

// import './App.css'

function App() {
    return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Register/verify-otp" element={<OTP />} />
      <Route path="/login/verify-otp" element={<OTP />} />


      <Route path="*" element={<NotFound />} />
    </Routes>
    );
}

export default App;
