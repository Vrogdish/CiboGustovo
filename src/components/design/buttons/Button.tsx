"use client";

import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  handleclick: any;
  id: string;
  className?: string;

}

export default function Button({
  children,
  handleclick,
  id,
  className

}: Props) {
 

  return (
    <button
      type="button"
      className={`py-4  border border-main-70 rounded-xl hover:bg-main-70 transition-all text-center ${className}`}
      id={id}
      onClick={handleclick}
    >
      {children}
    </button>
  );
}
