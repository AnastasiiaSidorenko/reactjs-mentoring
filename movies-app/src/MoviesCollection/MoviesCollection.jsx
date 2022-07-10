import React from 'react';
import movieMocks from '../mocks/filmCollection.json';
import genreMocks from '../mocks/genreTypes.json';
import { MovieCard } from '../MovieCard';
import './MoviesCollection.scss';

export const MoviesCollection = () => {
  const movies = movieMocks.map((item) => <MovieCard key={item.image} movie={item} />);
  const genre = genreMocks.map((item) => <li>{item}</li>);
  return (
    <div className="movies-collection">
      <div className="movies-filter">
        <div className="movies-filter__genre">
          <ul className="movies-filter__genre__list">{genre}</ul>
        </div>
        <div className="movies-filter__date">
          <p>SORT BY</p>
          <select name="release-date" className="movies-filter__dropdown">
            <option value="release-date">RELEASE DATE</option>
          </select>
        </div>
      </div>
      <div className="movies-container">{movies}</div>
    </div>
  );
};
