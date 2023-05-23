import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet  } from "react-router-dom"
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import HomePage from"./page/HomePage"
import ApartementPage from './page/ApartementPage';
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
   element :<h1>Apropos</h1>,
  },
  {
    path:"/ApartementPage",
   element :<ApartementPage/>,
  },
  {
    path:"/Error",
   element :<h1>404</h1>,
  }
  
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);