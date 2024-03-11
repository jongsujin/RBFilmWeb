import React from "react";
import Link from "next/link";

interface NavBarProps {
  tab: string;
}
function NavBar({ tab }: NavBarProps) {
  return (
    <div className="mx-auto  w-1/2">
      <ul className="flex flex-row list-none gap-8 text-headline3 text-white font-semibold justify-center ">
        <Link href="/about">
          <button
            type="button"
            className={`text-white font-medium text-headline3 ${tab === "HOME" ? "border-b-2 border-white" : ""}`}
          >
            HOME
          </button>
        </Link>
        <Link href="/about">
          <button
            type="button"
            className={`text-white font-medium text-headline3 ${tab === "ABOUT" ? "border-b-2 border-white" : ""}`}
          >
            ABOUT
          </button>
        </Link>
        <Link href="/service">
          <button
            type="button"
            className={`text-white font-medium text-headline3 ${tab === "SERVICE" ? "border-b-2 border-white" : ""}`}
          >
            SERVICE
          </button>
        </Link>
        <Link href="/portfolio">
          <button
            type="button"
            className={`text-white font-medium text-headline3 ${tab === "PORTFOLIO" ? "border-b-2 border-white" : ""}`}
          >
            PORTFOLIO
          </button>
        </Link>
        <Link href="/photo">
          <button
            type="button"
            className={`text-white font-medium text-headline3 ${tab === "PHOTO" ? "border-b-2 border-white" : ""}`}
          >
            PHOTO
          </button>
        </Link>
        <Link href="/contact">
          <button
            type="button"
            className={`text-white font-medium text-headline3 ${tab === "CONTACT" ? "border-b-2 border-white" : ""}`}
          >
            CONTACT
          </button>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
