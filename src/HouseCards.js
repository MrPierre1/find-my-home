
import React, {useState} from 'react'
import './App.css'

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
} from 'semantic-ui-react'

 
import CarouselMain from './CarouselMain'

function HouseCards(props) {
  
  const extra = (
    <a>
      <Icon name="user" />
      16 Friends
    </a>
  )
  const containerStyle = {
    margin: '30px',
  }
  const submitStyle = {
    marginTop: '30px',
    color: 'white',
    backgroundColor: 'navy',
  }
 

return (
<Card
image= 'cheese'
header={props.property.price}
meta="Raleigh"
description={'1791 Varsity Blvd Raleigh'}
extra={
  <div>
  <Grid>
    <Grid.Row columns={2}>
      <Grid.Column>
        <a>
          <Icon name="th" />
          Sqft: {50}
        </a>
      </Grid.Column>
      <Grid.Column>
        <a>
          <Icon name="car" />
          Garage: {2}
        </a>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2}>
      <Grid.Column>
        <a>
          <Icon name="bed" />
          Bedroom: {50}
        </a>
      </Grid.Column>
      <Grid.Column>
        <a>
          <Icon name="bath" />
          Bathroom: {2}
        </a>
      </Grid.Column>
    </Grid.Row>
  </Grid>


 <CarouselMain />

  </div>
}
/>
)
}
export default HouseCards