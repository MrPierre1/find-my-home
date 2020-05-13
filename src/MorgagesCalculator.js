import React, { useState } from 'react';
import './App.css';

import { Grid } from 'semantic-ui-react';

function MorgageCalculator(props) {
  const [loanAmount, setloanAmount] = useState(0);
  const [yearsValue, setyearsValue] = useState(0);
  const [interestRate, setinterestRate] = useState(0);

  const paymentTotal = () => {
    const a = loanAmount;
    const r = interestRate / 100 / 12;
    const n = yearsValue * 12;
    const payment = a * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);

    console.log('nmbers', Math.round(payment), typeof Math.round(payment));
    return Math.round(payment);
  };

  return (
    <Grid.Row
      style={{ paddingBottom: '30px', border: '1px solid black' }}
      columns={2}
    >
      <Grid.Column width={8}>
        <div style={{ backgroundColor: 'kkred', margin: '0 0 0 150px' }}>
          <h2>I want to Borrow: ${loanAmount}</h2>

          <input
            data-tooltip="Slide the dot to select your loan amount"
            data-position="bottom center"
            className="input-range__slider"
            role="slider"
            type="range"
            min={0}
            color="green"
            step={1000}
            max={500000}
            value={loanAmount}
            onChange={(e) => setloanAmount(e.target.value)}
          />

          <h2>
            Over {yearsValue} year{yearsValue > 1 && 's'}
          </h2>

          <input
            data-tooltip="Slide the dot to select the length of your loan"
            data-position="bottom center"
            type="range"
            color="blue"
            step={1}
            max={30}
            min={1}
            value={yearsValue}
            onChange={(e) => setyearsValue(e.target.value)}
          />

          <h2>Interest Rate {interestRate}</h2>

          <input
            data-tooltip="Slide the dot to select your interest rate"
            data-position="bottom center"
            type="range"
            color="blue"
            step={0.5}
            max={10}
            min={1}
            value={interestRate}
            onChange={(e) => setinterestRate(e.target.value)}
          />
        </div>
      </Grid.Column>

      <Grid.Column style={{ backgroundColor: 'kkblue' }} width={8}>
        <div style={{ margin: '100px 0 0 -100px ' }}>
          <h1> ${interestRate < 1 ? 0 : paymentTotal()} Per Month </h1>
        </div>
      </Grid.Column>
    </Grid.Row>
  );
}
export default MorgageCalculator;
