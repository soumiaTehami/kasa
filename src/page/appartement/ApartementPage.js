import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ApartementPage.scss";
import { Collaps } from "../../components/collaps/collaps.js";
import { Slider } from "../../components/slider/slider";
import { Rating } from "../../components/rating/Rating";

function ApartementPage() {
  // Utilisation de useParams pour obtenir l'ID du logement à afficher depuis l'URL
  const { id } = useParams();

  // Utilisation du state pour stocker les données du logement
  const [logement, setLogement] = useState(null);

  // Utilisation de useEffect pour effectuer une requête de données lorsque l'ID change
  useEffect(() => {
    fetch("../logements.json")
      .then((response) => response.json())
      .then((data) => {
        // Recherchez le logement correspondant dans les données en utilisant l'ID
        const logement = data.find((element) => element.id === id);
        setLogement(logement);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération du logement : ", error);
      });
  }, [id]);

  // Si le logement est en cours de chargement, affichez "Loading..."
  if (logement === null) {
    return <div>Loading...</div>;
  }

  // Si le logement a été récupéré, affichez les détails de la page d'appartement
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
