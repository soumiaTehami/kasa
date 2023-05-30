import React from "react";
import "./ApartementPage.scss";
import { Apartementdescription } from "../components/Apartementdescription.js"
import { Apartementimage } from "../components/Apartementimage";
import {ApartementHeader} from "../components/ApartementHeader"

function ApartementPage() {
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
