import React from 'react'
import {Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <div className='fluid-container '><p className='text-white bg-success'>Footer</p>
         <Button variant='primary'>click here</Button>
    </div>
  )
}

export default Footer