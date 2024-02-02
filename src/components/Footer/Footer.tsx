import React from "react";

function Footer() {
  return (
    <div className="flex flex-row items-center text-center justify-between">
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
      <div className="flex flex-col justify-center">탭</div>
    </div>
  );
}

export default Footer;
