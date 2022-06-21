import React from 'react';
import { Header } from '../Header';
import { MoviesCollection } from '../MoviesCollection';

export const HomePage = () => {
  return (
    <div className="">
      <Header />
      <MoviesCollection />
    </div>
  );
};
