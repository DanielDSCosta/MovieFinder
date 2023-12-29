import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>Copyright © 2022</p>
        <div className="footer__credits">
          <span>Crédits : &nbsp; </span> 
          <a href="https://www.linkedin.com/in/danieldsc/" target="_blank" rel="noreferrer">Daniel Da Silva Costa </a>
          <span> &nbsp; & &nbsp; </span>
          <a href="https://www.linkedin.com/in/gbhofman/" target="_blank" rel="noreferrer"> Gael Hofman</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;