"use client";

import React from "react";
import ReactPlayer from "react-player";
import { usePathname } from "next/navigation";
import { useRecoilValue } from "recoil";
import { useQuery } from "@tanstack/react-query";
import portfolioSelectedTheme from "@/recoil/atom";
import fetchPortfolioItem from "@/api/fetchPortfolioItem";

function PortfolioModal() {
  const selectedTheme = useRecoilValue(portfolioSelectedTheme);
  const pathname = usePathname();
  const id = parseInt(pathname?.split("/").pop() || "", 10);

  const { data } = useQuery({
    queryKey: ["fetchPortfolioItem", id],
    queryFn: () => fetchPortfolioItem({ THEME: selectedTheme, id }),
  });

  // const { data: showReelData } = useQuery({
  //   queryKey: ["fetchPortfolioItem", id],
  //   queryFn: () => fetchPortfolioItem({ THEME: "Showreel", id }),
  // });
  // console.log("ShowReelData :", showReelData);
  return (
    <div className="w-2/3 border mt-52 mx-auto flex flex-col items-center max-sm:w-[90%]">
      <div className="relative mt-11 pt-[50.625%] w-[90%]">
        {" "}
        <ReactPlayer
          url={data?.url}
          className="react-player absolute top-0 left-0"
          width="100%"
          height="100%"
          playing
          controls
        />
      </div>

      <div className="text-center mt-24">
        <p className="mb-14 text-[30px] max-sm:text-[14px] font-medium">
          {data?.title}
        </p>
        {data?.sub_title ? (
          <p className="mb-14 text-[30px] max-sm:text-[14px] font-medium">
            {data?.sub_title}
          </p>
        ) : null}
        <p className="text-headline2 max-sm:text-[14px]">
          {data?.first_content}
        </p>
        <p className="text-headline2 max-sm:text-[14px]">
          {data?.second_content}
        </p>
        <p className="text-headline2 max-sm:text-[14px]">
          {data?.third_content}
        </p>
        <p className="mt-14 last:font-bold text-headline2 max-sm:text-[14px]">
          Part
        </p>
        <p className="mb-14 text-headline2 max-sm:text-[14px]">{data?.part}</p>
        <div className="mb-14">
          <p className="font-bold text-headline2 max-sm:text-[14px]">By</p>
          <p className="text-headline2 max-sm:text-[14px]">{data?.first_by}</p>
          <p className="text-headline2 max-sm:text-[14px]">{data?.second_by}</p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioModal;
