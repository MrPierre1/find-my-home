import React, {useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'

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
import myJsonArray from './Raleigh.js'
 
import CarouselMain from './CarouselMain'
import HouseCards from './HouseCards'


function Listings() {



  const [showCarousel, setshowCarousel] = useState(false)
  const [jsonData, setJsonData] = useState(myJsonArray)
  const extra = (
    <a>
      <Icon name="user" />
      16 Friends
    </a>
  )
  const containerStyle = {
    margin: '20px',
    
  }
  const submitStyle = {
    marginTop: '30px',
    color: 'white',
    backgroundColor: 'navy',
  }
  const headerStyle = {

   paddingTop: '50px'
  }

const cardContainerStyle = {
  marginTop:'50px'
}

  return (
    <div className="">
      
      <div style={headerStyle} className="ui huge header ">
          Featured Listings
        </div>

      <Container style={containerStyle}>
     
      
     
{/*        
//       <ul style={{display:'inline'}}>
//         <li style={{display:'inline-flex'}}> */}

<Grid>
  

  <Grid.Row columns={4}>
  { jsonData.map((item, index) => 
    <Grid.Column>
     <HouseCards property={item} index={index} image={'item.photos[0]'}/>
    </Grid.Column> 
     )
      }
  </Grid.Row>
</Grid>


     
{/* 
//         </li>
//       </ul> */}

       
      
      
      </Container>
    </div>
  )
}

export default Listings
