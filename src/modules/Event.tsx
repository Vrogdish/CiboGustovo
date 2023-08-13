import Typography from "@/components/design/typography/Typography";
import React from "react";
import Image from "next/image";
import { eventsData } from "../data/data";

export default function Event() {
  return (
    <div className="pt-20 bg-main-80 pb-40" id="events">
      <Typography variant="h1" className="w-3/4 m-auto mb-40">
        Events
      </Typography>

      <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto px-6 ">
        {eventsData.map((element, index) => (
          <div key={index} className="relative h-[400px] xl:h-[640px]">
            <Image
              src={element.src}
              alt={element.alt}
              fill
              sizes="100vw"
              className=" object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
