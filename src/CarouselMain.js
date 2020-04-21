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
import test from './assets/test2.jpg'


function CarouselMain (){
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
      
    <CarouselProvider
    visibleSlides={1}
    totalSlides={8}
    step={1}
    naturalSlideWidth={400}
    naturalSlideHeight={500}
    // hasMasterSpinner
    infinite
  >
    <h2 className=''>{'Infinite Carousel'}</h2>
    <p>
      A carousel that returns to the first slide if the user clicks the Next
      button while on the last slide and returns to the last slide if the user
      clicks the Back button while on the first slide. Also behaves similarly
      with swiping left on the first image or right on the last image.
    </p>
    <Slider style={imgStyle}>
      <Slide index={0}>
      <Image  src="https://lorempixel.com/800/800/cats/0" />
        {/* <ImageWithZoom src="https://commons.wikimedia.org/wiki/File:Makari_the_Tiger.jpg" /> */}
      </Slide>
      <Slide index={1}>
      <Image  src={require('./assets/test1.jpg')}/>
      </Slide>
      <Slide index={2}>
      <Image  style={imgStyle}src="https://lorempixel.com/800/800/cats/0" />
        {/* <ImageWithZoom src="https://commons.wikimedia.org/wiki/File:Makari_the_Tiger.jpg" /> */}
      </Slide>
      <Slide index={3}>
      <Image  src={require('./assets/test1.jpg')} />
      </Slide>
      <Slide index={4}>
      <Image  src={require('./assets/test2.jpg')} />
      </Slide>
      <Slide index={5}>
      <Image src={require('./assets/test3.jpg')} />
      </Slide>
      <Slide index={6}>
      <Image src={require('./assets/test4.jpg')} />
      </Slide>
      <Slide index={7}>
      <Image src={require('./assets/test2.jpg')} />
      </Slide>
    </Slider>
    <ButtonFirst>First</ButtonFirst>
    <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
    <ButtonLast>Last</ButtonLast>
    <DotGroup />
  </CarouselProvider>

    
    </Modal.Content>
  </Modal>


      
    );
}

export default CarouselMain