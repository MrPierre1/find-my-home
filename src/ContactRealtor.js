import React, { useState } from 'react'
import './App.css'
import realtor1 from './assets/realtor1.jpg'
import realtor2 from './assets/realtor2.jpg'
import realtor3 from './assets/realtor3.jpeg'

import {
  Button,
  Divider,
  Form,
  Icon,
  Image,
  Message,
  Modal,
  Header,
  List,
} from 'semantic-ui-react'

function ContactRealtor(props) {
  const [isOpen, setisOpen] = useState(props.status)
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [success, setsuccess] = useState(false)

  const handleSubmit = (data) => {
    setsuccess(true)
    setTimeout(() => {
      setisOpen(false)
      setsuccess(false)
    }, 3000)
  }

  return (
    <div>
      <div>
        <Modal
          dimmer={'blurring'}
          size="large"
          open={isOpen}
          onClose={() => setisOpen(false)}
        >
          <Modal.Header>Contact Agents</Modal.Header>
          <Modal.Content>
            <div className="address">
              <Header as="h2">Your Address </Header>
              <List divided>
                <List.Item>
                  <List.Content>
                    <Icon name="address card" size="large" /> {props.address}
                    {success && (
                      <Message positive floating color="green" size="massive">
                        <Message.Header>Thank You, {name}</Message.Header>
                        <p>A realtor will be in contact with you shortly</p>
                        <i>The page will close in 3s</i>
                      </Message>
                    )}
                  </List.Content>
                </List.Item>
              </List>
            </div>
            <Divider></Divider>
            <div className="agentlist">
              <Header as="h2">Agents in your area </Header>
              <List divided horizontal size="massive">
                <List.Item>
                  <Image avatar src={realtor1} />
                  <List.Content>
                    <List.Header>Lana Kay</List.Header>
                    Coldwell Banker
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src={realtor2} />
                  <List.Content>
                    <List.Header>Christian Rocha</List.Header>
                    Remax
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src={realtor3} />
                  <List.Content>
                    <List.Header>Matthew Gates</List.Header>
                    Keller Williams
                  </List.Content>
                </List.Item>
              </List>
            </div>
            <Divider></Divider>
            <Modal.Description>
              <Header style={{ margin: '20px 0px' }}>Contact Agents</Header>
              <Form onSubmit={handleSubmit}>
                <Form.Field>
                  <label> Name</label>
                  <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Phone</label>
                  <input
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                  />
                </Form.Field>
                <Modal.Actions>
                  <Button primary type="submit">
                    Connect with an agent
                  </Button>
                  <Button color="black" onClick={() => setisOpen(false)}>
                    Cancel
                  </Button>
                </Modal.Actions>
              </Form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    </div>
  )
}

export default ContactRealtor
