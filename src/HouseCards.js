import React, { useState, useContext, useEffect } from 'react'
import './App.css'
import { HouseContext } from './context/HouseContext'

// import HouseCards from './HouseCards'

import {
  Button,
  Container,
  Card,
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

import CarouselMain from './CarouselMain'

function HouseCards(props) {
  const {state, dispatch} = useContext(HouseContext)
// const [favorite, setfavorite] = useState([])



const handleFavorite = () => {
 if(props.type){
   console.log('removing a facoere beacuse type is trye', props.type)
  dispatch({ type: "REMOVE_FAVORITE", payload: props.property.address.streetAddress  });

 }
 else{
   dispatch({ type: "FAVORITE", payload: props.property.address.streetAddress  });
 }
  


};
  const extra = (
    <a>
      <Icon name="user" />
      16 Friends
    </a>
  )
  const containerStyle = {
    margin: '30px',
  }
  const submitStyle = {
    marginTop: '30px',
    color: 'white',
    backgroundColor: 'navy',
  }

  const {
    address,
    bedrooms,
    bathrooms,
    price,
    photos,
    livingArea,
    description,
    yearBuilt,
  } = props.property

  return (
    <div>
      <div></div>

      <Card
        style={{ margin: '30px', height: '500px' }}
        image={photos[0]}
        header={`$${price}`}
        meta={`${address.streetAddress} ${address.city}  ${address.state}`}
        description={`${description.slice(0, 60)}...`}
        extra={
          <>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <a>
                    <Icon name="th" />
                    Sqft: {livingArea}
                  </a>
                </Grid.Column>
                <Grid.Column>
                  <a>
                    <Icon name="car" />
                    Year Built: {yearBuilt}
                  </a>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <a>
                    <Icon name="bed" />
                    Bedroom: {bedrooms}
                  </a>
                </Grid.Column>
                <Grid.Column>
                  <a>
                    <Icon name="bath" />
                    Bathroom: {bathrooms}
                  </a>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid columns="equal">
              <Grid.Column width={12}>
                <CarouselMain key={photos[0]} propertyData={photos} />
              </Grid.Column>
              <Grid.Column
                width={4}
                style={{ marginTop: '5px', marginLeft: '-5px' }}
              >
                {props.type ?  <a onClick={handleFavorite}>
                  <Icon name="remove" size="big" />
                </a> :  <a onClick={handleFavorite}>
                  <Icon name="heart outline" size="big" />
                </a>}
                {/* <a onClick={handleFavorite}>
                  <Icon name="heart outline" size="big" />
                </a> */}
                {/* <a onClick={ (e) => dispatch({ type: "BEDROOM", payload: bedrooms })}>
                  <Icon name="remove" size="big" />
                </a> */}
              </Grid.Column>
            </Grid>
          </>
        }
      />
    </div>
  )
}
export default HouseCards
