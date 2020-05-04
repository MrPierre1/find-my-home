import React, { useState, useContext, useEffect } from 'react'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import houseIcon from './assets/homeIcon.png'
import { Icon, Header, Container,  Grid, Image, Segment } from 'semantic-ui-react'

import { HouseContext } from './context/HouseContext'
import CarouselMain from './CarouselMain'
function Map(props) {
  // const { state, setState } = useContext(HouseContext)
  const {state, dispatch} = useContext(HouseContext)

  const [isOpen, setisOpen] = useState({ open: false, index: '', carouselOpen:false, marker: [] })
  // const [carouselToggle, setcarouselToggle] = useState(false)

  const handleToggleOpen = (data) => {
  
    console.log('data', data)

    if(typeof data === 'number'){
  console.log('data is number', data, typeof data)
    setisOpen({ open: true, index: data })
  }


  if(typeof data === 'object'){
    console.log('data is object', typeof data)
      setisOpen({ carouselOpen: true, marker: data })
    }


  
  }


  const handleFavorite = (marker) => {
    if(props.type){
      console.log('removing a facoere beacuse type is trye', props.type)
     dispatch({ type: "REMOVE_FAVORITE", payload: marker.address.streetAddress  });
   
    }
    else{
      dispatch({ type: "FAVORITE", payload: marker.address.streetAddress  });
   
    }
     
   
   
   };


  // const handleCarouselToggle = () =>{
  //   console.log('the carousel was clicked')
  //   setcarouselToggle(true)
  // }

  const handleToggleClose = () => {
    setisOpen({ open: false })

  }

  const HouseGoogleMap = withGoogleMap((props) => (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 35.8032, lng: -78.5661 }}>
      >{props.children}
    </GoogleMap>
  ))

  // useEffect(() => {
  //   console.log('propsad ada', props.houseData)
  //   return () => {
      
  //   }
  // }, [])
  return (
    <div>
      <HouseGoogleMap
        containerElement={<div style={{ height: `600px`, width: '100%' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      >
        {props.houseData.map((marker, index) => (
          <Marker
            position={{lat: marker.latitude, lng: marker.longitude}}
            key={index}
            icon={houseIcon}
            onClick={() => handleToggleOpen(index)}
          >
            {isOpen.open && isOpen.index == index && (
              <InfoWindow
                onCloseClick={handleToggleClose}
                position={{lat: marker.latitude, lng: marker.longitude}}
                markerData={marker}
              >
                <div>
                  {console.log('data exist someer', isOpen, marker.photos[0])}
                  
                  <Image
                    src={marker.photos[1]}
                    size="medium"
                    centered
                    // onClick={() => handleToggleOpen(marker)}
                  />
                    <Grid columns="equal" padded>
              <Grid.Column width={12}>
                <CarouselMain key={marker.photos[0]} propertyData={marker.photos} />
              </Grid.Column>
              <Grid.Column
                width={4}
                style={{ marginTop: '5px', marginLeft: '-5px' }}
              >
                 <a href="#" onClick={() => handleFavorite (marker)}>
                  <Icon name="heart outline" size="big" />
                </a>
              </Grid.Column>
            </Grid>
                  <Grid columns={3} padded>
                    <Grid.Column>
                      <Header>
                        Price
                        </Header>
            <p>${marker.price}</p>
                    </Grid.Column>
                    <Grid.Column>
                    <Header>
                        <p>Address</p>
                        </Header>
            <p>{marker.address.streetAddress}</p>
                    </Grid.Column>
                    <Grid.Column>
                    <Header>
                        <p>Sqft</p>
                        </Header>
            <p>{marker.livingArea}</p>
                    </Grid.Column>
                  </Grid>
                </div>
              </InfoWindow>
            )}



          </Marker>
        ))}


{/* {isOpen.carouselOpen  &&  console.log('its open herei',isOpen)} */}
{/* 
{isOpen.carouselOpen  &&  <CarouselMain key={isOpen.marker.photos[0]} propertyData={isOpen.marker.photos} />} */}


      </HouseGoogleMap>
    </div>
  )
}
export default Map
