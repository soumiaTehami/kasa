import React from "react";
import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import CarteAppartement from "../../components/carteAppartement/CarteAppartment";
import "./HomePage.scss";

function HomePage() {
  const [apartments, setApartments] = useState([]);
  useEffect(FetchApartements, []); // Le tableau de dépendances est vide, donc cela s'exécutera une fois après le montage initial

  function FetchApartements() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((res) => setApartments(res)) // Met à jour l'état local avec les données des appartements
      .catch(console.error); // Gère les erreurs en les affichant dans la console
  }

  return (
    <div>
      <Banner />
      <div className="grid">
        {apartments.map((apartment) => (
          // Mapping sur la liste des appartements pour générer des composants CarteAppartement
          <CarteAppartement
            key={apartment.id}
            title={apartment.title}
            imageUrl={apartment.cover}
            id={apartment.id}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
