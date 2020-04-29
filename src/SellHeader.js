import React, {useContext, useState} from 'react';
import './App.css';
// import HomepageLayout from './HomePageLayout';
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
import image1 from './assets/mon125009.jpg';
import image2 from './assets/family-at-new-home.jpg';



function SellHeader () {
  const [searchagent, setsearchagent] = useState ('');
  const listStyle = {
  margin:'50px',
  }

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

          {/* <Container text > */}

          <div>
            <Grid>

              <Grid.Row
                style={{
                  margin: '-200px 0px 0px 30px',
                  fontSize: '20px',
                  width: '70%',
                }}
              >
                <Grid.Column>
                <div  style={{ margin: '0 0 170px 0 '}}>

                   <h1
                    style={{color: 'white', margin: '350px 0 50px 0 ', fontSize: '90px'}}
                  >
                    Sell Your Home
                  </h1>

                  <form onSubmit={handleSubmit}>

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

                 
                  </form>
                </div>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                  <Grid.Column>
                    <p  style={{color: 'black', fontSize: '20px', margin:'-20px 0 0 60px'}}>Or call <a>1-800-000-0000</a> to connect with an agent now</p>
                  </Grid.Column>
                </Grid.Row>






              <Grid.Row columns={2}>

                <Grid.Column >

                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      // margin: '90px auto 0 0',
                      // border: '0',
                      // borderStyle: 'none',
                    }}
                  >

                    <Image
                      src={image1}
                      size="large"
                      floated="right"
                      style={{
                        width: '100%',
                        height: '100%',
                        // margin: '90px auto 0 0',

                        // border: '0',
                        // borderStyle: 'none',
                      }}
                    />
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

                    <div>

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






              <Grid.Row columns={2} centered>
      
                <Grid.Column>

                  <div
                    style={{
                      margin: '90px 0',
                      width: '100%',
                      border: '0',
                      borderStyle: 'none',
                    }}
                    size="big">

                    <div >

                      <List relaxed >
                        <List.Item  style={listStyle}>
                          <List.Icon name="chart bar" style={{color: 'black'}} />
                          <List.Content>
                            <List.Header>
                            Track your valuation and equity
                            </List.Header>
                           
                          </List.Content>
                        </List.Item>
                        <List.Item style={listStyle}>
                          <List.Icon
                            name="bolt"
                            style={{color: 'black'}}
                          />
                          <List.Content>
                            <List.Header>Follow neighborhood trends</List.Header>
                            
                          </List.Content>
                        </List.Item>
                        <List.Item style={listStyle}>
                          <List.Icon name="searchengin" style={{color: 'black'}} />
                          <List.Content>
                            <List.Header>Browse remodeling tips & inspiration</List.Header>
                           
                          </List.Content>
                        </List.Item>
                        <List.Item style={listStyle}>
                          <List.Icon name="ticket" style={{color: 'black'}} />
                          <List.Content>
                            <List.Header>Discover financing options</List.Header>
                           
                          </List.Content>
                        </List.Item>
                      </List>

                    </div>
                  </div>

                </Grid.Column>

                <Grid.Column >

<div
  style={{
    width: '100%',
    height: '100%',
    // margin: '90px auto 0 0',
    // border: '0',
    // borderStyle: 'none',
  }}
>

  <Image
    src={image2}
    size="large"
    floated="right"
    style={{
      width: '100%',
      height: '100%',
      // margin: '90px auto 0 0',

      // border: '0',
      // borderStyle: 'none',
    }}
  />
</div>

</Grid.Column>

              </Grid.Row>
            </Grid>

          </div>
          {/* </Container> */}
          {/* </form> */}
        </div>
      </div>

    </div>
  );
}

export default SellHeader;
