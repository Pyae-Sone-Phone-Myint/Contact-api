import React, { useState } from "react";
import { BsSearch, BsPencil } from "react-icons/bs";
import {BiUserPlus,BiDetail} from "react-icons/bi"
import { HiUserCircle } from "react-icons/hi";
import Cookies from "js-cookie";
import { useGetContactsQuery } from "../services/contact";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import Delete from "./controls/Delete";
import Update from "./controls/Update";
import Detail from "./controls/Detail";
import { Link } from "react-router-dom";

const TABS = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Monitored",
      value: "monitored",
    },
    {
      label: "Unmonitored",
      value: "unmonitored",
    },
  ];

const ContactTable = () => {
  const token = Cookies.get("token");
  const TABLE_HEAD = ["Name", "Phone", "Address", "Control"];
  const [search, setSearch] = useState('');

  const { data } = useGetContactsQuery(token);
  const filterData = data?.contacts?.data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  
  const TABLE_ROWS = filterData?.map((item) => {
    return (
      <tr key={item.id} className="even:bg-blue-gray-50/50">
        <td className="p-3">
          <div className="flex items-center gap-3">
            <HiUserCircle className="text-3xl"/>
            <div className="flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {item.name}
              </Typography>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-70"
              >
                {item.email ? item.email : "example@email"}
              </Typography>
            </div>
          </div>
        </td>
        <td className="p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {item.phone}
          </Typography>
        </td>
        <td className="p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {item.address ? item.address : "example@gmail.com"}
          </Typography>
        </td>
        <td className="p-4 flex gap-4">
          <Detail id={item.id}/>
          <Update id={item.id}/>
          <Delete id={item.id}/>
        </td>
      </tr>
    );
  });

  return (
    <>
      {token && (
        <Card className=" container mx-auto h-full w-full my-10 rounded-md">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-8 flex items-center justify-between gap-8">
              <div>
                <Typography variant="h5" color="blue-gray">
                  Members list
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  See information about all members
                </Typography>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                {/* <Button variant="outlined" color="blue-gray" size="sm">
                  view all
                </Button> */}
                <Link to={'/create-user'}>
                <Button
                  className="flex items-center gap-3 rounded text-white px-2 bg-blue-500"
                  color="blue"
                  size="sm"
                  href=""
                  >
                  <BiUserPlus strokeWidth={1} className="h-4 w-4" /> Add
                  member
                </Button>
                  </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <Tabs value="all" className="w-full md:w-max">
                <TabsHeader>
                  {TABS.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                      &nbsp;&nbsp;{label}&nbsp;&nbsp;
                    </Tab>
                  ))}
                </TabsHeader>
              </Tabs>
              <div className="w-full md:w-72">
                <Input
                  onChange={e => setSearch(e.target.value)}
                  label="Search"
                  icon={<BsSearch className="h-5 w-5" />}
                />
              </div>
            </div>
          </CardHeader>
          <table className="w-full min-w-max table-auto text-left rounded-md">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{TABLE_ROWS}</tbody>
          </table>
        </Card>
      )}
    </>
  );
};

export default ContactTable;


