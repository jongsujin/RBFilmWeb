/* eslint-disable react/require-default-props */

"use client";

import React from "react";
import ReactPlayer from "react-player";

interface ShowReelModalProps {
  url: string;
  title: string;
  sub_title?: string;
  first_by: string;
  first_content: string;
  part: string;
  second_by?: string;
  second_content?: string;
}
function ShowReelModal({
  url,
  title,
  sub_title,
  first_by,
  first_content,
  part,
  second_by,
  second_content,
}: ShowReelModalProps) {
  return (
    <div className="w-2/3 border mt-52 mx-auto flex flex-col items-center max-sm:w-[90%]">
      <div className="relative mt-11 pt-[50.625%] w-[90%]">
        {" "}
        <ReactPlayer
          url={url}
          className="react-player absolute top-0 left-0"
          width="100%"
          height="100%"
          playing
          controls
        />
      </div>

      <div className="text-center mt-24">
        {title ? (
          <p className="mb-14 text-[30px] max-sm:text-[14px] font-medium">
            {title}
          </p>
        ) : null}
        {sub_title ? (
          <p className="mb-14 text-[30px] max-sm:text-[14px] font-medium">
            {sub_title}
          </p>
        ) : null}
        <p className="text-headline2 max-sm:text-[14px]">{first_content}</p>
        {second_content ? (
          <p className="text-headline2 max-sm:text-[14px]">{second_content}</p>
        ) : null}

        <p className="mt-14 last:font-bold text-headline2 max-sm:text-[14px]">
          Part
        </p>
        <p className="mb-14 text-headline2 max-sm:text-[14px]">{part}</p>
        <div className="mb-14">
          <p className="font-bold text-headline2 max-sm:text-[14px]">By</p>
          <p className="text-headline2 max-sm:text-[14px]">{first_by}</p>
          {second_by ? (
            <p className="text-headline2 max-sm:text-[14px]">{second_by}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ShowReelModal;
