import React from "react";
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import Title from "@/components/Title/Title";
import Footer from "@/components/Footer/Footer";

function Service() {
  return (
    <div className="w-full">
      <div className="relative">
        <div className="mt-20">
          <Banner bannerImage="service0.png" />
        </div>
        <div className="absolute bottom-[-2.2rem] right-0 left-0">
          <NavBar tab="SERVICE" />
          <div className="mt-28">
            <Title title="SERVICE" content="" />
          </div>
        </div>
      </div>
      <div className="mt-7  h-[4200px] flex flex-row justify-center gap-4">
        <div className="flex-1 mt-16 flex flex-col text-right items-end">
          <p className="font-bold text-[40px]">Process</p>
          <p className="font-bold text-[45px] mt-[9.8rem] max-[1440px]:text-[35px] max-[1440px]:mt-[11rem]">
            <span>Step 01</span>
            <br />
            <span>구성</span>
          </p>
          <p className="mt-14  text-headline1 max-[1440px]:text-headline3">
            <span>
              제작 의뢰가 들어오면 영상 목적에 따라 레퍼런스 설정을 합니다.
            </span>{" "}
            <br />
            <span>예산과 최종 제작 일정 협의 후 미팅을 진행합니다.</span>
            <br />
            <span>[필요시 온라인 미팅 대체]</span>
          </p>
          <div className="relative w-[750px] h-[425px] mt-[28rem] max-[1440px]:w-[470px] max-[1440px]:h-[265px] max-[1440px]:mt-[29.6rem]">
            <Image src="/assets/images/service2.png" alt="step02 사진" fill />
          </div>
          <p className="font-bold text-[45px] mt-[13.2rem] max-2xl:mt-[20rem] max-[1440px]:text-[35px] max-[1440px]:mt-[24rem]">
            <span>Step 03</span>
            <br />
            <span>촬영</span>
          </p>
          <p className="mt-14 mb-[5.5rem] text-headline1 max-[1440px]:text-headline3">
            <span>현장 촬영을 진행합니다.</span>{" "}
          </p>
          <div className="relative mb-[13.7rem] w-[750px] h-[425px] mt-[26.5rem]  max-[1440px]:w-[470px] max-[1440px]:h-[265px] max-[1440px]:mt-[28.3rem]">
            <Image src="/assets/images/service4.png" alt="step04 사진" fill />
          </div>
          <div className="mt-4 max-2xl:mt-[12rem]">
            <p className=" text-[45px] font-bold max-[1440px]:text-[35px]">
              <span>Step 05</span>
              <br />
              <span>2차 편집</span>
            </p>
            <p className=" text-headline1 mt-14 max-[1440px]:text-headline3">
              <span>
                전체적인 피드백을 바탕으로 디벨롭 한 후, 후반 작업을 진행합니다.
              </span>{" "}
              <br />
              <span>(모션 이펙트 / 디테일한 색 보정 / 음성 믹스)</span>
            </p>
          </div>
        </div>
        <div className="relative w-10 h-full">
          <Image src="/assets/images/dotLine.png" alt="중간 선" fill priority />
        </div>
        <div className="flex-1 mt-16 flex flex-col">
          <p className="text-[40px] font-bold">제작 과정</p>
          <div className="relative w-[750px] h-[420px] mt-[13.5rem]  max-[1440px]:w-[470px] max-[1440px]:h-[265px]">
            <Image src="/assets/images/service1.png" alt="step01 사진" fill />
          </div>
          <div className="mt-[12.2rem] text-left max-[1440px]:mt-[23rem]">
            <p className=" text-[45px] font-bold max-[1440px]:text-[35px]">
              <span>Step 02</span> <br />
              <span>기획</span>
            </p>
            <p className="text-headline1 mt-14 max-[1440px]:text-headline3">
              <span>
                레퍼런스와 전달 받은 자료를 바탕으로 스토리 보드 및 촬영일정,
                스텝을 구성합니다.
              </span>
              <br />
              <span>로케이션 섭외 및 드론 촬영의 경우 허가를 진행합니다.</span>
              <br />
              [약 1주일 소요]
            </p>
          </div>
          <div className="relative w-[750px] h-[420px] mt-[29rem]  max-[1440px]:w-[470px] max-[1440px]:h-[265px] max-[1440px]:mt-[31rem]">
            <Image src="/assets/images/service3.png" alt="step01 사진" fill />
          </div>
          <div className="text-left  mt-[12.5rem] max-[1440px]:mt-[22.8rem]">
            <p className=" text-[45px] font-bold max-[1440px]:text-[35px]">
              <span>Step 04</span> <br />
              <span>1차 편집</span>
            </p>
            <p className=" text-headline1 mt-14 max-[1440px]:text-headline3">
              <span>
                BGM에 대한 협의 후 기본적인 컷 구성 및 색보정, 기본 자막 구성을
                통해{" "}
              </span>{" "}
              <br />
              <span>1차 편집본을 전달해 드립니다.</span>
            </p>
            <div className="relative w-[750px] h-[420px]  mt-[32.8rem]  max-[1440px]:w-[470px] max-[1440px]:h-[265px] max-[1440px]:mt-[34.5rem]">
              <Image src="/assets/images/service5.png" alt="step01 사진" fill />
            </div>
            <p className="text-[45px] font-bold text-left mt-[14.4rem] max-[1440px]:text-[35px] max-[1440px]:mt-[24rem]">
              <span>Step 06</span> <br />
              <span>완료</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-64">
        <Title title="OUR TEAM" content="" />
      </div>
      <div className="2xl: mt-20 2xl:mr-[360px] 2xl:ml-[360px]">
        <Footer />
      </div>
    </div>
  );
}

export default Service;
