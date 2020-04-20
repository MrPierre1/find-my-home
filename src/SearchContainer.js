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
  //  backgroundColor:'red'
  height: '700px', 
  padding: '140px',
  // padding: '0 auto'
  // margin: '0 auto'
 }
  
  const containerStyle = {
    backgroundColor: '#333',
    marginTop: '0px',
    borderRadius: '15px',
    // margin: 'auto auto',
    // width: '50%',
    // border: '3px solid green',
    // padding: '40px',
    // height: '500px'
    // margin: '0 auto',
    
  }

  const searchContainerStyle = {
   
    // backgroundBlendMode:'screen',
    // marginTop: '0px',
    // borderRadius: '15px',
    // margin: 'auto';
    // width: '50%';
    // border: '3px solid green';
    // padding: '10px';

    // // height: '500px'
    // // margin: '0 auto',
    
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
        
        <div style={searchContainerStyle} center> 
        
        <div style={headerStyle} class="ui huge header ">
          Property Search Just Got Easier
        </div>
        <div class="ui three column grid">
          <div class="row">
            <div class="column">
              <div class="ui focus input">
                <input type="text" placeholder="Keywords (Pool, Garage, Etc.)" />
              </div>
            </div>
            <div class="column">
              <Dropdown
                placeholder="City"
                fluid
                selection
                options={friendOptions}
              />
            </div>
            <div class="column">
              <Dropdown
                placeholder="State (All)"
                fluid
                selection
                options={state}
              />
            </div>
          </div>
        </div>

        <div class="ui two column grid">
          <div class="row">
            <div class="column">
              <Dropdown
                placeholder="Bedrooms(All)"
                fluid
                selection
                options={friendOptions}
              />
            </div>
            <div class="column">
              <Dropdown
                placeholder="Max Price (Any)"
                fluid
                selection
                options={state}
              />
            </div>
          </div>
        </div>

        <button style={submitStyle} class="ui fluid button">
          Find My Home
        </button>
        </div>
      </Container>
    </div>
  )
}

export default SearchContainer
