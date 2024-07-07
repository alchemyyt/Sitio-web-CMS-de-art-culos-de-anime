"use client";
import { React, useState } from "react";
import { useRouter } from 'next/navigation'
import { FiMenu } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import MobileMenu from "./MobileMenu";


const MobileHeader = () => {
  const [clickedMenu, setClickedMenu] = useState(false);
  const router = useRouter()
  const handleClickMenu = () => {
    setClickedMenu(!clickedMenu);
  };
  return (
    <div className="">
      <nav className="">
        {clickedMenu ? <MobileMenu /> : null}
      </nav>
      <header className="  flex md:hidden lg:hidden  aling-center justify-between border-2 shadow-xl shadow-amber-200 border-amber-600 p-4 bg-amber-400 ">
        <IoIosArrowBack
          className="size-6 text-black cursor-pointer"
          onClick={() => router.back()}
        />
        <h1 className='text-xl font-bold'>Anime En español</h1>
        <div>
          <FiMenu
            className="size-6 text-black cursor-pointer"
            onClick={handleClickMenu}
          />
        </div>
      </header>
    </div>
  );
};

export default MobileHeader;
