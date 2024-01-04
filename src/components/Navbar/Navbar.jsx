import React from 'react';
import { FaReact } from 'react-icons/fa'; 
import { NavLink } from 'react-router-dom'; 
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo-title"> 
        <FaReact size={50} />  {/*  Logo provisoire */}
        <h1 className='navbar__title'>MOVIE FINDER</h1>
      </NavLink>
      <div className="navbar__buttons">
        <NavLink to="/home">Accueil</NavLink> 
        <NavLink to="/latest-releases">Dernières sortis</NavLink> 
        <NavLink to="/favorites">Favoris</NavLink> 
        <NavLink to="/register">Inscription</NavLink> 
      </div>
    </nav>
  );
};

export default Navbar;