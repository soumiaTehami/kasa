import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import HomePage from "./page/home/HomePage";
import ErrorPage from "./page/notFound/ErrorPage";
import ApartementPage from "./page/appartement/ApartementPage";
import About from "./page/about/About";
import "./index.css";

// Layout de l'en-tête et du pied de page
const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar /> {/* Composant de navigation (en-tête) */}
      <div className="main">
        <Outlet /> {/* Point de rendu pour les composants de page (changera en fonction de l'URL) */}
      </div>
      <Footer /> {/* Composant du pied de page */}
    </>
  );
};

// Configuration des itinéraires avec React Router
export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />, // Utilisation du layout d'en-tête et de pied de page pour toutes les pages
    errorElement: <ErrorPage />, // Page d'erreur à afficher en cas de problème
    children: [
      {
        path: "/",
        element: <HomePage />, // Page d'accueil
      },
      {
        path: "/About",
        element: <About />, // Page "À propos"
      },
      {
        path: "/ApartementPage/:id",
        element: <ApartementPage />, // Page d'appartement avec un paramètre dynamique ":id"
      },
      {
        path: "*",
        element: <ErrorPage />, // Page d'erreur par défaut en cas de route non trouvée
      },
    ],
  },
]);

// Création du point de rendu principal de l'application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Fournit le routeur à l'application */}
  </React.StrictMode>
);
