"use client";

import React from "react";
import Navbar from "../design/navbar/Navbar";
import Typography from "@/components/design/typography/Typography";
import Link from "next/link";
import { scrollToId } from "@/scripts/scrollToId";
import BurgerMenu from "../hook/burgerMenu/BurgerMenu";


export default function Header() {
  return (

    <><div className="md:hidden">
      <BurgerMenu/>
    </div>
    
    <header className="flex  justify-center md:justify-between text-main-80 absolute top-0 left-0 z-20 w-full py-10 px-20 " >
      
     
      <Navbar className="hidden md:flex">
        <li
          onClick={() => {
            scrollToId("menu");
          }}
          className="cursor-pointer"
        >
          Menu
        </li>
        <li
          onClick={() => {
            scrollToId("team");
          }}
          className="cursor-pointer"
        >
          Team
        </li>
      </Navbar>
      <Typography variant="logo" component="h1" color="light">
        Cibo gustoso
      </Typography>
      <Navbar className="hidden md:flex">
        <li
          onClick={() => {
            scrollToId("events");
          }}
          className="cursor-pointer"
        >
          Events
        </li>
        <li>Contact</li>
        <li>EN</li>
      </Navbar>
    </header></>
  );
}
