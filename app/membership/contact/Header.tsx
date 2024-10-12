"use client";
import React from "react";
import { BiUserPin } from "react-icons/bi";
import { TbUsersGroup } from "react-icons/tb";
import { RiContactsBook2Line } from "react-icons/ri";
import { BsBrightnessAltHigh } from "react-icons/bs";

import { PiCrossThin } from "react-icons/pi";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex border items-center justify-between rounded p-1 ">
      <div className="flex justify-between w-full">
        <div className="border-r-2 w-[16%] max-[500px]:w-[15%] items-center flex justify-center">
          <Link
            href={"/membership/user"}
            className="bg-blue-100 p-1 rounded-3xl"
          >
            <BiUserPin size={18} color="blue" />
          </Link>
        </div>

        <div className="flex items-center w-[35%] max-[500px]:w-[40%] border-r-2">
          <div className="bg-blue-800 rounded-3xl mx-3">
            <RiContactsBook2Line size={25} color="white" className="p-1" />
          </div>
          <div className="h-[27px]">
            <p className="text-[12px] h-[12px] my-0">Step2/5</p>
            <p className="text-blue-800 text-[13px] h-[13px] my-0 font-medium">
              Profile details
            </p>
          </div>
        </div>
        <Link
          href={"/membership/group"}
          className="border-r-2 opacity-30 w-[16%] max-[500px]:w-[15%] items-center flex justify-center"
        >
          <TbUsersGroup size={16} />
        </Link>
        <Link
          href={"/membership/bright"}
          className="border-r-2 opacity-40 w-[16%] max-[500px]:w-[15%] items-center flex justify-center"
        >
          <BsBrightnessAltHigh size={16} />
        </Link>
        <Link
          href={"/membership/contact"}
          className="flex justify-center opacity-40 w-[16%] max-[500px]:w-[15%] items-center "
        >
          <PiCrossThin size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
