import React from "react";
import Navbar from "./components/Navbar/Navbar";
import './app.css'
import Banner from "./components/Banner/Banner";
import {originals,action,comedy,trending,horrorMovies,romanceMovies,documentaries} from './urls/urls'
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
    <div>
       <Navbar/>
      <Banner/>
      <RowPost url={originals}title='Netflix Originals'/>
      <RowPost url={action}  title='Action' isSmall/>
      <RowPost url={horrorMovies} title='Horror Movies'  isSmall/>
      <RowPost url={romanceMovies} title='Romance Movies'  isSmall/>
      <RowPost url={trending} title='Trending'  isSmall/>
      <RowPost url={documentaries} title='Documentaries'  isSmall/>
      <RowPost url={comedy} title='Comedy'  isSmall/>
    </div>
  );
}

export default App;
