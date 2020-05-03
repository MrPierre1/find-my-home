import React, {  useContext, useEffect, Suspense } from 'react'
import './App.css'
// import axios from 'axios'

import {
   
  Container,
   
  Grid,
 
} from 'semantic-ui-react'
// import test from './assets/test2.jpg'
// import myJsonArray from './Raleigh.js';
import { HouseContext } from './context/HouseContext'

// import CarouselMain from './CarouselMain'
// import HouseCards from './HouseCards'
const HouseCards = React.lazy(() => import('./HouseCards'));


function Listings() {
  // const [showCarousel, setshowCarousel] = useState(false)
  // const [jsonData, setJsonData] = useState('myJsonArray')

  const containerStyle = {
    margin: '20px',
  }
  // const submitStyle = {
  //   marginTop: '30px',
  //   color: 'white',
  //   backgroundColor: 'navy',
  // }
  const headerStyle = {
    // paddingTop: '50px',
    marginTop: '20px',
    textAlign:'center'
  }

  // const cardContainerStyle = {
  //   marginTop: '50px',
  // }

  const {state, setState }= useContext(HouseContext)

  useEffect(() => {
    console.log('datalegnth', state.length)
    return () => {
      
    }
  }, [state])
  return (
    <div className="">
      <div style={headerStyle} className="ui huge header center ">
        Featured Listings
        {console.log('the items are here', state)}
      </div>

      <Container style={containerStyle}>


<Suspense fallback={<div>Loading...</div>}>

        <Grid>
          <Grid.Row columns={4}>
            {state.map((item, index) => (
              <Grid.Column key={item.description}>
                <HouseCards
                  property={item}
                  index={index}
                  image={'item.photos[0]'}
                />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>

            </Suspense>
       

      </Container>
    </div>
  )
}

export default Listings
