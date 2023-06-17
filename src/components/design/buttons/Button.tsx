"use client";

import React, { ReactNode, useState } from "react";

interface props {
  children: ReactNode;
  handleclick: any;
  id: string;
  className: string;

}

export default function Button({
  children,
  handleclick,
  id,
  className

}: props) {
 

  return (
    <button
      type="button"
      className={`py-4 px-10 border border-main-70 rounded-xl hover:bg-main-70 transition-all ${className}`}
      id={id}
      onClick={handleclick}
    >
      {children}
    </button>
  );
}
