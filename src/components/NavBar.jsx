import React from 'react'
import homeButton from '../assets/home-icon.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='nav-bar'>
        <h1>React Ironbeers</h1>
        <Link to='/'>{<img src={homeButton} alt='' />}</Link>
    </nav>
  )
}

export default NavBar