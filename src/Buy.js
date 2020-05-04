import React, { Suspense, useState, useContext} from 'react';
import './App.css';
import Map from './Map'
 import {Grid, Button} from 'semantic-ui-react'
// import HomepageLayout from './HomePageLayout';
// import Footer from './Footer'
// import SearchContainer from './SearchContainer'
// import Listings from './Listings'
// import { HouseContextProvider } from "./context/HouseContext";
import { HouseContext } from "./context/HouseContext";

const SearchContainer = React.lazy(() => import('./SearchContainer'));

// import myJsonArray from './Raleigh';
const Listings = React.lazy(() => import('./Listings'));
// const Listings = React.lazy(() => import('./Listings'));







function Home() {
  //  const favorite = useContext(FavoriteContext)

  const {state, setState }= useContext(HouseContext)
  const [isListingShown, setisListingShown] = useState(false)
  const [isMapShown, setisMapShown] = useState(true)

  const toggleList = () =>{
    setisListingShown(true)
    setisMapShown(false)
  }

  const toggleMap = () =>{
    setisListingShown(false)
    setisMapShown(true)
  }
  return (
   
    <div className="Home">
      {/* {console.log(favorite)} */}
       {/* <HouseContextProvider> */}
      {/* <HomepageLayout> */}
      <Suspense fallback={<div>Loading...</div>}>


    
      <SearchContainer/> 
      <div style={{margin:'1px auto auto 45%'}}>
 
    <Button onClick={toggleList} secondary>Show List</Button>
    <Button onClick={toggleMap} primary>Show Map</Button>
  </div>
    {/* </Grid.Column> */}
   
    
  {/* </Grid> */}
    <div>
{/* 
      
        <button onClick={toggleList}> Show List </button>
        <button onClick={toggleMap}> Show Map</button>
        </div> */}
        {isListingShown &&  <Listings /> }
       

       {isMapShown && <Map houseData={state} /> }  

     
      </div>
     
      
       </Suspense>
      {/* </HouseContextProvider> */}
    </div>
  );
}

export default Home;
