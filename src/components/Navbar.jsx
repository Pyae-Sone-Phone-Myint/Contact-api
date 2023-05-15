import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" px-36 py-5 flex items-center justify-between backdrop-blur-lg shadow text-white">
      <h1 className=" text-3xl font-bold">Reservation</h1>
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
    </nav>
  );
};

export default Navbar;
