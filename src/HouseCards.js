import React, {   useContext, useState  } from 'react'
import './App.css'
import { HouseContext } from './context/HouseContext'

import {

  Card,

  Grid,

  Icon,

} from 'semantic-ui-react'

import CarouselMain from './CarouselMain'

function HouseCards(props) {
  const {state, dispatch} = useContext(HouseContext)
 
const {
    address,
    bedrooms,
    bathrooms,
    price,
    photos,
    favorite,
    livingArea,
    description,
    yearBuilt,
  } = props.property

 const [fav, setfav] = useState(favorite)

 
const handleFavorite = () => {
 if(props.type){
  
  dispatch({ type: "REMOVE_FAVORITE", payload: props.property.address.streetAddress  });

 }
 else if (!fav) {
  
   dispatch({ type: "FAVORITE", payload: props.property.address.streetAddress  });
   setfav(!fav)
 }
 else if (fav){
 
  dispatch({ type: "NOTFAVORITE", payload: props.property.address.streetAddress  });
  setfav(!fav)
}
 
  


};

  
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
               
                {props.type ?  <span onClick={handleFavorite}>
                  <Icon name="remove" size="big" />
                </span> :  <span onClick={handleFavorite}>
                  <Icon name={fav ? 'heart' : 'heart outline'} size="big" />
                </span>}
            
            
              </Grid.Column>
            </Grid>
          </>
        }
      />
    </div>
  )
}
export default HouseCards
