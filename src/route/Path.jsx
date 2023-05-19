import React from "react";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import CreateUser from "../components/controls/CreateUser";
import UpdateUser from "../components/controls/UpdateUser";
import Image from "../components/Image";
import DetailUser from "../components/controls/DetailUser";
import RouteGuard from "../routeGuart/RouteGuard";
import RouteGuardDashboard from "../routeGuart/RouteGuradDashboard";
import Header from "../components/Header";

const Path = () => {
  return (
    <>
      <Image />
      <Routes>
        <Route
          path="/register"
          element={
            <RouteGuard>
              <Register />
            </RouteGuard>
          }
        />
        <Route
          path="/login"
          element={
            <RouteGuard>
              <Login />
            </RouteGuard>
          }
        />
        <Route
          path="/"
          element={
            <RouteGuardDashboard>
              <Navbar />
            </RouteGuardDashboard>
          }
        > 
          <Route path='dashboard' element={<Header/>} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path={"update-user/:id"} element={<UpdateUser />} />
          <Route path="detail-user/:id" element={<DetailUser />} />
        </Route>
      </Routes>
    </>
  );
};

export default Path;
