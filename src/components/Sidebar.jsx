import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  HomeIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import Cookies from "js-cookie";
import { useLogoutMutation } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { BiRightArrow } from "react-icons/bi";

const Sidebar = () => {
  const token = Cookies.get("token");
  const [logout] = useLogoutMutation();
  const nav = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  console.log(sidebar);
  const logoutHandler = async () => {
    await logout(token);
    Cookies.remove("token");
    nav("/");
  };

  const dashboard = () => {
    nav("/dashboard");
  };
  return (
    <>
      {token && (
        <Card
          className={[
            "fixed z-40 top-20 transition duration-1000 left h-[calc(100vh-2rem)] bg-transparent backdrop-blur-2xl w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 ",
            !sidebar && "translate-x-[-100%]",
          ].join(" ")}
        >
          <div className="mb-2 p-4">
            <Typography variant="h5" color="blue-gray">
              Sidebar
            </Typography>
          </div>
          <List>
            <ListItem onClick={() => nav("/")}>
              <ListItemPrefix>
                <HomeIcon className="h-5 w-5" />
              </ListItemPrefix>
              Home
            </ListItem>
            <ListItem onClick={dashboard}>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
            <ListItem onClick={logoutHandler}>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
          <div className="absolute -right-5 bg-blue-300 rounded p-1">
            <BiRightArrow
              className={[
                "text-xl cursor-pointer transition duration-1000",
                sidebar && "rotate-180",
              ].join(" ")}
              onClick={() => setSidebar((l) => !l)}
            />
          </div>
        </Card>
      )}
    </>
  );
};

export default Sidebar;
