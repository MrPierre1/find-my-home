import React, { useState, useContext } from 'react'
import './App.css'
import { HouseContext } from './context/HouseContext'

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
} from 'semantic-ui-react'

import CarouselMain from './CarouselMain'
import SellHeader from './SellHeader'

function MyHomes(props) {
  const [state, setState] = useContext(HouseContext)
// const [favorite, setfavorite] = useState([])


  return (
    <div>
     <div>
       <SellHeader  />
     </div>
      
    </div>
  )
}
export default MyHomes
