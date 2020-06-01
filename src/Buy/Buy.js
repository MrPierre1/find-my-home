import React, {
  Suspense,
  useState,
  useContext,
} from 'react';
import './../App.css';
import Map from './Map';
import { Button } from 'semantic-ui-react';

import { HouseContext } from '../context/HouseContext';

// const SearchContainer = React.lazy(() => import('./SearchContainer'));
import SearchContainer from './SearchContainer'

const Listings = React.lazy(() => import('./Listings'));

function Buy() {
  const { state } = useContext(HouseContext);
  const [isListingShown, setisListingShown] = useState(true);
  const [isMapShown, setisMapShown] = useState(false);
  const [changeData, setchangeData] = useState(state);

  const toggleList = () => {
    setisListingShown(true);
    setisMapShown(false);
  };

  const toggleMap = () => {
    setisListingShown(false);
    setisMapShown(true);
  };

  return (
    <div className="Home">
      <SearchContainer stateData={state} stateChange={setchangeData} />

      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <div className="MaptoggleButtons">
          <Button onClick={toggleList} secondary>
            Show List
          </Button>

          <Button onClick={toggleMap} primary>
            Show Map
          </Button>
        </div>

        <div>
          {isListingShown && <Listings houseData={changeData} />}

          {isMapShown && <Map houseData={changeData} />}
        </div>
      {/* </Suspense> */}
    </div>
  );
}

export default Buy;
