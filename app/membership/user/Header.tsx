"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { BiUserPin } from "react-icons/bi";
import { TbUsersGroup } from "react-icons/tb";
import { RiContactsBook2Line } from "react-icons/ri";
import { BsBrightnessAltHigh } from "react-icons/bs";

import { PiCrossThin } from "react-icons/pi";
import Link from "next/link";

const Header = () => {
  const pathName = usePathname();
  // const navLinks = [
  //   { name: BiUserPin, id: 1, href: "/membership/user" },
  //   { name: RiContactsBook2Line, href: "/membership/contact", id: 2 },
  //   { name: TbUsersGroup, href: "/membership/group", id: 3 },
  //   { name: BsBrightnessAltHigh, href: "./bright", id: 4 },
  //   { name: PiCrossThin, href: "./cross", id: 5 },
  //];

  const isActive = pathName === "/membership/user";
  return (
    <div className="flex border items-center justify-between rounded p-1 ">
      <div className="flex items-center w-[35%] max-[500px]:w-[40%] border-r-2">
        <div className="bg-blue-800 rounded-3xl mx-3">
          <BiUserPin size={25} color="white" className="p-1" />
        </div>
        <div className="h-[27px]">
          <p className="text-[12px] h-[12px] my-0">Step1/5</p>
          <p className="text-blue-800 text-[13px] h-[13px] my-0 font-medium">
            Profile details
          </p>
        </div>
      </div>
      <div className="flex justify-between w-[65%] max-[500px]:w-[60%]">
        <Link
          href={"/membership/contact"}
          className="border-r-2 opacity-40 w-[25%] flex justify-center"
        >
          <RiContactsBook2Line size={16} />
        </Link>
        <Link
          href={"/membership/group"}
          className="border-r-2 opacity-30 w-[25%] flex justify-center"
        >
          <TbUsersGroup size={16} />
        </Link>
        <Link
          href={"/membership/bright"}
          className="border-r-2 opacity-40 w-[25%] flex justify-center"
        >
          <BsBrightnessAltHigh size={16} />
        </Link>
        <Link
          href={"/membership/contact"}
          className="flex justify-center opacity-40 w-[25%]"
        >
          <PiCrossThin size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
