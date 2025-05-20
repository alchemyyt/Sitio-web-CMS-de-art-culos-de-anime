import React from "react";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <ul className="flex ">
      <li className="p-2 m-1  flex items-center justify-center hover:text-amber-950 duration-300">
        <Link
          href={"https://www.facebook.com/animecastellano"}
          rel="noopener noreferrer"
          target="_blank"
          title="facebook"
        >
          <FaFacebookSquare className="size-8" />
        </Link>
      </li>
      <li className="p-2 m-1  flex items-center justify-center hover:text-amber-950 duration-300">
        <Link
          href={"https://www.instagram.com/anime_en_castellano_fans/?hl=es"}
          rel="noopener noreferrer"
          target="_blank"
          title="instagram"
        >
          <FaInstagram className="size-8" />
        </Link>
      </li>
      <li className="p-2 m-1  flex items-center justify-center hover:text-amber-950 duration-300">
        <Link
          href={"https://www.facebook.com/animecastellano"}
          rel="noopener noreferrer"
          target="_blank"
          title="youtube"
        >
          <FaYoutube className="size-8" />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMedia;
