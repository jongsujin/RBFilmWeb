import React from "react";
import Link from "next/link";

interface NavBarProps {
  tab: string;
}
function NavBar({ tab }: NavBarProps) {
  return (
    <div className="mx-auto w-1/2">
      <ul className="flex flex-row list-none gap-8 text-headline3 text-white font-semibold justify-center max-md:gap-3">
        <Link href="/about">
          <button
            type="button"
            className={`text-white font-medium text-headline3 ${tab === "HOME" ? "border-b-2 border-white" : ""} max-md:text-[12px]`}
          >
            HOME
          </button>
        </Link>
        <Link href="/about">
          <button
            type="button"
            className={`text-white font-medium text-headline3 ${tab === "ABOUT" ? "border-b-2 border-white" : ""} max-md:text-[12px]`}
          >
            ABOUT
          </button>
        </Link>
        <Link href="/service">
          <button
            type="button"
            className={`text-white font-medium text-headline3 ${tab === "SERVICE" ? "border-b-2 border-white" : ""} max-md:text-[12px]`}
          >
            SERVICE
          </button>
        </Link>
        <Link href="/portfolio">
          <button
            type="button"
            className={`text-white font-medium text-headline3 ${tab === "PORTFOLIO" ? "border-b-2 border-white" : ""} max-md:text-[12px]`}
          >
            PORTFOLIO
          </button>
        </Link>
        <Link href="/photo">
          <button
            type="button"
            className={`text-white font-medium text-headline3 ${tab === "PHOTO" ? "border-b-2 border-white" : ""} max-md:text-[12px]`}
          >
            PHOTO
          </button>
        </Link>
        <Link href="/contact">
          <button
            type="button"
            className={`text-white font-medium text-headline3 ${tab === "CONTACT" ? "border-b-2 border-white" : ""} max-md:text-[12px]`}
          >
            CONTACT
          </button>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
