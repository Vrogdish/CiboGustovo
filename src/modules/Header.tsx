"use client";

import React from "react";
import Navbar from "../components/design/navbar/Navbar";
import Typography from "@/components/design/typography/Typography";
import BurgerMenu from "../components/hook/burgerMenu/BurgerMenu";

export default function Header() {
  const leftMenuList = [
    {
      title : "Menu",
      id : "menu"
    },
    {
      title : "Team",
      id : "team"
    },
  ]

  const rightMenuList = [
    {
      title : "Events",
      id : "events"
    },
    {
      title : "Contact",
      id : "contact"
    },

  ]

  return (
    <>
      <div className="md:hidden">
        <BurgerMenu />
      </div>

      <header className="flex  justify-center md:justify-between text-main-80 absolute top-0 left-0 z-20 w-full py-10 px-20 ">
        <Navbar navList={leftMenuList} />
        <Typography variant="logo" component="h1" color="light">
          Cibo gustoso
        </Typography>
        <Navbar navList={rightMenuList}/>
      </header>
    </>
  );
}
