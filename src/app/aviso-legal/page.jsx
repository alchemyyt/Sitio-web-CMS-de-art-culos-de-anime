import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <div className="text-left p-4">
      <h1 className="font-bold text-2xl my-2">Aviso Legal</h1>
      <h2 className="font-bold text-xl my-2">1. Datos del Titular:</h2>
      <ol>
        <li>Nombre del Titular: jose montes de oca</li>
        <li>Correo Electrónico de Contacto: josemontesdeoca00@gmail.com</li>
        <li>Sitio Web:animeenespañol.lat</li>
      </ol>
      <h2 className="font-bold text-xl my-2">2. Objeto</h2>
      <p>
        El presente Aviso Legal regula el acceso y la utilización de la página
        web{" "}
        <Link href="./" title="ir al inicio">
          animeenespañol.lat
        </Link>{" "}
        (en adelante, la Web), así como los contenidos y servicios que en ella
        se ofrecen. La Web tiene como finalidad principal proporcionar noticias,
        reseñas y contenido relacionado con el anime en español, fomentando una
        comunidad de usuarios interesados en esta temática.
      </p>
      <h2 className="font-bold text-xl my-2">3. Aceptación del Usuario</h2>
      <p>
        El acceso y/o uso de la Web atribuye la condición de Usuario y expresa
        la plena y sin reservas aceptación de todas y cada una de las
        disposiciones incluidas en este Aviso Legal, así como de los Términos y
        Condiciones de Uso, la Política de Privacidad y la Política de Cookies
        que se publiquen en la Web, en su caso. Si el Usuario no está de acuerdo
        con alguna de las condiciones establecidas, no debe acceder y/o utilizar
        la Web.
      </p>
      <h2 className="font-bold text-xl my-2">
        4. Contenidos y Propiedad Intelectual e Industrial
      </h2>
      <ul>
        <li>
          Todos los contenidos de la Web, incluyendo, a título enunciativo pero
          no limitativo, textos, imágenes, gráficos, diseños, logotipos, iconos,
          botones, software, nombres comerciales, marcas o dibujos industriales
          y cualesquiera otros signos susceptibles de utilización industrial y
          comercial, son propiedad intelectual e industrial del Titular de la
          Web o de terceros que han autorizado su uso.
        </li>
        <li>
          El uso, reproducción, distribución, comunicación pública,
          transformación o cualquier otra actividad similar o análoga de los
          contenidos de la Web sin la autorización expresa del Titular o de los
          legítimos propietarios queda estrictamente prohibida.
        </li>
        <li>
          Las reseñas y artículos de noticias publicados en la Web son
          creaciones originales del Titular y/o colaboradores, quienes ostentan
          los derechos de propiedad intelectual sobre los mismos. Se permite la
          cita de fragmentos siempre que se cite la fuente y se enlace a la
          publicación original en la Web.
        </li>
        <li>
          En la Web se utilizarán imágenes y material multimedia de obras de
          anime con fines de crítica, comentario, información periodística,
          enseñanza o investigación, y siempre que sea posible, se atribuirá la
          autoría y fuente de las obras originales. Si eres el titular de
          derechos de alguna obra utilizada y consideras que no se cumplen estas
          condiciones, por favor contáctanos para resolverlo.
        </li>
      </ul>
      <h2 className="font-bold text-xl my-2">
        5. Exclusión de Garantías y Responsabilidad
      </h2>
      <ul>
        <li>
          El Titular de la Web no se hace responsable, en ningún caso, de los
          daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a
          título enunciativo: errores u omisiones en los contenidos, falta de
          disponibilidad del portal o la transmisión de virus o programas
          maliciosos o lesivos en los contenidos, a pesar de haber adoptado
          todas las medidas tecnológicas necesarias para evitarlo.El Titular de
          la Web no se hace responsable, en ningún caso, de los daños y
          perjuicios de cualquier naturaleza que pudieran ocasionar, a título
          enunciativo: errores u omisiones en los contenidos, falta de
          disponibilidad del portal o la transmisión de virus o programas
          maliciosos o lesivos en los contenidos, a pesar de haber adoptado
          todas las medidas tecnológicas necesarias para evitarlo.
        </li>
        <li>
          El Titular de la Web no garantiza la licitud, fiabilidad, utilidad,
          veracidad o exactitud de los contenidos y servicios de la Web, ni la
          ausencia de virus o elementos dañinos.
        </li>
        <li>
          Las opiniones expresadas en las reseñas y artículos son
          responsabilidad de sus autores y no representan necesariamente la
          postura oficial de la Web.Las opiniones expresadas en las reseñas y
          artículos son responsabilidad de sus autores y no representan
          necesariamente la postura oficial de la Web.
        </li>
      </ul>
      <h2 className="font-bold text-xl my-2">6. Enlaces a Terceros</h2>
      <p>
        La Web puede incluir enlaces a sitios web de terceros. El Titular no
        asume ninguna responsabilidad por el contenido, informaciones o
        servicios que pudieran aparecer en dichos sitios, que tendrán
        exclusivamente carácter informativo y que en ningún caso implican
        relación alguna entre el Titular y las personas o entidades titulares de
        dichos contenidos o titulares de los sitios donde se encuentren.
      </p>
      <h2 className="font-bold text-xl my-2">7. Modificaciones</h2>
      <p>
        El Titular de la Web se reserva el derecho de efectuar sin previo aviso
        las modificaciones que considere oportunas en su Web, pudiendo cambiar,
        suprimir o añadir tanto los contenidos y servicios que se presten a
        través de la misma como la forma en la que éstos aparezcan presentados o
        localizados en su Web.
      </p>
      <h2 className="font-bold text-xl my-2">
        8. Ley Aplicable y Jurisdicción
      </h2>
      <p>
        El presente Aviso Legal se rige por la ley colombiana. Para la
        resolución de todas las controversias o cuestiones relacionadas con el
        presente sitio web o actividades en él desarrolladas, será de aplicación
        la legislación colombiana, a la que se someten expresamente las partes,
        siendo competentes para la resolución de todos los conflictos derivados
        o relacionados con su uso los Juzgados y Tribunales de
        Medellin,Colombia, salvo que la legislación aplicable establezca lo
        contrario.
      </p>
    </div>
  );
}
