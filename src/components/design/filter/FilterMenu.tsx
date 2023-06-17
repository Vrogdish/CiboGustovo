import Typography from "@/components/design/typography/Typography";
import React from "react";

export default function FilterMenu() {
  return (
    <div className="flex flex-col w-1/3">
      <Typography
        variant="h1"
        className=" pb-10 mb-10 border-b border-b-main-60"
        color="grey"
      >
        Wine
      </Typography>
      <Typography
        variant="h1"
        className=" pb-10 mb-10 border-b border-b-main-60"
      >
        Cocktails
      </Typography>
      <Typography
        variant="h1"
        className=" pb-10 mb-10 border-b border-b-main-60"
        color="grey"
      >
        Beer
      </Typography>
    </div>
  );
}
