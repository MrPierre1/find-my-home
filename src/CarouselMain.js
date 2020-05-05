import React, {useEffect} from 'react';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonFirst, ButtonLast, ButtonNext,
//     DotGroup, ImageWithZoom, } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import {
    Button,

    Divider,
    Grid,
    
    Image,
   
    Modal,
   
  } from 'semantic-ui-react'

function CarouselMain (props){
  
  const submitStyle = {
    // marginTop: '30px',
    color: 'white',
    backgroundColor: 'navy',
  }
  useEffect(() => {
    console.log('props documented', props)
    return () => {
      
    }
  }, [])

    return (
        
        <Modal trigger={<Button style={submitStyle} className="ui fluid button" >More Info</Button>} closeIcon>
    <Modal.Header>{}</Modal.Header>
    {console.log('get it here data',props.propertyInfo)}
    
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