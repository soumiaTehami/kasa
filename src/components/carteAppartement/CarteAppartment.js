import React from "react";
import { Link } from "react-router-dom";
import "./CarteAppartment.scss";
function CarteAppartement(props) {
  return (
    <Link
      to={`/ApartementPage/${props.id}`}
      state={{
        apartmentId: props.id,
      }}
      className="apartment"
    >
      <div className="apartment_image">
        <img src={props.imageUrl} alt="apartment_image" />
      </div>
      <div className="apartment_title">{props.title}</div>
    </Link>
  );
}

export default CarteAppartement;
