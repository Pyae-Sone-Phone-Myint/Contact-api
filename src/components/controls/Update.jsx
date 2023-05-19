import { Typography } from "@material-tailwind/react";
import React from "react";
import { BsPencil } from "react-icons/bs";

const Update = ({ id }) => {
  return (
    <>
      <Typography
        as="a"
        href={`/update-user/${id}`}
        variant="small"
        color="blue"
        className="font-medium bg-blue-400 p-2 rounded text-white"
      >
        <BsPencil />
      </Typography>
    </>
  );
};

export default Update;
