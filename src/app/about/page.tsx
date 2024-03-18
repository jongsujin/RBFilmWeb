/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useQueries } from "@tanstack/react-query";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import Title from "@/components/Title/Title";
import ContactHeader from "@/components/ContactHeader/ContactHeader";
import MainFilm from "@/components/MainFilm/MainFIlm";
import fetchClientData from "@/api/fetchClientData";
import fetchMainfilmData from "@/api/fetchMainfilmData";
import Footer from "@/components/Footer/Footer";
import { ClientProps } from "@/types/clientItemType";
import ClientItem from "./_component/ClientItem";

function ABOUT() {
  const svgRef = useRef<HTMLDivElement>(null);

  const scrollToSVG = () => {
    if (svgRef.current) {
      svgRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const results = useQueries({
    queries: [
      {
        queryKey: ["fetchClientData"],
        queryFn: () => fetchClientData("Client"),
        refetchOnWindowFocus: false,
        staleTime: Infinity,
      },
      {
        queryKey: ["fetchMainfilm"],
        queryFn: () => fetchMainfilmData("Mainfilm"),
        refetchOnWindowFocus: false,
        staleTime: Infinity,
      },
    ],
  });
  const clientData = results[0]?.data;
  console.log(clientData);
  const mainfilmData = results[1]?.data;
  console.log(mainfilmData);
  const isLoading = results.some((queryResult) => queryResult.isLoading);

  if (isLoading) {
    return <div>로딩중..</div>;
  }
  return (
    <div className="w-full">
      <ContactHeader />
      <MainFilm filmUrl={mainfilmData?.url} />
      <div className="relative">
        <div className="mt-20 mb-60">
          <Banner bannerImage="about0.png" />
        </div>
        <div className="absolute bottom-[-20rem] max-md:bottom-[-16.5rem] max-xl:bottom-[-19rem] max-2xl:bottom-[-19.5rem] right-0 left-0">
          <NavBar tab="ABOUT" />
          <div className="mt-20 mb-56" onClick={scrollToSVG}>
            <Title title="ABOUT" content="소개" />
          </div>
        </div>
      </div>
      <div
        ref={svgRef}
        className="relative w-full  max-md:ml-0 max-md:mr-0 max-ml:h-[512px] max-2xl:h-[853px] 2xl:h-[1024px]"
      >
        <Image src="/assets/images/about0.svg" alt="소개1" fill />
      </div>
      <div className="flex flex-row justify-between gap-16 mt-56  mx-auto w-[70%] max-[767px]:w-[90%]">
        <div className="flex-1 relative h-[426px] max-md:h-[192px] max-xl:h-[273px] max-2xl:h-[314px]">
          <Image src="/assets/images/about3.png" alt="소개사진2" fill />
        </div>
        <div className="flex-1 flex flex-col gap-12 max-xl:gap-5 max-2xl:gap-8">
          <div className="flex flex-row justify-between">
            <p className="text-[25px] font-bold max-md:text-[12px] max-xl:text-[18px] max-2xl:text-[20px]">
              Camera
            </p>
            <p className="w-[80%] text-[16px] leading-10 max-md:text-[8px] max-md:leading-5 max-xl:text-[11px] max-xl:leading-8 max-2xl:text-[13px] max-2xl:leading-8">
              FX9 / Red Komodo 6K / Ronin 4D 6K / Sony A7S3 *2 / Sony A1{" "}
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-[25px] font-bold max-md:text-[12px] max-xl:text-[18px] max-2xl:text-[20px]">
              Lens
            </p>
            <p className="w-[80%] text-[16px] leading-10 max-md:text-[8px] max-md:leading-5 max-xl:text-[11.5px] max-xl:leading-8  max-2xl:text-[13px] max-2xl:leading-8">
              <span>Sony 16-35mm GM / Sony 50mm GM / Sony 24-105 GM</span>
              <br />
              <span> Sony 70-200 GM2 / Sony 24-70 GM2 / Canon 28-70 RF</span>
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-[25px] font-bold max-md:text-[12px] max-xl:text-[18px] max-2xl:text-[20px]">
              Light
            </p>
            <p className="w-[80%] text-[16px] leading-10 max-md:text-[8px] max-md:leading-5 max-xl:text-[11.5px] max-xl:leading-8  max-2xl:text-[13px] max-2xl:leading-8">
              AMARAN 300 C *2
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-[25px] font-bold max-md:text-[12px] max-xl:text-[18px] max-2xl:text-[20px]">
              Gimbal
            </p>
            <p className="w-[80%] text-[16px] leading-10 max-md:text-[8px] max-md:leading-5 max-xl:text-[11.5px] max-xl:leading-8  max-2xl:text-[13px] max-2xl:leading-8">
              Ronin RS2 pro / Tilta Ring Grip / Crane 3S
            </p>
          </div>
          <div className="flex flex-row justify-between gap-13">
            <p className="text-[25px] font-bold max-md:text-[12px] max-xl:text-[18px] max-2xl:text-[20px]">
              Drone
            </p>
            <p className="w-[80%] text-[16px] leading-10 max-md:text-[8px] max-md:leading-5 max-xl:text-[11.5px] max-xl:leading-8  max-2xl:text-[13px] max-2xl:leading-8">
              DJI MAVC 3 Classic{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-64 w-[70%] mx-auto">
        <div className=" w-3 h-3 rounded-full bg-white mt-7" />
        <div className="h-0.5  w-full border border-white mt-8 mx-auto" />
        <div className=" w-3 h-3 rounded-full bg-white mt-7" />
      </div>
      <div className="mt-[9.688rem] mb-32 text-center text-[45px] max-md:text-[25px] max-xl:text-[35px]">
        <p>R.B. FILM 만의 핵심 강점 및 차별성</p>
      </div>
      <div className="border mb-60 flex flex-col w-[70%] mx-auto">
        <div className="flex flex-row">
          <div className="flex-1 border relative h-[426px] max-md:h-[174px] max-xl:h-[273px] max-2xl:h-[314px]">
            <Image src="/assets/images/about2.png" alt="소개사진2" fill />
          </div>
          <div className="flex-1 text-center flex flex-col">
            <p className="border-b pt-5 pb-5 text-[35px] font-bold max-md:text-[18px] max-xl:text-[25px] max-2xl:text-[25px]">
              01 체계적이지만 유연함
            </p>
            <div className="border flex-1 flex flex-col justify-center gap-16 text-headline1 max-md:text-[10px] max-md:gap-2 max-xl:text-[14px] max-xl:gap-7 max-2xl:text-[16px] max-2xl:gap-10">
              <p>
                <span>넓은 스펙트럼을 보유한 젊은 인력풀을 구성해</span>
                <br />
                <span>현장에 따른 유연한 대처를 가능하게 합니다.</span>
              </p>
              <p>
                <span>대표가 모든 프로젝트에 총괄로 참여해</span>
                <br />
                <span>시작부터 끝까지 책임집니다.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border mb-60 flex flex-col w-[70%] mx-auto">
        <div className="flex flex-row">
          <div className="flex-1 text-center flex flex-col">
            <p className="border-b pt-5 pb-5 text-[35px] font-bold max-md:text-[18px] max-xl:text-[25px] max-2xl:text-[25px]">
              02 합리적인 견적
            </p>
            <div className="border flex-1 flex flex-col justify-center gap-16 text-headline1 max-md:text-[9px] max-md:gap-2 max-xl:text-[14px] max-xl:gap-7 max-2xl:text-[16px] max-2xl:gap-10">
              <p>
                <span>
                  내부적으로 하이엔드 카메라 [Red Komodo / FX9 / Ronin4D]를
                </span>
                <br />
                <span>운용하고 있으며 촬영 목적에 맞는 투입은 물론,</span>
                <br />
                <span>불필요한 인력을 최소화하여</span>
                <br />
                <span>예산 내 가장 효율적인 운용을 하고 있습니다.</span>
              </p>
            </div>
          </div>
          <div className="flex-1 border relative h-[426px]  max-md:h-[174px] max-xl:h-[273px] max-2xl:h-[314px]">
            <Image src="/assets/images/about4.png" alt="소개사진4" fill />
          </div>
        </div>
      </div>
      <div className="border mb-60 flex flex-col w-[70%] mx-auto">
        <div className="flex flex-row">
          <div className="flex-1 border relative h-[426px] max-md:h-[174px] max-xl:h-[273px] max-2xl:h-[314px]">
            <Image src="/assets/images/about5.png" alt="소개사진5" fill />
          </div>
          <div className="flex-1 text-center flex flex-col">
            <p className="border-b pt-5 pb-5 text-[35px] font-bold max-md:text-[18px] max-xl:text-[25px] max-2xl:text-[25px]">
              03 다양한 전문가와의 협력
            </p>
            <div className="border flex-1 flex flex-col justify-center gap-16 text-headline1 max-md:text-[9px] max-md:gap-2 max-xl:text-[14px] max-xl:gap-7 max-2xl:text-[16px] max-2xl:gap-10">
              <p>
                <span>
                  동시 오디오 감독, 드론 촬영 감독, 작가, 자막 등 종편 편집자,
                </span>
                <br />
                <span>CG 모션 감독, 중계 감독 등</span>
                <br />
                <span>다양한 전문가 집단과 협력 중이며</span>
                <br />
                <span>대규모 프로젝트도 내부적으로 처리 가능합니다.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border mb-60 flex flex-col w-[70%] mx-auto">
        <div className="flex flex-row">
          <div className="flex-1 text-center flex flex-col">
            <p className="border-b pt-5 pb-5 text-[35px] font-bold max-md:text-[18px] max-xl:text-[25px] max-2xl:text-[25px]">
              04 적극적인 제안
            </p>
            <div className="border flex-1 flex flex-col justify-center gap-16 text-headline1 max-md:text-[9px] max-md:gap-2 max-xl:text-[14px] max-xl:gap-7 max-2xl:text-[16px] max-2xl:gap-10">
              <p>
                <span>레퍼런스 및 클라이언트의 니즈 반영은 물론,</span>
                <br />
                <span>디벨롭을 위한 더 나은 방향을 제안해 드립니다.</span>
              </p>
              <p>
                <span>제작 내 모든 프로세스에서 충분한 소통을 통해</span>
                <br />
                <span>좋은 작품을 위해 함께 고민합니다.</span>
              </p>
            </div>
          </div>
          <div className="flex-1 border relative h-[426px]  max-md:h-[174px] max-xl:h-[273px] max-2xl:h-[314px]">
            <Image src="/assets/images/about6.png" alt="소개사진6" fill />
          </div>
        </div>
      </div>
      <div className="mt-80">
        <Title title="CLIENTS" content="고객사" />
      </div>
      <div className="w-[70%] mt-[10.5rem] grid grid-cols-6 mx-auto max-2xl:gap-5">
        {clientData?.DATA?.map((client: ClientProps) => (
          <div key={client.id}>
            <ClientItem title={client.title} url={client.image_url} />
          </div>
        ))}
      </div>
      <div className="mt-60">
        <Title title="BIOGRAPHY" content="연혁" />
      </div>
      <div className="mt-[5.5rem]  h-[1360px] mx-auto">
        <div className="w-[80%] h-full mx-auto">
          <Image
            src="/assets/images/biography.svg"
            alt="연혁 사진"
            layout="responsive"
            width={800}
            height={1250}
          />
          <div className="w-full mt-52">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ABOUT;
