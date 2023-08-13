"use client";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Typography from "@/components/design/typography/Typography";

interface Props {
  images: {
    src: string;
    alt: string;
    name: string;
    price: string;
  }[];
  className?: string;
  handleChange : any
  
}

export default function DrinkSlider({ images, className, handleChange }: Props) {
  return (
    <div className={`${className} flex-col items-end  gap-6 `}>
      <Swiper
        className="overflow-hidden  mx-0"
        spaceBetween={20}
        slidesPerView={1}
        modules={[Navigation]}
        onSlideChange={handleChange}
        // onSwiper={(swiper) => console.log(swiper)}
        navigation={{
          nextEl: ".drinkNext",
          prevEl: ".drinkPrev",
        }}
      >
        {images.map((element, index) => (
          <SwiperSlide key={index}>
            <div className="h-[300px] lg:h-[400px] xl:h-[600px] relative">
              <Image
                src={element.src}
                alt={element.alt}
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
            <Typography component="h3" variant="h3" className="text-center">
              {element.name}
            </Typography>
            <Typography component="p" variant="p" className="text-center">
              {element.price}
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-3 pb-12">
        <div className="drinkPrev cursor-pointer relative w-[50px] h-[50px]">
          <Image
            src={"/images/left-rounded-dark.png"}
            alt="previous"
            fill
            sizes="10vw"
          />
        </div>
        <div className="drinkNext  cursor-pointer relative w-[50px] h-[50px] ">
          <Image
            src={"/images/right-rounded-dark.png"}
            alt="next"
            fill
            sizes="10vw"
          />
        </div>
      </div>
    </div>
  );
}
