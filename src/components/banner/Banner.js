import React from "react";
import "./Banner.scss";

export default function Banner() {
  // Définition des valeurs par défaut pour le texte et la source de l'image
  let text = "Chez vous, partout et ailleurs";
  let src = "bannerHome-kasa.webp";

  // Vérification de l'URL actuelle pour déterminer si la page est "/About"
  if (window.location.pathname === "/About") {
    text = "";
    src = "../bannerAbout-kasa.webp";
  }

  return (
    <div className="banner">
      <h2 className="banner_title">{text}</h2>

      <img src={src} alt="Banner" className="banner_img" />
    </div>
  );
}
