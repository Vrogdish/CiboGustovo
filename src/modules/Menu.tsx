"use client";

import Button from "@/components/design/buttons/Button";
import Typography from "@/components/design/typography/Typography";
import React, { useState } from "react";
import FilterMenu from "../components/design/filter/FilterMenu";
import { platsData } from "@/data/data";
import { drinksData } from "@/data/data";
import MenuSlider from "@/components/hook/MenuSlider/MenuSlider";
import DrinkSlider from "@/components/hook/drinkSlider/DrinkSlider";
import Swiper from "swiper";

export default function Menu() {
  const [menu, setMenu] = useState(platsData);
  const [active, setActive] = useState("0");
  const [drinkIndex, setDrinkIndex]= useState(0)

  const filter = (category: string) => {
    const result = platsData.filter((element) => element.category == category);
    setMenu(result);
  };

  const handleclick = (e: any) => {
    const category = e.target.textContent.toLowerCase();
    filter(category);
    setActive(e.target.id);
    
  };

  const drinkActive = (swiper : Swiper) => {setDrinkIndex(swiper.activeIndex)}

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
      <Typography className="text-center md:w-1/3 md:px-10 m-auto">
        Lacus lobortis nullam nam consectetur fermentum mattis pellentesque id
        nulla. Risus convallis iaculis risus ac aliquam sit ultricies.
        Adipiscing adipiscing pellentesque tincidunt vitae. Aliquam dolor
        egestas nam congue elit dolor.
      </Typography>

      <div className="m-10 grid grid-cols-3 lg:grid-cols-6  gap-6 max-w-6xl mx-auto px-10">
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
      <MenuSlider images={menu} className=" lg:max-w-screen-lg mx-auto pb-32" />

      <div className=" flex flex-col md:flex-row justify-between w-2/3 mx-auto pb-32">
        <DrinkSlider images={drinksData} handleChange={drinkActive} className="md:w-1/2" />

        <FilterMenu drinkIndex={drinkIndex}/>
      </div>
    </div>
  );
}
