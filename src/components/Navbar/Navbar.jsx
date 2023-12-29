import React from 'react';
import { FaReact } from 'react-icons/fa'; 
import { NavLink } from 'react-router-dom'; 
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink exact to="/" className="navbar__logo-title"> 
        <FaReact size={50} />  {/*  Logo provisoire */}
        <h1 className='navbar__title'>MOVIE FINDER</h1>
      </NavLink>
      <div className="navbar__buttons">
        <NavLink exact to="/">HOME</NavLink> 
        <NavLink to="/latestreleases">LATEST RELEASES</NavLink> 
        <NavLink to="/favorites">FAVORITES</NavLink> 
        <NavLink to="/signup">SIGNUP</NavLink> 
        <NavLink to="/login">LOGIN</NavLink> 
      </div>
    </nav>
  );
};

export default Navbar;