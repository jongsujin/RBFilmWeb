import React from "react";
import Image from "next/image";

interface BannerProps {
  bannerImage: string;
}
function Banner({ bannerImage }: BannerProps) {
  return (
    <div className="relative w-full  mx-auto">
      <Image
        src={`/assets/images/${bannerImage}`}
        layout="responsive"
        width={1200}
        height={800}
        alt="배너이미지"
      />
    </div>
  );
}

export default Banner;
