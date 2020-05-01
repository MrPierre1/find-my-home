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

function SearchHome () {
  const [searchagent, setsearchagent] = useState ('');
  const listStyle = {
    margin: '50px',
  };

  const handleSubmit = event => {
    // const data = state.myJsonArray
    event.preventDefault ();
    console.log ('city,', searchagent);
  };

  return (
    <React.Fragment>

      <Grid.Row
        style={{
          // margin: '-200px 0px 0px 30px',
          // margin: '0px 0px 45px 30px',
          height: '675px',
          fontSize: '20px',
          width: '70%',
          // backgroundColor:'red',
        }}
      >
        <Grid.Column>
          <div style={{margin: '0 0 0 0 '}}>
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

                margin: '0, 0, 0, 0',
                // marginTop: 'mobile' ? '1.5em' : '3em',
                color: 'white',
              }}
            >

              {/* <Container text > */}

              <h1
                style={{color: 'white', fontSize: '70px', padding: '100px 0 20px 135px'}}
              >
                Sell Your Home
              </h1>

              <form onSubmit={handleSubmit}>

                <Input
                  style={{width: '50%', marginTop: '70px', padding: '0 0 20px 135px'}}
                  size="mini"
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

          </div>
        </Grid.Column>
      </Grid.Row>

    </React.Fragment>
  );
}
function SellHome () {
  return (
    <Grid.Row>
      <Grid.Column>
        <p style={{color: 'black', fontSize: '20px', margin: '-70px 0 0 60px'}}>
          Or call <a>1-800-000-0000</a> to connect with an agent now
        </p>
        <Divider />
      </Grid.Column>
    </Grid.Row>
  );
}

function UseUs () {
  const listStyle = {
    margin: '50px',
  };
  const headerStyle = {
    fontSize: '25px',
  };

  return (
    <Grid.Row columns={2} centered>

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

            <List relaxed>
              <List.Item style={listStyle}>
                <List.Icon name="chart bar" style={{color: 'black'}} />
                <List.Content>
                  <List.Header style={headerStyle}>
                    Track your valuation and equity
                  </List.Header>

                </List.Content>
              </List.Item>
              <List.Item style={listStyle}>
                <List.Icon name="bolt" style={{color: 'black'}} />
                <List.Content>
                  <List.Header style={headerStyle}>
                    Follow neighborhood trends
                  </List.Header>

                </List.Content>
              </List.Item>
              <List.Item style={listStyle}>
                <List.Icon name="searchengin" style={{color: 'black'}} />
                <List.Content>
                  <List.Header style={headerStyle}>
                    Browse remodeling tips & inspiration
                  </List.Header>

                </List.Content>
              </List.Item>
              <List.Item style={listStyle}>
                <List.Icon name="ticket" style={{color: 'black'}} />
                <List.Content>
                  <List.Header style={headerStyle}>
                    Discover financing options
                  </List.Header>

                </List.Content>
              </List.Item>
            </List>

          </div>
        </div>

      </Grid.Column>

      <Grid.Column>

        <div
          style={{
            width: '100%',
            height: '100%',
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

function Sell (props) {
  // const [state, setState] = useContext (HouseContext);
  const {state, setState} = useContext (HouseContext);

  // const [favorite, setfavorite] = useState([])
  const [searchagent, setsearchagent] = useState ('');

  return (
    <div>
      {/* import {HouseContextProvider} from './context/HouseContext'; */}
      <HouseContextProvider>
        <div>
          {/* <SellHeader  /> */}
          <Grid>
            <SearchHome />
            <SellHome />
            <UseUs />
            <Benefit />
          </Grid>

        </div>

      </HouseContextProvider>

    </div>
  );
}
export default Sell;
