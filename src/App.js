import React from 'react';
import './App.css';
import HomepageLayout from './HomePageLayout';
import Footer from './Footer'
import SearchContainer from './SearchContainer'


function App() {
  return (
    <div className="App">
      <HomepageLayout>
      <SearchContainer/> 
        <Footer/>
      </HomepageLayout>
    </div>
  );
}

export default App;
