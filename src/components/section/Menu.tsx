"use client";

import Slider from "@/components/hook/swiper/Slider";
import Button from "@/components/design/buttons/Button";
import Typography from "@/components/design/typography/Typography";
import React, { useState } from "react";
import FilterMenu from "../design/filter/FilterMenu";
import { platsData } from "@/data/data";
import { drinksData } from "@/data/data";

export default function Menu() {
  const [menu, setMenu] = useState(platsData);
  const [active, setActive] = useState("0");

  const filter = (category: string) => {
    const result = platsData.filter((element) => element.category == category);
    setMenu(result);
  };

  const handleclick = (e: any) => {
    const category = e.target.textContent.toLowerCase();
    filter(category);
    setActive(e.target.id);
  };

  return (
    <div className="bg-main-80 " id="menu">
      <Typography
        variant="h1"
        component="h2"
        color="dark"
        className="text-center p-20"
      >
        Menu
      </Typography>
      <Typography className="text-center w-1/3 m-auto">
        Lacus lobortis nullam nam consectetur fermentum mattis pellentesque id
        nulla. Risus convallis iaculis risus ac aliquam sit ultricies.
        Adipiscing adipiscing pellentesque tincidunt vitae. Aliquam dolor
        egestas nam congue elit dolor.
      </Typography>

      <div className="m-10 flex justify-center gap-10">
        <Button
          id={"1"}
          handleclick={handleclick}
          className={active === "1" ? "bg-main-70" : ""}
        >
          Appetizers
        </Button>
        <Button
          id={"2"}
          handleclick={handleclick}
          className={active === "2" ? "bg-main-70" : ""}
        >
          Pastas
        </Button>
        <Button
          id={"3"}
          handleclick={handleclick}
          className={active === "3" ? "bg-main-70" : ""}
        >
          Pizzas
        </Button>
        <Button
          id={"4"}
          handleclick={handleclick}
          className={active === "4" ? "bg-main-70" : ""}
        >
          Salads
        </Button>
        <Button
          id={"5"}
          handleclick={handleclick}
          className={active === "5" ? "bg-main-70" : ""}
        >
          Soups
        </Button>
        <Button
          id={"6"}
          handleclick={handleclick}
          className={active === "6" ? "bg-main-70" : ""}
        >
          Desserts
        </Button>
      </div>

      <Slider
        images={menu}
        slidesPerView={4}
        height="h-96"
        className="w-2/3 m-auto menu"
      />

      <div className="w-2/3 m-auto flex justify-between">
        <Slider
          images={drinksData}
          slidesPerView={1}
          height="h-[35rem]"
          className="w-1/3 overflow-hidden"
        />
        <FilterMenu />
      </div>
    </div>
  );
}
