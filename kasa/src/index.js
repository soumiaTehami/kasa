import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet  } from "react-router-dom"
import Footer from "./components//Footer";
import Main from "./components//Main";
import App from "./App";
import Navbar from "./components/Navbar";
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
   <App/>
  
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
   element :<h1>nos Apartement</h1>,
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