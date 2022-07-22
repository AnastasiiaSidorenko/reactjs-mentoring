import React from 'react';
import { HomePage } from './HomePage';
import { ErrorBoundary } from './ErrorBoundary';
import './App.scss';
import { LocaleContext } from './core/i18n/locale';

function App() {
  return (
    <LocaleContext.Provider value="en">
      <div className="App">
        <ErrorBoundary>
          <HomePage />
        </ErrorBoundary>
      </div>
    </LocaleContext.Provider>
  );
}

export default App;
