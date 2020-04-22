import React, {useState, useContext} from 'react';
import './App.css';
import { HouseContext } from "./context/HouseContext";

// import HouseCards from './HouseCards'


import {
  Button,
  Container,
  Card,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Dropdown,
} from 'semantic-ui-react';

import CarouselMain from './CarouselMain';

function HouseCards (props) {
  const [state, setState] = useContext(HouseContext)

  const extra = (
    <a>
      <Icon name="user" />
      16 Friends
    </a>
  );
  const containerStyle = {
    margin: '30px',
  };
  const submitStyle = {
    marginTop: '30px',
    color: 'white',
    backgroundColor: 'navy',
  };

  const {
    address,
    bedrooms,
    bathrooms,
    price,
    photos,
    livingArea,
    description, 
    yearBuilt,
  } = props.property;

  

  // const property = useContext(HouseContext);
  // var i = 0;
  return (
   
      <div>
      
  
    <div>
      {/* {console.log('pwhat is state', state, state.myJsonArray)} */}
    </div>
    <Card style={{ margin: '30px', height: '500px'}}
      image={photos[0]}
      header={price}
      meta={`${address.streetAddress} ${address.city}  ${address.state}`}
      description={`${description.slice(0, 60)}...`}
      extra={
        <>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <a>
                  <Icon name="th" />
                  Sqft: {livingArea}
                </a>
              </Grid.Column>
              <Grid.Column>
                <a>
                  <Icon name="car" />
                  Year Built: {yearBuilt}
                </a>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <a>
                  <Icon name="bed" />
                  Bedroom: {bedrooms}
                </a>
              </Grid.Column>
              <Grid.Column>
                <a>
                  <Icon name="bath" />
                  Bathroom: {bathrooms}
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <CarouselMain key={photos[0]} propertyData={photos} />
        </>
        
      }
    />
    
    </div>
    
  );
}
export default HouseCards;
