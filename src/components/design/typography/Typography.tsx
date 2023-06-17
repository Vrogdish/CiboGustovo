import { elsie, montserrat, roboto } from "@/app/layout";
import clsx from "clsx";
import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
  variant?: "p" | "h1" | "h2" | "h3" | "logo";
  component?: "p" | "h1" | "h2" | "h3";
  color?: "light" | "dark" | "grey";
  className?: string;
}

export default function Typography({
  children,
  component: Component = "p",
  variant = "p",
  color = "dark",
  className = "",
}: props) {
  let variantStyle : string = "";
  let variantSize: string = "";
  let variantWeight: string = "";
  let colorStyle: string = "";

  switch (variant) {
    case "p": //default
      variantStyle = roboto.className;
      
      break;
    case "h1":
      variantStyle = montserrat.className;
      variantSize = "text-7xl";
     
      break;
    case "h2":
      variantStyle = montserrat.className;
      variantSize= "text-xl"
      break;
    case "h3":
      variantStyle = roboto.className;
      variantWeight = "font-bold"
      break;
    case "logo":
      variantStyle = elsie.className;
  }

  switch (color) {
    case "light": //default
      colorStyle = "text-main-80";
      break;
    case "dark":
      colorStyle = "text-main-20";
      break;
    case "grey":
      colorStyle = "text-main-60";
  }

  return (
    <Component
      className={clsx(
        variantStyle,
        variantWeight,
        colorStyle,
        variantSize,
        className
      )}
    >
      {children}
    </Component>
  );
}
