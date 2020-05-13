import React, {  useState, Suspense, useEffect} from 'react';
import './App.css';

// import HomepageLayout from './HomePageLayout';

// import SearchContainer from './SearchContainer';
// import Listings from './Listings';
import { HouseContextProvider } from './context/HouseContext';
// import { HouseContext } from './context/HouseContext';

import {
 
  Menu,
 
  Segment,

} from 'semantic-ui-react';

// import Buy from './Buy'
import Sell from './Sell';
import Morgages from './Morgages';
// import AppMenu from './AppMenu';
// import HouseMapContainer from './HouseMapContainer'
import Map from './Map'
// const Buy = React.lazy(() => import('./Buy'));

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
  // NavLink,
} from 'react-router-dom';
// import MyHomes from './Sell';
// import test from './assets/mon125009.jpg';
import Footer from './Footer';
// import myJsonArray from './Raleigh';
import Favorites from './Favorites';
// import myJsonArray from './Raleigh.json';

import * as Sentry from '@sentry/browser';


Sentry.init({dsn: "https://3c95d99a75f24455aa5d0c2b07eacc1c@o363281.ingest.sentry.io/5239579"});

function App() {
  const Buy = React.lazy(() => import('./Buy'));

  const [activeItem, setactiveItem] = useState('');
  let [setStyle, setsetStyle] = useState({});
  // const { state, setState } = useContext(HouseContext);

  // const favList = state.filter((item) => item.favorite);
  // let location = useLocation()
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
  // let location = useLocation();
  

 
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
          <div className="divMenu">
            <Menu widths={5} pointing className="menuParent">
              <Menu.Item
               className="menuItem"
                name="buy"
                active={activeItem === 'buy'}
                onClick={handleItemClick}
                as={Link}
                to="/buy"
                style={
                  activeItem === 'buy' ? (
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




            

              
            </Menu>

          </div>
        </Segment>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/buy" component={Buy}>
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


          </Switch>
        </Suspense>
      </Router>
      <Footer />
    </HouseContextProvider>
  );
}

export default App;
