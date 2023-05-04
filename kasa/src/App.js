import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner"
import ApartmentGrid from "./components/ApartmentGrid"
import "./App.css"
import Main from "./components/Main"
function App() {
  return <div>
    <Navbar />
    <Main>
    <Banner/>
    <ApartmentGrid/>
    </Main>
    </div>
}
export default App;
