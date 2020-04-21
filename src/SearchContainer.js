import _ from 'lodash'

import React, {useState, useEffect} from 'react'
import './App.css'
import myJsonArray from './Raleigh.js'

// import image from './../public/assets/1.jpg';
import HomepageLayout from './HomePageLayout'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
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
  const [jsonData, setJsonData] = useState(myJsonArray)

  // useEffect(() => {
  //   jsonData.map(function(data){
  //     console.log(data.address.city)
  //     console.log(data.address.state)
  //     console.log(data.price)
  //     console.log(data.bedrooms)
  //   })
  //   return () => {
      
  //   }
  // }, [])

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

  const stateOptions= [
    {
      key: 'NC',
      text: 'NC',
      value: 'NC',
    },
    {
      key: 'California',
      text: 'California',
      value: 'California',
    },
  ]



  const cityOptions = [
    {
      key: 'Raleigh',
      text: 'Raleigh',
      value: 'Raleigh',
    },
    {
      key: 'LA',
      text: 'LA',
      value: 'LA',
    },
  ]

  const bedroomsOptions = [
    {
      key: '1',
      text: '1',
      value: '1',
    },
    {
      key: '2',
      text: '2',
      value: '2',
    },
    {
      key: '3',
      text: '3',
      value: '3',
    },{
      key: '4+',
      text: '4+',
      value: '4+',
    },
  ]

  const priceOptions = [
    {
      key: '$100,000',
      text: '$100,000',
      value: '$100,000',
    },
    {
      key: '$200,000',
      text: '$200,000',
      value: '$200,000',
    },
    {
      key: '$300,000',
      text: '$300,000',
      value: '$300,000',
    },{
      key: '$400,000+',
      text: '$400,000+',
      value: '$400,000+',
    },
  ]

const [state, setstate] = useState('')
const [keywords, setkeywords] = useState([])
const [city, setcity] = useState('')
const [price, setprice] = useState('')
const [bedrooms, setbedrooms] = useState('')

  const handleSubmit = (event, data) => {
    event.preventDefault ();
    var test = '{[data.name]: data.value}'
    console.log(city, price, keywords, bedrooms,state, 'and it data')
  };

  // const handleChange = (event, data) => {
  //   event.preventDefault ();
  //   var test = {[data.name]: data.value}
  //   console.log(test, 'data is here', data.name)
  //   // if (data.name)
  //   setcity({city: data.value})
  //   setprice({price: data.value})
  //   setbedrooms({bedrooms: data.value})
  //   setprice({price: data.value})
  //   setkeywords({keywords: data.value})


  // };


  return (
    <div style={searchStyle}>
      <form onSubmit={handleSubmit}>
      
      <Container text style={containerStyle} >
        
        <div > 
        
        <div style={headerStyle} className="ui huge header ">
          Property Search Just Got Easier
        </div>
        <div className="ui three column grid">
          <div className="row">
            <div className="column">
              <div className="ui focus input">
                <Input type="text" value={keywords}
                 onChange={e => setkeywords (e.target.value)}
                 placeholder="Keywords (Pool, Garage, Etc.)"  />
              </div>
            </div>
            <div className="column">
              <Dropdown
              name="city"
              onChange={(e, data) => setcity ({city: data.value})}
                placeholder="City"
                fluid
                selection
                options={cityOptions}
                
                
              />
            </div>
            <div className="column">
              <Dropdown
               name="state"
               onChange={(e, data) => setstate ({state: data.value})}
                placeholder="State (All)"
                fluid
                selection
                options={stateOptions}
              />
            </div>
          </div>
        </div>

        <div className="ui two column grid">
          <div className="row">
            <div className="column">
              <Dropdown
               name="bedrooms"
               onChange={(e, data) => setbedrooms ({bedrooms: data.value})}
                placeholder="Bedrooms(All)"
                fluid
                selection
                options={bedroomsOptions}
              />
            </div>
            <div className="column">
              <Dropdown
               name="price"
               onChange={(e, data) => setprice ({price: data.value})}
                placeholder="Max Price (Any)"
                fluid
                selection
                options={priceOptions}
              />
            </div>
          </div>
        </div>

        <button type="submit" style={submitStyle} className="ui fluid button">
          Find My Home
        </button>
        </div>
      </Container>
      </form>
    </div>
  )
}

export default SearchContainer
