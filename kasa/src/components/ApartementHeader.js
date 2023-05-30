import React from "react";
import "./ApartementHeader.scss"


export function ApartementHeader(){
    return (
        <div className="apartement-header">
        <div class="apartement__title">
          <h1>Appartement cosy</h1>
          <h2>Ile de France - Paris 17e</h2>
          <div className="apartement-tags">
            <span>Cosy</span>
            <span>Canak</span>
            <span>Paris10</span>
          </div>
        </div>
        <div className="apartement-page-info-name">
          <div className="apartements-details">
            <h3>
              <span>Alexandre</span>
              <span>Dumas</span>
            </h3>
            <div className="apartement_badge"></div></div>
          <div className="apartement-star">
            <span className="on">★</span>
            <span className="on">★</span>
            <span className="on">★</span>
            <span className="off">★</span>
            <span className="off">★</span>
          </div>
        </div>
      </div>
    )
}