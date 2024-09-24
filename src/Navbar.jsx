import React from "react";
import { BiBell, BiDownArrow, BiMessage } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHamburger, FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { cn } from "./libs/utils";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar({ className }) {
  return (
    <div className={cn("flex justify-between py-4 px-6 md:px-3", className)}>
      <div className="relative text-xl flex items-center gap-5 ">
        <GiHamburgerMenu className="block md:hidden" />
        <input
          type="search"
          className="hidden md:block w-80 py-1.5 px-2 rounded-md bg-zinc-200"
          placeholder="Search"
        />
        <button className="items-center">
          <FaSearch className=" md:absolute top-1/2 md:-translate-y-1/2 right-7" />
        </button>
      </div>
      <div className="flex gap-5  md:gap-7 text-zinc-700 text-xl items-center">
        <BiBell />
        <BiMessage />
        <div className="flex gap-2 items-center">
          <CgProfile className="text-3xl" />
          <span className="text-base">Name</span>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
