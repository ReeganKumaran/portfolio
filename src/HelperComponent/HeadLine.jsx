import React from "react";
import { useTheme } from "../Context/Theme";

function HeadLine({ title }) {
  const {theme} = useTheme();
  return (
    <div
      className={`w-full flex justify-center items-center `}
    >
      <div
        className="text-6xl bungee"
        style={{ color: theme.text }}
      >
        {title}
      </div>
    </div>
  );
}

export default HeadLine;
