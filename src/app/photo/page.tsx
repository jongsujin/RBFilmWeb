"use client";

import React, { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import Title from "@/components/Title/Title";
// import fetchPortfolioTheme from "@/api/fetchPortfolioTheme";

function Photo() {
  const [currentTab, setCurrentTab] = useState("Festival Photo");
  const [selectedPhotoTheme, setSelectedPhotoTheme] = useState("");
  console.log(selectedPhotoTheme);
  const handlePhotoThemeClick = (theme: string) => {
    setSelectedPhotoTheme(theme);
    setCurrentTab(theme);
  };
  // const { data, isLoading } = useQuery({
  //   queryKey: ["fetchAllPortfolioDatas", selectedPhotoTheme],
  //   queryFn: () => fetchPortfolioTheme(selectedPhotoTheme),
  //   enabled: !!selectedPhotoTheme,
  // });
  // if (isLoading) {
  //   return <div>로딩중</div>;
  // }
  // console.log(data);
  return (
    <div className="w-screen">
      <div className="relative mt-20">
        <Banner bannerImage="photoBanner.png" />
      </div>
      <div className="absolute bottom-[-12.5rem] right-0 left-0">
        <NavBar tab="PHOTO" />
        <div className="mt-28 mb-48">
          <Title title="PHOTO" content="" />
        </div>
      </div>
      <div className="w-full border-t border-b flex flex-row justify-center gap-28 text-center mt-56 p-10">
        <button
          type="button"
          className={`text-white font-medium text-headline3 cursor-pointer ${currentTab === "Festival Photo" ? "border-b-2 border-white" : ""}`}
          onClick={() => handlePhotoThemeClick("Festival Photo")}
        >
          Festival Photo
        </button>
        <button
          type="button"
          className={`text-white font-medium text-headline3 cursor-pointer ${currentTab === "Personal Photo" ? "border-b-2 border-white" : ""}`}
          onClick={() => handlePhotoThemeClick("Personal Photo")}
        >
          Personal Photo
        </button>
        <button
          type="button"
          className={`text-white font-medium text-headline3 cursor-pointer ${currentTab === "Sketch Photo" ? "border-b-2 border-white" : ""}`}
          onClick={() => handlePhotoThemeClick("Sketch Photo")}
        >
          Sketch Photo
        </button>
        <button
          type="button"
          className={`text-white font-medium text-headline3 cursor-pointer ${currentTab === "Sports Photo" ? "border-b-2 border-white" : ""}`}
          onClick={() => handlePhotoThemeClick("Sports Photo")}
        >
          Sports Photo
        </button>
        <button
          type="button"
          className={`text-white font-medium text-headline3 cursor-pointer ${currentTab === "ETC" ? "border-b-2 border-white" : ""}`}
          onClick={() => handlePhotoThemeClick("ETC")}
        >
          ETC
        </button>
      </div>
      <div className="w-full flex flex-col items-center">
        <p className="text-[#707070] font-bold text-[220px] mt-24">
          Indie Music
        </p>
        <p className="text-[25px] font-medium mb-8">Indie Music</p>
        <div className="w-full max-w-[80%] grid grid-cols-2 gap-32">
          <div className="h-[28rem] border border-white bg-gray" />
          <div className="h-[28rem] border border-white bg-gray" />
          <div className="h-[28rem] border border-white bg-gray" />
          <div className="h-[28rem] border border-white bg-gray" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <p className="text-[#707070] font-bold text-[220px] mt-24">JUMF</p>
        <p className="text-[25px] font-medium mb-8">JUMF</p>
        <div className="w-full max-w-[80%] grid grid-cols-2 gap-32">
          <div className="h-[28rem] border border-white bg-gray" />
          <div className="h-[28rem] border border-white bg-gray" />
          <div className="h-[28rem] border border-white bg-gray" />
          <div className="h-[28rem] border border-white bg-gray" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <p className="text-[#707070] font-bold text-[220px] mt-24">Micro</p>
        <p className="text-[25px] font-medium mb-8">Micro</p>
        <div className="w-full max-w-[80%] grid grid-cols-2 gap-32">
          <div className="h-[28rem] border border-white bg-gray" />
          <div className="h-[28rem] border border-white bg-gray" />
          <div className="h-[28rem] border border-white bg-gray" />
          <div className="h-[28rem] border border-white bg-gray" />
          <div className="h-[28rem] border border-white bg-gray" />
          <div className="h-[28rem] border border-white bg-gray" />
        </div>
      </div>
    </div>
  );
}

export default Photo;
