import React, {   useContext, useState  } from 'react'
import './App.css'
import { HouseContext } from './context/HouseContext'
import houseJson from './newHouseData.json'
 

import {

  Card,

  Grid,

  Icon,

} from 'semantic-ui-react'

import CarouselMain from './CarouselMain'

function HouseCards(props) {
  const {state, dispatch} = useContext(HouseContext)
  const [fav, setfav] = useState(false)
// const [favorite, setfavorite] = useState([])



const handleFavorite = () => {
 if(props.type){
   console.log('removing a facoere beacuse type is trye', props.type)
  dispatch({ type: "REMOVE_FAVORITE", payload: props.property.address.streetAddress  });

 }
 else{
   dispatch({ type: "FAVORITE", payload: props.property.address.streetAddress  });
   setfav(true)
 }
  


};

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
      className="houseCards"
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
                  <span>
                    <Icon name="th" />
                    Sqft: {livingArea}
                  </span>
                </Grid.Column>
                <Grid.Column>
                  <span  >
                    <Icon name="car" />
                    Year Built: {yearBuilt}
                  </span>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <span >
                    <Icon name="bed" />
                    Bedroom: {bedrooms}
                  </span>
                </Grid.Column>
                <Grid.Column>
                  <span >
                    <Icon name="bath" />
                    Bathroom: {bathrooms}
                  </span>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid columns="equal">
              <Grid.Column width={12}>
                <CarouselMain key={photos[0]}  propertyData={photos} />
              </Grid.Column>
              <Grid.Column
                width={4}
                style={{ marginTop: '5px', marginLeft: '-5px' }}
              >

                {props.type ?  <a href="#" onClick={handleFavorite}>
                  <Icon name="remove" size="big" />
                </a> :  <a href="#" onClick={handleFavorite}>
                  <Icon name={fav ? 'heart' : 'heart outline'} size="big" />
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
