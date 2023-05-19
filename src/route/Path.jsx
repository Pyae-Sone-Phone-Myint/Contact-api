import React from "react";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import CreateUser from "../components/controls/CreateUser";
import UpdateUser from "../components/controls/UpdateUser";
import Image from "../components/Image";
import DetailUser from "../components/controls/DetailUser";

const Path = () => {
  return (
    <>
      <Image/>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path={"/update-user/:id"} element={<UpdateUser />} />
        <Route path="/detail-user/:id" element={<DetailUser/>}/>
      </Routes>
    </>
  );
};

export default Path;
