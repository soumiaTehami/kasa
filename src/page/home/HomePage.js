import React from "react";
import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import CarteAppartement from "../../components/carteAppartement/CarteAppartment";
import "./HomePage.scss";

function HomePage() {
  const [apartments, setApartments] = useState([]);
  useEffect(FetchApartements, []);
  function FetchApartements() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }
  return (
    <div>
      <Banner />
      <div className="grid">
        {apartments.map((apartment) => (
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
