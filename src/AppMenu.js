import PropTypes from 'prop-types';
import React, { useState } from 'react';
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

const getWidth = () => {
  const isSSR = typeof window === 'undefined';

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

function AppMenu() {

    const [hideFixedMenu, setHideFixedMenu] = useState({ fixed: false })
  const [showFixedMenu, setShowFixedMenu] = useState({ fixed: true })
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
        <Menu.Item as="a" active>
          Home
        </Menu.Item>
        <Menu.Item as="a">Work</Menu.Item>
        <Menu.Item as="a">Company</Menu.Item>
        <Menu.Item as="a">Careers</Menu.Item>
        <Menu.Item position="right">
          <Button as="a" inverted={!fixed}>
            Log in
          </Button>
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
