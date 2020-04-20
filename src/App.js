import React, {useContext} from 'react';
import './App.css';
import HomepageLayout from './HomePageLayout';
import Footer from './Footer'
import SearchContainer from './SearchContainer'
import Listings from './Listings'


function App() {
  return (
    <div className="App">
      <HomepageLayout>
      <SearchContainer/> 
      <Listings />
        <Footer/>
      </HomepageLayout>
    </div>
  );
}

export default App;
