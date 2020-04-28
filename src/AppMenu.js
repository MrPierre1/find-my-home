import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
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
} from 'semantic-ui-react';

import FavPopup from './FavPopup'
import { HouseContext } from './context/HouseContext';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const getWidth = () => {
  const isSSR = typeof window === 'undefined';

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

function AppMenu() {

    const [hideFixedMenu, setHideFixedMenu] = useState({ fixed: false })
  const [showFixedMenu, setShowFixedMenu] = useState({ fixed: true })
const dataJson = useContext(HouseContext)
  const fixed = false
  return (

    
    <Menu
      fixed={fixed ? 'top' : null}
      inverted={!fixed}
      pointing={!fixed}
      secondary={!fixed}
      size="large"
    >
      <Container>

  


        <Menu.Item active>
            <Link to="/">Buy</Link>
        </Menu.Item>
        <Menu.Item >
        <Link to="/sell">Sell</Link>
        </Menu.Item>
        <Menu.Item >Company</Menu.Item>
        <Menu.Item >Careers</Menu.Item>
        <Menu.Item position="right">
          <FavPopup data={dataJson} />
          {/* <Button as="a" inverted={!fixed}>
            Log in
          </Button> */}
          <Button
            as="a"
            inverted={!fixed}
            primary={fixed}
            style={{ marginLeft: '0.5em' }}
          >
            Sign Up
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
}
export default AppMenu;
