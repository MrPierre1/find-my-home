import React, { useContext, useState, Suspense, useEffect } from 'react';
import './App.css';
// import HomepageLayout from './HomePageLayout';

import SearchContainer from './SearchContainer';
import Listings from './Listings';
import { HouseContextProvider } from './context/HouseContext';
import { HouseContext } from './context/HouseContext';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Input,
  Label,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';

// import Buy from './Buy'
import Sell from './Sell';
import Morgages from './Morgages';
import AppMenu from './AppMenu';
import HouseMapContainer from './HouseMapContainer'
import Map from './Map'
// const Buy = React.lazy(() => import('./Buy'));

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import MyHomes from './Sell';
import test from './assets/mon125009.jpg';
import Footer from './Footer';
// import myJsonArray from './Raleigh';
import Favorites from './Favorites';
import myJsonArray from './Raleigh.json';

function App() {
  const Buy = React.lazy(() => import('./Buy'));

  const [activeItem, setactiveItem] = useState('');
  let [setStyle, setsetStyle] = useState({});
  // const { state, setState } = useContext(HouseContext);

  // const favList = state.filter((item) => item.favorite);

  const handleItemClick = (e, { name }) => {
    console.log('name', name);
    setactiveItem(name);
    if (name === 'Buy') {
      setsetStyle({
        backgroundColor: 'black',
        color: 'white',
        fontSize: '15px',
      });
    }
    // setsetStyle({backgroundColor:'black', color:'white', fontSize:'15px'})
  };
  // let favList = myJsonArray.filter((item) => item.favorite);

  // useEffect(
  //   () => {
  //     favList = myJsonArray.filter((item) => item.favorite);

  //     return () => {};
  //   },
  //   [myJsonArray]
  // );

  return (
    <HouseContextProvider>
      {/* <HomepageLayout> */}
      {/* {console.log(favList, 'the fave list', myJsonArray)} */}
      <Router>
        <Segment
          textAlign="center"
          style={{ minHeight: 0, padding: '1em 10em' }}
          vertical
          inverted
        >
          <div>
            <Menu widths={5} pointing>
              <Menu.Item
                name="Buy"
                active={activeItem === 'Buy'}
                onClick={handleItemClick}
                as={Link}
                to="/"
                style={
                  activeItem === 'Buy' ? (
                    {
                      backgroundColor: '#333',
                      color: 'white',
                      fontSize: '15px',
                    }
                  ) : (
                    {}
                  )
                }
              >
                Buy
              </Menu.Item>

              <Menu.Item
                name="Sell"
                active={activeItem === 'Sell'}
                onClick={handleItemClick}
                as={Link}
                to="/sell"
                style={
                  activeItem === 'Sell' ? (
                    {
                      backgroundColor: 'black',
                      color: 'white',
                      fontSize: '15px',
                    }
                  ) : (
                    {}
                  )
                }

                // style={setStyle}
              >
                Sell
              </Menu.Item>

              <Menu.Item
                name="Morgages"
                active={activeItem === 'Morgages'}
                onClick={handleItemClick}
                as={Link}
                to="/morgages"
                style={
                  activeItem === 'Morgages' ? (
                    {
                      backgroundColor: 'black',
                      color: 'white',
                      fontSize: '15px',
                    }
                  ) : (
                    {}
                  )
                }

                // style={setStyle}
              >
                Morgages
              </Menu.Item>

              <Menu.Item
                name="Favorites"
                active={activeItem === 'Favorites'}
                onClick={handleItemClick}
                as={Link}
                to="/favorites"
                style={
                  activeItem === 'Favorites' ? (
                    {
                      backgroundColor: 'black',
                      color: 'white',
                      fontSize: '15px',
                    }
                  ) : (
                    {}
                  )
                }
              >
                Favorites
          
              </Menu.Item>




              <Menu.Item
                name="Map"
                active={activeItem === 'Map'}
                onClick={handleItemClick}
                as={Link}
                to="/map"
                style={
                  activeItem === 'Map' ? (
                    {
                      backgroundColor: 'black',
                      color: 'white',
                      fontSize: '15px',
                    }
                  ) : (
                    {}
                  )
                }
              >
                Map
          
              </Menu.Item>

              
            </Menu>

          </div>
        </Segment>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Buy}>
              {/* <Buy /> */}
            </Route>
            <Route exact path="/sell" component={Sell}>
              {/* <Sell /> */}
            </Route>
            <Route exact path="/morgages" component={Morgages}>
              {/* <Dashboard /> */}
            </Route>
            <Route exact path="/favorites" component={Favorites}>
              {/* <Dashboard /> */}
            </Route>

            <Route exact path="/map" component={Map}>
            </Route>

          </Switch>
        </Suspense>
      </Router>
      <Footer />
    </HouseContextProvider>
  );
}

export default App;
