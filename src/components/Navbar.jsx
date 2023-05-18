import Cookies from "js-cookie";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../services/auth";
import { BsPersonCircle } from "react-icons/bs";
import Header from "./Header";

const Navbar = () => {
  const token = Cookies.get("token");
  const [logout] = useLogoutMutation();
  const nav = useNavigate();
  const logoutHandler = async () => {
    await logout(token);
    Cookies.remove("token");
    nav("/");
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
      <Header />
    </>
  );
};

export default Navbar;
