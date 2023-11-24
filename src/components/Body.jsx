import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Apetizers from './Apetizers';
import Dishes from './Dishes';
import Drinks from './Drinks';

function Body() {
  return (
    <div className='fluid-container bg-secondary'>
      <Apetizers></Apetizers>
      <Dishes></Dishes>
      <Drinks></Drinks>
    </div>
  )
}

export default Body