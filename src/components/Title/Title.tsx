import React from "react";

interface TitleProps {
  title: string;
  content: string;
  // onClick?: () => void;
}
function Title({ title, content }: TitleProps) {
  return (
    <div className="flex flex-row justify-center cursor-pointer">
      <div className=" w-3 h-3 rounded-full bg-white mt-7 max-md:mt-3" />
      <div className="h-0.5 w-[30%]  border border-white mt-8 mr-8 max-md:mt-4 max-md:w-[20%]" />
      <div className="flex flex-col items-center">
        <p className="text-[40px] font-bold mb-2 max-md:text-[25px] max-md:mb-0 max-xl:text-[35px] max-2xl:text-[35px]">
          {title}
        </p>
        <p className="text-[40px] font-bold max-md:text-[25px]  max-xl:text-[35px] max-2xl:text-[35px]">
          {content}
        </p>
      </div>
      <div className="h-0.5 w-[30%]  border border-white mt-8 ml-8 max-md:mt-4 max-md:w-[20%]" />
      <div className=" w-3 h-3 rounded-full bg-white mt-7 max-md:mt-3" />
    </div>
  );
}

export default Title;
