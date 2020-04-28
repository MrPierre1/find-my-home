import React, {useContext} from 'react';
import './App.css';
import HomepageLayout from './HomePageLayout';
import Footer from './Footer'
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
// import myJsonArray from './Raleigh';
 



function App() {
  return (
    <HouseContextProvider>
     <HomepageLayout>
    
<Router>
        <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 0, padding: '1em 10em' }}
              vertical
            >
              <AppMenu/>
            
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
 </HomepageLayout>
     </HouseContextProvider>
  );
}

export default App;
