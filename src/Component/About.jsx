import React from "react";
import { assets } from "../assets";
import { useTheme } from "../Context/Theme";
function About() {
  const { theme } = useTheme();
  return (
    <div className="bg-gradient-to-l from-gray-900 via-back to-black w-full pt-20">
      
      <div className="flex items-center p-5 justify-between ">
        <div className="w-[50%] p-10 mb-25 ">
          <div className="text-5xl bungee" style={{ color: theme.text }}>
            About me
          </div>
          <p className="mt-5 text-xl  text-white font-libertinus regular indent-10 ">
            I'm a passionate software developer with a background in ECE. After
            completing my diploma at VSVN Polytechnic, I worked at SmartDV for
            six months. Inspired by my love for coding, I learned the MERN stack
            and am now seeking opportunities to grow and contribute in the
            software industry.
          </p>
        </div>
        {/* mask-t-from-90% mask-l-from-70% mask-r-from-70% mask-b-from-70%  */}
        <div className="-mask-linear-50 mask-linear-from-60% mask-linear-to-100%">
          <div className="mask-linear-50 mask-linear-from-70% mask-linear-to-100%">
            <img
              className="mask-t-from-80% mask-l-from-40% mask-r-from-70% mask-b-from-30% "
              width={800}
              src={assets.photo}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
