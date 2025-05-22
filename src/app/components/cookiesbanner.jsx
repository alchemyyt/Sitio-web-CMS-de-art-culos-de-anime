"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Usamos Link de Next.js para la navegación interna

const LOCAL_STORAGE_KEY = "cookie_consent_accepted";

const CookieConsentBanner = () => {
  // Estado para controlar si el banner está visible
  const [isVisible, setIsVisible] = useState(false);

  // useEffect para verificar si el usuario ya aceptó las cookies al cargar el componente
  useEffect(() => {
    // Verificamos en localStorage si el usuario ya aceptó
    const consentGiven = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!consentGiven) {
      // Si no ha aceptado, mostramos el banner
      setIsVisible(true);
    }
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  // Función para manejar la aceptación de cookies
  const handleAcceptCookies = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, "true"); // Guardamos la preferencia
    setIsVisible(false); // Ocultamos el banner
  };

  // Función para manejar la configuración de cookies (opcional, para una gestión más granular)
  const handleConfigureCookies = () => {
    setIsVisible(false); // Oculta el banner después de la "configuración"
    // Idealmente, aquí no establecerías 'true' en localStorage, sino que guardarías las preferencias granularmente
    // y solo ocultarías el banner si se guardaron las preferencias.
  };

  if (!isVisible) {
    return null; // Si el banner no es visible, no renderizamos nada
  }

  return (
    <div className="bg-amber-400 p-4 text-center fixed bottom-0 right-0 ">
      <div>
        <p>
          Utilizamos cookies propias y de terceros para mejorar tu experiencia
          de navegación, mostrar contenido y anuncios personalizados, y analizar
          nuestro tráfico. Al hacer clic en Aceptar cookies, aceptas su uso.
          Puedes obtener más información o configurar tus preferencias en
          nuestra{" "}
          <Link href="/privacidad" title="politicas de privacidad">
            Política de Privacidad
          </Link>{" "}
          y{" "}
          <Link
            href="/cookies"
            title="
Política de Cookies"
          >
            Cookies
          </Link>
          .
        </p>
        <div className="bg-white inline-block p-2 rounded-2xl">
          <button onClick={handleAcceptCookies}>Aceptar cookies</button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
