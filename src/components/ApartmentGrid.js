import { useEffect, useState } from "react";
import Apartment from "./Apartment"
import "./ApartmentGrid.scss"

function ApartmentGrid() {
    const [apartments, setApartments] = useState([]);
    useEffect(FetchApartements,[])
    function FetchApartements(){
      fetch("logements.json")
        .then((res) => res.json())
        .then((res) => setApartments(res))
        .catch(console.error);
  
    }
    return (
      <div className="grid" >
        
        {apartments.map((apartment) => (
        <Apartment
          title={apartment.title}
         
        />
      ))}
          
      </div>
      
    );
  }

export default ApartmentGrid;