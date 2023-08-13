import Typography from "@/components/design/typography/Typography";
import React from "react";
import { aboutData } from "@/data/data";
import AboutSlider from "@/components/hook/AboutSlider/AboutSlider";

export default function About() {
  return (
    <div className="bg-main-10 pt-32 about overflow-x-hidden">
      <div className="flex flex-col gap-10 md:flex-row md:justify-around px-10">
        <Typography variant="h1" component="h2" color="light">
          Who are we?
        </Typography>
        <Typography className="md:w-1/4 mb-52" color="light">
          Vulputate in elit tincidunt elit scelerisque massa fusce pharetra.
          Sagittis gravida lacus quisque dictum non pretium suspendisse
          porttitor. Risus adipiscing semper ornare velit. Sagittis consequat
          luctus leo arcu. Aenean nunc accumsan id maecenas. Tortor.
        </Typography>
      </div>
      <AboutSlider images={aboutData} className="pb-32"/>
    </div>
  );
}
