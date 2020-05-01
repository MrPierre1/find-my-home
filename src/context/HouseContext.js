import React, { useState, useReducer, createContext } from 'react';
import myJsonArray from './../Raleigh.json';

function reducer(state, action) {
  switch (action.type) {
    case 'FAVORITE':
      let index = state.findIndex(
        (x) => x.address.streetAddress == action.payload
      );
      state[index]['favorite'] = true;
      return state;

    case 'REMOVE_FAVORITE':
      state = state.filter(
        (house) => house.address.streetAddress !== action.payload
      );

      console.log('found data to remove', state, 'favriote house');
      return state;

    default:
      return state;
  }
}

const HouseContext = createContext();
const DispatchContext = React.createContext();
const FavoriteContext = createContext([]);

const HouseContextProvider = (props) => {
  // const [state, setstate] = useState({myJsonArray});
  const [state, dispatch] = useReducer(reducer, myJsonArray);
  return (
    <HouseContext.Provider value={{ state, dispatch }}>
      {props.children}
    </HouseContext.Provider>
  );
};

export { HouseContext, HouseContextProvider, DispatchContext, FavoriteContext };

// export const HouseContext = React.createContext(myJsonArray);
