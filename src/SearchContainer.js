import _ from 'lodash'

import React from 'react';
import './App.css';
import HomepageLayout from './HomePageLayout';
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
  Dropdown,
} from 'semantic-ui-react'


function SearchContainer()
 {

  const containerStyle = {
    backgroundColor: 'red',
    marginTop: '60px'
  }

  const friendOptions = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: 'Jenny Hess',
      image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: 'Elliot Fu',
      image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' },
    }
  ]

  const state = [
    {
      key: 'steve',
      text: 'steve',
      value: 'steve',
    },
    {
      key: 'black',
      text: 'black',
      value: 'black',
    }
  ]
  
  return (
    <div className="">
       <Container text style={containerStyle}>

       <div class="ui three column grid">

  <div class="row">
    <div class="column">
   <div class="ui focus input"><input type="text" placeholder="Search..." /></div>
      
      
      </div>
    <div class="column">
      
      <Dropdown
    placeholder='City'
    fluid
    selection
    options={friendOptions}
  />
      
      </div>
    <div class="column">
    <Dropdown
    placeholder='State (All)'
    fluid
    selection
    options={state}
  />
      
      </div>
  </div>
</div>





  
  </Container>
    </div>
  );
}

export default SearchContainer
