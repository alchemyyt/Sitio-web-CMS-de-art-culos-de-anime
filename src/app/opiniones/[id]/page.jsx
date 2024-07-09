import React from "react";
import Link from "next/link";
import { getSpecificData } from "../../services/getData";
import YoutubeVideo from "@/app/components/YoutubeVideo";
export default async function Page({ params }) {
  const { id } = params;
  const tops = await getSpecificData("tops", id);
  const reseñas = await getSpecificData("resenas", id);

  return (
    <main className="flex flex-col aling-center text-center min-h-screen lg:w-3/4 lg:mx-auto bg-white lg:px-6 overflow-hidden">
      <h1 className="font-bold text-xl m-2">{tops.titulo||reseñas.titulo}</h1>
      <p className='m-2'>{reseñas.argumento ||tops.introduccion}</p>
      {tops.video && (
        //Cambiar esta logica cuando cambie las collecciones de payload
        <YoutubeVideo data={tops.video} />
      )}
      <div>
      <img
        src={tops.portada || reseñas.imagen}
        alt="web"
        className="min-w-56 max-w-56 min-h-80 max-h-80 mx-auto sm:ml-2 mb-6 sm:mb-2 sm:float-right border-2 rounded-md border-amber-400 transition-all duration-300   "
        cl
      />
      <p className='mb-2 mx-2'>{reseñas.resena ||tops.noticia}</p>
      {tops.anime && (
        //Cambiar esta logica cuando cambie las collecciones de payload
        tops.anime.map((e)=>
          <div key={e.id}>
            <h2 >{e.posicion}</h2>
            <img
            src={e.imagen}
            alt="web"
            className=" mx-auto border-2 rounded-md border-amber-400 transition-all       duration-300   "
            cl
            />
            <p>{e.argumento}</p>
          </div>
        )
      )}
      </div>
      {reseñas.conclusion&&(
        <div>
          <h2 className='font-bold text-xl mb-2'>Conclusion</h2>
          <p >{reseñas.conclusion}</p>
        </div>
      )}
    <p className='m-2 text-right'>{reseñas.fecha  || tops.fecha}</p>
    </main>
  );
}
