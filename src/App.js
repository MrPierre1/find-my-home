import React, { useState, Suspense, useEffect } from 'react';
import './App.css';

import { HouseContextProvider } from './context/HouseContext';

import { Menu, Segment } from 'semantic-ui-react';

import Sell from './Sell';
import Morgages from './Morgages';

import Map from './Map';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

import Footer from './Footer';

import Favorites from './Favorites';

import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn:
    'https://3c95d99a75f24455aa5d0c2b07eacc1c@o363281.ingest.sentry.io/5239579',
});

function App() {
  const Buy = React.lazy(() => import('./Buy'));

  const [activeItem, setactiveItem] = useState('');
  let [setStyle, setsetStyle] = useState({});

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
  };

  return (
    <HouseContextProvider>
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
            <Route exact path="/buy" component={Buy} />
            <Route exact path="/sell" component={Sell} />
            <Route exact path="/morgages" component={Morgages} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>
        </Suspense>
      </Router>
      <Footer />
    </HouseContextProvider>
  );
}

export default App;
