import React, {useContext, useState} from 'react';
import './App.css';
import HomepageLayout from './HomePageLayout';
import Footer from './Footer';
import SearchContainer from './SearchContainer';
import Listings from './Listings';
import {HouseContextProvider} from './context/HouseContext';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';

import Buy from './Buy';
import Sell from './Sell';
import AppMenu from './AppMenu';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import MyHomes from './Sell';
// import myJsonArray from './Raleigh';

import test from './assets/test4.jpg';

function SellHeader () {
  const [searchagent, setsearchagent] = useState ('');

  const handleSubmit = event => {
    // const data = state.myJsonArray
    event.preventDefault ();
    console.log ('city,', searchagent);
  };

  return (
    <div>

      <div>
        <div
          as="h1"
          inverted="true"
          style={{
            width: '100%',
            height: '550px',
            // display: 'inline-block',
            // opacity: 0.7,
            backgroundImage: `url(${test})`,
            backgroundSize: 'cover',
            fontSize: 'mobile' ? '2em' : '4em',
            fontWeight: 'normal',

            marginBottom: 0,
            // marginTop: 'mobile' ? '1.5em' : '3em',
            color: 'white',
          }}
        >
          <h1 style={{color: 'white', padding: '150px', fontSize: '90px'}}>
            Sell Your Home
          </h1>l

          <form onSubmit={handleSubmit}>

            {/* <Container text > */}

            <div>
              <Grid padded>

                <Grid.Row
                  style={{
                    margin: '-200px 0px 0px 30px',
                    fontSize: '20px',
                    width: '70%',
                  }}
                >
                  <Grid.Column>

                    <Input
                      style={{width: '70%'}}
                      size="big"
                      fluid
                      value={searchagent}
                      onChange={e => setsearchagent (e.target.value)}
                      placeholder="Enter Address"
                      action={
                        <Button type="submit" className="ui  button">
                          Find My Home
                        </Button>
                      }
                    />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column>

                    
                    <div
                  
                      style={{
                        margin: '90px 90px',
                        width: '100%',
                        height: '500px'
                        // border: '0',
                        // borderStyle: 'none',
                      }}
                  
                    >

                      <Image src={test} size="large" floated="right" />
                      
                     
                    </div>


                    </Grid.Column>
                  <Grid.Column>

                    <div
                     
                      style={{
                        margin: '90px 0',
                        width: '100%',
                        border: '0',
                        borderStyle: 'none',
                      }}
                      size="big"
                    >

                      
                      <div >

                        <List>
                          <List.Item>
                            <List.Icon name="target" style={{color: 'black'}} />
                            <List.Content>
                              <List.Header>
                                Agent pairing technology
                              </List.Header>
                              <List.Description>
                                Our Real Estate agent pairing technology connects you with agents in real time for your selling an buying needs.
                              </List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon
                              name="money bill alternate"
                              style={{color: 'black'}}
                            />
                            <List.Content>
                              <List.Header>Time-saving data</List.Header>
                              <List.Description>
                                Our proprietary pairing algorithm is base on 20 years of transaction data pairing home sellers with selling agents.
                              </List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name="chat" style={{color: 'black'}} />
                            <List.Content>
                              <List.Header>Personalized support</List.Header>
                              <List.Description>
                                Our team of experts will work with you until you've found the right selling agent
                              </List.Description>
                            </List.Content>
                          </List.Item>

                        </List>

                      </div>
                    </div>
                  

                    </Grid.Column>


              
                </Grid.Row>

              </Grid>

            </div>
            {/* </Container> */}
          </form>
        </div>
      </div>

    </div>
  );
}

export default SellHeader;
