"use client";

import React from "react";

const ContactPage = () => {
  const recipientEmail = "josemontesdeoca00@gmail.com";
  const defaultSubject = "Consulta desde la página web de Anime";
  const defaultBody =
    "Hola Jose Montes de Oca,\n\nMe pongo en contacto contigo desde tu página web de comunidad de anime. Tengo una pregunta sobre...\n\nSaludos,\n[Tu Nombre]";

  // Codifica el asunto y el cuerpo para asegurar que funcionen correctamente en el URL
  const encodedSubject = encodeURIComponent(defaultSubject);
  const encodedBody = encodeURIComponent(defaultBody);

  const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold my-4">Contáctanos</h1>
      <p>
        Si tienes alguna pregunta, sugerencia, propuesta de colaboración o
        simplemente quieres saludarnos, puedes enviarnos un correo electrónico
        directamente.
      </p>
      <p>
        Al hacer clic en el botón de abajo, se abrirá tu aplicación de correo
        predeterminada con un mensaje ya preparado para nosotros.
      </p>

      <a
        href={mailtoLink}
        className="bg-amber-400 rounded p-2 m-4 inline-block"
        title="enviar correo con platilla"
      >
        Enviar un Correo Electrónico
      </a>

      <div>
        <h3 className="font-bold my-4">Información Adicional de Contacto</h3>
        <p>
          Si prefieres escribir el correo manualmente o el botón no funciona
          como esperas, puedes enviarlo a:
        </p>
        <p>
          ✉️ <strong>Correo Electrónico:</strong>{" "}
          <a
            href={`mailto:${recipientEmail}`}
            className="bg-amber-400 rounded p-2 m-4 inline-block"
            title="enviar correo"
          >
            {recipientEmail}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
