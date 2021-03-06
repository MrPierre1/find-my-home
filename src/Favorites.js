import React, {useContext} from 'react';
import './App.css';
import {HouseContext} from './context/HouseContext';
import {Grid, Header} from 'semantic-ui-react';
import HouseCards from './HouseCards';

function Favorites (props) {
  const {state, setState} = useContext (HouseContext);
  const favType = true;
  const favList = state.filter (item => item.favorite);

  return (
    <div className="Popup">
      <Grid columns="equal">
    

        <Grid.Row columns={4}>
          {favList.length
            ? favList.map ((item, index) => (
                <Grid.Column key={item.description}>
                  <HouseCards
                    property={item}
                    index={index}
                    image={'item.photos[0]'}
                    type={favType}
                  />
                </Grid.Column>
              ))
            : <div style={{height: '200px', margin: '200px'}}>

                <Header as="h2">

                  <Header.Content>
                    There are no favorites in your list, Go back to
                    
                    <code> <a href="/buy"> Buy </a></code>
                   
                    and click the heart icon
                  </Header.Content>
                </Header>
              </div>}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Favorites;
