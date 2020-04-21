import React, {useState} from 'react';
import './App.css';

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
    price,
    photos,
    livingArea,
    yearBuilt,
  } = props.property;
  return (
    // <Card.Group itemsPerRow={6} style={{display:'inline-flex'}}>
    <Card style={{ margin: '30px'}}
      image={photos[0]}
      header={price}
      meta={address.neighborhood}
      description={`${address.streetAddress}, ${address.city},  ${address.state}`}
      extra={
        <div>
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

          <CarouselMain />

        </div>
      }
    />
    // </Card.Group>
  );
}
export default HouseCards;
