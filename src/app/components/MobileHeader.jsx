"use client";
import { React, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import MobileMenu from "./MobileMenu";


const MobileHeader = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="">
      <nav className="">
        {clicked ? <MobileMenu /> : null}
      </nav>
      <header className="md:hidden lg:hidden flex flex-rwo aling-center justify-between border-2 shadow-xl shadow-amber-200 border-amber-600 p-6 bg-amber-400 ">
        <IoIosArrowBack
          className="size-6 text-black cursor-pointer"
          
        />
        <h1>Anime En español</h1>
        <div>
          <FiMenu
            className="size-6 text-black cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </header>
    </div>
  );
};

export default MobileHeader;
