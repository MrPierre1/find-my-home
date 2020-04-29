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
  Input, 
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

import Buy from './Buy'
import Sell from './Sell'
import Morgages from './Morgages'
import AppMenu from './AppMenu'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  NavLink,
} from "react-router-dom";
import MyHomes from './Sell';
import test from './assets/mon125009.jpg'
import Footer from './Footer'
// import myJsonArray from './Raleigh';
 



function App() {

  const [activeItem, setactiveItem] = useState('')
 const handleItemClick = (e, { name }) => setactiveItem( name )
  return (
    <HouseContextProvider>
     {/* <HomepageLayout> */}
    
<Router>
        <Segment
             
              textAlign='center'
              style={{ minHeight: 0, padding: '1em 10em' }}
              vertical
              inverted
              fixed
            >
             
  <div>

  <Menu widths={5}  pointing >
          <Menu.Item
            name='Buy'
            active={activeItem === 'Buy'}
            onClick={handleItemClick}
            as={Link} to='/'
            // style={{backgroundColor:'black', color:'white', fontSize:'20px'}}
          >
            Buy
            </Menu.Item>
             
          <Menu.Item
            name='Sell'
            active={activeItem === 'Sell'}
            onClick={handleItemClick}
            as={Link} to='/sell'
          >
           Sell
            </Menu.Item>
             
          <Menu.Item
            name='Morgages'
            active={activeItem === 'Morgages'}
            onClick={handleItemClick}
            as={Link} to='/morgages'

          >
          Morgages
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
    


    {/* <Menu fixed='top' inverted size='massive' style={{height:'100px'}}>
      <Container>
        <Menu.Item as='a' header style={{border:'1px red solid', color:'white'}} 
         className="selected"
          >
            
        <Link to="/">Buy</Link>
       
        </Menu.Item>
        <Menu.Item as='a'
         name='Sell'
         active={active === 'Sell'}
         onClick={handleItemClick}
         style={{border:'1px white solid', color:'white'}}
        >
        <Link to="/sell">Sell</Link>
        </Menu.Item>
      </Container>
    </Menu> */}
  </div>
            
    </Segment>
        <Switch>
          <Route exact path='/' component={Buy} >
            {/* <Buy /> */}
          </Route>
          <Route exact path='/sell' component={Sell}>
            {/* <Sell /> */}
          </Route>
          <Route exact path='/morgages' component={Morgages}>
            {/* <Dashboard /> */}
          </Route>
        </Switch>
     
    </Router>
    <Footer />

     </HouseContextProvider>
  );
}

export default App;
