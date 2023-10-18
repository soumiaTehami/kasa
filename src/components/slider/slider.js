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
    </div>
  );
}
