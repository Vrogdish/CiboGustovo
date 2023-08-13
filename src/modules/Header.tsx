"use client";

import React from "react";
import Navbar from "../components/design/navbar/Navbar";
import Typography from "@/components/design/typography/Typography";

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

export default function Header() {
  return (
    <>
      {/* <div className="md:hidden">
        <BurgerMenu />
      </div> */}
      <header className="flex  justify-center md:justify-between text-main-80 absolute top-0 left-0 z-20 w-full py-10 px-20 ">
        <Navbar navList={leftMenuList} className="hidden md:block" />
        <Typography variant="logo" component="h1" color="light" className="md:m-auto">
          Cibo gustoso
        </Typography>
        <Navbar navList={rightMenuList} className="hidden md:block"/>
      </header>
    </>
  );
}
