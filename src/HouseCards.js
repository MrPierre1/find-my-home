import React, {useState, useContext} from 'react';
import './App.css';
import { HouseContext } from "./context/HouseContext";


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
    // price,
    photos,
    livingArea,
    description, 
    yearBuilt,
  } = props.property;

  const {property} = useContext(HouseContext);

  return (
   
      <div>
      
    <Card style={{ margin: '30px', height: '500px'}}
      image={property.photos[0]}
      header={property.price}
      meta={`${property.address.streetAddress} ${property.address.city}  ${property.address.state}`}
      description={`${property.description.slice(0, 60)}...`}
      extra={
        <>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <a>
                  <Icon name="th" />
                  Sqft: {property.livingArea}
                </a>
              </Grid.Column>
              <Grid.Column>
                <a>
                  <Icon name="car" />
                  Year Built: {property.yearBuilt}
                </a>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <a>
                  <Icon name="bed" />
                  Bedroom: {property.bedrooms}
                </a>
              </Grid.Column>
              <Grid.Column>
                <a>
                  <Icon name="bath" />
                  Bathroom: {property.bathrooms}
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <CarouselMain />
        </>
        
      }
    />
    
    </div>
    
  );
}
export default HouseCards;
