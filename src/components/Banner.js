import React from "react";
import "./Banner.scss"

function Banner() {
  return (
    <div className="banner">
        <h2 className="banner_title">Chez vous, partout et ailleurs</h2>
        <img src="https://picsum.photos/200/300" alt="Banner" className='banner_img'/>
    </div>
    
  );
}
export default Banner;