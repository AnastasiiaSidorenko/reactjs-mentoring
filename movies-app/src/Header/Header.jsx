import React from 'react';
import './Header.scss';
import logo from '../assets/netflix-logo.png';

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        <button className="add-button" type="button">
          + ADD MOVIE
        </button>
      </div>
      <div className="search-movie">
        <p className="search-movie__title">FIND YOUR MOVIE</p>
        <div className="search-movie__field">
          <input className="input" value="" placeholder="What do you want to watch?" />
          <button className="button" type="button">
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};
