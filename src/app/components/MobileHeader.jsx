"use client";
import { React, useState } from "react";
import { FiMenu } from "react-icons/fi";
import MobileMenu from "./MobileMenu";

const MobileHeader = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="w-full">
      <nav className=" w-full h-full z-10">
        {clicked ? <MobileMenu /> : null}
      </nav>
      <header className="border border-black flex grow-0 shrink sm:block md:hidden lg:hidden  bg-white">
        <FiMenu
          className="size-6 text-black cursor-pointer"
          onClick={handleClick}
        />
        <h1>Anime En español</h1>
      </header>
    </div>
  );
};

export default MobileHeader;
