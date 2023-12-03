import React from 'react'
import cheeseGarlic from "../public/cheese-garlic.jpg"
import springRolls from "../public/spring-rolls.jpg"
import mozarellaSticks from "../public/mozarella-sticks.jpg"
import chickenFingers from "../public/chicken-fingers.jpeg"
import crabSalad from "../public/crab-salad.jpg"
import nachos from "../public/nachos.jpg"

function Apetizers() {
  return (
    <div className='fluid-container text-secondary'><h3 >Apetizers</h3>
    <div className='fluid-container d-flex flex-wrap justify-content-around'>
    
    <div><h5>Cheese Garlic Bread</h5>
    <img style={{width:"auto", height:"120px"}} src={cheeseGarlic} alt="not found"/>
    <p>2.00 €</p></div>
    
    <div><h5>Spring Rolls</h5>
    <img style={{width:"auto", height:"120px"}} src={springRolls} alt="not found"/>
    <p>2.50 €</p></div>
    
    <div><h5>Mozarella Sticks</h5>
    <img style={{width:"auto", height:"120px"}} src={mozarellaSticks} alt="not found"/>
    <p>2.80 €</p></div>

    <div><h5>Chicken Fingers</h5>
    <img style={{width:"auto", height:"120px"}} src={chickenFingers} alt="not found"/>
    <p>3.20 €</p></div>

    <div><h5>Crab Salad</h5>
    <img style={{width:"auto", height:"120px"}} src={crabSalad} alt="not found"/>
    <p>3.40 €</p></div>

    <div><h5>Nachos</h5>
    <img style={{width:"auto", height:"120px"}} src={nachos} alt="not found"/>
    <p>3.40 €</p></div>

    </div>
    
    </div>
  )
}

export default Apetizers