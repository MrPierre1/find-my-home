import React, {useState, useContext} from 'react';
import './App.css';
import {HouseContext} from './context/HouseContext';

// import HouseCards from './HouseCards'

import {
  Button,
  Container,
  Card,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Input,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Dropdown,
} from 'semantic-ui-react';

import CarouselMain from './CarouselMain';
import SellHeader from './SellHeader';
import {HouseContextProvider} from './context/HouseContext';
import test from './assets/test4.jpg';
import image1 from './assets/mon125009.jpg';
import image2 from './assets/family-at-new-home.jpg';



function MorgageRates () {
  return (
    <Grid.Row columns={3} centered style={{height:'500px'}}>


<Grid.Column style={{backgroundColor:'red'}}>

</Grid.Column>
      <Grid.Column style={{backgroundColor:'blue'}}>

      </Grid.Column>

      <Grid.Column style={{backgroundColor:'green'}}>

      </Grid.Column>

    </Grid.Row>
  );
}

function Benefit () {
  const headerStyle = {
    fontSize: '25px',
  };
  const descriptionStyle = {
    margin: '15px',
    fontSize: '20px',
    lineHeight: '30px',
  };

  return (
    <Grid.Row columns={2}>

      <Grid.Column>

        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >

          <Image
            src={image1}
            size="large"
            floated="right"
            style={{
              width: '100%',
              height: '100%',
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
                  <List.Header style={headerStyle}>
                    Agent pairing technology
                  </List.Header>
                  <List.Description style={descriptionStyle}>
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
                  <List.Header style={headerStyle}>
                    Time-saving data
                  </List.Header>
                  <List.Description style={descriptionStyle}>
                    Our proprietary pairing algorithm is base on 20 years of transaction data pairing home sellers with selling agents.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="chat" style={{color: 'black'}} />
                <List.Content>
                  <List.Header style={headerStyle}>
                    Personalized support
                  </List.Header>
                  <List.Description style={descriptionStyle}>
                    Our team of experts will work with you until you've found the right selling agent
                  </List.Description>
                </List.Content>
              </List.Item>

            </List>

          </div>
        </div>

      </Grid.Column>

    </Grid.Row>
  );
}

function Morgages (props) {
  const [state, setState] = useContext (HouseContext);
  // const [favorite, setfavorite] = useState([])
  const [searchagent, setsearchagent] = useState ('');

  return (
    <div>
      {/* import {HouseContextProvider} from './context/HouseContext'; */}
      <HouseContextProvider>
        <div>
          {/* <SellHeader  /> */}
          <Grid>
            {/* <SearchHome /> */}
            {/* <SellHome /> */}
            <MorgageRates />
            <Benefit />
          </Grid>

        </div>

      </HouseContextProvider>

    </div>
  );
}
export default Morgages;
