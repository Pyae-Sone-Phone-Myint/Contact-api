import React from "react";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";

const Path = () => {
  return (
    <>
      <img
        src="./src/images/beach-bg.jpg"
        alt="background photo"
        className=" h-screen w-screen object-cover absolute -z-20"
      />
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Path;
