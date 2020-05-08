import React, {} from 'react';
import './App.css';
// import {HouseContext} from './context/HouseContext';

// import HouseCards from './HouseCards'

import {
   
  Grid,
 
  Image,
  
} from 'semantic-ui-react';

// import CarouselMain from './CarouselMain';
// import SellHeader from './SellHeader';
// import {HouseContextProvider} from './context/HouseContext';
// import test from './assets/test4.jpg';
// import image1 from './assets/mon125009.jpg';
import image2 from './assets/family-at-new-home.jpg';
import paperworkImage from './assets/paperwork.jpg'
import veteranImage from './assets/veteran.jpg'
import cvImage from './assets/cv.jpg'
import soldMorgage from './assets/soldm.jpg'
import walletImage from './assets/wallet.jpg'
import MorgageCalculator from './MorgagesCalculator';

function MorgageNews () {
  return (
    <Grid.Row columns={3}>

   
      <Grid.Column>

        <div
          style={{
            width: '100%',
            height: '100%',
            // backgroundColor: 'red'
          }}
        >
          {/* <a href="https://www.realtor.com/advice/finance/common-mortgage-questions/"> */}

          <Image
            src={cvImage}
            size="small"
            floated="right"
            centered
            target="_blank"
            as="a"
            href="https://www.realtor.com/advice/finance/essential-mortgage-faq/"
            style={{
              width: '100%',
              height: '',
            }}
          />
          <p style={{fontSize: '20px', margin: 'auto 30px'}}>
            <a
              style={{color: 'black'}}
              href="https://www.realtor.com/advice/finance/essential-mortgage-faq/"
              target="_blank"
              rel="noopener noreferrer"
            >
             Mortgage FAQ: Essential Answers to All Your Questions About Home Loans in the Coronavirus Era
            </a>
          </p>

        </div>

      </Grid.Column>

      <Grid.Column>

        <div
          style={{
            width: '100%',
            height: '100%',
            // backgroundColor: 'red'
          }}
        >
          {/* <a href="https://www.realtor.com/advice/finance/common-mortgage-questions/"> */}

          <Image
            src={soldMorgage}
            size="small"
            floated="right"
            centered
            target="_blank"
            as="a"
            href="https://www.realtor.com/advice/finance/why-does-my-mortgage-keep-getting-sold/"
            style={{
              width: '100%',
              height: '',
            }}
          />
          <p style={{fontSize: '20px', margin: 'auto 30px'}}>
            <a
              style={{color: 'black'}}
              href="https://www.realtor.com/advice/finance/why-does-my-mortgage-keep-getting-sold/"
              target="_blank"
              rel="noopener noreferrer"
            >
             Why Does My Mortgage Keep Getting Sold?
            </a>
          </p>

        </div>

      </Grid.Column>



      <Grid.Column>

        <div
          style={{
            width: '100%',
            height: '100%',
            // backgroundColor: 'red'
          }}
        >
          {/* <a href="https://www.realtor.com/advice/finance/common-mortgage-questions/"> */}

          <Image
            src={walletImage}
            size="small"
            floated="right"
            centered
            target="_blank"
            as="a"
            href="https://www.realtor.com/advice/finance/hidden-costs-of-self-isolating-at-home-during-coronavirus/"
            style={{
              width: '100%',
              height: '',
            }}
          />
          <p style={{fontSize: '20px', margin: 'auto 30px'}}>
            <a
              style={{color: 'black'}}
              href="https://www.realtor.com/advice/finance/hidden-costs-of-self-isolating-at-home-during-coronavirus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              
Watch Your Wallet: 7 Hidden Costs of Self-Isolating at Home During Coronavirus
            </a>
          </p>

        </div>

      </Grid.Column>

    </Grid.Row>
  );
}

function MorgageData () {
 
 

  return (
    <Grid.Row columns={3}>

      <Grid.Column>

        <div
          style={{
            width: '100%',
            height: '100%',
            // backgroundColor: 'red'
          }}
        >
          {/* <a href="https://www.realtor.com/advice/finance/common-mortgage-questions/"> */}

          <Image
            src={image2}
            size="small"
            floated="right"
            centered
            target="_blank"
            as="a"
            href="https://www.realtor.com/advice/finance/common-mortgage-questions/"
            style={{
              width: '100%',
              height: '',
            }}
          />
          <p style={{fontSize: '20px', margin: 'auto 30px'}}>
            <a
              style={{color: 'black'}}
              href="https://www.realtor.com/advice/finance/common-mortgage-questions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              5 Mortgage Questions Home Buyers Always Ask—Answered
            </a>
          </p>

        </div>

      </Grid.Column>

      <Grid.Column>

        <div
          style={{
            width: '100%',
            height: '100%',
            // backgroundColor: 'red'
          }}
        >
          {/* <a href="https://www.realtor.com/advice/finance/common-mortgage-questions/"> */}

          <Image
            src={paperworkImage}
            size="small"
            floated="right"
            centered
            target="_blank"
            as="a"
            href="https://www.realtor.com/advice/finance/decoding-the-listings-mortgages-explained/"
            style={{
              width: '100%',
              height: '',
            }}
          />
          <p style={{fontSize: '20px', margin: 'auto 30px'}}>
            <a
              style={{color: 'black'}}
              href="https://www.realtor.com/advice/finance/decoding-the-listings-mortgages-explained/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mortgage Terms Explained, From ARMs to Points
            </a>
          </p>

        </div>

      </Grid.Column>



      <Grid.Column>

        <div
          style={{
            width: '100%',
            height: '100%',
            // backgroundColor: 'red'
          }}
        >
          {/* <a href="https://www.realtor.com/advice/finance/common-mortgage-questions/"> */}

          <Image
            src={veteranImage}
            size="small"
            floated="right"
            centered
            target="_blank"
            as="a"
            href="https://www.realtor.com/advice/guides/va-loan/"
            style={{
              width: '100%',
              height: '',
            }}
          />
          <p style={{fontSize: '20px', margin: 'auto 30px'}}>
            <a
              style={{color: 'black'}}
              href="https://www.realtor.com/advice/guides/va-loan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Veterans Guide
to Home Ownership
            </a>
          </p>

        </div>

      </Grid.Column>

    </Grid.Row>
  );
}

function Morgages (props) {

  return (
    <div>
    
    
        <div>
       
          <Grid style={{margin:'20px'}}>
          {/* <h1>Mortgage Calculator</h1>
  <MorgageCalculator /> */}
            <h1>Mortgage Tips</h1>
            <MorgageData />
            <h1>Mortgage News</h1>
            <MorgageNews />
          </Grid>

        </div>


    </div>
  );
}
export default Morgages;
