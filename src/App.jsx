import React from 'react';
import logo from './theme/logo.svg';
import styles from './App.css';

import { ClientPage, ModeratorPage } from './pages'

function App() {
  return (
    <div className={styles.container}>
        <header className={styles.header}>
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        <body className={styles.body}>
        { true ? <ModeratorPage /> : <ClientPage /> }
        </body>
    </div>
  );
}

export default App;
