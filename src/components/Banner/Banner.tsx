import React from "react";
import Image from "next/image";

interface BannerProps {
  bannerImage: string;
}
function Banner({ bannerImage }: BannerProps) {
  return (
    <div>
      <Image
        src={`/assets/images/${bannerImage}`}
        width={1920}
        height={790}
        alt="배너이미지"
      />
    </div>
  );
}

export default Banner;
