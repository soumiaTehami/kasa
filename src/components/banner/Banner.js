import React from "react";
import "./Banner.scss";

export default function Banner() {
  // console.log(window.location.pathname);
  
  // Définition des valeurs par défaut pour le texte et la source de l'image
  let text = "Chez vous, partout et ailleurs";
  let src = "bannerHome-kasa.webp";

  // Vérification de l'URL actuelle pour déterminer si la page est "/About"
  if (window.location.pathname === "/About") {
    // Si la page est "/About", mettez à jour le texte et la source de l'image
    text = "";
    src = "../bannerAbout-kasa.webp";
  }

  return (
    <div className="banner">
      {/* Affichage du texte du bannière */}
      <h2 className="banner_title">{text}</h2>
      
      {/* Affichage de l'image du bannière avec la source dynamique en fonction de la condition ci-dessus */}
      <img src={src} alt="Banner" className="banner_img" />
    </div>
  );
}
