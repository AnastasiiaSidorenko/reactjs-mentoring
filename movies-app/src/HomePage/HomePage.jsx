import React from 'react';
import { Header } from '../Header';
import { MoviesCollection } from '../MoviesCollection';
import { Footer } from '../Footer';

export const HomePage = () => {
  return (
    <div className="">
      <Header />
      <MoviesCollection />
      <Footer />
    </div>
  );
};
