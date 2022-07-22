import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { I18N } from '../../core/i18n';
import { LocaleContext } from '../../core/i18n/locale';
import CloseIcon from '../../core/constants/close-icon-sm.svg';
import './MovieCardOptions.scss';
import { MovieModal } from '../MovieModal';
import { ConfirmModal } from '../ConfirmModal';

export const MovieCardOptions = ({ closeOptions }) => {
  const locale = useContext(LocaleContext);
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
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
            onClick={() => setIsMovieModalOpen(true)}
          >
            Edit
          </button>
          <button
            className="movie-card-options__item"
            type="button"
            onClick={() => setIsConfirmModalOpen(true)}
          >
            Delete
          </button>
        </div>
      </div>
      {isMovieModalOpen && (
        <MovieModal closeModal={setIsMovieModalOpen} header={I18N[locale].EDIT_MOVIE} />
      )}
      {isConfirmModalOpen && (
        <ConfirmModal
          closeModal={setIsConfirmModalOpen}
          header={I18N[locale].DELETE_MOVIE}
          question={I18N[locale].DELETE_POPUP_QUESTION}
        />
      )}
    </>
  );
};

MovieCardOptions.propTypes = {
  closeOptions: PropTypes.func.isRequired,
};
