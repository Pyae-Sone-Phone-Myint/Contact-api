import Cookies from "js-cookie";
import React from "react";
import { useGetSingleContactQuery } from "../../services/contact";
import { useParams } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import { Avatar, Card, Typography } from "@material-tailwind/react";

const DetailUser = () => {
  const { id } = useParams();
  const token = Cookies.get("token");
  const { data } = useGetSingleContactQuery({ id, token });

  const job = [
    "Software Engineer",
    "Backend Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "Full Stack Developer",
  ];
  let i = Math.floor(Math.random() * job.length);
  console.log(i);
  return (
    <div className=" flex justify-center mt-3">
      <Card className=" items-center p-5 bg-transparent backdrop-blur-xl">
        <HiUserCircle className="text-[200px] text-white bg-light-blue-400 rounded-full mb-4" />
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {data?.contact.name}
        </Typography>
        <Typography color="blue" className="" textGradient>
          {job[i]}
        </Typography>
        <Typography variant="h6" color="blue" className="font-medium" textGradient>
          {data?.contact.email}
        </Typography>
        <Typography color="green" className="font-medium" textGradient>
          {data?.contact.phone}
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
          {data?.contact.address}
        </Typography>
      </Card>
    </div>
  );
};

export default DetailUser;
