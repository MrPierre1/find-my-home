import React, {useContext, useState} from 'react';
import './App.css';
// import HomepageLayout from './HomePageLayout';
 
import SearchContainer from './SearchContainer'
import Listings from './Listings'
import { HouseContextProvider } from "./context/HouseContext";
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
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

import Buy from './Buy'
import Sell from './Sell'
import AppMenu from './AppMenu'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MyHomes from './Sell';
import test from './assets/mon125009.jpg'
import Footer from './Footer'
// import myJsonArray from './Raleigh';
 



function App() {

  const [active, setactive] = useState('')
 const handleItemClick = (e, { name }) => setactive({ active: name })
  return (
    <HouseContextProvider>
     {/* <HomepageLayout> */}
    
<Router>
        <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 0, padding: '1em 10em' }}
              vertical
            >
             
  <div>
    <Menu fixed='top' inverted size='massive' style={{height:'100px'}}>
      <Container>
        <Menu.Item as='a' header style={{border:'1px white solid', color:'white'}} 
         name='Buy'
          active={active === 'Buy'}
          onClick={handleItemClick}>
        <Link to="/">Buy</Link>
       
          {/* <Image size='mini' src={test} style={{ marginRight: '1.5em' }} /> */}
   
        </Menu.Item>
        <Menu.Item as='a'
         name='Sell'
         active={active === 'Sell'}
         onClick={handleItemClick}
        >
        <Link to="/sell">Sell</Link>
        </Menu.Item>
      </Container>
    </Menu>
  </div>
            
    </Segment>
        <Switch>
          <Route exact path="/">
            <Buy />
          </Route>
          <Route path="/sell">
            <Sell />
          </Route>
          <Route path="/dashboard">
            {/* <Dashboard /> */}
          </Route>
        </Switch>
     
    </Router>
    {/* <Footer /> */}

     </HouseContextProvider>
  );
}

export default App;
