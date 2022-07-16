import React from 'react';
import './Header.scss';
import logo from '../core/constants/netflix-logo.png';
import PlusIcon from '../core/constants/plus-icon.svg';

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        <button className="add-button" type="button">
          <PlusIcon />
          ADD MOVIE
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
