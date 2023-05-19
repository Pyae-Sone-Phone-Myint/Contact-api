import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import Cookies from "js-cookie";
import { useUpdateContactMutation } from "../../services/contact";

const UpdateUser = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const nav = useNavigate();
  const [updateContact] = useUpdateContactMutation();
  const token = Cookies.get("token");
  const {id} = useParams()

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const user = { name, phone, email, address };
      const { data } = await updateContact({id, user, token });
      console.log(data);
      if (data?.success) {
        return nav("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex justify-center h-screen items-center">
      <Card
        color="transparent"
        shadow={false}
        className=" bg-transparent backdrop-blur-xl w-fit p-10"
      >
        <Typography variant="h4" color="blue-gray">
          Update User
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your information.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={submitHandler}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              size="lg"
              label="Phone No."
              type="number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              type="text"
              size="lg"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Textarea
              type="text"
              size="lg"
              label="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <Button type="submit" className="mt-6" fullWidth>
            Update User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default UpdateUser;
