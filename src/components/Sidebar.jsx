import React from "react";
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

const Sidebar = () => {
  const token = Cookies.get("token");
  const [logout] = useLogoutMutation();
  const nav = useNavigate();
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
      <Card className="fixed z-40 top-20 left-[-100%] h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List>
          <ListItem>
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
      </Card>
    </>
  );
};

export default Sidebar;
