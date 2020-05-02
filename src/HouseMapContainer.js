// DoctorMapContainer.js

import React from "react";
import HouseMap from "./HouseMap";

 var locations = [
        ['My House', 35.898870, -78.551190, 4],
        ['Shukita', 39.182072, -77.268356, 5],
        // ['Cronulla Beach', -34.028249, 151.157507, 3],
        // ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
        // ['Maroubra Beach', -33.950198, 151.259302, 1]
      ]


export default class HouseMapContainer extends React.Component {

	render() {
		return (
			<HouseMap
				locations={locations}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCy3oIeO9TcZ8_SpS2qZDGbxU6-WcxY4U0&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `800px`, width: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}