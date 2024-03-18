import React from "react";
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import Title from "@/components/Title/Title";
import Footer from "@/components/Footer/Footer";
import OurTeamData from "@/data/ourTeamData";

function Service() {
  return (
    <div className="w-full">
      <div className="relative">
        <div className="mt-20">
          <Banner bannerImage="service0.png" />
        </div>
        <div className="absolute bottom-[-2.2rem] right-0 left-0 max-md:bottom-[-1.2rem]">
          <NavBar tab="SERVICE" />
          <div className="mt-28">
            <Title title="SERVICE" content="" />
          </div>
        </div>
      </div>
      <div className="mt-7  h-[4200px] flex flex-row justify-center gap-4">
        <div className="flex-1 mt-16 flex flex-col text-right items-end">
          <p className="font-bold text-[40px] max-md:text-[25px] max-xl:text-[30px]">
            Process
          </p>
          <p className="font-bold text-[45px] mt-[9.8rem] max-md:mt-[13rem] max-md:text-headline1 max-xl:text-[25px] max-xl:mt-[12.5rem] max-2xl:text-[35px] max-2xl:mt-[11rem]">
            <span>Step 01</span>
            <br />
            <span>구성</span>
          </p>
          <p className="mt-14 text-headline1 max-md:text-[12px] max-xl:text-[14px] max-2xl:text-headline3">
            <span>
              제작 의뢰가 들어오면 영상 목적에 따라 레퍼런스 설정을 합니다.
            </span>{" "}
            <br />
            <span>예산과 최종 제작 일정 협의 후 미팅을 진행합니다.</span>
            <br />
            <span>[필요시 온라인 미팅 대체]</span>
          </p>
          <div className="relative w-[750px] h-[484px] mt-[28rem] max-md:mt-[33.4rem]  max-md:w-[300px] max-md:h-[200px] max-xl:w-[397px] max-xl:h-[265px] max-xl:mt-[32.2rem] max-2xl:w-[470px] max-2xl:h-[314px] max-2xl:mt-[29.5rem]">
            <Image src="/assets/images/service2.png" alt="step02 사진" fill />
          </div>
          <p className="font-bold text-[45px] mt-[9.5rem] max-md:text-headline1 max-md:mt-[29rem]  max-2xl:mt-[21rem] max-xl:text-[25px] max-xl:mt-[24.8rem] max-2xl:text-[35px]">
            <span>Step 03</span>
            <br />
            <span>촬영</span>
          </p>
          <p className="mt-14 mb-[5.5rem] text-headline1 max-md:text-[12px] max-xl:text-[14px] max-2xl:text-headline3">
            <span>현장 촬영을 진행합니다.</span>{" "}
          </p>
          <div className="relative mb-[11.2rem] w-[750px] h-[484px] mt-[26.7rem] max-md:w-[300px] max-md:h-[200px] max-md:mt-[30rem]  max-xl:w-[397px] max-xl:h-[265px] max-xl:mt-[29.3rem] max-2xl:w-[470px] max-2xl:h-[314px] max-2xl:mt-[28.3rem]">
            <Image src="/assets/images/service4.png" alt="step04 사진" fill />
          </div>
          <div className="max-md:mt-[19.3rem] max-xl:mt-[15.5rem] max-2xl:mt-[11.3rem]">
            <p className=" text-[45px] font-bold  max-xl:text-[25px] max-2xl:text-[35px]">
              <span>Step 05</span>
              <br />
              <span>2차 편집</span>
            </p>
            <p className="text-headline1 mt-14 max-md:text-[12px] max-xl:text-[14px] max-2xl:text-headline3">
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
          <p className="text-[40px] font-bold   max-md:text-[25px] max-xl:text-[30px]">
            제작 과정
          </p>
          <div className="relative w-[750px] h-[484px] mt-[13.5rem] max-md:w-[300px] max-md:h-[200px] max-md:mt-[15rem] max-xl:w-[397px] max-xl:h-[265px] max-xl:mt-[14.5rem] max-2xl:w-[470px] max-2xl:h-[314px]">
            <Image src="/assets/images/service1.png" alt="step01 사진" fill />
          </div>
          <div className="mt-[8.5rem] text-left max-md:mt-[28.2rem]  max-xl:mt-[23.8rem] max-2xl:mt-[20rem]">
            <p className=" text-[45px] font-bold max-md:text-headline1 max-xl:text-[25px] max-2xl:text-[35px]">
              <span>Step 02</span> <br />
              <span>기획</span>
            </p>
            <p className="text-headline1 mt-14  max-md:text-[12px] max-xl:text-[14px] max-2xl:text-headline3">
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
          <div className="relative w-[750px] h-[484px] mt-[28.5rem] max-md:w-[300px] max-md:h-[200px] max-md:mt-[32.5rem] max-xl:w-[397px] max-xl:h-[265px] max-xl:mt-[33rem]  max-2xl:w-[470px] max-2xl:h-[314px] max-2xl:mt-[31rem]">
            <Image src="/assets/images/service3.png" alt="step03 사진" fill />
          </div>
          <div className="text-left  mt-[8.8rem] max-md:mt-[28.8rem] max-xl:mt-[24.2rem] max-2xl:mt-[20rem]">
            <p className=" text-[45px] font-bold  max-md:text-headline1 max-xl:text-[25px] max-2xl:text-[35px]">
              <span>Step 04</span> <br />
              <span>1차 편집</span>
            </p>
            <p className=" text-headline1 mt-14 max-md:text-[12px] max-xl:text-[14px] max-2xl:text-headline3">
              <span>
                BGM에 대한 협의 후 기본적인 컷 구성 및 색보정, 기본 자막 구성을
                통해{" "}
              </span>{" "}
              <br />
              <span>1차 편집본을 전달해 드립니다.</span>
            </p>
            <div className="relative w-[750px] h-[484px]  mt-[32.8rem] max-md:mt-[36.5rem] max-md:w-[300px] max-md:h-[200px] max-xl:w-[397px] max-xl:h-[265px] max-xl:mt-[36rem] max-2xl:w-[470px] max-2xl:h-[314px] max-2xl:mt-[34.5rem]">
              <Image src="/assets/images/service5.png" alt="step01 사진" fill />
            </div>
            <p className="text-[45px] font-bold text-left mt-[9.2rem] max-md:text-headline1 max-md:mt-[29.2rem] max-xl:text-[25px] max-xl:mt-[24.8rem] max-2xl:text-[35px] max-2xl:mt-[20.5rem]">
              <span>Step 06</span> <br />
              <span>완료</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-64">
        <Title title="OUR TEAM" content="" />
      </div>
      <div className="grid grid-cols-2 gap-12 mx-auto mt-32 w-[80%]">
        {OurTeamData.map((teamMember) => (
          <div
            key={teamMember.id}
            className="relative w-[750px] h-[484px] max-md:w-[300px] max-md:h-[200px] max-xl:w-[397px] max-xl:h-[265px] max-2xl:w-[470px] max-2xl:h-[314px]"
          >
            <Image
              src={teamMember.url}
              alt={`Our Team Member ${teamMember.id}`}
              fill
            />
          </div>
        ))}
      </div>
      <div className="w-[80%] mt-72 mx-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Service;
