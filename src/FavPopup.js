import React, {} from 'react';
import './App.css';
// import HomepageLayout from './HomePageLayout';
// import Footer from './Footer'
// import SearchContainer from './SearchContainer'
// import Listings from './Listings'
// import { HouseContextProvider } from "./context/HouseContext";

// import myJsonArray from './Raleigh';
 

import {
  Button,

  Grid,

  Popup,
 
} from 'semantic-ui-react';

function FavPopup(props) {
  return (
    <div className="Popup">
      <Popup wide trigger={<Button content='Favorites' />} on='click'>
    <Grid divided columns='equal'>
      
      <Grid.Column>
        <Popup
          trigger={<Button color='blue' content='Blue Pill' fluid />}
          content='The story ends. You wake up in your bed and believe whatever you want to believe.'
          position='top center'
          size='tiny'
          inverted
        />
      </Grid.Column>
      <Grid.Column>
        <Popup
          trigger={<Button color='red' content='Red Pill' fluid />}
          content='Stay in Wonderland, and I show you how deep the rabbit hole goes.'
          position='top center'
          size='tiny'
          inverted
        />
      </Grid.Column>
    </Grid>
  </Popup>
    </div>
  );
}

export default FavPopup;
