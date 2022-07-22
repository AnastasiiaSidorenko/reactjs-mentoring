import React from 'react';
import PropTypes from 'prop-types';
import './MovieModal.scss';
import { ReactPortal } from '../ReactPortal';
import CloseIcon from '../../core/constants/close-icon.svg';

export const MovieModal = ({ closeModal, header }) => {
  return (
    <ReactPortal>
      <div className="add-movie-modal">
        <div>
          <div className="modal-close">
            <button className="modal-close__button" type="button" onClick={() => closeModal(false)}>
              <CloseIcon />
            </button>
          </div>
          <div className="modal-body">
            <h2 className="modal-header">{header}</h2>
            <form className="modal-form">
              <div className="modal-form__row">
                <div className="modal-form__input">
                  <label className="modal-form__input__label" htmlFor="title">
                    TITLE
                  </label>
                  <input
                    className="modal-form__input__item modal-form__input__item--big"
                    type="text"
                    placeholder="Title"
                    id="title"
                  />
                </div>
                <div className="modal-form__input">
                  <label className="modal-form__input__label" htmlFor="date">
                    RELEASE DATE
                  </label>
                  <input
                    className="modal-form__input__item modal-form__input__item--small"
                    type="date"
                    placeholder="Select Date"
                    id="date"
                  />
                </div>
              </div>

              <div className="modal-form__row">
                <div className="modal-form__input">
                  <label className="modal-form__input__label" htmlFor="movie-url">
                    MOVIE URL
                  </label>
                  <input
                    className="modal-form__input__item modal-form__input__item--big"
                    type="text"
                    placeholder="https://"
                    id="movie-url"
                  />
                </div>
                <div className="modal-form__input">
                  <label className="modal-form__input__label" htmlFor="rating">
                    RATING
                  </label>
                  <input
                    className="modal-form__input__item  modal-form__input__item--small"
                    type="text"
                    placeholder="7.8"
                    id="rating"
                  />
                </div>
              </div>
              <div className="modal-form__row">
                <div className="modal-form__input">
                  <label className="modal-form__input__label" htmlFor="genre">
                    GENRE
                  </label>
                  <select
                    className="modal-form__input__item  modal-form__input__item--big"
                    id="genre"
                  >
                    <option value="crime">crime</option>
                  </select>
                </div>
                <div className="modal-form__input">
                  <label className="modal-form__input__label" htmlFor="runtime">
                    RUNTIME
                  </label>
                  <input
                    className="modal-form__input__item  modal-form__input__item--small"
                    type="text"
                    placeholder="minutes"
                    id="runtime"
                  />
                </div>
              </div>
              <div className="modal-form__row">
                <div className="modal-form__input modal-form__input--textarea">
                  <label className="modal-form__input__label" htmlFor="overview">
                    OVERVIEW
                  </label>
                  <textarea
                    className="modal-form__input__item modal-form__input__description"
                    placeholder="Movie description"
                    id="overview"
                  />
                </div>
              </div>
              <div className="modal-form__buttons">
                <input className="reset" type="reset" value="reset" />
                <input className="submit" type="submit" value="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </ReactPortal>
  );
};

MovieModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
};
