import React from "react";
import "./Rating.scss";
// Composant Rating qui prend des propriétés, notamment "logement"
export function Rating(props) {
  const { logement } = props;    // Destructuration des propriétés pour extraire logement
  const { name } = logement.host;   // Destructuration du nom 
  const [firstName, lastName] = name.split(" ");
  const etoile = [1, 2, 3, 4, 5];   // Créez un tableau d'étoiles de 1 à 5

  return (
    <div className="apartement-header">
      <div className="apartement__title">
        <h1>{logement.title}</h1>
        <h2>{logement.location}</h2>
        <div className="apartement-tags">
          {logement.tags.map((tag) => (
            <span key={tag}>{tag}</span> //pour chaque tag envoyé un <span> avec le tag
          ))}
        </div>
      </div>
      <div className="apartement-page-info-name">
        <div className="apartements-details">
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className="apartement_badge">
            <img src={logement.host.picture} alt="" />
          </div>
        </div>
        <div className="apartement-star">
          {etoile.map((etoileValue) => (
            <span
              key={etoileValue}
              className={logement.rating >= etoileValue ? "on" : ""} //affiché les etoile class "on" si non etoile reste gris.
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
