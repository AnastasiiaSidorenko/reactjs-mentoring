import React from 'react';
import { HomePage } from './HomePage';
import { ErrorBoundary } from './ErrorBoundary';
import './App.scss';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    </div>
  );
}

export default App;
