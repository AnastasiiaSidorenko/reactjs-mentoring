import React, { useContext } from 'react';
import { I18N } from '../core/i18n';
import { LocaleContext } from '../core/i18n/locale';
import './Header.scss';
import logo from '../core/constants/netflix-logo.png';
import PlusIcon from '../core/constants/plus-icon.svg';

export const Header = () => {
  const locale = useContext(LocaleContext);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        <button className="add-button" type="button">
          <PlusIcon />
          {I18N[locale].ADD_MOVIE}
        </button>
      </div>
      <div className="search-movie">
        <p className="search-movie__title">{I18N[locale].FIND_YOUR_MOVIE}</p>
        <div className="search-movie__field">
          <input className="input" value="" placeholder="What do you want to watch?" />
          <button className="button" type="button">
            {I18N[locale].SEARCH}
          </button>
        </div>
      </div>
    </div>
  );
};
