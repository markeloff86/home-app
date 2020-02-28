import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ClientPage } from './pages'

function App() {
  return (
    <div className="App">
      <header className="app-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
      </header>
      <ClientPage />
    </div>
  );
}

export default App;
