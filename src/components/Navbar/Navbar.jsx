import React from 'react';
import { FaReact } from 'react-icons/fa'; 
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo-title"> 

        <FaReact size={50} />  {/*  Logo provisoire */}

        <h1 className='navbar__title'>MOVIE FINDER</h1>
      </div>
      <div className="navbar__buttons">
        <button>ALL FILMS</button>
        <button>MY FAVORITES</button>
        <button>LOGIN</button>
      </div>
    </nav>
  );
};

export default Navbar;   