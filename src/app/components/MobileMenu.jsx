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
    <div>
      {isOpen && (
        <div className="fixed top-16 right-0 rounded-lg border-2 shadow-xl shadow-amber-200 border-amber-600 p-4 bg-amber-400 z-10 bg-white flex flex-col items-center text-center">
          <Link href='#'>
          <h2 className='text-2xl font-bold mt-12 mx-10'>Anime En Español</h2></Link>
          <ul className="my-8">
            <Link href='./noticias'>
              <li className=' text-xl font-bold my-2 hover:text-amber-500 duration-300'>
              <h3>Noticias</h3>
              </li>
            </Link>
            
            <Link href='#'>
              <li className=' text-xl font-bold my-2 hover:text-amber-500 duration-300'>
              <h3>Cosplay y arte</h3>
              </li>
            </Link>
            <Link href='#'>
              <li className=' text-xl font-bold my-2 hover:text-amber-500 duration-300'>
              <h3>Comunidad</h3>
              </li>
            </Link>
            <Link href='#'>
              <li className=' text-xl font-bold my-2  hover:text-amber-500 duration-300'>
              <h3>Vtubers</h3>
              </li>
            </Link>
            <Link href='#'>
              <li className=' text-xl font-bold my-2 hover:text-amber-500 duration-300'>
              <h3>Categoria</h3>
              </li>
            </Link>
          </ul>
          <IoClose
            className="cursor-pointer border border-black rounded-full h-7 w-7 m-4 absolute right-0"
            onClick={handleClick}
          />
          <ul className="flex">
            <li className="p-2 m-1 border border-black rounded-full flex items-center justify-center hover:text-amber-500 duration-300">
              <Link href={"https://www.facebook.com/animecastellano"}>
                <FaFacebookF className="size-6" />
              </Link>
            </li>
            <li className="p-2 m-1 border border-black rounded-full flex items-center justify-center hover:text-amber-500 duration-300">
              <Link
                href={
                  "https://www.instagram.com/anime_en_castellano_fans/?hl=es"
                }
              >
                <FaInstagram className="size-6" />
              </Link>
            </li>
            <li className="p-2 m-1 border border-black rounded-full flex items-center justify-center hover:text-amber-500 duration-300">
              <Link href={"https://www.facebook.com/animecastellano"}>
                <FaYoutube className="size-6" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
