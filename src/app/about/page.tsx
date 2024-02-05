import React from "react";
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import Title from "@/components/Title/Title";

function ABOUT() {
  return (
    <div className="border border-[#ffcc00]">
      <div className="mb-[600px]">
        <Banner />
      </div>
      <NavBar tab="ABOUT" />
      <div className="mt-28 mb-56">
        <Title title="ABOUT" content="소개" />
      </div>
      <div className="border relative">
        <Image
          src="/assets/images/about1.png"
          width={1920}
          height={989}
          alt="소개1"
        />
        <div className="absolute top-10 right-1 text-start">
          <span className="text-[45px] font-bold"> &quot;남의 것&quot; </span>
          <span className="text-[35px] font-bold">
            {" "}
            이라는 생각이 들 때{" "}
          </span>{" "}
          <br />
          <span className="text-[45px] font-bold">
            영상은 방향성을 잃어버립니다.
          </span>
          <br />
          <p className="text-headline1 font-medium mt-9">
            R.B.FILM은 어떤 종류의 프로젝트라도 처음 부터 끝까지 내 영상을
            제작한다는 마인드로 함께합니다.
          </p>
          <br />
          <p className="text-[30px] font-bold mt-12">
            클라이언트가 보고 있는 &quot;일상&quot;에
            <br />
            R.B.FILM의 &quot;새로운 시선&quot;을 더해 더 나은 방향을 고민하고
            있습니다.
          </p>
          <br />
          <div className="text-headline1 font-medium">
            트랜디한 감성, 역동적인 무빙, 시네마틱한 색감 구현 등 <br />{" "}
            R.B.FILM만의 색깔과 각 분야 전문 인력들의 경험이 결합되어 최고의
            결과물을 약속드립니다.
            <br />
            <span className="text-[30px] font-bold">지속적인 파트너</span>로
            함께 성장하기를 바랍니다.
            <br />
            <p className="mt-14">좋은 인연 되었으면 좋겠습니다.</p>
          </div>
        </div>
        <span className="absolute bottom-1 right-1 text-headline1 font-bold">
          DOP 최정훈 <br />
          R.B.FILM 대표
        </span>
      </div>
      <div className="mt-5 flex flex-row gap-8">
        <Image
          src="/assets/images/about2.png"
          alt="소개사진2"
          width={805}
          height={530}
        />
        <div className="flex flex-col mx-auto mt-4">
          <div className="flex flex-row gap-20 mb-[104px]">
            <p>Camera</p>
            <p className="">
              FX9 / Red Komodo 6K / Ronin 4D 6K / Sony A7S3 *2 / Sony A1{" "}
            </p>
          </div>
          <div className="flex flex-row gap-24 mb-[123px]">
            <p>Lens</p>
            <p className="ml-2">
              Sony 16-35mm GM / Sony 50mm GM / Sony 24-105 GM
              <br />
              Sony 70-200 GM2 / Sony 24-70 GM2 / Canon 28-70 RF
            </p>
          </div>
          <div className="flex flex-row gap-20 mb-[101px]">
            <p>Gimbal</p>
            <p className="ml-2">
              Sony 16-35mm GM / Sony 50mm GM / Sony 24-105 GM
              <br />
              Sony 70-200 GM2 / Sony 24-70 GM2 / Canon 28-70 RF
            </p>
          </div>
          <div className="flex flex-row gap-20">
            <p>Drone</p>
            <p className="ml-4">DJI MAVC 3 Classic</p>
          </div>
        </div>
      </div>
      <div className="h-0.5 w-[95%]  border border-white mt-8 mx-auto" />
      <div className="mt-40 mb-32 text-center text-[45px]">
        <p>R.B. FILM 만의 핵심 강점 및 차별성</p>
      </div>
      <div className="border flex flex-col">
        <div className="border flex flex-row">
          <div className="border">
            <Image
              src="/assets/images/about3.png"
              alt="소개사진3"
              width={805}
              height={527}
            />
          </div>
          <div className="border flex-grow">
            <div className="border-b  text-center">
              <p className="font-bold text-[35px]">
                <span className="text-[45px] font-bold">01</span> 체계적이지만
                유연함
              </p>
            </div>
            <div className="text-headline1 text-center font-medium mt-32">
              <p>넓은 스펙트럼을 보유한 젊은 인력풀을 구성해</p>
              <p>현장에 따른 유연한 대처를 가능하게 합니다.</p>
            </div>
            <div className="text-headline1 text-center font-medium mt-[70px] mb-32">
              <p>대표가 모든 프로젝트에 총괄로 참여해</p>
              <p>시작부터 끝까지 책임집니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ABOUT;
