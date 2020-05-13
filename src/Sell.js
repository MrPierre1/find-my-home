import React, { useState } from 'react';
import './App.css';

import { Divider, Grid, Image, List } from 'semantic-ui-react';

import { HouseContextProvider } from './context/HouseContext';
import test from './assets/test4.jpg';
import image1 from './assets/mon125009.jpg';
import image2 from './assets/family-at-new-home.jpg';
import SearchAutoComplete from './SearchAutoComplete';

function SearchHome() {
  const [searchagent, setsearchagent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('city,', searchagent);
  };

  return (
    <React.Fragment>
      <Grid.Row
        style={{
          height: '675px',
          fontSize: '20px',
          width: '70%',
        }}
      >
        <Grid.Column>
          <div style={{ margin: '0 0 0 0 ' }}>
            <div
              as="h1"
              inverted="true"
              style={{
                width: '100%',
                height: '550px',

                backgroundImage: `url(${test})`,
                backgroundSize: 'cover',
                fontSize: 'mobile' ? '2em' : '4em',
                fontWeight: 'normal',

                margin: '0, 0, 0, 0',

                color: 'white',
              }}
            >
              <h1
                style={{
                  color: 'white',
                  fontSize: '70px',
                  padding: '100px 0 20px 135px',
                }}
              >
                Sell Your Home
              </h1>

              <SearchAutoComplete />
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>
    </React.Fragment>
  );
}
function SellHome() {
  return (
    <Grid.Row>
      <Grid.Column>
        <p
          style={{ color: 'black', fontSize: '20px', margin: '-70px 0 0 60px' }}
        >
          Or call <a href="#">1-800-000-0000</a> to connect with an agent now
        </p>
        <Divider />
      </Grid.Column>
    </Grid.Row>
  );
}

function UseUs() {
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
                <List.Icon name="chart bar" style={{ color: 'black' }} />
                <List.Content>
                  <List.Header style={headerStyle}>
                    Track your valuation and equity
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item style={listStyle}>
                <List.Icon name="bolt" style={{ color: 'black' }} />
                <List.Content>
                  <List.Header style={headerStyle}>
                    Follow neighborhood trends
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item style={listStyle}>
                <List.Icon name="searchengin" style={{ color: 'black' }} />
                <List.Content>
                  <List.Header style={headerStyle}>
                    Browse remodeling tips & inspiration
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item style={listStyle}>
                <List.Icon name="ticket" style={{ color: 'black' }} />
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
            }}
          />
        </div>
      </Grid.Column>
    </Grid.Row>
  );
}

function Benefit() {
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
                <List.Icon name="target" style={{ color: 'black' }} />
                <List.Content>
                  <List.Header style={headerStyle}>
                    Agent pairing technology
                  </List.Header>
                  <List.Description style={descriptionStyle}>
                    Our Real Estate agent pairing technology connects you with
                    agents in real time for your selling an buying needs.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon
                  name="money bill alternate"
                  style={{ color: 'black' }}
                />
                <List.Content>
                  <List.Header style={headerStyle}>
                    Time-saving data
                  </List.Header>
                  <List.Description style={descriptionStyle}>
                    Our proprietary pairing algorithm is base on 20 years of
                    transaction data pairing home sellers with selling agents.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="chat" style={{ color: 'black' }} />
                <List.Content>
                  <List.Header style={headerStyle}>
                    Personalized support
                  </List.Header>
                  <List.Description style={descriptionStyle}>
                    Our team of experts will work with you until you've found
                    the right selling agent
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

function Sell(props) {
  return (
    <div>
      <HouseContextProvider>
        <div>
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
