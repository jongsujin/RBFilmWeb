import React from "react";

function Header() {
  return (
    <header className="mx-[154px] border flex flex-row justify-between">
      <div className="flex flex-row gap-6">
        <p>R.B FILM</p>
        <button type="button" className="border border-black">
          <p>회사소개서</p>
        </button>
      </div>
      <div className="flex flex-row gap-4">
        <p className="cursor-pointer">HOME</p>
        <p className="cursor-pointer">ABOUT</p>
        <p className="cursor-pointer">SERVICE</p>
        <p className="cursor-pointer">PORTFOLIO</p>
        <p className="cursor-pointer">PHOTO</p>
        <p className="cursor-pointer">CONTACT</p>
      </div>
    </header>
  );
}

export default Header;
