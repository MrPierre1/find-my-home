import react, {useReducer, useState} from 'react'

import myJsonArray from './../Raleigh.json';


const [state, dispatch] = React.useReducer(toggleReducer, {on: false})


function reducer(state, action) {
    switch (action.type) {
      case 'bedrooms':
        console.log('datacame in', state)
        return {bedrooms:  1};
      // case 'decrement':
      //   return {count: state.count - 1};
      default:
        return state
    }
  }

  




  export const HouseContext = React.createContext(myJsonArray);
