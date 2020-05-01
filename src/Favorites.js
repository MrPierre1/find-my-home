import React, { useContext } from 'react';
import './App.css';
// import HomepageLayout from './HomePageLayout';
import Footer from './Footer';
import SearchContainer from './SearchContainer';
import Listings from './Listings';
import { FavoriteContext } from './context/HouseContext';
import { HouseContext } from './context/HouseContext';

// import myJsonArray from './Raleigh';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Popup,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import HouseCards from './HouseCards';

function Favorites(props) {
  const { state, setState } = useContext(HouseContext);

  const favorite = useContext(FavoriteContext);
  const favType = true;
  const favList = state.filter((item) => item.favorite);

  return (
    <div className="Popup">
      <Grid divided columns="equal">
        {console.log('afvortie s', state)}

        <Grid.Row columns={4}>
          {favList.length ? (
            favList.map((item, index) => (
              <Grid.Column key={item.description}>
                <HouseCards
                  property={item}
                  index={index}
                  image={'item.photos[0]'}
                  type={favType}
                />
              </Grid.Column>
            ))
          ) : (
            <div> There are no favorites in your list</div>
          )}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Favorites;
