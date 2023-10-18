import React, { useState } from "react";
import "./collaps.scss";

export function Collaps(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  const chevronClass =
    (isContentVisible ? "fa-chevron-up" : "fa-chevron-down") + " fas";

  return (
    <>
      <div className="apartement-description">
        <p className="description-title" onClick={showContent}>
          <span>{props.title}</span>
          <i className={chevronClass}></i>
        </p>
      {isContentVisible && <p className="description-content">
          {props.content}
        </p>}  
      </div>
    </>
  );
}
