import React from "react";
import Link from "next/link";
const MenuList = () => {
  return (
    <ul className="my-8 lg:flex lg:my-0">
      <Link
        href="/noticias"
        className="flex flex-col justify-center"
        title="Noticias"
      >
        <li className=" text-xl font-bold hover:text-amber-950 duration-300 m-3 ">
          <h2>Noticias</h2>
        </li>
      </Link>

      <Link
        href="/cosplay-y-arte"
        className="  flex flex-col justify-center"
        title="Cosplay y arte"
      >
        <li className=" text-xl font-bold hover:text-amber-950 duration-300 m-3  ">
          <h2>Cosplay y arte</h2>
        </li>
      </Link>
      <Link
        href="/opiniones"
        className="  flex flex-col justify-center"
        title="Opiniones"
      >
        <li className=" text-xl font-bold hover:text-amber-950 duration-300 m-3 ">
          <h2>Opiniones</h2>
        </li>
      </Link>
      <Link
        href="/vtubers"
        className=" flex flex-col justify-center"
        title="Vtubers"
      >
        <li className=" text-xl font-bold hover:text-amber-950 duration-300 m-3 ">
          <h2>Vtubers</h2>
        </li>
      </Link>
    </ul>
  );
};

export default MenuList;
