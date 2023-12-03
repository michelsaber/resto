import React from 'react'

function Dishes() {
  return (
    <div className='fluid-container text-secondary'><h3 >Dishes</h3>
    <div className='fluid-container d-flex flex-column justify-content-around'>
    
    <div className='border border-success'>
    <div className='fluid-container d-flex flex-row justify-content-center'><h5 style={{fontWeight:"bold"}}>Hot Wings</h5>
      <p style={{fontFamily:"italic"}}>..............Spicy Wings with barbecue Dip</p></div>
    <p>6.00 €</p>
    </div>
    
    <div className='border border-success'>
    <div className='fluid-container d-flex flex-row justify-content-center'><h5 style={{fontWeight:"bold"}}>Pizza Marguerita</h5>
    <p style={{fontFamily:"italic"}}>..............Your choice of base sauce (Red, Hollandaise or BBQ)</p></div>
    <p>8.50 €</p></div>
    
    <div className='border border-success'>
    <div className='fluid-container d-flex flex-row justify-content-center'><h5 style={{fontWeight:"bold"}}>Pizza Diabolo</h5>
    <p style={{fontFamily:"italic"}}>..............Your choice of base sauce (Red, Hollandaise or BBQ)</p></div>
    <p>9.80 €</p></div>

    <div className='border border-success'>
    <div className='fluid-container d-flex flex-row justify-content-center'><h5 style={{fontWeight:"bold"}}>Steak</h5>
    <p style={{fontFamily:"italic"}}>..............Beef Steak with Puree/Fries</p></div>
    <p>12.20 €</p></div>

    <div className='border border-success'>
    <div className='fluid-container d-flex flex-row justify-content-center'><h5 style={{fontWeight:"bold"}}>Schnitzel</h5>
    <p style={{fontFamily:"italic"}}>..............Schnitzel with Potato Salad/Fries</p></div>
    <p>9.40 €</p></div>

    <div className='border border-success'>
    <div className='fluid-container d-flex flex-row justify-content-center'><h5 style={{fontWeight:"bold"}}>Currywurst</h5>
    <p style={{fontFamily:"italic"}}>..............Currywurst with Fries</p></div>
    <p>6.40 €</p></div>

    <div className='border border-success'>
    <div className='fluid-container d-flex flex-row justify-content-center'><h5 style={{fontWeight:"bold"}}>Döner</h5>
    <p style={{fontFamily:"italic"}}>..............Döner with salad</p></div>
    <p>5.50 €</p></div>

    <div className='border border-success'>
    <div className='fluid-container d-flex flex-row justify-content-center'><h5 style={{fontWeight:"bold"}}>Falafel</h5>
    <p style={{fontFamily:"italic"}}>..............Falafel with salad</p></div>
    <p>5.00 €</p></div>

    <div className='border border-success'>
    <div className='fluid-container d-flex flex-row justify-content-center'><h5 style={{fontWeight:"bold"}}>Pasta</h5>
    <p style={{fontFamily:"italic"}}>..............Your choice of Arabiatta, Carbonara or Bolognese</p></div>
    <p>5.00 €</p></div>

    <div className='border border-success'>
      <div className='fluid-container d-flex flex-row justify-content-center'><h5 style={{fontWeight:"bold"}}>Quinoa Salad</h5>
    <p style={{fontFamily:"italic"}}>..............Quinoa boal with bread aside</p></div>
    <p>5.50 €</p></div>

    </div>
    
    </div>
  )
}

export default Dishes