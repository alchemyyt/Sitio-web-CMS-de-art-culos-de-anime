import React from "react";
import Link from "next/link";
import { lastElements } from "../services/lastElements";
import { getData } from "../services/getData";
const Opiniones = async () => {
  const tops = await getData("tops/");
  const reseñas = await getData("resenas/");
  const lastTops = lastElements(2, tops);
  const lastReseñas = lastElements(2, reseñas);
  const getOpiniones = (arr1, arr2) => {
    const opiniones = [];
    arr1.map((top) => {
      opiniones.push(top);
    });
    arr2.map((reseña) => {
      opiniones.push(reseña);
    });
    return opiniones;
  };
  const allOpiniones = getOpiniones(lastTops, lastReseñas);
  return (
    <div>
      <Link href={"/opiniones"}>
        <h2 className="hover:text-amber-500 text-xl ">Opiniones</h2>
      </Link>
      <ul className="flex overflow-x-scroll">
        {allOpiniones.map((element) => (
          <Link key={element.id} href={`opiniones/${element.id}`}>
            <li
              className=" flex min-w-56 max-w-56 min-h-80 max-h-80 overflow-hidden m-2 border-2 border-amber-400 relative"
              key={element.id}
            >
              <img
                src={element.portada || element.imagen}
                alt="web"
                className="w-full transition-all duration-300 hover:brightness-50"
                cl
              />
              <p className="max-h-36 max-w-full absolute bottom-0 overflow-hidden text-xl font-bold text-center text-amber-500 m-1  hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105">
                {element.titulo}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Opiniones;
