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
         
        setLogement(data.find((element) => element.id === id));
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération du logement : ", error);
      });
  }, [id]);

  if (logement === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="apartement-page">
        <Slider pictures={logement.pictures} />
        <div>
          <Rating logement={logement} />

          <div className="apartement_description">
            <Collaps title="Description" content={logement.description} />
            <Collaps
              title="Equipements"
              content={logement.equipments.map((equipment, i) => (
                <li key={i}>{equipment}</li>
              ))}
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ApartementPage;
