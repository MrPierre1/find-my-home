import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import HouseMarker from "./HouseMarker";

const HouseMap = withScriptjs(withGoogleMap((props) =>{

  const markers = props.locations.map( location => 

                <HouseMarker
                    key={location[0]}
                    // locations={doctor}
                    houseAddress={{lat: location[1], lng: location[2]}}
                  >
                        {console.log('location', location)}
                  </HouseMarker>
                  );
                
                  
  return (
      <GoogleMap
        defaultZoom={9}
        // center={ { lat:  42.3601, lng: -71.0589 } }
        center={{lat: 35.8032, lng: -78.5661}}
        >
        {markers}
      </GoogleMap>
    );
  }
))

export default HouseMap;