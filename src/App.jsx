import React from 'react';
import {Provider} from 'react-redux'

import { default as store } from './store'
import styles from './App.css'
import { ClientPage, ModeratorPage, ModeratorLoginForm, AddContactForm, ResidentsList } from './pages'

function App() {
  return (
    <Provider store={store}>
        <div className={styles.container}>
            <div className={styles.body}>
            { false && <ModeratorLoginForm /> }
            { false && <AddContactForm /> }
            { true && <ModeratorPage /> }
            { false &&  <ClientPage /> }
            { false && <ResidentsList /> }
            </div>
        </div>
    </Provider>
  );
}

export default App;
