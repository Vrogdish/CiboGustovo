import Typography from "@/components/design/typography/Typography";
import { drinksData } from "@/data/data";
import React from "react";

interface Props {
  className? : string,
  drinkIndex : number
}

export default function FilterMenu({className, drinkIndex}: Props) {
  const category = drinksData[drinkIndex].genre

  return (
    <div className={`flex flex-col w-1/3 ${className}`}>
      <Typography
        variant="h1"
        className=" pb-10 mb-10 border-b border-b-main-60 text-4xl"
        color= {`${category === "wine" ? "dark" : "grey"}`}
      >
        Wine
      </Typography>
      <Typography
        variant="h1"
        className=" pb-10 mb-10 border-b border-b-main-60 text-4xl"
        color= {`${category === "cocktail" ? "dark" : "grey"}`}
      >
        Cocktails
      </Typography>
      <Typography
        variant="h1"
        className=" pb-10 mb-10 border-b border-b-main-60 text-4xl"
        color= {`${category === "beer" ? "dark" : "grey"}`}
      >
        Beer
      </Typography>
    </div>
  );
}
