import React from "react";

function Card2({ heading, content, graph, rate, footer }) {
  return (
    <div className="border rounded-md h-full">
      <div className="flex justify-around">
        {/* left section */}
        <div className="p-4 space-y-4">
          <h3 className="text-black font-medium">{heading}</h3>
          <div className="text-black text-4xl font-semibold">{content}</div>
          <div>{footer}</div>
        </div>
        {/* right section */}
        <div className=" flex flex-col justify-center space-y-2 items-center">
          <div className="h-20 w-full text-sm bg-[#FFEFE7]">{graph} graph</div>
          <p className="text-xs">{rate}</p>
        </div>
      </div>
    </div>
  );
}

export default Card2;
