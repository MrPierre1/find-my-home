import React, {useContext} from 'react';
import './App.css';
import HomepageLayout from './HomePageLayout';
import Footer from './Footer'
import SearchContainer from './SearchContainer'
import Listings from './Listings'
import { HouseContext } from "./context/HouseContext";
import myJsonArray from './Raleigh';
 



function App() {
  return (
    <div className="App">
       <HouseContext.Provider value={myJsonArray}>
      <HomepageLayout>
      <SearchContainer/> 
      <Listings />
        <Footer/>
      </HomepageLayout>
      </HouseContext.Provider>
    </div>
  );
}

export default App;
