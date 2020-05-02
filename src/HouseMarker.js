
import React from "react";
import { Marker } from "react-google-maps";
import houseIcon from "./assets/homeIcon.png";

import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    Icon, 
    List,
    Menu,
    Segment,
  } from 'semantic-ui-react'

export default class HouseMarker extends React.Component {

    
  render(){
    return(
        <Marker
          position={this.props.houseAddress}
          icon={houseIcon}
        >
         
        </Marker>
    );
  }
}