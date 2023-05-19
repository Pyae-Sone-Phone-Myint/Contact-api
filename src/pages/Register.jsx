import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../services/auth";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [register] = useRegisterMutation();
  const nav = useNavigate();

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const user = { name, email, password, password_confirmation };
      const { data } = await register(user);
      console.log(data)
      if (data?.success) {
        return nav("/login");
      }
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex justify-center h-screen items-center">
      <Card
        color="transparent"
        shadow={false}
        className=" bg-transparent backdrop-blur-lg w-fit p-10"
      >
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={submitHandler}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              size="lg"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              size="lg"
              label="Confirmed Password"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
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
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Register;
