import React from "react";
import "./About.scss"
import { Apartementimage } from "../components/Apartementimage";
import { Apartementdescription } from "../components/Apartementdescription.js"

function About() {
  return (
    <>
    <Apartementimage/>
    <div className="about-container">
    <Apartementdescription />
    <Apartementdescription />
    <Apartementdescription />
    <Apartementdescription />
    </div>
    
    </>
  );
}
export default About;