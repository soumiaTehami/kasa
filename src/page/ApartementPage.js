import React from "react";
import "./ApartementPage.scss";
import { Apartementdescription } from "../components/Apartementdescription.js"
import { Apartementimage } from "../components/Apartementimage";
import {ApartementHeader} from "../components/ApartementHeader";
import { useLocation } from "react-router-dom";

function ApartementPage() {
  const location=useLocation();
  console.log("location",location);
  return (
    <div>
      <div className="apartement-page">
        <Apartementimage/>

        <div>
          <ApartementHeader/>
          <div className="apartement_description">
            <Apartementdescription />
            <Apartementdescription />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default ApartementPage;
