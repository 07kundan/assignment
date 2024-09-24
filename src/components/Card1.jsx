import React from "react";
import { cn } from "../libs/utils";

function Card1({ heading, content, footer, className }) {
  return (
    <div className={cn("border h-[136px] rounded-md p-4 space-y-2", className)}>
      <h2 className="text-black font-medium">{heading}</h2>
      <div className="text-black text-5xl font-semibold"> {content}</div>
      <div className={cn("font-bold text-sm", className)}>{footer}</div>
    </div>
  );
}

export default Card1;
