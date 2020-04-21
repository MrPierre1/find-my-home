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
import test from './assets/test2.jpg'
import data from './Raleigh.json'
 
import CarouselMain from './CarouselMain'
import HouseCards from './HouseCards'


function Listings() {
  const [showCarousel, setshowCarousel] = useState(false)
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

  function toggleCarousel (){
    console.log('nadia is sleepy, night night nigga', showCarousel)
    setshowCarousel(!showCarousel)
  }

  const Headline = ({ value }) => {
    
    return <h1>{value}</h1>;
  };

// console.log('data is here', data)
  return (
    <div className="">
      
      <div style={headerStyle} className="ui huge header ">
          Featured_Listings
        </div>


      <Container style={containerStyle}>
     { data.map((item, index) => 
      
      
      
        // <Card.Group itemsPerRow={4} key={item.address.streetAddress}   >

        <Grid>
    <Grid.Row columns={3} stackable>
      <Grid.Column>
       <HouseCards property={item} index={index}/>
      </Grid.Column>
      <Grid.Column>
      <HouseCards property={item} index={index} />
      </Grid.Column>
      <Grid.Column>
      <HouseCards property={item} index={index} />
      </Grid.Column>
    </Grid.Row>

    </Grid>
       
        // </Card.Group>
        )
      }
      
      </Container>
    </div>
  )
}

export default Listings
