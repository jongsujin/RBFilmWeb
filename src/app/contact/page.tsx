import React from "react";
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import Title from "@/components/Title/Title";
import Essential from "@/app/contact/_component/essential.svg";
import Footer from "@/components/Footer/Footer";
import Border from "./_component/border.svg";

function Estimate() {
  return (
    <div>
      <div className="mb-[600px]">
        <Banner />
      </div>
      <NavBar tab="CONTACT" />
      <div className="mt-28 mb-48">
        <Title />
      </div>
      <div className="flex flex-row justify-between">
        <div className="w-1/2">
          <p className="text-[30px] font-bold mb-[60px]">
            궁금하신 점이 있으신가요?
          </p>
          <p className="mb-7 text-headline1">
            R.B.FILM은 어떤 종류의 프로젝트라도
            <br />
            처음부터 끝까지 내 영상을 제작한다는 마인드로 함께합니다.
          </p>
          <p className="text-headline1">
            한 번의 비즈니스가 아닌 지속적인 파트너로 함께 성장하기를 바랍니다.
          </p>
          <p className="text-headline1">좋은 인연이 되었으면 합니다.</p>
          <div>
            <form className="w-[594px] mt-[103px]">
              <div>
                <div className="flex flex-row gap-1">
                  <p className="text-headline1 font-bold">
                    업체(단체명) or 성함
                  </p>
                  <Essential />
                </div>
                <input
                  className="w-[593px] h-11 border mb-7 border-white bg-black"
                  type="text"
                />
              </div>
              <div>
                <div className="flex flex-row gap-1">
                  <p className="text-headline1 font-bold">이메일</p>
                  <Essential />
                </div>
                <input
                  className="w-[593px] h-11 border mb-7 border-white bg-black"
                  type="email"
                />
              </div>
              <div>
                <div className="flex flex-row gap-1">
                  <p className="text-headline1 font-bold">연락처</p>
                  <Essential />
                </div>
                <input
                  className="w-[593px] h-11 border mb-7 border-white bg-black"
                  type="text"
                />
              </div>
              <div>
                <div className="flex flex-row gap-1">
                  <p className="text-headline1 font-bold">제작 예산</p>
                  <Essential />
                </div>
                <p className="text-gray font-medium text-[15px]">
                  정해진 예산이 없다면 &quot;없음&quot;으로 기재해 주세요.
                </p>
                <input
                  className="w-[593px] h-11 border mb-7 border-white bg-black"
                  type="text"
                />
              </div>
              <div>
                <p className="text-headline1 font-bold">레퍼런스 링크</p>
                <p className="text-gray font-medium text-[15px]">
                  참고할 수 있는 영상 링크 or 타이틀을 알려주세요. 파일로 가지고
                  계신 경우 상단 메일로 보내주세요.
                </p>
                <input
                  className="w-[593px] h-11 border mb-7 border-white bg-black"
                  type="text"
                />
              </div>
              <div>
                <div className="flex flex-row gap-1">
                  <p className="text-headline1 font-bold">문의 사항</p>
                  <Essential />
                </div>
                <textarea className="w-[593px] h-[203px] mb-12 border border-white bg-black" />
              </div>
              <div className="flex flex-row justify-between">
                <div />
                <button className="border w-24 h-11" type="button">
                  등록하기
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="relative">
          <Border />
          <Image
            className="absolute bottom-3 left-4"
            src="/assets/images/contactPhoto1.png"
            width={729}
            height={486}
            alt="견적사진2"
          />
          <div className="flex flex-col justify-center items-center">
            <p className="text-headline1 mt-20 mb-6">
              Opening Time / Phone Number
            </p>
            <p className="text-headline3">Monday ~ Friday : 00am ~ 24pm</p>
            <p className="text-headline3">Weekend : Online Consultation</p>
            <p className="text-headline3">TEL:+82 10 7712 2492</p>
          </div>
          <Border className="mt-16" />
          <Image
            className="absolute top-4 left-4"
            src="/assets/images/contactPhoto2.png"
            width={729}
            height={486}
            alt="견적사진1"
          />
        </div>
      </div>
      <div className="mt-[764px]">
        <Footer />
      </div>
    </div>
  );
}

export default Estimate;
