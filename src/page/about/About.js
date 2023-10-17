import React from "react";
import "./About.scss";
import Banner from "../../components/banner/Banner";
import { Collaps } from "../../components/collaps/collaps.js";

function About() {
  return (
    <>
        <Banner/>
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
