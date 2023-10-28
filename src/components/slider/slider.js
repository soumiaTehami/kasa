import React, { useState } from "react";
import "./slider.scss";

export function Slider({ pictures }) {
  // Utilisation du state pour suivre l'index de l'image actuelle
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gestionnaire de l'événement pour passer à l'image suivante
  const handleNext = () => {
    // Si l'index actuel est le dernier, revenez au début, sinon, passez à l'image suivante
    currentIndex === pictures.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  // Gestionnaire de l'événement pour revenir à l'image précédente
  const handlePrevious = () => {
    // Si l'index actuel est le premier, passez à la dernière image, sinon, revenez à l'image précédente
    currentIndex === 0
      ? setCurrentIndex(pictures.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="apartement_image">
      {/* Affichez l'image actuelle en utilisant l'index du tableau "pictures" */}
      <img src={pictures[currentIndex]} alt="apartement page" />

      {pictures.length > 1 && (
        <>
          {/* Bouton pour passer à l'image précédente */}
          <button className="btn btn-précédent">
            <i className="fa-solid fa-chevron-left" onClick={handlePrevious}></i>
          </button>

          {/* Bouton pour passer à l'image suivante */}
          <button className="btn btn-suivant">
            <i className="fa-solid fa-chevron-right" onClick={handleNext}></i>
          </button>

          {/* Affichez le numéro de l'image actuelle par rapport au nombre total d'images */}
          <span className="carouselCounter">
            {currentIndex + 1 + "/" + pictures.length}
          </span>
        </>
      )}
    </div>
  );
}
