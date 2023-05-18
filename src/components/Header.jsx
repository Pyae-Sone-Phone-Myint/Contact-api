import React from "react";
import { BsSearch, BsPencil, BsServer } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const Header = () => {
  return (
    <div className="container mx-auto">
      <table className="min-w-full bg-white border-collapse rounded-lg mt-20">
        <thead className="">
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-gray-800">
              #
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-gray-800">
              Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-gray-800">
              Phone
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-gray-800">
              Email
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-gray-800">
              Address
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-gray-800">
              Controls
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="px-6 py-4 border-b border-gray-300">1</td>
            <td className="px-6 py-4 border-b border-gray-300">Aung Aung</td>
            <td className="px-6 py-4 border-b border-gray-300">56742542</td>
            <td className="px-6 py-4 border-b border-gray-300">aa@gmail.com</td>
            <td className="px-6 py-4 border-b border-gray-300">sen chaung</td>
            <td className="px-6 py-4 flex items-center gap-4">
              <BsSearch className=" bg-blue-500 text-white text-4xl p-2 rounded-md" />
              <BsPencil className=" bg-green-500 text-white text-4xl p-2 rounded-md" />
              <AiOutlineDelete className=" bg-red-500 text-white text-4xl p-2 rounded-md" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Header;
