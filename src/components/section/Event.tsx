import Typography from "@/components/design/typography/Typography";
import React from "react";
import Image from "next/image";
import{eventsData} from "../../data/data"




export default function Event() {
  return (
    <div className="pt-20 bg-main-80 pb-40" id="events">
      <Typography variant="h1" className="w-3/4 m-auto mb-40">
        Events
      </Typography>

      <div className="grid grid-cols-2 gap-6 px-40 ">
        {eventsData.map((element, index) => (
          <Image
            src={element.src}
            alt={element.alt}
            key={index}
            width={1000}
            height={1000}
            className="w-full h-[40rem] object-cover"
          />
        ))}
      </div>
    </div>
  );
}
