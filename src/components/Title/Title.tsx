import React from "react";

interface TitleProps {
  title: string;
  content: string;
}
function Title({ title, content }: TitleProps) {
  return (
    <div className="flex flex-row justify-center">
      <div className=" w-3 h-3 rounded-full bg-white mt-7" />
      <div className="h-0.5 w-[36%]  border border-white mt-8 mr-8" />
      <div className="flex flex-col items-center">
        <p className="text-[40px] font-bold mb-4">{title}</p>
        <p className="text-[40px] font-bold">{content}</p>
      </div>
      <div className="h-0.5 w-[36%]  border border-white mt-8 ml-8" />
      <div className=" w-3 h-3 rounded-full bg-white mt-7" />
    </div>
  );
}

export default Title;
