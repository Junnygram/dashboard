import React from "react";
import Link from "next/link";
import { RxDashboard, RxPerson } from "react-icons/rx";
import { TfiReddit } from "react-icons/tfi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
              <TfiReddit size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2  " />
          <Link
            href="/"
            className="hover:purple-500 active:bg-purple-700 focus:outline-none focus:ring focus:ring-violet-300"
          >
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link
            href="/customers"
            className="hover:purple-500 active:bg-purple-700 focus:outline-none focus:ring focus:ring-violet-300"
          >
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxPerson size={20} />
            </div>
          </Link>
          <Link
            href="/orders"
            className="hover:purple-500 active:bg-purple-700 focus:outline-none focus:ring focus:ring-violet-300"
          >
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link
            href="/"
            className="hover:purple-500 active:bg-purple-700 focus:outline-none focus:ring focus:ring-violet-300"
          >
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FiSettings size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
