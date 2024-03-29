"use client";

import React from "react";
import { usePathname } from "next/navigation";
// import Image from "next/image";
import YouTube, { YouTubeProps } from "react-youtube";
import { useRecoilValue } from "recoil";
import { useQuery } from "@tanstack/react-query";
import portfolioSelectedTheme from "@/recoil/atom";
import fetchPortfolioItem from "@/api/fetchPortfolioItem";

// import { useRouter } from "next/navigation";

function PortfolioModal() {
  const selectedTheme = useRecoilValue(portfolioSelectedTheme);
  const pathname = usePathname();
  const id = parseInt(pathname?.split("/").pop() || "", 10);

  const { data } = useQuery({
    queryKey: ["fetchPortfolioItem", id],
    queryFn: () => fetchPortfolioItem({ THEME: selectedTheme, id }),
  });
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="w-2/3 border mt-52 mx-auto flex flex-col items-center max-sm:w-[90%]">
      <YouTube
        className="mt-20 max-sm:w-[90%] max-sm:h-[168px] flex flex-row items-center"
        videoId={data?.url}
        opts={opts}
        onReady={onPlayerReady}
      />

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
