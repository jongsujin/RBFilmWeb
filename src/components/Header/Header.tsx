import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="fixed w-screen top-0  bg-white h-20 pt-5 flex flex-row justify-between z-10 xl:pr-[90px] pl-[90px] 2xl:pr-[154px] pl-[154px]">
      <div className="flex flex-row gap-6">
        <p className="text-headline3 font-semibold pt-[6px]">R.B FILM</p>
        <button
          type="button"
          className="border border-black w-28 h-10 font-medium text-headline2"
        >
          <p>회사소개서</p>
        </button>
      </div>
      <div className="flex flex-row gap-4 pt-[6px]">
        <Link href="/">
          <p className="cursor-pointer text-headline3 font-semibold">HOME</p>
        </Link>
        <Link href="/about">
          <p className="cursor-pointer text-headline3 font-semibold">ABOUT</p>
        </Link>
        <Link href="/service">
          <p className="cursor-pointer text-headline3 font-semibold">SERVICE</p>
        </Link>
        <Link href="/portfolio">
          <p className="cursor-pointer text-headline3 font-semibold">
            PORTFOLIO
          </p>
        </Link>
        <Link href="/photo">
          <p className="cursor-pointer text-headline3 font-semibold">PHOTO</p>
        </Link>
        <Link href="/contact">
          <p className="cursor-pointer text-headline3 font-semibold">CONTACT</p>
        </Link>
      </div>
    </header>
  );
}

export default Header;
