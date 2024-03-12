"use client";

import React from "react";
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
        <div className="absolute bottom-[-20rem] right-0 left-0">
          <NavBar tab="ABOUT" />
          <div className="mt-20 mb-56">
            <Title title="ABOUT" content="소개" />
          </div>
        </div>
      </div>
      <div className="relative xl:h-[800px] 2xl:h-[989px]">
        <Image src="/assets/images/about1.png" alt="소개1" fill />
        <p className="absolute top-32  left-1/2">
          <span className="font-bold xl:text-[35px] 2xl:text-[45px]">
            {" "}
            &quot;남의 것&quot;{" "}
          </span>
          <span className="font-bold xl:text-[25px] 2x:text-[35px]">
            {" "}
            이라는 생각이 들 때{" "}
          </span>{" "}
          <br />
          <span className="font-bold xl:text-[35px] 2xl:text-[45px]">
            영상은 방향성을 잃어버립니다.
          </span>
          <br />
          <p className="xl:text-headline3 2xl:text-headline1 font-medium mt-9">
            R.B.FILM은 어떤 종류의 프로젝트라도 처음 부터 끝까지 내 영상을
            제작한다는 마인드로 함께합니다.
          </p>
          <br />
          <p className="xl:text-headline1 2xl:text-[28px] font-bold mt-12">
            클라이언트가 보고 있는 &quot;일상&quot;에
            <br />
            R.B.FILM의 &quot;새로운 시선&quot;을 더해 더 나은 방향을 고민하고
            있습니다.
            <p className="mt-16 xl:text-headline3 2xl:text-headline1 font-medium">
              트랜디한 감성, 역동적인 무빙, 시네마틱한 색감 구현 등 <br />{" "}
              R.B.FILM만의 색깔과 각 분야 전문 인력들의 경험이 결합되어 최고의
              결과물을 약속드립니다.
              <br />한 번의 비즈니스가 아닌{" "}
              <span className="xl:text-headline1 2xl:text-[30px] font-bold">
                지속적인 파트너
              </span>{" "}
              로 함께 성장하기를 바랍니다.
              <br />
              <p className="mt-14">좋은 인연 되었으면 좋겠습니다.</p>
              <p className="mt-14 xl:text-headline3 mr-6 2xl:text-headline1 font-bold text-right">
                DOP 최정훈 <br />
                R.B.FILM 대표
              </p>
            </p>
          </p>
        </p>
      </div>
      <div className="flex flex-row justify-between gap-16 mt-56 xl:ml-[90px] xl:mr-[90px] 2xl:ml-[360px] 2xl:mr-[360px]">
        <div className="relative flex-1 xl:h-[400px] 2xl:h-[539px]">
          <Image src="/assets/images/about3.png" alt="소개사진2" fill />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex flex-row justify-between xl:mb-[2.7rem] 2xl:mb-[4.3rem]">
            <p className="xl:text-headline2 2xl:text-[25px] font-bold">
              Camera
            </p>
            <p className="w-[80%] xl:text-[15px] xl:leading-8 2xl:text-[22px] 2xl:leading-10">
              FX9 / Red Komodo 6K / Ronin 4D 6K / Sony A7S3 *2 / Sony A1{" "}
            </p>
          </div>
          <div className="flex flex-row justify-between xl:mb-[2.7rem] 2xl:mb-[4.3rem]">
            <p className="xl:text-headline2 2xl:text-[25px] font-bold">Lens</p>
            <p className="w-[80%] xl:text-[15px] leading-8 2xl:text-[22px] leading-10">
              <span>Sony 16-35mm GM / Sony 50mm GM / Sony 24-105 GM</span>
              <br />
              <span> Sony 70-200 GM2 / Sony 24-70 GM2 / Canon 28-70 RF</span>
            </p>
          </div>
          <div className="flex flex-row justify-between xl:mb-[2.7rem] 2xl:mb-[4.3rem]">
            <p className="xl:text-headline2 2xl:text-[25px] font-bold">Light</p>
            <p className="w-[80%] xl:text-[15px] leading-8 2xl:text-[22px] leading-10">
              AMARAN 300 C *2
            </p>
          </div>
          <div className="flex flex-row justify-between xl:mb-[2.7rem] 2xl:mb-[4.3rem]">
            <p className="xl:text-headline2 2xl:text-[25px] font-bold">
              Gimbal
            </p>
            <p className="w-[80%] xl:text-[15px] leading-8 2xl:text-[22px] leading-10">
              Ronin RS2 pro / Tilta Ring Grip / Crane 3S
            </p>
          </div>
          <div className="flex flex-row justify-between gap-14">
            <p className="xl:text-headline2 2xl:text-[25px] font-bold">Drone</p>
            <p className="w-[80%] xl:text-[15px] leading-8 2xl:text-[22px] leading-10">
              DJI MAVC 3 Classic{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-64 2xl:ml-[360px] 2xl:mr-[360px]">
        <div className=" w-3 h-3 rounded-full bg-white mt-7" />
        <div className="h-0.5  w-full border border-white mt-8 mx-auto" />
        <div className=" w-3 h-3 rounded-full bg-white mt-7" />
      </div>
      <div className="mt-[9.688rem] mb-32 text-center text-[45px]">
        <p>R.B. FILM 만의 핵심 강점 및 차별성</p>
      </div>
      <div className="border mb-60 flex flex-col xl:mr-[90px] ml-[90px] 2xl:mr-[360px] 2xl:ml-[360px]">
        <div className="flex flex-row">
          <div className="relative flex-1 border xl:h-[440px] 2xl:h-[529px]">
            <Image src="/assets/images/about2.png" alt="소개사진3" fill />
          </div>
          <div className="flex-1 text-center flex flex-col">
            <p className="border-b pt-5 pb-5 text-[35px] font-bold">
              01 체계적이지만 유연함
            </p>
            <div className="border flex-1 flex flex-col justify-center gap-16">
              <p className="text-headline1">
                <span>넓은 스펙트럼을 보유한 젊은 인력풀을 구성해</span>
                <br />
                <span>현장에 따른 유연한 대처를 가능하게 합니다.</span>
              </p>
              <p className="text-headline1">
                <span>대표가 모든 프로젝트에 총괄로 참여해</span>
                <br />
                <span>시작부터 끝까지 책임집니다.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border mb-60 flex flex-col xl:mr-[90px] xl:ml-[90px] 2xl:mr-[360px] 2xl:ml-[360px] ">
        <div className="flex flex-row">
          <div className="flex-1 text-center flex flex-col">
            <p className="border-b pt-5 pb-5 text-[35px] font-bold">
              02 합리적인 견적
            </p>
            <div className="border flex-1 flex flex-col justify-center gap-16">
              <p className="text-headline1">
                <span>
                  내부적으로 하이앤드 카메라 [Red Komodo / FX9 / Ronin4D]를
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
          <div className="relative flex-1 border xl:h-[440px] 2xl:h-[529px]">
            <Image src="/assets/images/about4.png" alt="소개사진3" fill />
          </div>
        </div>
      </div>
      <div className="border mb-60 flex flex-col xl:mr-[90px] xl:ml-[90px] 2xl:mr-[360px] 2xl:ml-[360px] ">
        <div className="flex flex-row">
          <div className="relative flex-1 border xl:h-[440px] 2xl:h-[529px]">
            <Image src="/assets/images/about5.png" alt="소개사진3" fill />
          </div>
          <div className="flex-1 text-center flex flex-col">
            <p className="border-b pt-5 pb-5 text-[35px] font-bold">
              03 다양한 전문가와의 협력
            </p>
            <div className="border flex-1 flex flex-col justify-center gap-16">
              <p className="text-headline1">
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
      <div className="border mb-60 flex flex-col xl:mr-[90px] xl:ml-[90px] 2xl:mr-[360px] 2xl:ml-[360px] ">
        <div className="flex flex-row">
          <div className="flex-1 text-center flex flex-col">
            <p className="border-b pt-5 pb-5 text-[35px] font-bold">
              04 적극적인 제안
            </p>
            <div className="border flex-1 flex flex-col justify-center gap-16">
              <p className="text-headline1">
                <span>레퍼런스 및 클라이언트의 니즈 반영은 물론,</span>
                <br />
                <span>디벨롭을 위한 더 나은 방향을 제안해 드립니다.</span>
              </p>
              <p className="text-headline1">
                <span>제작 내 모든 프로세스에서 충분한 소통을 통해</span>
                <br />
                <span>좋은 작품을 위해 함께 고민합니다.</span>
              </p>
            </div>
          </div>
          <div className="relative flex-1 border xl:h-[440px] 2xl:h-[529px]">
            <Image src="/assets/images/about6.png" alt="소개사진3" fill />
          </div>
        </div>
      </div>
      <div className="mt-80">
        <Title title="CLIENTS" content="고객사" />
      </div>
      <div className="w-[70%] mt-[10.5rem] grid grid-cols-6 mx-auto">
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
        <div className="w-[70%] h-full mx-auto">
          <Image
            src="/assets/images/biography.svg"
            alt="연혁 사진"
            layout="responsive"
            width={800}
            height={1250}
          />
          <div className="mt-52">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ABOUT;
