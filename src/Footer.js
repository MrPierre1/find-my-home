import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
// import HomepageLayout from './HomePageLayout';

function Footer () {
  const anchorStyle = {
    color: 'white',
  };
  return (
    <div className="Footer">
      <Segment inverted vertical style={anchorStyle}>
        <Container>
          <Grid divided inverted stackable columns="equal">
            <Grid.Row style={{margin: '20px 0px 0 180px'}}>
              <Grid.Column>
                <a href="https://twitter.com/explore" style={anchorStyle}>
                  <Icon.Group size="large">
                    <Icon name="twitter" />
                    <Icon corner name="add" />
                  </Icon.Group>

                  Add on Twitter

                </a>

              </Grid.Column>
              <Grid.Column>

                <a href="https://github.com/MrPierre1/" style={anchorStyle}>
                  <Icon.Group size="large">
                    <Icon name="github" />
                    <Icon corner name="add" />
                  </Icon.Group>
                  Add on Github

                </a>

              </Grid.Column>
              <Grid.Column>
                <a href="https://youtube.com" style={{color: 'white'}}>

                  <Icon.Group size="large">
                    <Icon name="youtube play" />
                    <Icon corner name="add" />
                  </Icon.Group>
                  Add on Youtube

                </a>

              </Grid.Column>

            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;
