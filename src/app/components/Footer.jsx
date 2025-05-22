import { React } from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className=" flex  aling-center justify-center border-2 shadow-top-xl shadow-amber-200 border-amber-600 p-1 bg-amber-400 text-center max-w-full flex-wrap">
      <p className="mx-4">
        Pagina web programada por ati.desarrollador@gmail.com
      </p>
      <ul className="flex  aling-center justify-center gap-3 flex-wrap">
        <li>
          <Link href="./aviso-legal" title="aviso legal">
            Aviso legal
          </Link>
        </li>
        <li>
          <Link href="./terminos-y-condiciones" title="terminos y condiciones">
            Términos y Condiciones
          </Link>
        </li>
        <li>
          <Link href="./privacidad" title="politica de privacidad">
            Política de Privacidad
          </Link>
        </li>
        <li>
          <Link href="./nosotros" title="sobre nosotros">
            Sobre Nosotros
          </Link>
        </li>
        <li>
          <Link href="./cookies" title="politicas de cookies">
            Política de Cookies
          </Link>
        </li>
        <li>
          <Link href="./contacto" title="contacto">
            Contacto
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
