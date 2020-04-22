import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonFirst, ButtonLast, ButtonNext,
    DotGroup, ImageWithZoom, } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Modal,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'

function CarouselMain (props){
  const imgStyle = {
    width:'100%', 
    height: '50%',
    objectFit:'cover', 
  }
  const submitStyle = {
    marginTop: '30px',
    color: 'white',
    backgroundColor: 'navy',
  }

    return (
        
        <Modal trigger={<Button style={submitStyle} className="ui fluid button" >More Info</Button>} closeIcon>
    <Modal.Header>{'Select a Photo'}</Modal.Header>
    <Modal.Content image>
    
    <Grid centered columns={1}>
    {props.propertyData.map((item, index) => ( 
    <Grid.Column key={item} >
      {/* <Image src={item} />
       */}
         <Divider hidden />
    <Image src={item} size='massive' />
    </Grid.Column>
      ))} 
      
      </Grid>

    
    </Modal.Content>
  </Modal>


      
    );
}

export default CarouselMain