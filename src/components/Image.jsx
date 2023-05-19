import React from "react";
import image from "../images/beach-bg.jpg"

const Image = () => {
  return (
    <>
      <img
        src={image}
        alt="background photo"
        className=" w-screen object-cover fixed -z-20"
      />
    </>
  );
};

export default Image;
