import React from "react";
import Image from "next/image";

interface BannerProps {
  bannerImage: string;
}
function Banner({ bannerImage }: BannerProps) {
  return (
    <div className="relative w-full h-[790px]">
      <Image src={`/assets/images/${bannerImage}`} fill alt="배너이미지" />
    </div>
  );
}

export default Banner;
