import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { I18N } from '../../core/i18n';
import { LocaleContext } from '../../core/i18n/locale';
import './MovieModal.scss';
import { ReactPortal } from '../ReactPortal';
import CloseIcon from '../../core/constants/close-icon.svg';
import genreMocks from '../../mocks/genreTypes.json';

export const MovieModal = ({ closeModal, header }) => {
  const locale = useContext(LocaleContext);

  const [isSelectOptionsOpened, setIsSelectOptionsOpened] = useState(false);

  const selectOptions = genreMocks.map((item) => {
    return (
      <label>
        <input type="checkbox" />
        {item}
      </label>
    );
  });

  return (
    <ReactPortal>
      <div className="movie-modal">
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
                    {I18N[locale].TITLE}
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
                    {I18N[locale].RELEASE_DATE}
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
                    {I18N[locale].MOVIE_URL}
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
                    {I18N[locale].RATING}
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
                  <div
                    className="modal-form__input__select-box"
                    onClick={() => setIsSelectOptionsOpened(!isSelectOptionsOpened)}
                    role="button"
                    tabIndex={0}
                  >
                    <label className="modal-form__input__label" htmlFor="genre">
                      {I18N[locale].GENRE}
                    </label>
                    <select
                      className="modal-form__input__item  modal-form__input__item--big"
                      id="genre"
                    >
                      <option>Select Genre</option>
                    </select>
                    <div className="modal-form__input__over-select" />
                  </div>
                  {isSelectOptionsOpened && (
                    <div className="modal-form__input__select-options">{selectOptions}</div>
                  )}
                </div>
                <div className="modal-form__input">
                  <label className="modal-form__input__label" htmlFor="runtime">
                    {I18N[locale].RUNTIME}
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
                    {I18N[locale].OVERVIEW}
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