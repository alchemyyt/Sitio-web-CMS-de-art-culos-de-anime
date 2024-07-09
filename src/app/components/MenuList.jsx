import React from "react";
import Link from "next/link";
const MenuList = () => {
  return (
    <ul className="my-8 lg:flex lg:my-0">
      <Link href="/noticias" className="flex flex-col justify-center">
        <li className=" text-xl font-bold hover:text-amber-950 duration-300 m-3 ">
          <h3>Noticias</h3>
        </li>
      </Link>

      <Link href="/cosplay-y-arte" className="  flex flex-col justify-center">
        <li className=" text-xl font-bold hover:text-amber-950 duration-300 m-3  ">
          <h3>Cosplay y arte</h3>
        </li>
      </Link>
      <Link href="/opiniones" className="  flex flex-col justify-center">
        <li className=" text-xl font-bold hover:text-amber-950 duration-300 m-3 ">
          <h3>Opiniones</h3>
        </li>
      </Link>
      <Link href="/vtubers" className=" flex flex-col justify-center">
        <li className=" text-xl font-bold hover:text-amber-950 duration-300 m-3 ">
          <h3>Vtubers</h3>
        </li>
      </Link>
    </ul>
  );
};

export default MenuList;
