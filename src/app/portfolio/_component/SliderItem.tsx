/* eslint-disable @next/next/no-img-element */

"use client";

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SliderItem() {
  SwiperCore.use([Navigation, Autoplay]);

  return (
    <div className="">
      <Swiper
        centeredSlides
        slidesPerView={3}
        spaceBetween={1}
        loop
        autoplay={{ delay: 5000 }}
        navigation // 이동 화살표
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="swiper-container w-[90%] h-[500px] mr-40 ml-40 relative mx-auto"
      >
        <div>
          <SwiperSlide className="p-4">
            <div className="border mx-auto items-center flex flex-row ">
              <img
                className="w-[40rem]"
                src="/assets/images/service4.png"
                alt="슬라이드 사진"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-4">
            <div className=" border mx-auto items-center flex flex-row ">
              <img
                className="w-[40rem]"
                src="/assets/images/service4.png"
                alt="슬라이드 사진"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-4">
            <div className=" border mx-auto items-center flex flex-row ">
              <img
                className="w-[40rem]"
                src="/assets/images/service4.png"
                alt="슬라이드 사진"
              />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}

export default SliderItem;
