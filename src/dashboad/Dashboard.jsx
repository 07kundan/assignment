import React from "react";
import { cn } from "../libs/utils";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import { PiNeedle } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Row1 = [
  {
    heading: "Available Position",
    content: "24",
    footer: "4 Urgently needed",
    className: "bg-[#FFEFE7] text-[#FF5151]",
  },
  {
    heading: "Job Open",
    content: "10",
    footer: "4 Active Hiring",
    className: "bg-[#E8F0FB] text-[#3786F1]",
  },
  {
    heading: "New Employees",
    content: "24",
    footer: "4 Department",
    className: "bg-[#FDEBF9] text-[#EE61CF]",
  },
];

const Row2 = [
  {
    heading: "Total Employee",
    content: "216",
    footer: (
      <span className="text-zinc-700 text-sm">
        <p>120 Men</p>
        <p>126 Women</p>
      </span>
    ),
    graph: "",
    rate: (
      <span className="bg-[#FFEFE7] rounded-sm px-1 py-0.5">
        +2% Past months
      </span>
    ),
  },
  {
    heading: "Talent Request",
    content: "16",
    footer: (
      <span className="text-zinc-700 text-sm">
        <p>120 Men</p>
        <p>126 Women</p>
      </span>
    ),
    graph: "",
    rate: (
      <span className="bg-[#FFEFE7] rounded-sm px-1 py-0.5">
        +2% Past months
      </span>
    ),
  },
];

const Announcement = [
  {
    content: "Outing Schedule for every department",
    time: "5 minutes ago",
  },
  {
    content: "Meeting HR department",
    time: "Yesterday 12:30 PM",
  },
  {
    content: "IT department need two more talents for UX/UI Design position",
    time: "Yesterday 09:30 AM",
  },
];

const Others = [
  {
    content: "Interview with candidates",
    date: "Today 10:30AM",
  },
  {
    content: "Short meeting with product designer from IT department",
    date: "Today 11:30AM",
  },
  {
    content: "Interview with candidates",
    date: "Today 10:30AM",
  },
  {
    content: "Short meeting with product designer from IT department",
    date: "Today 11:30AM",
  },
];

function Dashboard({ className }) {
  return (
    <div className={cn("w-full", className)}>
      <h2 className=" text-xl font-semibold py-4">Dashboard</h2>
      <div className="md:flex md:gap-2 space-y-4 md:space-y-0">
        {/* left section */}
        <div className=" md:w-[60%] space-y-2">
          {/* row 1 */}
          <ul className="grid md:grid-cols-3 space-y-3 md:space-y-0 md:space-x-3">
            {Row1.map((item, index) => (
              <li key={index} className="">
                <Card1
                  heading={item.heading}
                  content={item.content}
                  footer={item.footer}
                  className={item.className}
                />
              </li>
            ))}
          </ul>
          {/* row 2 */}
          <ul className="grid md:grid-cols-2 space-y-3 md:space-y-0 md:h-[190px] md:gap-3">
            {Row2.map((item, index) => (
              <li className="" key={index}>
                <Card2
                  heading={item.heading}
                  content={item.content}
                  footer={item.footer}
                  graph={item.graph}
                  rate={item.rate}
                />
              </li>
            ))}
          </ul>

          {/* Announcement */}
          <div className="border border-zinc-700 rounded-md">
            <div className="p-4">
              <div className="flex justify-between items-center py-2">
                <h2>Announcement</h2>
                <input type="date" />
              </div>
              <ul className="space-y-2 overflow-scroll md:h-[170px]">
                {Announcement.map((item) => (
                  <List
                    key={item.content}
                    icon1={<PiNeedle />}
                    icon2={<HiOutlineDotsHorizontal />}
                    content={item.content}
                    time={item.time}
                  />
                ))}
              </ul>
            </div>
            <p className="text-center font-bold py-1.5 text-[#FF5151] border-t border-zinc-400 mt-3">
              See All Anouncement
            </p>
          </div>
        </div>

        {/* right section */}
        <div className=" w-full md:w-[40%] flex flex-col items-center justify-between space-y-3 md:space-y-0">
          <div className="bg-[#161E54] w-full md:w-[427px] flex flex-col justify-between pb-6 h-[225px] px-6 text-white rounded-md ">
            <div className="space-y-2 py-4">
              <h2 className="py-2 bg-[#1B204A]">Recently Activity</h2>
              <p className="text-xs">Lorem ipsum dolor sit.</p>
              <p className="te font-semibold">Lorem ipsum dolor sit.</p>
              <p className="text-xs ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Today you make 12 Activity</p>
              <span className="text-pretty bg-[#FF5151] px-2 py-1.5 rounded-md">
                See All Activity
              </span>
            </div>
          </div>
          <div className="md:w-[427px] md:h-[370px]  border border-zinc-400 rounded-md">
            <div className="p-4 md:h-full">
              <h2 className="md:h-[10%]">
                <div className="flex justify-between">
                  <p className="font-semibold tracking-wide">
                    Upcoming Schedule
                  </p>
                  <input
                    type="date"
                    className="text-sm border border-zinc-500 rounded-md px-2 py-1"
                  />
                </div>
              </h2>

              <div className="md:max-h-[80%] overflow-scroll">
                <h3 className="text-sm mt-3 md:mt-0">Priority</h3>
                <List
                  content={"Review Candidate applications"}
                  icon1={<HiOutlineDotsHorizontal />}
                  time={"Today 11:30 AM"}
                />
                <h3 className="text-sm mt-3 md:mt-0">Others</h3>
                <div className="space-y-2">
                  {Others.map((item, index) => (
                    <List
                      key={index}
                      content={item.content}
                      icon1={<HiOutlineDotsHorizontal />}
                      time={item.date}
                    />
                  ))}
                </div>
              </div>
              <p className="text-center font-bold py-1.5 text-[#FF5151] border-t border-zinc-400 mt-3">
                See All Anouncement
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

function List({ icon1, icon2 = "", content, time }) {
  return (
    <div className="bg-zinc-100 rounded-md border flex justify-between px-4 py-1.5">
      <div className="">
        <p>{content}</p>
        <p className="text-xs">{time}</p>
      </div>
      <div className="inline-flex items-center gap-4">
        {icon1}
        {icon2}
      </div>
    </div>
  );
}
