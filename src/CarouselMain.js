import React, { useEffect } from 'react';

import 'pure-react-carousel/dist/react-carousel.es.css';

import { Button, Divider, Grid, Image, Modal } from 'semantic-ui-react';

function CarouselMain(props) {
  const submitStyle = {
    color: 'white',
    backgroundColor: 'navy',
  };

  return (
    <Modal
      trigger={
        <Button style={submitStyle} className="ui fluid button">
          More Info
        </Button>
      }
      closeIcon
    >
      <Modal.Header>{}</Modal.Header>

      <Modal.Content image>
        <Grid centered columns={1}>
          {props.propertyData.map((item, index) => (
            <Grid.Column key={item}>
              <Divider hidden />
              <Image src={item} size="massive" />
            </Grid.Column>
          ))}
        </Grid>
      </Modal.Content>
    </Modal>
  );
}

export default CarouselMain;
