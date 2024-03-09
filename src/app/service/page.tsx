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
      <div className="mt-7  h-[4200px] flex flex-row justify-center">
        <div className="flex-1 mt-16 flex flex-col text-right items-end">
          <p className="font-bold  text-[40px]">Process</p>
          <p className="font-bold  text-[45px] mt-[11.8rem]">
            <span>Step 01</span>
            <br />
            <span>구성</span>
          </p>
          <p className="mt-14  text-headline1">
            <span>
              제작 의뢰가 들어오면 영상 목적에 따라 레퍼런스 설정을 합니다.
            </span>{" "}
            <br />
            <span>예산과 최종 제작 일정 협의 후 미팅을 진행합니다.</span>
            <br />
            <span>[필요시 온라인 미팅 대체]</span>
          </p>
          <div className="relative  w-[750px] h-[425px] mt-[25.7rem]">
            <Image src="/assets/images/service2.png" alt="step01 사진" fill />
          </div>
          <p className="font-bold   text-[45px] mt-[16.2rem]">
            <span>Step 03</span>
            <br />
            <span>촬영</span>
          </p>
          <p className="mt-14 mb-[5.5rem] text-headline1">
            <span>현장 촬영을 진행합니다.</span>{" "}
          </p>
          <div className="relative mb-[16.8rem] w-[750px] h-[425px] mt-[25rem]">
            <Image src="/assets/images/service4.png" alt="step01 사진" fill />
          </div>
          <div className=" mt-5">
            <p className=" text-[45px] font-bold">
              <span>Step 05</span>
              <br />
              <span>2차 편집</span>
            </p>
            <p className=" text-headline1 mt-14">
              <span>
                전체적인 피드백을 바탕으로 디벨롭 한 후, 후반 작업을 진행합니다.
              </span>{" "}
              <br />
              <span>(모션 이펙트 / 디테일한 색 보정 / 음성 믹스)</span>
            </p>
          </div>
          <div className="relative  w-[750px] h-[425px] mt-[28.5rem]">
            <Image src="/assets/images/service5.png" alt="step01 사진" fill />
          </div>
        </div>
        <div className="relative w-10 h-full">
          <Image src="/assets/images/dotLine.png" alt="중간 선" fill priority />
        </div>
        <div className="flex-1 mt-16 flex flex-col">
          <p className="text-[40px] font-bold">제작 과정</p>
          <div className="relative   w-[750px] h-[420px] mt-[13.5rem]">
            <Image src="/assets/images/service1.png" alt="step01 사진" fill />
          </div>
          <div className=" mt-[14.2rem] text-left">
            <p className="  text-[45px] font-bold">
              <span>Step 02</span> <br />
              <span>기획</span>
            </p>
            <p className="text-headline1 mt-14">
              <span>
                레퍼런스와 전달 받은 자료를 바탕으로 스토리 보드 및 촬영일정,
              </span>{" "}
              <br />
              <span>스텝을 구성합니다.</span>
              <br />
              <span>로케이션 섭외 및 드론 촬영의 경우 허가를 진행합니다.</span>
              <br />
              [약 1주일 소요]
            </p>
          </div>
          <div className="relative  w-[750px] h-[420px] mt-[25rem]">
            <Image src="/assets/images/service3.png" alt="step01 사진" fill />
          </div>
          <div className="text-left  mt-[14.5rem]">
            <p className=" text-[45px] font-bold">
              <span>Step 04</span> <br />
              <span>1차 편집</span>
            </p>
            <p className=" text-headline1 mt-14">
              <span>BGM에 대한 협의 후 기본적인 컷 구성 및 색보정,</span> <br />
              <span>기본 자막 구성을 통해 1차 편집본을 전달해 드립니다.</span>
            </p>
            <div className="relative  w-[750px] h-[425px]  mt-[31rem]">
              <Image src="/assets/images/service5.png" alt="step01 사진" fill />
            </div>
            <p className="text-[45px] font-bold text-left mt-[14.4rem]">
              <span>Step 06</span> <br />
              <span>완료</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-64">
        <Title title="OUR TEAM" content="" />
      </div>
      <Footer />
    </div>
  );
}

export default Service;
