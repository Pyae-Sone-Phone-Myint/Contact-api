import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../services/auth";
import Cookies from "js-cookie";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const nav = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const user = { email, password };
    const { data } = await login(user);
    console.log(data);
    if (data.success) {
      Cookies.set("token", data.token);
      nav("/");
    }
    // console.log(data);
  };
  return (
    <div className=" flex justify-center h-screen items-center">
      <Card
        color="transparent"
        shadow={false}
        className=" bg-transparent backdrop-blur-lg w-fit p-10"
      >
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={submitHandler}>
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" onChange={e => setEmail(e.target.value)}/>
            <Input type="password" size="lg" label="Password" onChange={e => setPassword(e.target.value)} />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6" fullWidth>
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign Up
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Login;
