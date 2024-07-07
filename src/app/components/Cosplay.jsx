import React from "react";
import Link from "next/link";
import { lastElements } from "../services/lastElements";

const Cosplay = ({ data }) => {
  const lastPosts = lastElements(4, data);
  return (
    <div>
      <Link href={"#"}>
        <h2 className="hover:text-amber-500 text-xl ">Noticiass</h2>
      </Link>
      <ul>
        {lastPosts.map((element) => (
          <li className="border border-black bg-ambar-500" key={element.id}>
            {element.titulo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cosplay;
