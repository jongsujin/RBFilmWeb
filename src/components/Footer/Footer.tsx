import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="mr-[154px] ml-[154px] flex flex-row items-center text-center justify-between">
      <div className="flex flex-col justify-center">
        <div className="border w-56 h-24 p-8 mb-14">R.B.FILM Logo</div>
        <div className="text-start  mb-11">
          <p className="text-headline1 font-bold">R.B.FILM </p>
          <p className="text-headline2">Video Production</p>
        </div>
        <div className="text-start  mb-11">
          <p className="text-headline1 font-bold">Office</p>
          <p className="text-headline2">
            경기도 성남시 분당내곡로 155 KCC 웰츠타워 B동
          </p>
          <p className="text-headline2">
            155, Bundangnaegok-ro, Bundang-gu, Seongnam-si, Gyeonggi-do,
            Republic of Korea
          </p>
        </div>
        <div className="text-start  mb-11">
          <p className="text-headline1 font-bold">주식회사 알비필름</p>
          <span className="text-headline2">사업자등록번호</span>
          <span className="pl-5">000 00 00000</span>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p>HOME | ABOUT | SERVICE | PORTFOLIO | PHOTO | CONTACT</p>

        <div className="mt-24 mb-11 mx-auto text-start">
          <p className="ml-32 text-headline1 font-bold">TEL</p>
          <p className="ml-32 text-headline2">+82 10 7712 2492</p>
        </div>
        <div className="mx-auto text-start">
          <p className="ml-44 text-headline1 font-bold">Email</p>
          <p className="ml-44 text-headline2">futurewriter@naver.com</p>
        </div>
        <div className="w-1/2 mt-11 ml-48 flex flex-row gap-8">
          <Image
            src="/assets/images/instaLogo.svg"
            alt="인스타로고"
            width={60}
            height={60}
          />
          <Image
            src="/assets/images/youtubeLogo.svg"
            alt="유튜브로고"
            width={60}
            height={60}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
