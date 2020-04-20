import _ from 'lodash'

import React from 'react'
import './App.css'
// import image from './../public/assets/1.jpg';
import HomepageLayout from './HomePageLayout'
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
import test from './assets/test3.jpg';

function SearchContainer() {
 var testing = test
 const searchStyle = {
   background: `url(${testing})`,
   backgroundSize: 'cover',
  height: '550px', 
  padding: '140px',
 }
  
  const containerStyle = {
    backgroundColor: '#333',
    marginTop: '0px',
    borderRadius: '15px',
    
  }


  const submitStyle = {
    marginTop: '30px',
    color: 'white',
    backgroundColor: 'green',
  }

  const headerStyle = {
    color: 'white',
   paddingTop: '50px'
  }
  const friendOptions = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: 'Jenny Hess',
      image: {
        avatar: true,
        src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
      },
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: 'Elliot Fu',
      image: {
        avatar: true,
        src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
      },
    },
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
    },
  ]

  return (
    <div style={searchStyle}>
      <Container text style={containerStyle} >
        
        <div > 
        
        <div style={headerStyle} className="ui huge header ">
          Property Search Just Got Easier
        </div>
        <div className="ui three column grid">
          <div className="row">
            <div className="column">
              <div className="ui focus input">
                <input type="text" placeholder="Keywords (Pool, Garage, Etc.)" />
              </div>
            </div>
            <div className="column">
              <Dropdown
                placeholder="City"
                fluid
                selection
                options={friendOptions}
              />
            </div>
            <div className="column">
              <Dropdown
                placeholder="State (All)"
                fluid
                selection
                options={state}
              />
            </div>
          </div>
        </div>

        <div className="ui two column grid">
          <div className="row">
            <div className="column">
              <Dropdown
                placeholder="Bedrooms(All)"
                fluid
                selection
                options={friendOptions}
              />
            </div>
            <div className="column">
              <Dropdown
                placeholder="Max Price (Any)"
                fluid
                selection
                options={state}
              />
            </div>
          </div>
        </div>

        <button style={submitStyle} className="ui fluid button">
          Find My Home
        </button>
        </div>
      </Container>
    </div>
  )
}

export default SearchContainer
