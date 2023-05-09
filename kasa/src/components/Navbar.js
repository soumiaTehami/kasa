import React from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
        <NavLink to="/">
      <div className="navbar-logo">
        <img src="logo.png" alt="logo" />
      </div>
      </NavLink>
      <NavLink to="/">  <div>Accueil</div></NavLink>
    
      
      <NavLink to="/About"> <div>A Propos</div></NavLink>
    </nav>
  );
}
export default Navbar;
