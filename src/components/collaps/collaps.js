import React, { useState } from "react";
import "./collaps.scss";

export function Collaps(props) {
  // État local pour suivre si le collaps est ouvert ou fermé
  const [ContenuVisible, setContenuVisible] = useState(false);

  // Fonction pour inverser l'état du collaps quand le titre est cliqué
  const Contentchevron = () => {
    setContenuVisible(!ContenuVisible);
  };

  // Classe CSS pour l'icône de la flèche, basée sur l'état actuel du collaps
  const chevronClass =
    (ContenuVisible?"fa-regular fa-chevron-up":   "fa-sharp fa-solid fa-chevron-down")+ " fas";

  return (
    <>
      <div className="apartement-description">
        <p className="description-title" onClick={Contentchevron}>
          <span>{props.title}</span>

          <i className={chevronClass}></i>
        </p>
        {/* Affiche le contenu seulement si le collaps est ouvert (ContentVisible est true) */}
        {ContenuVisible && (
          <p className="description-content">{props.content}</p>
        )}
      </div>
    </>
  );
}
