
import React, {useState, useEffect, useContext} from 'react'
import './App.css'
import myJsonArray from './Raleigh.js'
import {

  Container,
 
  Input,
 Responsive,
  Dropdown,
} from 'semantic-ui-react'
import test from './assets/test3.jpg';
import { HouseContext } from './context/HouseContext'


function SearchContainer() {
  const [jsonData, setJsonData] = useState(myJsonArray)

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

  const stateOptions= [
    {
      key: 'NC',
      text: 'NC',
      value: 'NC',
    },
    {
      key: 'CA',
      text: 'CA',
      value: 'CA',
    },
  ]


  const cityOptions = [
    {
      key: 'Raleigh',
      text: 'Raleigh',
      value: 'Raleigh',
    },
    {
      key: 'Los Angeles',
      text: 'Los Angeles',
      value: 'Los Angeles',
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
      key: '4',
      text: '4',
      value: '4',
    }
    ,{
      key: '5',
      text: '5',
      value: '5',
    }
    ,{
      key: '6',
      text: '6',
      value: '6',
    }
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

const [nationState, setnationState] = useState('')
const [keywords, setkeywords] = useState([])
const [city, setcity] = useState('')
const [price, setprice] = useState('')
const [bedrooms, setbedrooms] = useState('')

const [state, setState] = useContext(HouseContext)


const handleSubmit = (event) => {
  const data = state.myJsonArray
  event.preventDefault ();
  console.log('city,', city, 'price, ', price, 'keywords,', keywords, 'bed', bedrooms, 'state', nationState, 'and it data', state.myJsonArray)
  var filter = [ {bedrooms}, {city}, {price}, {nationState}]
  var result = []
for (var prop in filter){
    var filtered = filter[prop]
    // console.log('filtereddata ', filtered.bedrooms, typeof filtered.bed)
    // if(filter.bedrooms == 4){
    //   console.log(typeof filtered.bedrooms, 'bedrooms is here', 'AND HERE',  filtered.bedrooms)
    // }

        data.find((obj, index) => 
            {
                    var myFilter = Object.values(filtered) 
                    var propertyData = Object.values(obj)
                if (propertyData.includes(myFilter[0])){
                    result.push(data[index])
                }
                // if()
            });
}
console.log('myresult', result, result.length )

setState( { myJsonArray : result})
setcity({})
setprice({})
setkeywords([])
setbedrooms({})
setnationState({})
     
 
  };

 

  return (
    <Responsive>
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
                clearable
                selection
                options={cityOptions}
                
                
              />
            </div>
            <div className="column">
              <Dropdown
               name="nationState"
               onChange={(e, data) => setnationState ({nationState: data.value})}
                placeholder="State (All)"
                fluid
                clearable
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
               size='mini'
               onChange={(e, data) => setbedrooms (Number(data.value))}
                placeholder="Bedrooms(All)"
                fluid
                clearable
                selection
                options={bedroomsOptions}
             
              />
            </div>
            {/* <div className="column">
              <Dropdown
               name="price"
               onChange={(e, data) => setprice ({price: data.value})}
                placeholder="Max Price (Any)"
                fluid
                selection
                options={priceOptions}
              />
            </div> */}

            <div className="ui focus input column">
                <Input  type="number" value={price}
                 onChange={(e, data) => setprice (e.target.value)}
                 placeholder="Max Price (Any)"
            
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
    </Responsive>
  )
}

export default SearchContainer
