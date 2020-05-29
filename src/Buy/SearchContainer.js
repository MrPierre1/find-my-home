import React, { useState, useContext } from 'react';
import './../App.css';

import { Container, Input, Responsive, Dropdown } from 'semantic-ui-react';
import backgroundImage from './../assets/test3.jpg';
import { HouseContext } from '../context/HouseContext';

function SearchContainer (props) {
  const searchStyle = {
    background: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    height: '550px',
    padding: '140px',

  };

  const submitStyle = {
    marginTop: '30px',
    color: 'white',
    backgroundColor: 'green',
  };

  const headerStyle = {
    color: 'white',
    paddingTop: '30px',
  };

  const bedroomsOptions = [
    {
      key: '1',
      text: '1',
      value: '1',
    },
    {
      key: '2',
      text: '2',
      value: '2',
    },
    {
      key: '3',
      text: '3',
      value: '3',
    },
    {
      key: '4',
      text: '4',
      value: '4',
    },
    {
      key: '5',
      text: '5',
      value: '5',
    },
    {
      key: '6',
      text: '6',
      value: '6',
    },
  ];

  let [keywords, setkeywords] = useState([]);

  const [price, setprice] = useState('');
  const [bedrooms, setbedrooms] = useState('');

  const { state, setState } = useContext(HouseContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    var result = state;

    if (bedrooms) {
    
      result = result.filter(function(house, i) {
        return house.bedrooms == bedrooms;
      });
    }

    if (price) {
      result = result.filter(function(house, i) {
        return house['price'] >= price;
      });
 
    }

    if (keywords.length) {
      keywords = keywords.toLowerCase();
      result = result.filter(function(house, i) {
        var findDesc = house['description'].toLowerCase();
     
        if (findDesc.includes(keywords))
        return findDesc.includes(keywords);
      });
    }

    props.stateChange(result);

  };

  return (
    <Responsive>
      <div style={searchStyle}>
        <form onSubmit={handleSubmit}>
          <Container text className="searchContainer">
            <div>
              <div style={headerStyle} className="ui huge header ">
                Property Search Just Got Easier
              </div>
              <div className="ui three column grid">
                <div className="row">
                  <div className="column">
                    <div className="ui focus input">
                      <Input
                        className="keytext"
                        type="text"
                        value={keywords}
                        onChange={(e) => setkeywords(e.target.value)}
                        placeholder="Keywords (Pool, Garage, Etc.)"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="ui two column grid">
                <div className="row">
                  <div className="column">
                    <Dropdown
                      name="bedrooms"
                      size="mini"
                      onChange={(e, data) => setbedrooms(Number(data.value))}
                      placeholder="Bedrooms(Min)"
                      fluid
                      clearable
                      selection
                      options={bedroomsOptions}
                    />
                  </div>

                  <div className="ui focus input column">
                    <Input
                      type="number"
                      size="mini"
                      value={price}
                      onChange={(e, data) => setprice(e.target.value)}
                      placeholder="Max Price (Any)"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                style={submitStyle}
                className="ui fluid button"
              >
                Find My Home
              </button>
            </div>
          </Container>
        </form>
      </div>
    </Responsive>
  );
}

export default React.memo(SearchContainer);
