import Link from "next/link";
import React from "react";

function ContactHeader() {
  return (
    <div className="flex flex-row justify-between mt-2 mr-[154px] ml-[154px] max-sm:mr-2 max-sm:ml-0">
      <div />
      <div className="flex flex-row  border-white text-white gap-3 max-sm:items-start max-sm:justify-center">
        <Link href="/contact">
          <div className="w-[103px] h-10 border border-white text-center mt-4 pt-1 text-headline2 font-medium text-white max-sm:w-16 max-sm:text-[12px] max-sm:h-6 max-sm:pt-1">
            견적 문의
          </div>
        </Link>
        <p className="text-headline2 font-medium text-white mt-5 max-sm:text-[12px] max-sm:w-32">
          TEL +82 10 7712 2492
        </p>
      </div>
    </div>
  );
}

export default ContactHeader;
