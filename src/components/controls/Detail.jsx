import { Typography } from "@material-tailwind/react";
import React from "react";
import { BiDetail } from "react-icons/bi";

const Detail = ({id}) => {

  return (
    <>
      <Typography
        as="a"
        href={`detail-user/${id}`}
        variant="small"
        color="blue"
        className="font-medium bg-green-400 p-2 rounded text-white"
      >
        <BiDetail />
      </Typography>
    </>
  );
};

export default Detail;
