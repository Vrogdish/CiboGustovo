"use client";

import React from "react";
import Navbar from "../components/design/navbar/Navbar";
import Typography from "@/components/design/typography/Typography";

export default function Footer() {
  const menuList = [
    {
      title : "Menu",
      id : "menu"
    },
    {
      title : "Team",
      id : "team"
    },
    {
      title : "Events",
      id : "events"
    },
    {
      title : "Contact",
      id : "contact"
    }

  ]

  return (
    <div className="bg-main-70 grid grid-cols-3  px-40 py-10 ">
      <Navbar navList={menuList} />
      <Typography variant="logo" className="text-center">
        Cibo gustovo
      </Typography>
      <div className="flex flex-col gap-6 w-1/2 ml-auto">
        <label htmlFor="email">Sign up to our newsletter</label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-main-70 border-b border-main-20 text-main-40"
          placeholder="Email"
        ></input>
      </div>
    </div>
  );
}
