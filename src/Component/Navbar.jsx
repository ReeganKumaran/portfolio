import React from "react";

function Navbar() {
  return (
    <div className="absolute top-3 left-0 w-full z-50">
      <div className="flex justify-center items-center">
        <div className=" text-white rounded w-[99%] py-2 px-4">
          <div className="flex justify-between items-center">
            <div className="cursor-pointer caret-transparent select-none">Home</div>
            <div className="cursor-pointer caret-transparent select-none">About</div>
            <div className="cursor-pointer caret-transparent select-none">Connect</div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Navbar;
