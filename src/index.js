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
const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};
export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/ApartementPage/:id",
        element: <ApartementPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
