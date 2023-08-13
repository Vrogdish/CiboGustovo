"use client";

import React from "react";
import Navbar from "../components/design/navbar/Navbar";
import Typography from "@/components/design/typography/Typography";

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

export default function Footer() {
  return (
    <div className="bg-main-70 grid  md:grid-cols-2 xl:grid-cols-3  px-10 2xl:px-40 py-10 ">
      <Navbar navList={menuList} className="mx-auto" />
      <Typography variant="logo" className="text-center hidden xl:block">
        Cibo gustovo
      </Typography>
      <div className="flex flex-col gap-6  md:ml-auto px-4 pt-20 md:pt-0">
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
