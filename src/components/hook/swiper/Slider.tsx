"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./style.css";
// import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";

import Image from "next/image";
import Typography from "@/components/design/typography/Typography";

interface props {
  images: Array<{ src: string; alt: string; name?: string; price?: string }>;
  slidesPerView: number;
  height: string;
  className?: string;
}

export default function Slider({
  images,
  slidesPerView,
  height,
  className,
}: props) {
  return (
    <div className={`relative py-30 pb-40 ${className}`}>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="mySwiper"
      >
        {images.map((element, index) => (
          <SwiperSlide key={index}>
            <Image
              src={element.src}
              alt={element.alt}
              width={600}
              height={600}
              className={`${height} object-cover `}
            />
            <Typography component="h3" variant="h3" className="text-center">
              {element.name}
            </Typography>
            <Typography component="p" variant="p" className="text-center">
              {element.price}
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
