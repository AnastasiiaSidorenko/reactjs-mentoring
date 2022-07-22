import React from 'react';
import { HomePage } from './components/HomePage';
import { ErrorBoundary } from './components/ErrorBoundary';
import './App.scss';
import { LocaleContext } from './core/i18n/locale';

function App() {
  return (
    <LocaleContext.Provider value="en">
      <div className="app-container">
        <ErrorBoundary>
          <HomePage />
        </ErrorBoundary>
      </div>
    </LocaleContext.Provider>
  );
}

export default App;
