import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="fixed w-full top-0  bg-white h-20 pt-5 flex flex-row justify-between z-10 xl:pr-[90px] xl:pl-[90px] 2xl:pr-[154px] pl-[154px] max-md:flex-col max-md:pr-[220px] max-md:pl-[220px]  max-md:justify-center max-md:items-center">
      <div className="flex flex-row gap-6">
        <p className="text-headline3 font-semibold pt-[6px] max-md:pt-1">
          R.B FILM
        </p>
        <button
          type="button"
          className="border border-black w-28 h-10 font-medium text-headline2 max-md:text-[14px] max-md:w-20 max-md:h-8"
        >
          <p>회사소개서</p>
        </button>
      </div>
      <div className="flex flex-row gap-4 pt-[6px] max-md:pb-2">
        <Link href="/">
          <p className="cursor-pointer text-headline3 font-semibold max-md:text-[12px]">
            HOME
          </p>
        </Link>
        <Link href="/about">
          <p className="cursor-pointer text-headline3 font-semibold max-md:text-[12px]">
            ABOUT
          </p>
        </Link>
        <Link href="/service">
          <p className="cursor-pointer text-headline3 font-semibold max-md:text-[12px]">
            SERVICE
          </p>
        </Link>
        <Link href="/portfolio">
          <p className="cursor-pointer text-headline3 font-semibold max-md:text-[12px]">
            PORTFOLIO
          </p>
        </Link>
        <Link href="/photo">
          <p className="cursor-pointer text-headline3 font-semibold max-md:text-[12px]">
            PHOTO
          </p>
        </Link>
        <Link href="/contact">
          <p className="cursor-pointer text-headline3 font-semibold max-md:text-[12px]">
            CONTACT
          </p>
        </Link>
      </div>
    </header>
  );
}

export default Header;
