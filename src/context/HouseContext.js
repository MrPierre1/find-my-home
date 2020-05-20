import React, { useState, useReducer, createContext } from 'react';
// import myJsonArray from './../Raleigh.json';
// import houseJson from './../newHouseData.json'
import houseJson from './../RaleighLongList.json'
// import houseJson from './../Raleigh.json'




function reducer(state, action) {
  switch (action.type) {
   

    case 'FAVORITE':
      //  console.log('im in favorite')
      let index = state.findIndex(
        (x) => x.address.streetAddress == action.payload
      );
      state[index]['favorite'] = true;
      return state;

      case 'NOTFAVORITE':
        // console.log('im in not favorite')
        let indexI = state.findIndex(
          (x) => x.address.streetAddress == action.payload
        );
        state[indexI]['favorite'] = false;
        return state;

    case 'REMOVE_FAVORITE':
      state = state.filter(
        (house) => house.address.streetAddress !== action.payload
      );

      // console.log('found data to remove', state, 'favriote house');
      return state;

    default:
      return state;
  }
}

const HouseContext = createContext();
const DispatchContext = React.createContext();
const FavoriteContext = createContext([]);

const HouseContextProvider = (props) => {
  // const [state, setstate] = useState({houseJson});
  const [state, dispatch] = useReducer(reducer, houseJson);
  return (
    <HouseContext.Provider value={{ state, dispatch }}>
      {props.children}
    </HouseContext.Provider>
  );
};

export { HouseContext, HouseContextProvider, DispatchContext, FavoriteContext };

// export const HouseContext = React.createContext(houseJson);
