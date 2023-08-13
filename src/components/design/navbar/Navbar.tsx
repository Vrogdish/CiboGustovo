import { scrollToId } from "@/scripts/scrollToId";
import React from "react";

interface Props {
  className?: string;
  navList: {
    title: string;
    id: string;
  }[];
  format?: "column" | "row";
}

export default function Navbar({ className, navList, format = "row" }: Props) {
  let formatStyle = "";

  switch (format) {
    case "column":
      formatStyle = "flex flex-col gap-6";
      break;

    case "row":
      formatStyle = "flex flex-row gap-4 md:gap-10";
      break;

    default:
      break;
  }

  return (
    <nav className={`${className}`}>
      <ul className={`${formatStyle}`}>
        {navList.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              scrollToId(item.id);
            }}
            className="cursor-pointer overflow-hidden navlink"
          >
            <div className="px-2">{item.title}</div>
            <div className="h-1 bg-main-80 linkEffect"></div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
