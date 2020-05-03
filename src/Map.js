import React, { useState, useContext } from 'react'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  withScriptjs,
} from 'react-google-maps'
import houseIcon from './assets/homeIcon.png'
import image from './assets/test2.jpg'
import image2 from './assets/test2.jpg'
import image3 from './assets/test2.jpg'
import {
 
  Grid,
  
  Image,
 
  Segment,
} from 'semantic-ui-react'

import {HouseContext} from './context/HouseContext'
import CarouselMain from './CarouselMain'
function Map() {
  var locations = [
    ['My House', 35.839765, -78.558001, 4],
    ['Shukita', 35.86441, -78.572846, 5],
    ['Cronulla', 35.890648, -78.549513, 3],
    // ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
    // ['Maroubra Beach', -33.950198, 151.259302, 1]
  ]

  const {state, setState }= useContext(HouseContext)


  const [isOpen, setisOpen] = useState(false)
  const [openWindow, setopenWindow] = useState([])
  const [showInfoIndex, setshowInfoIndex] = useState('')
  const [showhouseImage, setshowhouseImage] = useState(false)
  const showCarouselMain = () => {
    console.log('I can seeit')
    setshowhouseImage(true)
  }
  const handleToggleOpen = (mark) => {
    console.log('makr is mark', mark)
    setisOpen(true)
    setopenWindow(mark)
    setshowInfoIndex(mark)
  }

  const handleToggleClose = () => {
    setisOpen(false)
  }

  const HouseGoogleMap = withGoogleMap((props) => (
    <GoogleMap
      // defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
      defaultZoom={12}
      defaultCenter={{ lat: 35.8032, lng: -78.5661 }}
    >
      >{props.children}
    </GoogleMap>
  ))
  return (
    <div>
      <HouseGoogleMap
        containerElement={<div style={{ height: `600px`, width: '100%' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      >
        {locations.map((marker, index) => (
          <Marker
            position={{ lat: marker[1], lng: marker[2] }}
            key={marker[0]}
            icon={houseIcon}
            label={marker[0]}
            onClick={() => handleToggleOpen(index)}
          >
            {isOpen && showInfoIndex == index && (
              <InfoWindow
                onCloseClick={handleToggleClose}
                position={{ lat: openWindow[1], lng: openWindow[2] }}
              >
                {/* {locations[1]}
{console.log('thisstudef exist', openWindow[2], typeof openWindow[3])} */}
               <Segment>
    {/* <Image src={image} size='medium' centered /> */}
    <Image
    src={image}
    // as='a'
    size='medium'
    // href='http://google.com'
    // target='_blank' 
    centered
    onClick={showCarouselMain}
  />
    <Grid columns={2} padded>
      <Grid.Column>
       <p> Price:  $5000</p>
      </Grid.Column>
      <Grid.Column>
      <p>address: 1234 asdah</p>
      </Grid.Column>
    </Grid>
    </Segment>
              </InfoWindow>
            )}
          </Marker>
        ))}

{/* {showhouseImage && state.map((item, index) =>{
    console.log('IOtems', item)
    // <CarouselMain />
})  } */}

      </HouseGoogleMap>
    </div>
  )
}
export default Map
