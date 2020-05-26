import React, { useState, useContext } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
import houseIcon from './../assets/homeIcon.png';
import {
  Icon,
  Header,
 
  Grid,
  Image,
 
} from 'semantic-ui-react';

import { HouseContext } from './../context/HouseContext';
import CarouselMain from './../CarouselMain';
function Map(props) {
  const { dispatch } = useContext(HouseContext);

  const [isOpen, setisOpen] = useState({
    open: false,
    index: '',
    carouselOpen: false,
    marker: [],
  });

  const handleToggleOpen = (data) => {

    if (typeof data === 'number') {
    
      setisOpen({ open: true, index: data });
    }

    if (typeof data === 'object') {

      setisOpen({ carouselOpen: true, marker: data });
    }
  };

  const handleFavorite = (marker) => {
    if (props.type) {

      dispatch({
        type: 'REMOVE_FAVORITE',
        payload: marker.address.streetAddress,
      });
    } else {
      dispatch({ type: 'FAVORITE', payload: marker.address.streetAddress });
    }
  };

  const handleToggleClose = () => {
    setisOpen({ open: false });
  };

  const HouseGoogleMap = withGoogleMap((props) => (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 35.8032, lng: -78.5661 }}>
      >{props.children}
    </GoogleMap>
  ));

  return (
    <div>
      <HouseGoogleMap
        containerElement={<div style={{ height: `600px`, width: '100%' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      >
        {props.houseData.map((marker, index) => (
          <Marker
            position={{ lat: marker.latitude, lng: marker.longitude }}
            key={index}
            icon={houseIcon}
            onClick={() => handleToggleOpen(index)}
          >
            {isOpen.open &&
            isOpen.index == index && (
              <InfoWindow
                onCloseClick={handleToggleClose}
                position={{ lat: marker.latitude, lng: marker.longitude }}
                markerData={marker}
              >
                <div>

                  <Image src={marker.photos[1]} size="medium" centered />
                  <Grid columns="equal" padded>
                    <Grid.Column width={12}>
                      <CarouselMain
                        key={marker.photos[0]}
                        propertyData={marker.photos}
                      />
                    </Grid.Column>
                    <Grid.Column
                      width={4}
                      style={{ marginTop: '5px', marginLeft: '-5px' }}
                    >
                      <a href="#" onClick={() => handleFavorite(marker)}>
                        <Icon name="heart outline" size="big" />
                      </a>
                    </Grid.Column>
                  </Grid>
                  <Grid columns={3} padded>
                    <Grid.Column>
                      <Header>Price</Header>
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
      </HouseGoogleMap>
    </div>
  );
}
export default React.memo(Map);
