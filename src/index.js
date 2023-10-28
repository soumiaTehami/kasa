import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./AppLayout"; // Importer le layout et la configuration des routes

// Création du point de rendu principal de l'application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Fournit le routeur à l'application */}
  </React.StrictMode>
);