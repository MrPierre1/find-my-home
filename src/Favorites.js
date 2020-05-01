import React, {useContext} from 'react';
import './App.css';
// import HomepageLayout from './HomePageLayout';
import Footer from './Footer'
import SearchContainer from './SearchContainer'
import Listings from './Listings'
import { FavoriteContext } from "./context/HouseContext";
import { HouseContext } from './context/HouseContext'

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
import HouseCards from './HouseCards'

function Favorites(props) {
  const {state, setState }= useContext(HouseContext)

   const favorite = useContext(FavoriteContext)
   const favType = true

  return (
    <div className="Popup">
     
    <Grid divided columns='equal'>
      {console.log('afvortie s', favorite.length)}


      <Grid.Row columns={4}>
            {favorite.length ?  favorite.map((item, index) => (
              <Grid.Column key={item.description}>
                <HouseCards
                  property={item}
                  index={index}
                  image={'item.photos[0]'}
                  type={favType}
                />
              </Grid.Column>
            )) : <div> There are no favorites in your list</div>}
          </Grid.Row>



      {/* <Grid.Column>
        {favorite.length ? favorite.map((item, index) => (

<List.Item key={item}>
      <Image avatar src={item.photos[0]} />
      <List.Content>
        <List.Header>{item.address.streetAddress}</List.Header>
        {item.description}
      </List.Content>
    </List.Item>

        )) : <div> NO FAVORITES EXIST</div>} */}
      {/* <List celled> */}
    {/* <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
      <List.Content>
        <List.Header>Snickerdoodle</List.Header>
        An excellent companion
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
      <List.Content>
        <List.Header>Poodle</List.Header>A poodle, it's pretty basic
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
      <List.Content>
        <List.Header>Paulo</List.Header>
        He's also a dog
      </List.Content>
    </List.Item>
  </List> */}
      {/* </Grid.Column> */}
    </Grid>
    </div>
  );
}

export default Favorites;
