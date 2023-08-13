import React from "react";
import Image from "next/image";
import Typography from "@/components/design/typography/Typography";

export default function HeroSection() {
  return (
    <div className="h-[58rem] relative ">
      <Image
        src="/images/heroBG.jpg"
        alt=""
        width={1920}
        height={1272}
        className="w-full h-full object-cover object-bottom"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-main-0 bg-opacity-40 "></div>
      <div className="absolute top-1/3 left-0 z-20 ml-2 md:ml-20 lg:ml-40">
        <Typography
          variant="h1"
          color="light"
          component="h2"
          
        >
          Made by Italians.
        </Typography>
        <Typography variant="h1" color="light" component="h2">
          Enjoyed by Everyone.
        </Typography>
      </div>
    </div>
  );
}
