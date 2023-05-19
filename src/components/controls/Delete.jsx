import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDeleteContactMutation } from "../../services/contact";
import Cookies from "js-cookie";
import { Typography } from "@material-tailwind/react";

const Delete = ({id}) => {
  const token = Cookies.get("token");
  const [deleteContact] = useDeleteContactMutation();

  const deleteHandler = async () => {
    // console.log(typeof(e));
    const data = await deleteContact({id,token});
    // console.log(data)

  };

  return (
    <>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue"
        className="font-medium bg-red-400 p-2 rounded text-white"
        onClick={(e) => deleteHandler()}
      >
        <AiOutlineDelete />
      </Typography>
    </>
  );
};

export default Delete;
