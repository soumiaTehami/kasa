import React from "react";
import "./Apartment.scss";
function Apartment(props) {
  return (
    <div className="apartment">
      <img src="https://picsum.photos/200/300" alt="" />
      <div div className="apartment_title">
      {props.title}
      </div>
    </div>
  );
}

export default Apartment;
