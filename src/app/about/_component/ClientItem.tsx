import React from "react";
import Image from "next/image";
import { ClientItemProps } from "@/types/clientItemType";

function ClientItem({ title, url }: ClientItemProps) {
  return (
    <div className="flex flex-col items-center mb-24">
      <Image
        className=" rounded-full  shadow-lg shadow-gray"
        src={url}
        width={168}
        height={168}
        // layout="responsive"
        alt="고객사 사진"
      />

      <div className="w-12 h-1 bg-white mt-6" />
      <p className="text-headline1 mt-6 max-xl:text-headline3 max-2xl:text-headline3">
        {title}
      </p>
    </div>
  );
}

export default ClientItem;
