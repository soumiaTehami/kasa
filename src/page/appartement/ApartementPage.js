import React from "react";
import "./ApartementPage.scss";
import { Collaps } from "../../components/collaps/collaps.js";
import { Slider } from "../../components/slider/slider";
import { Rating } from "../../components/rating/Rating";
import { useParams } from "react-router-dom";

function ApartementPage() {
  const { id } = useParams();

  console.log(id);

  return (
    <div>
      <div className="apartement-page">
        <Slider />

        <div>
          <Rating />
          <div className="apartement_description">
            <Collaps />
            <Collaps />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default ApartementPage;
