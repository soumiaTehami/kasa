import React from "react";
import { Link } from "react-router-dom";
import "./Apartment.scss";
function Apartment(props) {

    return (
      <Link to="/ApartementPage" className="apartment">
        <div className="apartment_image">
          <img src={props.imageUrl} alt="" />
        </div>
        <div className="apartment_title">
          {props.title}
        </div>
      </Link>
    );
  }

export default Apartment;
