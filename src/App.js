import React, { useState, Suspense, useEffect, createRef } from 'react';
import './App.css';
import { HouseContextProvider } from './context/HouseContext';
import { Menu, Segment, Sticky } from 'semantic-ui-react';
import Sell from './Sell/Sell';
import Morgages from './Morgages';
 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  
} from 'react-router-dom';

import Footer from './Footer';

import Favorites from './Favorites';

import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn:
    'https://3c95d99a75f24455aa5d0c2b07eacc1c@o363281.ingest.sentry.io/5239579',
});

function App() {
  const Buy = React.lazy(() => import('./Buy/Buy'));
  const contextRef = createRef()
  const [activeItem, setactiveItem] = useState(window.location.pathname.substring(1, 14));
  const [shortUrl, ] = useState(window.location.pathname.substring(1, 14))
  let [setStyle, setsetStyle] = useState({});
 
  const handleItemClick = (e, { name }) => {
    setactiveItem(name);
    if (name === 'Buy') {
      setsetStyle({
        backgroundColor: 'black',
        color: 'white',
        fontSize: '15px',
      });
    }
  };


 
  
 useEffect(() => {
  if(!activeItem){
    setactiveItem(shortUrl)
}
   return () => {
     
   }
 }, [])

  return (
    <HouseContextProvider>

      <Router>
        <Segment
          textAlign="center"
          style={{ minHeight: 0, padding: '1em 10em' }}
          vertical
          inverted
        >
          <div className="divMenu" ref={contextRef}>
          <Sticky context={contextRef}>
            <Menu widths={5} pointing attached='top' className="menuParent">
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
                name="sell"
                active={activeItem === 'sell'}
                onClick={handleItemClick}
                as={Link}
                to="/sell"
                style={
                  activeItem === 'sell' ? (
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
                name="morgages"
                active={activeItem === 'morgages'}
                onClick={handleItemClick}
                as={Link}
                to="/morgages"
                style={
                  activeItem === 'morgages' ? (
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
                name="favorites"
                active={activeItem === 'favorites'}
                onClick={handleItemClick}
                as={Link}
                to="/favorites"
                style={
                  activeItem === 'favorites' ? (
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
            </Sticky>
          </div>
        </Segment>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch attached='bottom'>
          <Route exact path="/">
              <Redirect to="/buy" />
          </Route>
            <Route  path="/buy" component={Buy} />
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
