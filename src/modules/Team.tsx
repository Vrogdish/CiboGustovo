import Slider from "@/components/hook/swiper/Slider";
import Typography from "@/components/design/typography/Typography";
import React from "react";
import { staffData } from "@/data/data";
import Image from "next/image";

export default function Team() {
  return (
    <div className="bg-main-70 pt-20" id="team">
      <div className="  flex flex-col items-center md:items-start md:flex-row justify-around gap-10 ">
        <Typography variant="h1">Our team</Typography>

        <Typography className="px-10 md:px-0 md:w-1/4 mb-52">
          Vulputate in elit tincidunt elit scelerisque massa fusce pharetra.
          Sagittis gravida lacus quisque dictum non pretium suspendisse
          porttitor. Risus adipiscing semper ornare velit. Sagittis consequat
          luctus leo arcu. Aenean nunc accumsan id maecenas. Tortor.
        </Typography>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto pb-32 max-w-5xl px-6 ">
        {staffData.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="h-[200px] lg:h-[300px] relative">
              <Image
                src={item.src}
                alt={item.alt}
                width={350}
                height={300}
                className="object-cover absolute h-full"
              />
            </div>
            <Typography component="h3" variant="h3" className="text-center">
              {item.name}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
