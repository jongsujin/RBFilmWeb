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
    <div className="swiper-container">
      <Swiper
        centeredSlides
        slidesPerView={3}
        spaceBetween={50}
        loop
        autoplay={{ delay: 5000 }}
        navigation // 이동 화살표
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <div className="w-[42rem] h-[24rem] border mx-auto items-center flex flex-row ">
            <img
              src="/assets/images/service4.png"
              alt="슬라이드 사진"
              width={672}
              height={360}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[42rem] h-[24rem] border mx-auto items-center flex flex-row ">
            <img
              src="/assets/images/service4.png"
              alt="슬라이드 사진"
              width={896}
              height={480}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[42rem] h-[24rem] border mx-auto items-center flex flex-row ">
            <img
              src="/assets/images/service4.png"
              alt="슬라이드 사진"
              width={672}
              height={360}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderItem;
