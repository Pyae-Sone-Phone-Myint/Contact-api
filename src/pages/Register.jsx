import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../services/auth";

const Register = () => {
  const [name, setName] = useState("aung aung");
  const [email, setEmail] = useState("aunga@gmail.comm");
  const [password, setPassword] = useState("adfdafda");
  const [password_confirmation, setPasswordConfirmation] = useState("adfdafda");
  const [register] = useRegisterMutation();
  const nav = useNavigate();

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const user = { name, email, password, password_confirmation };
      const { data } = await register(user);
      if (data.success) {
        return nav("/login");
      }
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex justify-center h-screen items-center">
      <div className="mx-auto flex items-center flex-col  p-10 border-white border w-fit rounded-lg backdrop-blur-lg">
        <h1 className="text-3xl font-bold text-red-500 mb-10">Register</h1>
        <form
          action=""
          onSubmit={submitHandler}
          className=" flex flex-col  gap-5 w-96"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className=" label">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              id="name"
              className=" input"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
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
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className=" input"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="confirmed-password" className="label">
              Confirmed Password
            </label>
            <input
              type="password"
              placeholder="Confirmed password"
              className=" input"
              id="confirmed-password"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              value={password_confirmation}
            />
          </div>
          <button className="bg-blue-500 py-2 rounded-lg px-3 text-white">
            Register
          </button>
          <div className="flex text-sm gap-2">
            <p>Already have an account?</p>
            <Link to={"/login"}>
              <button className=" text-blue-500 underline">Login</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
