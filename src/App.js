import React from "react";
import Navbar from "./components/Navbar/Navbar";
import './app.css'
import Banner from "./components/Navbar/Banner/Banner";
import RowPost from "./components/Navbar/RowPost/RowPost";

function App() {
  return (
    <div>
       <Navbar/>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;
