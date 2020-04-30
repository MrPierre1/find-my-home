import React, {useState, useContext} from 'react';
import './App.css';
import {HouseContext} from './context/HouseContext';

// import HouseCards from './HouseCards'

import {
  Button,
  Container,
  Card,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Input,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Dropdown,
} from 'semantic-ui-react';

import CarouselMain from './CarouselMain';
import SellHeader from './SellHeader';
import {HouseContextProvider} from './context/HouseContext';
import test from './assets/test4.jpg';
import image1 from './assets/mon125009.jpg';
import image2 from './assets/family-at-new-home.jpg';
import paperworkImage from './assets/paperwork.jpg'
import veteranImage from './assets/veteran.jpg'
import cvImage from './assets/cv.jpg'
import soldMorgage from './assets/soldm.jpg'
import walletImage from './assets/wallet.jpg'
function MorgageCalculator (props) {
  const [loanAmount, setloanAmount] = useState(0)
  const [yearsValue, setyearsValue] = useState(0)
  const [interestRate, setinterestRate] = useState(0)
  const [monthlyPayment, setmonthlyPayment] = useState(0)
  const paymentTotal = () => {
    const a = loanAmount
    const r = (interestRate / 100)/12
    const n = yearsValue * 12
    const  payment = a * r * (Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
   
    console.log('nmbers', Math.round(payment))
    if(Math.round(payment) === NaN){
     return 0
    }
    else{
       return Math.round(payment)
    }
  
   
  }


  // const handleLChange = (e) => setloanAmount( e.target.value)
  return (
    // <div style={{paddingBottom:'30px', backgroundColor:'red'}}>
    
    
        
  
          <Grid.Row  style={{paddingBottom:'30px', backgroundColor:'jj'}} columns={2} >

   
<Grid.Column  style={{backgroundColor:'l'}} width={4}>




  <h4>I want to Borrow: ${loanAmount}</h4>
      <input
        

       className="input-range__slider"
        role="slider"
          type='range'
          min={0}
          color='green'
          step={1000}
          max={100000}
          value={loanAmount}
          onChange={(e) => setloanAmount( e.target.value)}
        />

  <h4>Over {yearsValue} year{yearsValue > 1 && "s"}</h4>
      
        <input
        type='range'
        color='blue'
          step={1}
          max={30}
          min={1}
          value={yearsValue}
          onChange={(e) => setyearsValue(e.target.value)}
        />



<h4>Interest Rate {interestRate}</h4>
      
      <input
      type='range'
      color='blue'
        step={.5}
        max={10}
        min={1}
        value={interestRate}
        onChange={(e) => setinterestRate(e.target.value)}
      />

  {/* <h1> Monthly Payment ${Math.round(paymentTotal())}</h1> */}



</Grid.Column>


<Grid.Column style={{backgroundColor:'l'}} width={12}>



  <h1 style={{margin:'100px 0 0 0px '}}> Monthly Payment ${paymentTotal()}</h1>



</Grid.Column>

        </Grid.Row>   
            

    // </div>
  );
}
export default MorgageCalculator;
