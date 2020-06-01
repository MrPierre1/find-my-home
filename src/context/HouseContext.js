import React, { useState, useReducer, createContext } from 'react';
import houseJson from './../RaleighLongList.json';

function reducer(state, action) {
  switch (action.type) {
    case 'FAVORITE':
      let index = state.findIndex(
        (x) => x.address.streetAddress == action.payload
      );
      state[index]['favorite'] = true;
      return state;

    case 'NOTFAVORITE':
      let indexI = state.findIndex(
        (x) => x.address.streetAddress == action.payload
      );
      state[indexI]['favorite'] = false;
      return state;

    case 'REMOVE_FAVORITE':
      state = state.filter(
        (house) => house.address.streetAddress !== action.payload
      );
      return state;

    default:
      return state;
  }
}

const HouseContext = createContext();
const DispatchContext = React.createContext();
const FavoriteContext = createContext([]);

const HouseContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, houseJson);
  return (
    <HouseContext.Provider value={{ state, dispatch }}>
      {props.children}
    </HouseContext.Provider>
  );
};

export { HouseContext, HouseContextProvider, DispatchContext, FavoriteContext };
