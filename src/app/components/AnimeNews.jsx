"use client";
import React from "react";
import { lastElements } from "../services/lastElements";
const AnimeNews = ({ data }) => {
  const ultimasNoticias = lastElements(4, data);
  console.log(ultimasNoticias);
  return (
    <div>
      <h1>noticias</h1>
      <ul>
        {ultimasNoticias.map((element) => (
          <li className="border border-black " key={element.id}>
            {element.titulo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeNews;
