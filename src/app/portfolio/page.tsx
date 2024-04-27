"use client";

import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import Title from "@/components/Title/Title";
import fetchPortfolioTheme from "@/api/fetchPortfolioTheme";
import portfolioSelectedTheme from "@/recoil/atom";
import Loading from "@/components/Loading/Loading";
import Skeleton from "@/components/Skeleton/Skeleton";
import ShowReelModal from "./_component/ShowReelModal";

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
  const queryClient = useQueryClient();
  const router = useRouter();
  const pathname = usePathname();
  const isItem = pathname?.includes("item");
  const [selectedTheme, setSelectedTheme] = useRecoilState(
    portfolioSelectedTheme,
  );
  const [currentTab, setCurrentTab] = useState("Interview");
  const [isShowReelOpen, setIsShowRellOpen] = useState(false);
  const [selectedShowReel, setSelectedShowReel] =
    useState<PortFolioItemProps | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [portfolioData, setPortfolioData] = useState<PortFolioItemProps[]>([]);

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ["getPrefetchPortfolio", selectedTheme],
    queryFn: () => fetchPortfolioTheme(selectedTheme),
    enabled: !!selectedTheme,
  });

  const { data: showReelData } = useQuery({
    queryKey: ["getFetchShowReel"],
    queryFn: () => fetchPortfolioTheme("Showreel"),
  });

  const prefetchTheme = (theme: string) => async () => {
    await queryClient.prefetchQuery({
      queryKey: ["getPrefetchPortfolio", theme],
      queryFn: () => fetchPortfolioTheme(theme),
    });
  };
  const handleClickTheme = async (theme: string) => {
    setSelectedTheme(theme);
    setCurrentTab(theme);
    if (isItem) {
      router.push("/portfolio");
    }
  };
  if (isLoading) {
    return <Loading />;
  }

  const handleShowReelClick = async (item: PortFolioItemProps) => {
    setSelectedShowReel(item);
    setIsShowRellOpen(true);
  };
  console.log("isShowReelOpen:", isShowReelOpen);
  console.log("ShowReelData: ", showReelData);
  console.log("selectedShowReel :", selectedShowReel);
  return (
    <div className="w-full">
      <div className="relative">
        <div className="mt-20 mb-60">
          <Banner bannerImage="portfolioBanner.png" />
        </div>
        <div className="absolute bottom-[-20rem] max-sm:bottom-[-16.3rem] max-md:bottom-[-17.7rem] max-xl:bottom-[-19rem] right-0 left-0 max-2xl:bottom-[-19rem]">
          <NavBar tab="PORTFOLIO" />
          <div className="mt-28 mb-56">
            <Title title="PORTFOLIO" content="포트폴리오" />
          </div>
        </div>
      </div>

      <div className="mt-72 mb-40">
        <div className="text-center max-sm:text-headline3 text-[25px] pt-2 font-pt max-md:text-headline2">
          Make Your Film Special
        </div>
      </div>
      <div className="text-center mb-[21rem]">
        <p className="text-[30px] font-bold max-sm:text-[16px] max-md:text-[25px]">
          R.B.FILM 2022 Show Reel Celeb ver
        </p>
        <p className="text-headline1 max-md:text-headline2 max-sm:text-[14px]">
          2022년 하반기, R.B.FILM 인물 위주 쇼릴 입니다.
        </p>
        <div className="flex flex-row justify-center gap-36 mt-20">
          {showReelData &&
            showReelData?.DATA?.map((portfolioItem: PortFolioItemProps) => (
              <div
                key={portfolioItem.id}
                className="border relative w-[429px] h-[15rem] max-sm:w-[170px] max-sm:h-[96px] max-md:w-[247px] max-md:h-[139px] max-xl:w-[220px] max-xl:h-[124px] max-2xl:w-[313px] max-2xl:h-[176px]"
              >
                <Image src={portfolioItem.image_url} alt="portfolio1" fill />
                <Image
                  src="/assets/images/playerBtn32.svg"
                  alt="재생버튼"
                  width={32}
                  height={32}
                  className="cursor-pointer absolute top-[45%] left-[45%] max-xl:w-5 max-xl:h-5 2xl:w-12 2xl:h-12"
                  onClick={() => handleShowReelClick(portfolioItem)}
                />
              </div>
            ))}
        </div>
        {isShowReelOpen ? (
          <ShowReelModal
            title={selectedShowReel?.title as string}
            url={selectedShowReel?.url as string}
            part={selectedShowReel?.part as string}
            first_by={selectedShowReel?.first_by as string}
            first_content={selectedShowReel?.first_content as string}
            second_by={selectedShowReel?.second_by}
            second_content={selectedShowReel?.second_content}
            sub_title={selectedShowReel?.sub_title}
          />
        ) : null}

        <p className="text-headline1 mt-16 max-sm:text-[14px] max-md:text-headline3">
          By Ronin 4D 6K / Sony A7S3 / Mavic 3 Classic
        </p>
      </div>
      <Banner bannerImage="portfolio2.png" />
      <div className="w-full border-t border-b flex flex-row justify-center gap-16 text-center mt-56 p-10 max-md:gap-7  max-sm:gap-3">
        <button
          type="button"
          className={`cursor-pointer max-sm:text-[8px] max-md:text-[12px] max-xl:text-[14px] ${currentTab === "Interview" ? "border-b-2 border-white" : ""} }`}
          onMouseOver={() => prefetchTheme("Interview")()}
          onFocus={() => prefetchTheme("Interview")()}
          onClick={() => handleClickTheme("Interview")}
        >
          Interview
        </button>
        <button
          type="button"
          className={`cursor-pointer max-sm:text-[8px] max-md:text-[12px] max-xl:text-[14px] ${currentTab === "Event Sketch" ? "border-b-2 border-white" : ""} }`}
          onMouseOver={() => prefetchTheme("Event Sketch")()}
          onFocus={() => prefetchTheme("Event Sketch")()}
          onClick={() => handleClickTheme("Event Sketch")}
        >
          Event Sketch
        </button>
        <button
          type="button"
          className={`cursor-pointer max-sm:text-[8px] max-md:text-[12px] max-xl:text-[14px] ${currentTab === "After Movie" ? "border-b-2 border-white" : ""} }`}
          onMouseOver={() => prefetchTheme("After Movie")()}
          onFocus={() => prefetchTheme("After Movie")()}
          onClick={() => handleClickTheme("After Movie")}
        >
          After Movie
        </button>
        <button
          type="button"
          className={`cursor-pointer max-sm:text-[8px] max-md:text-[12px] max-xl:text-[14px] ${currentTab === "Youtube" ? "border-b-2 border-white" : ""} }`}
          onMouseOver={() => prefetchTheme("Youtube")()}
          onFocus={() => prefetchTheme("Youtube")()}
          onClick={() => handleClickTheme("Youtube")}
        >
          Youtube
        </button>
        <button
          type="button"
          className={`cursor-pointer max-sm:text-[8px] max-md:text-[12px] max-xl:text-[14px] ${currentTab === "Viral" ? "border-b-2 border-white" : ""} }`}
          onMouseOver={() => prefetchTheme("Viral")()}
          onFocus={() => prefetchTheme("Viral")()}
          onClick={() => handleClickTheme("Viral")}
        >
          Brand Film / Viral
        </button>
        <button
          type="button"
          className={`cursor-pointer max-sm:text-[8px] max-md:text-[12px] max-xl:text-[14px] ${currentTab === "Performance" ? "border-b-2 border-white" : ""} }`}
          onMouseOver={() => prefetchTheme("Performance")()}
          onFocus={() => prefetchTheme("Performance")()}
          onClick={() => handleClickTheme("Performance")}
        >
          Performance
        </button>
        <button
          type="button"
          className={`cursor-pointer max-sm:text-[8px] max-md:text-[12px] max-xl:text-[14px] ${currentTab === "ETC" ? "border-b-2 border-white" : ""} }`}
          onMouseOver={() => prefetchTheme("ETC")()}
          onFocus={() => prefetchTheme("ETC")()}
          onClick={() => handleClickTheme("ETC")}
        >
          ETC
        </button>
      </div>
      {isItem && isItem ? null : (
        <div className="w-[70%] mt-56 mb-96 grid grid-cols-3 gap-7 mx-auto max-md:grid-cols-2 max-sm:w-[80%] max-sm:gap-10 max-2xl:gap-12">
          {data
            ? data?.DATA?.map((portfolioItem: PortFolioItemProps) => (
                <div
                  key={portfolioItem.id}
                  className="border relative w-[429px] h-[15rem] max-sm:w-[170px] max-sm:h-[96px] max-md:w-[190px] max-md:h-[108px] max-xl:w-[220px] max-xl:h-[124px] max-2xl:w-[300px] max-2xl:h-[168px] xxl:w-[840px] xxl:h-[472.5px]"
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
              ))
            : Array(6)
                .fill(0)
                // eslint-disable-next-line react/no-array-index-key
                .map((_, index) => <Skeleton key={index} />)}
        </div>
      )}
    </div>
  );
}

export default PortFolio;
