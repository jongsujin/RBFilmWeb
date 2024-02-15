"use client";

import React from "react";
import Image from "next/image";
// import { useRouter } from "next/navigation";

function PortfolioModal() {
  const Item = {
    id: 1,
    ImageUrl: "/assets/images/portfoiloImage1.png",
    content: {
      title: `출구 없는 미로  &quot;No Exit&quot; 캠페인 by R.B.FILM feat. 김종현`,
      desc1: "경찰청 주관 마약 캠페인 &quot;No Exit&quot;",
      desc2: "With DKU,김종현",
      part: "총괄/촬영/편집",
      by1: "Sony 50 GM / Sony 16-35 GM / Cannon RF 28-70",
      by2: "FX9 / RED KOMODO / Sony A7S3 / Sony 70-200 GM2",
    },
  };
  // const router = useRouter();
  // const onClickClose = () => {
  //   router.back();
  // };
  return (
    <div className="w-2/3 border mt-52 mx-auto flex flex-col items-center">
      <div className="relative border w-[90%] h-[600px] mt-24">
        <Image src={Item.ImageUrl} alt="포폴 예시 사진" fill />
      </div>
      <iframe
        title="포폴 영상"
        src="https://www.youtube.com/watch?v=BNmOl3FI8S0"
      />
      <div className="text-center mt-14">
        <p
          className="mb-14 text-[30px] font-medium"
          dangerouslySetInnerHTML={{ __html: Item.content.title }}
        />
        <p
          className="text-headline1"
          dangerouslySetInnerHTML={{ __html: Item.content.desc1 }}
        />
        <p className="mb-14 text-headline1">{Item.content.desc2}</p>
        <p className="font-bold text-headline1">Part</p>
        <p className="mb-14 text-headline1">{Item.content.part}</p>

        <p className="font-bold text-headline1">By</p>
        <p className="text-headline1">{Item.content.by1}</p>
        <p className="mb-16 text-headline1">{Item.content.by2}</p>
      </div>
    </div>
  );
}

export default PortfolioModal;
