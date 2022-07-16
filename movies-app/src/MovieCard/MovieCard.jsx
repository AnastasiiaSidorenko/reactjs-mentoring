import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

export const MovieCard = ({ movie }) => {
  const { image, film, year, category } = movie;
  return (
    <div className="movie-card">
      <img
        className="movie-card__image"
        src={`core/constants/movieImages/${image}.png`}
        alt="movie"
      />
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
