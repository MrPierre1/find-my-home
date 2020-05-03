import React, { Suspense} from 'react';
import './App.css';
// import HomepageLayout from './HomePageLayout';
// import Footer from './Footer'
// import SearchContainer from './SearchContainer'
// import Listings from './Listings'
import { HouseContextProvider } from "./context/HouseContext";
// import { FavoriteContext } from "./context/HouseContext";

const SearchContainer = React.lazy(() => import('./SearchContainer'));

// import myJsonArray from './Raleigh';
const Listings = React.lazy(() => import('./Listings'));
 



function Home() {
  //  const favorite = useContext(FavoriteContext)

  return (
   
    <div className="Home">
      {/* {console.log(favorite)} */}
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
