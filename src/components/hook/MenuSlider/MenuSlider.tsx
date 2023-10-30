"use client";
import React, { useEffect, useState } from "react";
import { Navigation} from "swiper";
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
}

export default function MenuSlider({ images, className }: Props) {
  const [index,setIndex]=useState(0)
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
    <div className={`${className} flex items-center  gap-2`}>
      <div className={`menuPrev cursor-pointer w-[30px] h-[30px] md:w-[50px] md:h-[50px] relative ${index === 0 && "opacity-50"}`}>
        <Image src={"/images/left-dark.png"} alt="previous" fill sizes="10vw" />
      </div>

      <Swiper
        className="overflow-hidden w-5/6"
        spaceBetween={20}
        slidesPerView={windowsWidth<=768 ? 2 : 4}
        
        modules={[Navigation]}
        onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
        navigation={{
          nextEl: ".menuNext",
          prevEl: ".menuPrev",
        }}
      >
        {images.map((element, index) => (
          <SwiperSlide key={index}>
            <div className="h-[200px] md:h-[400px] relative bg-main-50">
              <Image
                src={element.src}
                alt={element.alt}
                width={300}
                height={400}
                className="object-cover h-full absolute "
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
      <div className={`menuNext  cursor-pointer w-[30px] h-[30px] md:w-[50px] md:h-[50px] relative ${index === images.length -4 && "opacity-50"}`}>
        <Image src={"/images/right-dark.png"} alt="next" fill sizes="10vw" />
      </div>
    </div>
  );
}
