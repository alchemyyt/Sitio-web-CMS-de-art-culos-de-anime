import React from "react";
import { getSpecificData } from "../../services/getData";
import YoutubeVideo from "@/app/components/YoutubeVideo";
export default async function Page({ params }) {
  const { id } = params;
  const tops = await getSpecificData("tops", id);
  const htmlObject = tops.Html;
  return (
    <main className="flex flex-col aling-center text-center min-h-screen lg:w-3/4 lg:mx-auto bg-white lg:px-6 overflow-hidden">
      <h1 className="font-bold text-xl m-2">{tops.titulo}</h1>
      <p className="m-2">{tops.introduccion}</p>
      {tops.video !== "" && <YoutubeVideo data={tops.video} />}
      <div>
        <img
          src={tops.portada}
          alt={tops.titulo}
          title={tops.titulo}
          className="min-w-56 max-w-56 min-h-80 max-h-80 mx-auto sm:ml-2 mb-6 sm:mb-2 sm:float-right border-2 rounded-md border-amber-400 transition-all duration-300   "
        />
        <p className="mb-2 mx-2">{tops.noticia}</p>
      </div>
      {tops.anime &&
        //Cambiar esta logica cuando cambie las collecciones de payload
        tops.anime.map((e) => (
          <div key={e.id}>
            <h2 className="text-3xl font-bold m-2">{`Puesto: ${e.posicion}`}</h2>
            <img
              src={e.imagen}
              alt={tops.titulo}
              title={tops.titulo}
              className=" w-11/12 mx-auto border-2 rounded-md border-amber-400 transition-all duration-300   "
            />
            <p className="m-2 ">{e.argumento}</p>
          </div>
        ))}
      {tops.Html !== "" && (
        <section
          className=" flex p-6 overflow-hidden flex-col items-center"
          dangerouslySetInnerHTML={{ __html: htmlObject }}
        />
      )}
      <p className="m-2 text-right">{tops.fecha}</p>
    </main>
  );
}
