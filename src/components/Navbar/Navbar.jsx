import React from 'react';
import { FaReact } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo-title"> 
        <FaReact size={50} />  {/*  Logo provisoire */}
        <h1 className='navbar__title'>MOVIE FINDER</h1>
      </Link>
      <div className="navbar__buttons">
        <Link to="/">HOME</Link> 
        <Link to="/latestreleases">LATEST RELEASES</Link> 
        <Link to="/favorites">FAVORITES</Link> 
        <Link to="/signup">SIGNUP</Link> 
        <Link to="/login">LOGIN</Link> 
      </div>
    </nav>
  );
};

export default Navbar;