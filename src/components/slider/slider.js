import React, { useState } from "react";
import "./slider.scss";

export function Slider({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handeleNext = () => {
    currentIndex === pictures.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };
  const handelePrivious = () => {
    currentIndex === 0
      ? setCurrentIndex(pictures.length-1)
      : setCurrentIndex(currentIndex - 1);
  };
  return (
    <div className="apartement_image">
      <img src={pictures[currentIndex]} alt="apartement page" />
      {pictures.length>1 && (
      <>
        <button className="btn btn-précédent">
          <i className="fas fa-chevron-left"onClick={handelePrivious}></i>
        </button>
        <button className="btn btn-suivant">
          <i className="fas fa-chevron-right" onClick={handeleNext}></i>
        </button>
        <span className="conteur">{currentIndex+1+"/"+pictures.length}</span>
      </>
      )}
    </div>
  );
}
