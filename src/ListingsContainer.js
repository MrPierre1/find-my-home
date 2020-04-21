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
import ImageCarousel from './ImageCarousel'
import CarouselMain from './CarouselMain'
import Listings from './Listings'


function ListingsContainer() {
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

// console.log('data is here', data)
  return (
    <div className="">
      
      <div style={headerStyle} className="ui huge header ">
          Featured_Listings
        </div>

<Listings/>
<button style={submitStyle} className="ui fluid button" onClick={toggleCarousel}>
          More Info
        </button>
    
    </div>
  )
}

export default ListingsContainer
