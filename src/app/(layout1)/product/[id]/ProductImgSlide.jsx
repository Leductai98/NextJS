"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
export default function ProductImgSlide({ images }) {
  return (
    <Swiper>
      {images.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
