import Link from "next/link";
import React from "react";

function Header() {
  const pdfUrl =
    "https://rbfilmbucket.s3.ap-northeast-2.amazonaws.com/rbfilmInfo.pdf";
  // const handleDownload = () => {
  //   fetch(pdfUrl, { method: "GET" })
  //     .then((res) => {
  //       return res.blob();
  //     })
  //     .then((blob) => {
  //       const url = window.URL.createObjectURL(blob);
  //       const a = document.createElement("a");
  //       a.href = url;
  //       a.download = "RBFilm 회사소개서.pdf";
  //       document.body.appendChild(a);
  //       a.click();
  //       setTimeout((_) => {
  //         window.URL.revokeObjectURL(url);
  //       }, 60000);
  //       a.remove();
  //     })
  //     .catch((err) => {
  //       console.error("err:", err);
  //     });
  // };
  return (
    <header className="w-full top-0  bg-white h-20 pt-5 flex flex-row justify-between z-10 max-sm:pr-0 max-sm:pl-0 xl:pr-[90px] xl:pl-[90px] 2xl:pr-[154px] pl-[154px] max-md:flex-col max-md:pr-[220px] max-md:pl-[220px]  max-md:justify-center max-md:items-center">
      <div className="flex flex-row gap-6">
        <p className="text-headline3 font-semibold pt-[6px] max-sm:text-[12px] max-sm:w-12  max-md:pt-1">
          R.B FILM
        </p>
        <a
          href={pdfUrl}
          className="border border-black w-28 h-10 font-medium text-headline2 max-sm:w-16 max-sm:h-6 max-sm:text-[12px] max-md:text-[14px] max-md:w-20 max-md:h-8 flex justify-center items-center"
          download="RBFilm 회사소개서.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <p>회사소개서</p>
        </a>
      </div>
      <div className="flex flex-row gap-4 pt-[6px] max-sm:gap-1 max-md:pb-2">
        <Link href="/">
          <p className="cursor-pointer text-headline3 font-semibold max-sm:text-[10px] max-md:text-[12px]">
            HOME
          </p>
        </Link>
        <Link href="/about">
          <p className="cursor-pointer text-headline3 font-semibold max-sm:text-[10px] max-md:text-[12px]">
            ABOUT
          </p>
        </Link>
        <Link href="/service">
          <p className="cursor-pointer text-headline3 font-semibold max-sm:text-[10px] max-md:text-[12px]">
            SERVICE
          </p>
        </Link>
        <Link href="/portfolio">
          <p className="cursor-pointer text-headline3 font-semibold max-sm:text-[10px] max-md:text-[12px]">
            PORTFOLIO
          </p>
        </Link>
        <Link href="/photo">
          <p className="cursor-pointer text-headline3 font-semibold max-sm:text-[10px] max-md:text-[12px]">
            PHOTO
          </p>
        </Link>
        <Link href="/contact">
          <p className="cursor-pointer text-headline3 font-semibold max-sm:text-[10px] max-md:text-[12px]">
            CONTACT
          </p>
        </Link>
      </div>
    </header>
  );
}

export default Header;
