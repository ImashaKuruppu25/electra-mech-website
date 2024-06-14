import {Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/AyurMindsManagement/Login";
import DashBoard from "./components/AyurMindsManagement/DashBoard";
import ProfileManagement from "./components/AyurMindsManagement/ProfileManagement";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { access, info } from "./actions/authActions";


const App = () => {
   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/settings">
          <Route index element={isLoggedIn ? <DashBoard /> : <Login />} />
          <Route
            path="profile"
            element={isLoggedIn ? <ProfileManagement /> : <Login />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
