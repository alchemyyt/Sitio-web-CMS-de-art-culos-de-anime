import React from "react";
import Link from "next/link";
import { getSpecificData } from "../../services/getData";
import YoutubeVideo from "@/app/components/YoutubeVideo";
export default async function Page({ params }) {
  const { id } = params;
  const reseñas = await getSpecificData("resenas", id);
  const contenidoHTML = {
    __html: reseñas.Html
  };
  return (
    <main className="flex flex-col aling-center text-center min-h-screen lg:w-3/4 lg:mx-auto bg-white lg:px-6 overflow-hidden">
      <h1 className="font-bold text-xl m-2">{reseñas.titulo}</h1>
      <p className="m-2">{reseñas.argumento}</p>
      <div>
        <img
          src={reseñas.imagen}
          alt={reseñas.titulo}
          className="min-w-56 max-w-56 min-h-80 max-h-80 mx-auto sm:ml-2 mb-6 sm:mb-2 sm:float-right border-2 rounded-md border-amber-400 transition-all duration-300   "
          cl
        />
        <p className="mb-2 mx-2">{reseñas.resena}</p>
      </div>
        <div>
          <h2 className="font-bold text-xl mb-2">Conclusion</h2>
          <p>{reseñas.conclusion}</p>
        </div>
        {reseñas.Html !== "" && (
        <section className=' flex p-6 overflow-hidden flex-col items-center' dangerouslySetInnerHTML={contenidoHTML} />
      )}
      <p className="m-2 text-right">{reseñas.fecha}</p>
    </main>
  );
}
