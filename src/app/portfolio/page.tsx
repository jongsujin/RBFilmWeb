"use client";

import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import Title from "@/components/Title/Title";
// import SliderItem from "./_component/SliderItem";
import fetchPortfolioTheme from "@/api/fetchPortfolioTheme";
import portfolioSelectedTheme from "@/recoil/atom";

interface PortFolioItemProps {
  id?: number;
  title?: string;
  sub_title?: string;
  first_content?: string;
  second_content?: string;
  third_content?: string;
  first_by?: string;
  second_by?: string;
  url?: string;
  part?: string;
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

  const handleThemeClick = (
    theme: string,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    const scrollPosition = window.scrollY.toString();
    sessionStorage.setItem("scrollPosition", scrollPosition); // sessionStorage 사용
    setSelectedTheme(theme);
    if (isItem) {
      router.push("/portfolio");
    }
  };

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ["fetchAllPortfolioDatas", selectedTheme],
    queryFn: () => fetchPortfolioTheme(selectedTheme),
    enabled: !!selectedTheme,
  });

  if (isLoading) {
    return <div>로딩중</div>;
  }
  return (
    <div className="w-full">
      <div className="relative">
        <div className="mt-20 mb-60">
          <Banner bannerImage="portfolioBanner.png" />
        </div>
        <div className="absolute bottom-[-20rem] max-md:bottom-[-17.7rem] max-xl:bottom-[-19rem] right-0 left-0 max-2xl:bottom-[-19.5rem]">
          <NavBar tab="PORTFOLIO" />
          <div className="mt-28 mb-56">
            <Title title="PORTFOLIO" content="포트폴리오" />
          </div>
        </div>
      </div>

      <div className="mt-72 mb-40">
        <div className="text-center text-[25px] pt-2 font-pt max-md:text-headline2">
          Make Your Film Special
        </div>
      </div>
      <div className="text-center mb-[21rem]">
        <p className="text-[30px] font-bold max-md:text-[25px]">
          R.B.FILM 2022 Show Reel Celeb ver
        </p>
        <p className="text-headline1 max-md:text-headline2">
          2022년 하반기, R.B.FILM 인물 위주 쇼릴 입니다.
        </p>
        <p className="text-headline1 mt-16 max-md:text-headline3">
          By Ronin 4D 6K / Sony A7S3 / Mavic 3 Classic
        </p>
      </div>
      <Banner bannerImage="portfolio2.png" />
      <div className="w-full border-t border-b flex flex-row justify-center gap-16 text-center mt-56 p-10 max-md:gap-7">
        <button
          type="button"
          className="cursor-pointer max-md:text-[12px] max-xl:text-[14px]"
          onClick={(e) => handleThemeClick("Interview", e)}
        >
          Interview
        </button>
        <button
          type="button"
          className="cursor-pointer max-md:text-[12px]  max-xl:text-[16px]"
          onClick={(e) => handleThemeClick("Event Sketch", e)}
        >
          Event Sketch
        </button>
        <button
          type="button"
          className="cursor-pointer  max-md:text-[12px] max-xl:text-[14px]"
          onClick={(e) => handleThemeClick("After Movie", e)}
        >
          After Movie
        </button>
        <button
          type="button"
          className="cursor-pointer max-md:text-[12px]  max-xl:text-[14px]"
          onClick={(e) => handleThemeClick("Youtube", e)}
        >
          Youtube
        </button>
        <button
          type="button"
          className="cursor-pointer max-md:text-[12px]  max-xl:text-[14px]"
          onClick={(e) => handleThemeClick("Viral", e)}
        >
          Brand Film / Viral
        </button>
        <button
          type="button"
          className="cursor-pointer max-md:text-[12px]  max-xl:text-[14px]"
          onClick={(e) => handleThemeClick("Performance", e)}
        >
          Performance
        </button>
        <button
          type="button"
          className="cursor-pointer max-md:text-[12px]  max-xl:text-[14px]"
          onClick={(e) => handleThemeClick("ETC", e)}
        >
          ETC
        </button>
      </div>
      {isItem && isItem ? null : (
        <div className="w-[70%] mt-56 mb-96 grid grid-cols-3 gap-7 mx-auto max-md:grid-cols-2">
          {data &&
            data?.DATA?.map((portfolioItem: PortFolioItemProps) => (
              <div
                key={portfolioItem.id}
                className="border relative w-[429px] h-[15rem] max-md:w-[247px] max-md:h-[139px] max-xl:w-[220px] max-xl:h-[124px] max-2xl:w-[313px] max-2xl:h-[176px] xxl:w-[840px] xxl:h-[472.5px]"
              >
                <Image src={portfolioItem.image_url} alt="portfolio1" fill />
                <Link href={`/portfolio/item/${portfolioItem.id}`}>
                  <Image
                    src="/assets/images/playerBtn32.svg"
                    alt="재생버튼"
                    width={32}
                    height={32}
                    className="absolute top-[45%] left-[45%] max-xl:w-5 max-xl:h-5 2xl:w-12 2xl:h-12"
                  />
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default PortFolio;
