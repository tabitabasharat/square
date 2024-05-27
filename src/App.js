import React from "react";
import "./App.css";
import Login from "../src/components/Login/Login";
import SignIn from "./components/SignIn/SignIn";
import Loginacnt from "./components/Loginacnt/Loginacnt";
import Opportunities from "./components/Opportunities/Opportunities";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Signup from "./components/Signup/Signup";
import Register from "./components/Register/Register";
import CreateAccnt from "./components/CreateAccnt/CreateAccnt"

import Dreamjob from "./components/Dreamjob/Dreamjob";

function App() {
  return (
    <>
  
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Loginacnt" element={<Loginacnt />} />
          <Route path="/Opportunities" element={<Opportunities />} />
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/CreateAccnt" element={<CreateAccnt/>} />
          <Route path="/Dreamjob" element={<Dreamjob />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
