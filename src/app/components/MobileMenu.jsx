import React, { useState } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(true); // Por defecto abierto

  const handleClick = () => {
    setIsOpen(false); // Cerrar el menú al hacer clic en el icono
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 bg-white flex flex-col items-center text-center">
          <ul className="p-10">
            <li>
              <h2>Este es el menú</h2>
            </li>
            <li>
              <h3>Link 1</h3>
            </li>
            <li>
              <h3>Link 2</h3>
            </li>
            <li>
              <h3>Link 3</h3>
            </li>
          </ul>
          <IoClose
            className="cursor-pointer border border-black rounded-full h-5 w-5 m-2 absolute right-0"
            onClick={handleClick}
          />
          <ul className="flex">
            <li className="p-2 m-1 border border-black rounded-full flex items-center justify-center">
              <Link href={"https://www.facebook.com/animecastellano"}>
                <FaFacebookF className="size-6" />
              </Link>
            </li>
            <li className="p-2 m-1 border border-black rounded-full flex items-center justify-center">
              <Link
                href={
                  "https://www.instagram.com/anime_en_castellano_fans/?hl=es"
                }
              >
                <FaInstagram className="size-6" />
              </Link>
            </li>
            <li className="p-2 m-1 border border-black rounded-full flex items-center justify-center">
              <Link href={"https://www.facebook.com/animecastellano"}>
                <FaYoutube className="size-6" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
