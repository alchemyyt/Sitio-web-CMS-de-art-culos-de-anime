"use client";
import { React, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import MobileMenu from "./MobileMenu";

const MobileHeader = () => {
  const [clickedMenu, setClickedMenu] = useState(false);
  const router = useRouter();
  const handleClickMenu = () => {
    setClickedMenu(!clickedMenu);
  };
  return (
    <div className="">
      <nav className="">{clickedMenu ? <MobileMenu /> : null}</nav>
      <header className="  flex lg:hidden  aling-center justify-between border-2 shadow-xl shadow-amber-200 border-amber-600 p-4 bg-amber-400 ">
        <IoIosArrowBack
          className="size-6 text-black cursor-pointer"
          onClick={() => router.back()}
        />
        <Link href="/" title="Inicio">
          <p className="text-xl font-bold">Anime En español</p>
        </Link>
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
