import React from "react";
import "./Banner.scss";

export default function Banner() {
  console.log(window.location.pathname);
  let text="Chez vous, partout et ailleurs";
  let src="bannerHome-kasa.webp";
  if (window.location.pathname==="/About"){
    text="";
    src="../bannerAbout-kasa.webp"
    

    }
  
  return (
    <div className="banner">
     
      <h2 className="banner_title">{text}</h2>
      <img src={src} alt="Banner" className="banner_img" />
    </div>
  );
  }
