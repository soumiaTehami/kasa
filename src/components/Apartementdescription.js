import React from "react";
import "./Apartementdescription.scss";

export function Apartementdescription(){
    return (
        <>
    <div className="apartement-description">
    <p className="description-title"><span>Description</span><i className="fa-solid fa-chevron-up"></i></p>
    <p className="description-content"> 
      Votre maison loin de chez vous. Que vous veniez de l'autre bout
      du monde, ou juste de quelques stations de RER, vous vous
      sentirez chez vous dans notre appartement.
    </p>
  </div>
  
  </>
    )
}