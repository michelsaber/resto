import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Apetizers from './Apetizers';
import Dishes from './Dishes';
import Drinks from './Drinks';
import Background from "../public/background.jpg"

function Body() {
  return (
    <div className='fluid-container bg-secondary'>
      <Accordion  className=' bg-dark border-bottom border-body' data-bs-theme="dark">
      <Accordion.Item style={{color:"white", backgroundColor:"grey"}} eventKey="0">
        <Accordion.Header >The Key to Fine Dining</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>The Secret behind the Desert</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <div className='fluid-container' style = {{backgroundImage: `url(${Background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat",  height: "70vw"}}><h1 >The Key to Perfection</h1></div>
    <div className=' bg-dark border-bottom border-body' data-bs-theme="dark">
      <Apetizers></Apetizers>
      <Dishes></Dishes>
      <Drinks></Drinks>
    </div>
    </div>
  )
}

export default Body