import React from "react";
import "./Rating.scss";

export function Rating(props) {
  const {logement}=props;
  const { name } = logement.host;
  const [firstName, lastName] = name.split(" ");
  return (
    <div className="apartement-header">
      <div class="apartement__title">
        <h1>{logement.title}</h1>
        <h2>{logement.location}</h2>
        <div className="apartement-tags">
        {logement.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="apartement-page-info-name">
        <div className="apartements-details">
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className="apartement_badge"><img src={logement.host.picture} alt="" /></div>
        </div>
        <div className="apartement-star">
        {[1, 2, 3, 4, 5].map((etoile) => (
            <span key={etoile} className={logement.rating >= etoile ? "on" : ""}>
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
