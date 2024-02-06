import React from "react";
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import Title from "@/components/Title/Title";
import Footer from "@/components/Footer/Footer";

function Service() {
  return (
    <div>
      <h1>서비스페이지</h1>
      <div className="relative mt-[57px]">
        <Banner bannerImage="service0.png" />
      </div>
      <div className="absolute bottom-[-188px] right-0 left-0">
        <NavBar tab="SERVICE" />
        <div className="mt-28 mb-48">
          <Title title="SERVICE" content="" />
        </div>
      </div>
      <div className="mt-7 mr-[154px] ml-[154px] flex flex-row">
        <div className="flex flex-col flex-grow">
          <p className="text-[40px] text-right font-bold mt-28">Process</p>
          <p className="text-[45px] text-right font-bold mt-28">Step 01</p>
          <p className="text-[45px] text-right font-bold">구성</p>
          <div className="mt-14 text-headline1 text-right">
            <p>제작 의뢰가 들어오면 영상 목적에 따라 레퍼런스 설정을 합니다.</p>
            <p>예산과 최종 제작 일정 협의 후 미팅을 진행합니다.</p>
            <p>[필요시 온라인 미팅 대체]</p>
            <Image
              className="mt-[375px] ml-4"
              src="/assets/images/service2.png"
              alt="step01 사진"
              width={765}
              height={425}
            />
          </div>
          <div className="text-right mt-48">
            <p className="text-[45px] font-bold">Step 03</p>
            <p className="text-[45px] font-bold">촬영</p>
            <p className="text-headline1 mt-14">현장 촬영을 진행합니다.</p>
          </div>
          <Image
            className="mt-[454px] ml-4"
            src="/assets/images/service4.png"
            alt="step01 사진"
            width={765}
            height={425}
          />
          <div className="text-right mt-52">
            <p className="text-[45px] font-bold">Step 05</p>
            <p className="text-[45px] font-bold">2차 편집</p>
            <div className="text-headline1 mt-14">
              <p>
                전체적인 피드백을 바탕으로 디벨롭 한 후, 후반 작업을 진행합니다.
              </p>
              <p>(모션 이펙트 / 디테일한 색 보정 / 음성 믹스)</p>
            </div>
          </div>
          <Image
            className="mt-[416px] ml-4"
            src="/assets/images/service5.png"
            alt="step01 사진"
            width={765}
            height={425}
          />
        </div>
        <div className="relative w-11 max-h-[4000px] border-t border-b border-white">
          <div className="w-1 h-[4000px] border-l mx-auto" />
          <div className="absolute top-[310px] right-0 left-[0.9rem] w-3 h-3 rounded-full bg-white" />
          <div className="absolute top-[945px] right-0 left-[0.9rem] w-3 h-3 rounded-full bg-white" />
          <div className="absolute top-[1595px] right-0 left-[0.9rem] w-3 h-3 rounded-full bg-white" />
          <div className="absolute bottom-[1740px] right-0 left-[0.9rem] w-3 h-3 rounded-full bg-white" />
          <div className="absolute bottom-[1072px] right-0 left-[0.9rem] w-3 h-3 rounded-full bg-white" />
          <div className="absolute bottom-[427px] right-0 left-[0.9rem] w-3 h-3 rounded-full bg-white" />
        </div>
        <div className="flex flex-col flex-grow-0">
          <p className="text-[40px] font-bold mt-28">제작 과정</p>
          <Image
            className="mt-36"
            src="/assets/images/service1.png"
            alt="step01 사진"
            width={765}
            height={425}
          />
          <div className="mt-[168px]">
            <p className="text-[45px] font-bold">Step 02</p>
            <p className="text-[45px] font-bold">기획</p>
            <div className="mt-14 text-headline1">
              <p>
                레퍼런스와 전달 받은 자료를 바탕으로 스토리 보드 및 촬영일정,
              </p>
              <p>스텝을 구성합니다.</p>
              <p>로케이션 섭외 및 드론 촬영의 경우 허가를 진행합니다.</p>
              <p>[약 1주일 소요]</p>
            </div>
          </div>
          <Image
            className="mt-[358px]"
            src="/assets/images/service3.png"
            alt="step01 사진"
            width={765}
            height={425}
          />
          <div className="mt-48">
            <p className="text-[45px] font-bold">Step 04</p>
            <p className="text-[45px] font-bold">1차 편집</p>
            <div className="mt-14 text-headline1">
              <p>BGM에 대한 협의 후 기본적인 컷 구성 및 색보정,</p>
              <p>기본 자막 구성을 통해 1차 편집본을 전달해 드립니다.</p>
            </div>
          </div>
          <Image
            className="mt-[438px]"
            src="/assets/images/service5.png"
            alt="step01 사진"
            width={765}
            height={425}
          />
          <div className="mt-[180px]">
            <p className="text-[45px] font-bold">Step 06</p>
            <p className="text-[45px] font-bold">완료</p>
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
