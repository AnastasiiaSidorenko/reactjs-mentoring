import React, { useContext } from 'react';
import { I18N } from '../core/i18n';
import { LocaleContext } from '../core/i18n/locale';
import './AddMovieModal.scss';

export const AddMovieModal = () => {
  const locale = useContext(LocaleContext);
  return (
    <div className="add-movie-modal">
      <div>
        <p>{I18N[locale].ADD_MOVIE}</p>
        <button type="button">close</button>
      </div>
    </div>
  );
};
