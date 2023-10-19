import React from "react";
import "./slider.scss";

export function Slider(props) {
  return (
    <div className="apartement_image">
      <img
        src={props.imageUrl}
        alt="apartement page"
        className="apartement page"
      />
       <>
          <button className="btn btn-précédent">
            <i className="fas fa-chevron-left"></i>
            </button>
            <button className="btn btn-suivant" >
            <i className="fas fa-chevron-right"></i>
          </button>
     </>
    </div>
  );
}
