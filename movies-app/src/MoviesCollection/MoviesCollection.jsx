import React, { useContext } from 'react';
import { I18N } from '../core/i18n';
import { LocaleContext } from '../core/i18n/locale';
import movieMocks from '../mocks/filmCollection.json';
import genreMocks from '../mocks/genreTypes.json';
import { MovieCard } from '../MovieCard';
import './MoviesCollection.scss';

export const MoviesCollection = () => {
  const locale = useContext(LocaleContext);
  const movies = movieMocks.map((item) => <MovieCard key={item.image} movie={item} />);
  const genre = genreMocks.map((item) => <li>{item}</li>);
  return (
    <div className="movies-collection">
      <div className="movies-filter">
        <div className="movies-filter__genre">
          <ul className="movies-filter__genre__list">{genre}</ul>
        </div>
        <div className="movies-filter__date">
          <p>{I18N[locale].SORT_BY}</p>
          <select name="release-date" className="movies-filter__dropdown">
            <option value="release-date">{I18N[locale].RELEASE_DATE}</option>
          </select>
        </div>
      </div>
      <div className="movies-container">{movies}</div>
    </div>
  );
};
