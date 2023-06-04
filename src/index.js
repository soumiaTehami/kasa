import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet  } from "react-router-dom"
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import HomePage from"./page/HomePage"
import ErrorPage from "./page/ErrorPage"
import ApartementPage from './page/ApartementPage';
import About from './page/About'
const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};
export const router=createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPage/>,
    children: [
  {
    path:"/",
   element :(
  <>
   <HomePage/>
  
   </>
   ),
   errorElement:<h1>404 not found</h1>
  },
  {
    path:"/About",
   element :<About/>,
  },
  {
    path:"/ApartementPage",
   element :<ApartementPage/>,
  },
  
  
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);