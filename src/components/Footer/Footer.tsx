import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="flex flex-row items-center text-center justify-between">
      <div className="flex flex-col justify-center">
        <div className="border w-56 h-24 p-8 mb-14 max-sm:text-[6px] max-sm:w-20 max-sm:h-10 max-md:w-32 max-md:h-12 max-md:text-[10px] max-md:p-4">
          R.B.FILM Logo
        </div>
        <div className="text-start  mb-9">
          <p className="text-headline2 font-bold max-sm:text-[10px] max-md:text-[14px]">
            R.B.FILM{" "}
          </p>
          <p className="text-headline3 max-sm:text-[8px] max-md:text-[12px]">
            Video Production
          </p>
        </div>
        <div className="text-start mb-9">
          <p className="text-headline2 font-bold max-sm:text-[10px] max-md:text-[14px]">
            Office
          </p>
          <p className="text-headline3 max-sm:text-[8px] max-md:text-[12px]">
            경기도 성남시 분당내곡로 155 KCC 웰츠타워 B동
          </p>
          <p className="text-headline2 max-sm:w-28 max-sm:text-[8px] max-md:text-[14px]">
            155, Bundangnaegok-ro, Seongnam-si, Gyeonggi-do, Republic of Korea
          </p>
        </div>
        <div className="text-start mb-9">
          <p className="text-headline2 font-bold max-sm:text-[10px] max-md:text-[14px]">
            주식회사 알비필름
          </p>
          <span className="text-headline3 max-sm:text-[8px] max-md:text-[12px]">
            사업자등록번호
          </span>
          <span className="pl-5 max-sm:pl-2 max-sm:text-[8px] max-md:text-[12px]">
            528 86 02650
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="mt-24 mb-11 mx-auto text-start">
          <p className="ml-32 text-headline2 font-bold max-sm:ml-24 max-sm:text-[10px] max-md:text-[14px]">
            TEL
          </p>
          <p className="ml-32 text-headline3 max-sm:ml-24 max-sm:text-[8px] max-md:text-[12px]">
            +82 10 7712 2492
          </p>
        </div>
        <div className="mx-auto text-start">
          <p className="ml-[12rem] text-headline2 font-bold max-sm:ml-[8rem] max-sm:text-[10px] max-md:text-[14px]">
            Email
          </p>
          <p className="ml-[12rem] text-headline3  max-sm:ml-[8rem] max-sm:text-[8px] max-md:text-[12px] tracking-wide">
            rbfilmofficial@naver.com
          </p>
        </div>
        <div className="w-1/2 mt-11 ml-48 flex flex-row gap-8 max-sm:ml-32 max-sm:gap-2 max-md:w-1/4">
          <a
            href="https://www.instagram.com/rbfilm_official/?igsh=ZHEwbXFuM2p4cWlj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="cursor-pointer"
              src="/assets/images/instaLogo.svg"
              alt="인스타로고"
              width={60}
              height={60}
            />
          </a>
          <a
            href="https://www.youtube.com/@RBFILM-ko6nv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="cursor-pointer mt-2 max-sm:mt-1"
              src="/assets/images/youtubeLogo.svg"
              alt="유튜브로고"
              width={60}
              height={60}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
