
import React, {useState, useReducer, createContext} from 'react'
import myJsonArray from './../Raleigh.json';
// import myJsonArray from './ ../Raleigh.js';

// let FAVORITE = []


function reducer(state, action) {
  switch (action.type) {
    case 'FAVORITE':
     
       console.log('database in', action.payload, 'and filtered')
      let favoriteHouse = state.find(house => house.address.streetAddress == action.payload);
      state.push(favoriteHouse)
      console.log('found data', state, 'favriote house', favoriteHouse)
      return state
  
    case 'REMOVE_FAVORITE':
     
    console.log('remove fav', action.payload, 'and filtered')
    //  let removeHouse = FAVORITE.find(house => house.address.streetAddress == action.payload);
     state = state.filter(house => house.address.streetAddress !== action.payload)
    //  FAVORITE.push(favoriteHouse)
     console.log('found data to remove', state, 'favriote house')
     return state


    default:
      return state
  }
}


const HouseContext = createContext();
const DispatchContext = React.createContext();
const FavoriteContext = createContext([])


const HouseContextProvider = (props) => {
  // const [state, setstate] = useState({myJsonArray});
  const [state, dispatch] = useReducer(reducer, myJsonArray)
  return (
    <HouseContext.Provider value={{state, dispatch}}>
      {props.children}
    </HouseContext.Provider>
  );
}

export { HouseContext, HouseContextProvider, DispatchContext, FavoriteContext };

  
  // export const HouseContext = React.createContext(myJsonArray);