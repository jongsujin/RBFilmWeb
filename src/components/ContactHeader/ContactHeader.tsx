import Link from "next/link";
import React from "react";

function ContactHeader() {
  return (
    <div className="flex flex-row justify-between mt-20 mr-[154px] ml-[154px]">
      <div />
      <div className="flex flex-row  border-white text-white gap-3">
        <Link href="/contact">
          <div className="w-[103px] h-10 border border-white text-center mt-4 pt-1 text-headline2 font-medium text-white">
            견적 문의
          </div>
        </Link>
        <p className="text-headline2 font-medium text-white mt-5">
          TEL +82 10 7712 2492
        </p>
      </div>
    </div>
  );
}

export default ContactHeader;
