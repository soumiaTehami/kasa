import React from "react";
import "./Banner.scss";

export default function Banner() {
  return (
    <div className="banner">
      <h2 className="banner_title">Chez vous, partout et ailleurs</h2>
      <img src="bannerHome-kasa.webp" alt="Banner" className="banner_img" />
    </div>
  );
}
