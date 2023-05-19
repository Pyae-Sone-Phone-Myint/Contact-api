import Cookies from "js-cookie";
import React from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../services/auth";
import { BsPersonCircle } from "react-icons/bs";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  HomeIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const token = Cookies.get("token");
  const [logout] = useLogoutMutation();
  const nav = useNavigate();
  const logoutHandler = async () => {
    await logout(token);
    Cookies.remove("token");
    nav("/");
  };

  const dashboard = () => {
    nav("/dashboard");
  };

  return (
    <>
      <nav className=" px-36 py-5 flex items-center justify-between backdrop-blur-lg shadow text-white">
        <h1 className=" text-3xl font-bold">Reservation</h1>
        {token ? (
          <div className="flex items-center gap-3">
            <button onClick={logoutHandler}>Logout</button>
            <BsPersonCircle className="text-xl" />
          </div>
        ) : (
          <div className="flex gap-10 font-semibold">
            <Link to={"/login"}>
              <button>Login</button>
            </Link>
            <Link to={"/register"}>
              <button className=" bg-green-400 py-1 px-3 rounded-md text-white">
                Sign up
              </button>
            </Link>
          </div>
        )}
      </nav>
      <Sidebar/>
      <Outlet />
    </>
  );
};

export default Navbar;
