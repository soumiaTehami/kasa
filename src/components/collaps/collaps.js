import React, { useState } from "react";
import "./collaps.scss";

export function Collaps(props) {
  const [ContentVisible, setContentVisible] = useState(false);

  const Contentchevron = () => {
    setContentVisible(!ContentVisible);
  };

  const chevronClass =
    (ContentVisible ? "fa-chevron-up" : "fa-chevron-down") + " fas";

  return (
    <>
      <div className="apartement-description">
        <p className="description-title" onClick={Contentchevron}>
          <span>{props.title}</span>
          <i className={chevronClass}></i>
        </p>
      {ContentVisible && <p className="description-content">
          {props.content}
        </p>}  
      </div>
    </>
  );
}
