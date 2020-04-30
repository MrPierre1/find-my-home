import React, {useContext, Suspense} from 'react';
import './App.css';
// import HomepageLayout from './HomePageLayout';
import Footer from './Footer'
// import SearchContainer from './SearchContainer'
import Listings from './Listings'
import { HouseContextProvider } from "./context/HouseContext";
const SearchContainer = React.lazy(() => import('./SearchContainer'));

// import myJsonArray from './Raleigh';
 



function Home() {
  return (
    <div className="Home">
       <HouseContextProvider>
      {/* <HomepageLayout> */}
      <Suspense fallback={<div>Loading...</div>}>


    
      <SearchContainer/> 
      <Listings />
      
       </Suspense>
      </HouseContextProvider>
    </div>
  );
}

export default Home;
