import React from "react";
import { getSpecificData } from "../../services/getData";
import YoutubeVideo from "@/app/components/YoutubeVideo";
export default async function Page({ params }) {
  const { id } = params;
  const noticia = await getSpecificData("noticias", id);
  const htmlObject = noticia.Html;
  return (
    <main className="flex flex-col aling-center text-center min-h-screen lg:w-3/4 lg:mx-auto bg-white lg:px-6 overflow-hidden">
      <h1 className="font-bold text-xl m-2">{noticia.titulo}</h1>
      <p className="mx-2">{noticia.descripcion}</p>
      {noticia.video !== "" && (
        //Cambiar esta logica cuando cambie las collecciones de payload
        <YoutubeVideo data={noticia.video} />
      )}
      <div>
        <img
          src={noticia.imagenNoticiaUrl}
          alt={noticia.titulo}
          title={noticia.titulo}
          className="min-w-56 max-w-56 min-h-80 max-h-80 mx-auto sm:ml-2 mb-6 sm:mb-2 sm:float-right border-2 rounded-md border-amber-400 transition-all duration-300   "
        />
        <p className="mx-6">{noticia.noticia}</p>
      </div>
      {noticia.Html !== "" && (
        <section
          className=" flex p-6 overflow-hidden flex-col items-center"
          dangerouslySetInnerHTML={{ __html: htmlObject }}
        />
      )}
      <p className="text-right m-2">{noticia.fecha}</p>
    </main>
  );
}
