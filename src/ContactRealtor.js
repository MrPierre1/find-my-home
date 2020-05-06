import React, {useState} from 'react';
import './App.css';
// import {HouseContext} from './context/HouseContext';

// import HouseCards from './HouseCards'

import {
  Button,
  Divider,
  Grid,
  
  Image,
  Modal, 
  Header,
  List,
  
} from 'semantic-ui-react';

function ContactRealtor (props) {

    const [isOpen, setisOpen] = useState(props.status)


    return (
      <div>
      
        {/* <Button onClick={this.show('blurring')}>Blurring</Button> */}
        <Button onClick={() => setisOpen(true)}>
            Blurring
            {console.log(isOpen, 'props status', props.status)}
            
            </Button>


        <Modal dimmer={'blurring'} open={isOpen} onClose={() => setisOpen(false)}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size='medium'
              src='https://react.semantic-ui.com/images/avatar/large/rachel.png'
            />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>
                We've found the following gravatar image associated with your
                e-mail address.
              </p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={() => setisOpen(false)}>
              Nope
            </Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Yep, that's me"
              onClick={() => setisOpen(false)}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
}

export default ContactRealtor