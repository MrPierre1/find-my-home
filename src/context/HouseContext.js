
import React, {useState} from 'react'
import myJsonArray from './../Raleigh.json';



const HouseContext = React.createContext([{}, () => {}]);

const HouseContextProvider = (props) => {
  const [state, setState] = useState({myJsonArray});
  return (
    <HouseContext.Provider value={[state, setState]}>
      {props.children}
    </HouseContext.Provider>
  );
}

export { HouseContext, HouseContextProvider };

  
  // export const HouseContext = React.createContext(myJsonArray);