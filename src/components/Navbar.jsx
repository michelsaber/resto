import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Body from './Body';

function Navbar() {
  return (
    <div className='navbar bg-dark border-bottom border-body' data-bs-theme="dark">
      <Link className="nav-link text-success" to={Body}>Apetizers</Link>
      <Link className="nav-link text-success" to={Body}>Dishes</Link>
      <Link className="nav-link text-success" to={Body}>Drinks</Link>
      <Link className="nav-link text-success" to={Footer}>Contact us</Link>
    </div>
  )
}

export default Navbar