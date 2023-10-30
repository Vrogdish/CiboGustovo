"use client";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css"

interface Props {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
}

export default function AboutSlider({ images, className }: Props) {
  const [index, setIndex] = useState(0)
  const [windowsWidth, setWindowWidth]=useState(0)
 
  const updateDimensions = () => { 
    const width = window.innerWidth 
    setWindowWidth(width) 
  }
  
  useEffect(() => { 
    updateDimensions(); 
    window.addEventListener("resize", updateDimensions);
    return () => 
      window.removeEventListener("resize",updateDimensions);
   }, [])



  return (
    <div className={`${className}`}>
      <div className="flex gap-6 my-6 mx-10">
        <div className={`aboutPrev cursor-pointer w-[50px] h-[50px] relative ${index === 0 && "brightness-50"}`}>
          <Image src={"/images/left-rounded-light.png"} alt="previous" fill sizes="10vw" />
        </div>
        <div className={`aboutNext cursor-pointer w-[50px] h-[50px] relative ${index === images.length -4 && "brightness-50"}`}>
          <Image src={"/images/right-rounded-light.png"} alt="next" fill sizes="10vw"/>
        </div>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={windowsWidth <= 768 ? 3 : 4}
        modules={[Navigation]}
        onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
        navigation={{
          nextEl: ".aboutNext",
          prevEl: ".aboutPrev",
        }}
      >
        {images.map((element, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[150px] md:h-[300px] bg-main-50">
              <Image
                src={element.src}
                alt={element.alt}
                width={600}
                height={300}
                className={"object-cover absolute h-full"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
