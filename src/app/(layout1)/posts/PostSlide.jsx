"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./posts.module.css";
import "./postSwiper.css";
export default function PostSlide({ data, users }) {
  return (
    <div className="spotlight-slide">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Link
              href={`/posts/${item.id}`}
              className={styles["post-item-swiper"]}
            >
              <div className={styles["post-picture"]}>
                <img src={users[index].image} alt="" />
              </div>
              <div className={styles["post-title-swiper"]}>{item.title}</div>
              <div className={styles["post-author-swiper"]}>
                Author: {users[index].lastName}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
