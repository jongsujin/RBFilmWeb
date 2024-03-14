"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import Title from "@/components/Title/Title";
import fetchPhotoItem from "@/api/fetchPhotoItem";
import Footer from "@/components/Footer/Footer";

interface PhotoItemProps {
  photo_id: number;
  photo_title: string;
  photo_subtitle?: string;
  photo_url?: string[];
}

function Photo() {
  const [currentTab, setCurrentTab] = useState("Festival Photo");
  const [selectedPhotoTheme, setSelectedPhotoTheme] =
    useState("Festival Photo");
  console.log(selectedPhotoTheme);
  const handlePhotoThemeClick = (theme: string) => {
    setSelectedPhotoTheme(theme);
    setCurrentTab(theme);
  };
  const { data, isLoading } = useQuery({
    queryKey: ["fetchPhotoItem", selectedPhotoTheme],
    queryFn: () => fetchPhotoItem({ THEME: selectedPhotoTheme }), // 객체를 전달
    enabled: !!selectedPhotoTheme,
  });

  if (isLoading) {
    return <div>로딩중</div>;
  }
  console.log(data);
  console.log(data.DATA);
  return (
    <div className="w-full">
      <div className="relative">
        <div className="mt-20 mb-60">
          <Banner bannerImage="photoBanner.png" />
        </div>
        <div className="absolute bottom-[-16.2rem] right-0 left-0">
          <NavBar tab="PHOTO" />
          <div className="mt-28 mb-56">
            <Title title="PHOTO" content="" />
          </div>
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
          onClick={() => handlePhotoThemeClick("ETC Photo")}
        >
          ETC
        </button>
      </div>
      {data?.DATA?.map((photoItem: PhotoItemProps) => (
        <div
          key={photoItem.photo_id}
          className="w-full mb-96 flex flex-col items-center"
        >
          <p className="text-[#707070] font-bold text-9xl mt-24">
            {photoItem.photo_title}
          </p>
          <p className="text-[25px] font-medium mb-8">
            {photoItem.photo_subtitle}
          </p>
          <div className="relative w-[70%] grid grid-cols-2 gap-32">
            {photoItem.photo_url?.map((url: string, index: number) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className="relative h-[32rem] max-[1440px]:h-[245px]"
              >
                <Image
                  src={url}
                  alt="포토 사진"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="w-[70%] mx-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Photo;
