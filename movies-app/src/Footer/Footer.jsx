import React from 'react';
import logo from '../core/constants/netflix-logo.png';
import './Footer.scss';

export const Footer = () => {
  return (
    <div className="footer-container">
      <img className="footer-container__logo" src={logo} alt="logo" />
    </div>
  );
};
