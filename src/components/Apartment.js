import React from "react";
import "./Apartment.scss"
import { NavLink } from "react-router-dom";
function Apartment() {
    return (
      <div className="apartment">
        <NavLink to="/ApartementPage">
          <div div className="apartment_title">   titre de la location   </div>
          </NavLink>
      </div>
      
    );
  }

export default Apartment;