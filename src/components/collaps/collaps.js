import React, { useState } from "react";
import "./collaps.scss";

export function Collaps() {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  //const contentClass = (isContentVisible ? "visible" : "hidden") + " description__content";
  const chevronClass =
    (isContentVisible ? "fa-chevron-up" : "fa-chevron-down") + " fas";

  return (
    <>
      <div className="apartement-description">
        <p className="description-title" onClick={showContent}>
          <span>Description</span>
          <i className={chevronClass}></i>
        </p>
      {isContentVisible && <p className="description-content">
          Votre maison loin de chez vous. Que vous veniez de l'autre bout du
          monde, ou juste de quelques stations de RER, vous vous sentirez chez
          vous dans notre appartement.
        </p>}  
      </div>
    </>
  );
}
