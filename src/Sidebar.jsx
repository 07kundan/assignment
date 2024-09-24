import React from "react";
import { cn } from "./libs/utils";
import { MdDashboard } from "react-icons/md";
import { GrSchedule } from "react-icons/gr";
import { IoIosPerson } from "react-icons/io";
import { FcDepartment } from "react-icons/fc";
import { CiReceipt } from "react-icons/ci";
import { MdOutlineContactSupport } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { AiFillAlipayCircle } from "react-icons/ai";

const MenuItems = [
  {
    icon: <MdDashboard />,
    name: "Dashboard",
  },
  {
    icon: <CiReceipt />,
    name: "Recruitment",
  },
  {
    icon: <GrSchedule />,
    name: "Schedule",
  },
  {
    icon: <IoIosPerson />,
    name: "Employee",
  },
  {
    icon: <FcDepartment />,
    name: "Department",
  },
];

const other = [
  {
    icon: <MdOutlineContactSupport />,
    name: "Support",
  },
  {
    icon: <CiSettings />,
    name: "Settings",
  },
];

function Sidebar({ className }) {
  return (
    <div
      className={cn(
        "hidden md:block h-screen  px-7 border-r-2 border-blue-600",
        className
      )}
    >
      <h2 className=" flex items-center justify-center gap-3 py-12 text-[#0A337A]">
        <AiFillAlipayCircle className="text-5xl" />
        <span className="text-2xl font-bold">Vasitum</span>
      </h2>
      <div className="text-zinc-700">
        <ul className="space-y-4">
          <span className="text-sm">Main menu</span>
          {MenuItems.map((item) => (
            <li key={item.name}>
              <button className="flex gap-5 items-center justify-center">
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
          <h4 className="pt-4 text-sm">Others</h4>
          {other.map((item) => (
            <li key={item.name}>
              <button className="flex gap-5 items-center justify-center">
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
