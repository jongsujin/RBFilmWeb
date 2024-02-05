import React from "react";

function Header() {
  return (
    <header className="fixed w-full top-0 pl-[154px] pr-[154px] bg-white h-20 pt-5 flex flex-row justify-between">
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
        <p className="cursor-pointer text-headline3 font-semibold">HOME</p>
        <p className="cursor-pointer text-headline3 font-semibold">ABOUT</p>
        <p className="cursor-pointer text-headline3 font-semibold">SERVICE</p>
        <p className="cursor-pointer text-headline3 font-semibold">PORTFOLIO</p>
        <p className="cursor-pointer text-headline3 font-semibold">PHOTO</p>
        <p className="cursor-pointer text-headline3 font-semibold">CONTACT</p>
      </div>
    </header>
  );
}

export default Header;
