import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ApartementPage.scss";
import { Collaps } from "../../components/collaps/collaps.js";
import { Slider } from "../../components/slider/slider";
import { Rating } from "../../components/rating/Rating";

function ApartementPage() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch("../logements.json")
      .then((response) => response.json())
      .then((data) => {
        const logement = data.find((element) => element.id === id);
        setLogement(logement);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération du logement : ", error);
      });
  }, [id]);

  if (logement === null) {
    return <div>Loading...</div>;
  }
  console.log(logement);

  return (
    <div>
      <div className="apartement-page">
        <Slider imageUrl={logement.cover}/>
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
