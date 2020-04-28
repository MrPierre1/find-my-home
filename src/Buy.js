import React, {useContext} from 'react';
import './App.css';
import HomepageLayout from './HomePageLayout';
import Footer from './Footer'
import SearchContainer from './SearchContainer'
import Listings from './Listings'
import { HouseContextProvider } from "./context/HouseContext";

// import myJsonArray from './Raleigh';
 



function Home() {
  return (
    <div className="Home">
       <HouseContextProvider>
      {/* <HomepageLayout> */}
      <SearchContainer/> 
      <Listings />
        <Footer/>
      {/* </HomepageLayout> */}
      </HouseContextProvider>
    </div>
  );
}

export default Home;
