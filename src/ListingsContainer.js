import React, { useState } from 'react';
import './App.css';

import Listings from './Listings';

function ListingsContainer() {
  const [showCarousel, setshowCarousel] = useState(false);

  const submitStyle = {
    marginTop: '30px',
    color: 'white',
    backgroundColor: 'navy',
  };
  const headerStyle = {
    paddingTop: '50px',
  };

  function toggleCarousel() {
    console.log('nadia is sleepy, night night nigga', showCarousel);
    setshowCarousel(!showCarousel);
  }

  return (
    <div className="">
      <div style={headerStyle} className="ui huge header ">
        Featured_Listings
      </div>

      <Listings />
      <button
        style={submitStyle}
        className="ui fluid button"
        onClick={toggleCarousel}
      >
        More Info
      </button>
    </div>
  );
}

export default ListingsContainer;
