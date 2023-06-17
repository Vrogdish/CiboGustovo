import Slider from "@/components/hook/swiper/Slider";
import Typography from "@/components/design/typography/Typography";
import React from "react";
import { staffData } from "@/data/data";



export default function Team() {
  return (
    <div className="bg-main-70 pt-20" id="team">
      <div className=" flex justify-around">
        <Typography variant="h1">Our team</Typography>

        <Typography className="w-1/4 mb-52">
          Vulputate in elit tincidunt elit scelerisque massa fusce pharetra.
          Sagittis gravida lacus quisque dictum non pretium suspendisse
          porttitor. Risus adipiscing semper ornare velit. Sagittis consequat
          luctus leo arcu. Aenean nunc accumsan id maecenas. Tortor.
        </Typography>
      </div>
      <Slider
        images={staffData}
        slidesPerView={4}
        height="h-96"
        className="w-2/3 m-auto"
      />
    </div>
  );
}
