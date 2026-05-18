import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";


import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;