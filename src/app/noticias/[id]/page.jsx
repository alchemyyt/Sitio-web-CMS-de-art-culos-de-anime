import React from "react";
import Link from "next/link";
import { getSpecificData } from "../../services/getData";
export default async function Page({params}) {
  const {id} = params;
  const noticia = await getSpecificData("noticias-anime",id);
  return (
    <main className="flex flex-col aling-center text-center min-h-screen min-w-full bg-white">
      <h1>{noticia.titulo}</h1>
      <p>{noticia.Descripcion}</p>
      <iframe className=" mx-auto inline-block w-11/12 h-60 max-w-96 rounded-sm" src={noticia.videoPrincipal} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <img
        src={noticia.imagenNoticiaUrl}
        alt="web"
        className="w-full transition-all duration-300 hover:brightness-50"
        cl
      />
      <p>{noticia.noticia}</p>
      <p>{noticia.fecha}</p>
      <Link href="#">
      <p>{noticia.SeleccionarCategoria}</p>
      </Link>
    </main>
  );
}