import React, { Suspense, useState, useContex, useEffect, useContext} from 'react';
import './App.css';
import Map from './Map'
 import { Button} from 'semantic-ui-react'
 
import { HouseContext } from "./context/HouseContext";

const SearchContainer = React.lazy(() => import('./SearchContainer'));

const Listings = React.lazy(() => import('./Listings'));








function Home() {

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
 
      <Suspense fallback={<div>Loading...</div>}>


    
      <SearchContainer/> 
      <div className="MaptoggleButtons">
 
    <Button onClick={toggleList} secondary>Show List</Button>
    <Button onClick={toggleMap} primary>Show Map</Button>
  </div>
 
    <div>
 
        {isListingShown &&  <Listings /> }
       

       {isMapShown && <Map houseData={state} /> }  

     
      </div>
     
      
       </Suspense>
   
    </div>
  );
}

export default Home;
