import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import CaptainLogin from "./pages/Captainlogin";
import CaptainSignup from "./pages/CaptainSignup";
import UserLogin from "./pages/Userlogin";
import UserSignup from "./pages/UsersignUp";
import { UserDataContext } from "./Context/UserContext";
import Homes from "./Homes";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptaiProtectRouter from "./pages/CaptaiProtectRouter";
import CaptainLogout from "./pages/CaptainLogout";

const App = () => {
  const data = useContext(UserDataContext); // Ensure you are using `data` or remove it if unnecessary.

  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-home" element={
        <CaptaiProtectRouter>
          <CaptainHome />
        </CaptaiProtectRouter>} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
      <Route
        path="/home"
        element={
          <UserProtectedWrapper>
            <Homes />
          </UserProtectedWrapper>
        }
      />
      <Route path="/user/logout" element={<UserProtectedWrapper>
        <UserLogout />
      </UserProtectedWrapper>} />
      <Route path="/captain/logout" element={
        <CaptaiProtectRouter>
          <CaptainLogout />
        </CaptaiProtectRouter>} />
    </Routes>
  );
};

export default App;
