import React, { Suspense } from 'react';
import './../App.css';

import { Container, Grid } from 'semantic-ui-react';

const HouseCards = React.lazy(() => import('./../HouseCards'));

function Listings(props) {
  const containerStyle = {
    margin: '20px',
  };

  const headerStyle = {
    marginTop: '20px',
    textAlign: 'center',
  };

  return (
    <div className="">
      <div style={headerStyle} className="ui huge header center ">
        Featured Listings ( {props.houseData.length} Houses )
      </div>

      <Container style={containerStyle}>
        <Suspense fallback={<div>Loading...</div>}>
          <Grid>
            <Grid.Row columns={4}>
              {props.houseData.map((item, index) => (
                <Grid.Column key={item.photos[0]} className="housecards">
                  {item.photos[0].indexOf(
                    'https://maps.googleapis.com/maps/api/staticmap?'
                  ) >= 0 ? (
                    ''
                  ) : (
                    <HouseCards
                      property={item}
                      index={index}
                      image={item.photos[0]}
                    />
                  )}
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </Suspense>
      </Container>
    </div>
  );
}

export default React.memo(Listings);
