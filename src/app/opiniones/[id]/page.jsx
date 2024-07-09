import React from "react";
import Link from "next/link";
import { getSpecificData } from "../../services/getData";
export default async function Page({ params }) {
  const { id } = params;
  const tops = await getSpecificData("tops", id);
  const reseñas = await getSpecificData("resenas", id);

  return (
    <main className="flex flex-col aling-center text-center min-h-screen lg:w-3/4 lg:mx-auto bg-white lg:px-6 overflow-hidden">
      <img
        src={tops.portada || reseñas.imagen}
        alt="web"
        className="min-w-56 max-w-56 min-h-80 max-h-80 mx-auto sm:ml-2 mb-6 sm:mb-2 sm:float-right border-2 rounded-md border-amber-400 transition-all duration-300   "
        cl
      />
    </main>
  );
}
