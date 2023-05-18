import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../services/auth";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("aunga@gmail.comm");
  const [password, setPassword] = useState("adfdafda");
  const [login] = useLoginMutation();
  const nav = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const user = { email, password };
    const {data} = await login(user);
    if(data.success) {
      Cookies.set('token',data.token)
      nav('/')
    }
    // console.log(data);
  };
  return (
    <div className=" flex justify-center h-screen items-center">
      <div className="mx-auto flex items-center flex-col  p-10 border-white border w-fit rounded-lg backdrop-blur-lg">
        <h1 className="text-3xl font-bold text-red-500 mb-10">Login</h1>
        <form
          action=""
          onSubmit={submitHandler}
          className=" flex flex-col  gap-5 w-96"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className=" input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="label">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className=" input"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button className="ms-auto text-xs text-red-500 underline">
              Forgot password!
            </button>
          </div>

          <button className="bg-blue-500 py-2 rounded-lg px-3 text-white">
            Login
          </button>
          <div className="flex text-sm gap-2">
            <p>Don't have an account?</p>
            <Link to={"/register"}>
              <button className=" text-blue-500 underline">Register</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
