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


                <Grid.Row style={{backgroundColor:'red'}}>
                  <Grid.Column>
  <Segment style={{backgroundColor:'black', margin:'0px', width:'100%'}} size='massive'>
    <Image src={test} size='large' floated='right' />
    <p>
      Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
      facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
      referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
      electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
      ex natum rebum iisque.
    </p>
  </Segment>
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
