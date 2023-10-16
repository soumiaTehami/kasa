import React from "react";
import "./About.scss";
import  {Slider} from "../../components/slider/slider";
import { Collaps } from "../../components/collaps/collaps.js";

function About() {
  return (
    <>
        <Slider />
      <div className="about-container">
        <Collaps />
        <Collaps />
        <Collaps />
        <Collaps />
      </div>
    </>
  );
}
export default About;
