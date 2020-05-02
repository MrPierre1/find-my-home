import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import houseIcon from './assets/homeIcon.png'
 function Map() {

    var locations = [
        ['My House', 35.839765, -78.558001, 4],
        ['Shukita', 35.864410, -78.572846, 5],
        ['Cronulla', 35.890648, -78.549513, 3],
        // ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
        // ['Maroubra Beach', -33.950198, 151.259302, 1]
      ]

   
   const HouseGoogleMap = withGoogleMap(props => (
      <GoogleMap
        // defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 12 }
        defaultCenter={{lat: 35.8032, lng: -78.5661}}
        >
      >
        {props.children}
      </GoogleMap>

   ));
   return(
      <div>
        <HouseGoogleMap
          containerElement={ <div style={{ height: `600px`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        >
          
          {locations.map(marker => (
    <Marker
      position={{ lat: marker[1], lng: marker[2] }}
      key={marker[0]}
      icon={houseIcon}
    />
))}


            </HouseGoogleMap>
      </div>
   );
};
export default Map;