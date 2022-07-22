import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { I18N } from '../../core/i18n';
import { LocaleContext } from '../../core/i18n/locale';
import CloseIcon from '../../core/constants/close-icon-sm.svg';
import './MovieCardOptions.scss';
import { MovieModal } from '../MovieModal';

export const MovieCardOptions = ({ closeOptions }) => {
  const locale = useContext(LocaleContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="movie-card-options">
        <div className="movie-card-close">
          <button
            className="movie-card-close__button"
            type="button"
            onClick={() => closeOptions(false)}
          >
            <CloseIcon />
          </button>
        </div>
        <div className="movie-card-options__container">
          <button
            className="movie-card-options__item"
            type="button"
            onClick={() => setIsModalOpen(true)}
          >
            Edit
          </button>
          <button className="movie-card-options__item" type="button">
            Delete
          </button>
        </div>
      </div>
      {isModalOpen && <MovieModal closeModal={setIsModalOpen} header={I18N[locale].EDIT_MOVIE} />}
    </>
  );
};

MovieCardOptions.propTypes = {
  closeOptions: PropTypes.func.isRequired,
};
