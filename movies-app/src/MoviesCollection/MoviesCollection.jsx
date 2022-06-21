import React from 'react';
import mocks from '../mocks/filmCollection.json';
import { MovieCard } from '../MovieCard';

export const MoviesCollection = () => {
  const movies = mocks.map((item) => <MovieCard key={item.image} movie={item} />);
  return <>{movies}</>;
};
