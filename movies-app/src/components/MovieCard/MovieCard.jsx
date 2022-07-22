import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';
import CircleIcon from '../../core/constants/circle-icon.svg';
import { MovieCardOptions } from '../MovieCardOptions';

export const MovieCard = ({ movie }) => {
  const { image, film, year, category } = movie;
  const [isOptionsShown, setIsOptionsShown] = useState(false);
  return (
    <div className="movie-card">
      <div className="movie-card-container">
        <img
          className="movie-card-container__image"
          src={`core/constants/movieImages/${image}.png`}
          alt="movie"
        />
        <button
          type="button"
          className="movie-card-container__button"
          onClick={() => setIsOptionsShown(true)}
        >
          <CircleIcon />
        </button>
        {isOptionsShown && <MovieCardOptions closeOptions={setIsOptionsShown} />}
      </div>
      <div className="movie-info">
        <p className="movie-info__film">{film}</p>
        <p className="movie-info__year">{year}</p>
      </div>
      <p className="movie-category">{category}</p>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    film: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
