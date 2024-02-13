import React from "react";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import Title from "@/components/Title/Title";
import SliderItem from "./_component/SliderItem";

function PortFolio() {
  return (
    <div>
      <div className="relative mt-20">
        <Banner bannerImage="service0.png" />
      </div>
      <div className="absolute bottom-[-15.5rem] right-0 left-0">
        <NavBar tab="PORTFOLIO" />
        <div className="mt-28 mb-48">
          <Title title="PORTFOLIO" content="포트폴리오" />
        </div>
      </div>

      <div className="mt-40 mb-40">
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
        <p>Interview</p>
        <p>Brand Film</p>
        <p>Event Sketch</p>
        <p>After Movie</p>
        <p>Youtube</p>
        <p>CF/Viral</p>
        <p>Sports</p>
        <p>Performance</p>
        <p>ETC</p>
      </div>
    </div>
  );
}

export default PortFolio;
