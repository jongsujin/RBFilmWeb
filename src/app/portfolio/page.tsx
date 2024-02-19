"use client";

import React from "react";
import { useRecoilState } from "recoil";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import Title from "@/components/Title/Title";
import SliderItem from "./_component/SliderItem";
import fetchPortfolioTheme from "@/api/fetchPortfolioTheme";
import portfolioSelectedTheme from "@/recoil/atom";

interface PortFolioItemProps {
  id: number;
  title: string;
  sub_title: string;
  first_content: string;
  second_content: string;
  first_by: string;
  second_by: string;
  url: string;
  part: string;
  image_url: string;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface PortFolioProps {
  THEME: string;
  DATA: PortFolioItemProps[];
}
function PortFolio() {
  const router = useRouter();
  const pathname = usePathname();
  const isItem = pathname?.includes("item");
  const [selectedTheme, setSelectedTheme] = useRecoilState(
    portfolioSelectedTheme,
  );

  const handleThemeClick = (theme: string) => {
    setSelectedTheme(theme);
    if (isItem) {
      router.push("/portfolio");
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["fetchAllPortfolioDatas", selectedTheme],
    queryFn: () => fetchPortfolioTheme(selectedTheme),
    enabled: !!selectedTheme,
  });

  if (isLoading) {
    return <div>로딩중</div>;
  }
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
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => handleThemeClick("Interview")}
        >
          Interview
        </button>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => handleThemeClick("Brand Film")}
        >
          Brand Film
        </button>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => handleThemeClick("Event Sketch")}
        >
          Event Sketch
        </button>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => handleThemeClick("After Movie")}
        >
          After Movie
        </button>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => handleThemeClick("Youtube")}
        >
          Youtube
        </button>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => handleThemeClick("CF/Viral")}
        >
          CF/Viral
        </button>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => handleThemeClick("Sports")}
        >
          Sports
        </button>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => handleThemeClick("Performance")}
        >
          Performance
        </button>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => handleThemeClick("ETC")}
        >
          ETC
        </button>
      </div>
      {isItem && isItem ? null : (
        <div className="w-[90%] mt-56 mb-96 grid grid-cols-3 gap-7 mx-auto">
          {data &&
            data?.DATA?.map((portfolioItem: PortFolioItemProps) => (
              <div
                key={portfolioItem.id}
                className="border relative w-[80%] h-96 cursor-pointer"
              >
                <Link href={`/portfolio/item/${portfolioItem.id}`}>
                  <Image src={portfolioItem.image_url} alt="portfolio1" fill />
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default PortFolio;
