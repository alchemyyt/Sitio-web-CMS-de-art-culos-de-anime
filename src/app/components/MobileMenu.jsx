import React, { useState } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import MenuList from "./MenuList";
import SocialMedia from "./SocialMedia";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(true); // Por defecto abierto

  const handleClick = () => {
    setIsOpen(false); // Cerrar el menú al hacer clic en el icono
  };

  return (
    <div>
      {isOpen && (
        <div className="absolute top-16 right-0 rounded-lg border-2 shadow-xl shadow-amber-200 border-amber-600 p-4 bg-amber-400 z-10 bg-white flex flex-col items-center text-center lg:hidden">
          <Link href="/">
            <h2 className="text-2xl font-bold mt-12 mx-10">Anime En Español</h2>
          </Link>
          <MenuList />

          <IoClose
            className="cursor-pointer border border-black rounded-full h-7 w-7 m-4 absolute right-0"
            onClick={handleClick}
          />
          <SocialMedia />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
