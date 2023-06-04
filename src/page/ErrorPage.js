import React from "react";
import "./ErrorPage.scss"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar";
import Main from "../components/Main";


function ErrorPage() {
  return (
    <>
    <Navbar />
    <Main>
      <div className="error">
        <h1>404</h1>
        <h2>Oops! La page que vous demandez n'existe pas</h2>
        <Link to="/">Retourner sur la page d'accueil</Link>
        
      </div>
    </Main>
    </>
  );
}
export default ErrorPage;