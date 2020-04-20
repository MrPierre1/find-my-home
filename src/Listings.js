import React from 'react'
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
import test from './assets/test2.jpg'
import data from './Raleigh.json'

function App() {
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
  const headerStyle = {

   paddingTop: '50px'
  }

console.log('data is here', data)
  return (
    <div className="">
      
      <div style={headerStyle} className="ui huge header ">
          Featured_Listings
        </div>


      <Container style={containerStyle}>
        <Card.Group itemsPerRow={4}>
          <Card
            image={test}
            header="$500,300"
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
              <button style={submitStyle} className="ui fluid button">
          Find My Home
        </button>
              </div>
            }
          />
        </Card.Group>
      </Container>
    </div>
  )
}

export default App
