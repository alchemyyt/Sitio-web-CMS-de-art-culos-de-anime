import React from "react";
import Link from "next/link";
import MenuList from "./MenuList";
import SocialMedia from "./SocialMedia";
const DesktopHeader = () => {
  return (
    <div className="hidden lg:block">
      <header className=" flex justify-between content-center w-full shadow-xl shadow-amber-200 border-2 border-amber-600 bg-amber-400 ">
        <Link href="./" className="flex flex-col justify-center">
          <h1 className="font-bold text-2xl pl-2">Anime En Español</h1>
        </Link>
        <MenuList />
        <SocialMedia />
      </header>
    </div>
  );
};

export default DesktopHeader;
