import Typography from "@/components/design/typography/Typography";
import React from "react";
import Slider from "../hook/swiper/Slider";
import { aboutData } from "@/data/data";



export default function About() {
  return (
    <div className="bg-main-10 pt-32 about overflow-x-hidden">
      <div className="flex justify-around">
        <Typography variant="h1" component="h2" color="light">
          Who are we?
        </Typography>
        <Typography className="w-1/4 mb-52" color="light">
          Vulputate in elit tincidunt elit scelerisque massa fusce pharetra.
          Sagittis gravida lacus quisque dictum non pretium suspendisse
          porttitor. Risus adipiscing semper ornare velit. Sagittis consequat
          luctus leo arcu. Aenean nunc accumsan id maecenas. Tortor.
        </Typography>
      </div>
      <Slider images={aboutData} slidesPerView={4} height="h-72" />
    </div>
  );
}
