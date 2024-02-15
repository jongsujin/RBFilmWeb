"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import Title from "@/components/Title/Title";
import SliderItem from "./_component/SliderItem";

function PortFolio() {
  const pathname = usePathname();
  const isItem = pathname?.includes("item");

  const Item = {
    id: 1,
    ImageUrl: "/assets/images/portfolioImage1.PNG",
    content: {
      title:
        "출구 없는 미로  &quot;No Exit&quot; 캠페인 by R.B.FILM feat. 김종현",
      desc: "경찰청 주관 마약 캠페인 &quot;No Exit&quot; With DKU,김종현",
      part: "총괄/촬영/편집",
      by: "Sony 50 GM / Sony 16-35 GM / Cannon RF 28-70 FX9 / RED KOMODO / Sony A7S3 / Sony 70-200 GM2",
    },
  };
  return (
    <div>
      <div className="relative mt-20">
        <Banner bannerImage="service0.png" />
      </div>
      <div className="absolute bottom-[-9rem] right-0 left-0">
        <NavBar tab="PORTFOLIO" />
        <div className="mt-28 mb-48">
          <Title title="PORTFOLIO" content="포트폴리오" />
        </div>
      </div>

      <div className="mt-72 mb-40">
        <div className="text-center text-[25px] pt-2 font-pt">
          Make Your Film Special
        </div>
        <SliderItem />
      </div>
      <div className="text-center mb-[21rem]">
        <p className="text-[30px] font-bold">
          R.B.FILM 2022 Show Reel Celeb ver
        </p>
        <p className="text-headline1">
          2022년 하반기, R.B.FILM 인물 위주 쇼릴 입니다.
        </p>
        <p className="text-headline1 mt-16">
          By Ronin 4D 6K / Sony A7S3 / Mavic 3 Classic
        </p>
      </div>
      <Banner bannerImage="portfolio2.png" />
      <div className="w-full border-t border-b flex flex-row justify-center gap-16 text-center mt-56 p-10">
        <p className="cursor-pointer">Interview</p>
        <p className="cursor-pointer">Brand Film</p>
        <p className="cursor-pointer">Event Sketch</p>
        <p className="cursor-pointer">After Movie</p>
        <p className="cursor-pointer">Youtube</p>
        <p className="cursor-pointer">CF/Viral</p>
        <p className="cursor-pointer">Sports</p>
        <p className="cursor-pointer">Performance</p>
        <p className="cursor-pointer">ETC</p>
      </div>
      {isItem && isItem ? null : (
        <div className="w-[90%] mt-56 grid grid-cols-3 gap-7 mx-auto">
          <div className="border relative w-full h-64 cursor-pointer">
            <Link href={`/portfolio/item/${Item.id}`}>
              <Image
                src="/assets/images/portfoiloImage1.png"
                alt="portfoilo1"
                fill
              />
            </Link>
          </div>
          <div className="border w-full h-64 cursor-pointer">안1녕</div>
          <div className="border w-full h-64 cursor-pointer">안녕</div>

          <div className="border h-64 cursor-pointer">안녕</div>
          <div className="border h-64 cursor-pointer">안녕</div>
          <div className="border h-64 cursor-pointer">안녕</div>

          <div className="border h-64 cursor-pointer">안녕</div>
          <div className="border h-64 cursor-pointer">안녕</div>
          <div className="border h-64 cursor-pointer">안녕</div>
        </div>
      )}
    </div>
  );
}

export default PortFolio;
