import React from "react";
import Apartment from "./Apartment"
import "./ApartmentGrid.scss"
function ApartmentGrid() {
    return (
      <div className="grid" >
          <Apartment/>
          <Apartment/>
          <Apartment/>  
          <Apartment/>
      </div>
      
    );
  }

export default ApartmentGrid;