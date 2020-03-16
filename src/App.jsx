import React from 'react';
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import logo from './theme/logo.png';
import styles from './App.css';
import { ClientPage, ModeratorPage, ModeratorLoginForm, AddContactForm, ResidentsList } from './pages'

const reducers = {form: formReducer}
const reducer = combineReducers(reducers)
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
        <div className={styles.container}>
            { false &&
            <header className={styles.header}>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            }
            <body className={styles.body}>
            { false && <ModeratorLoginForm /> }
            { false && <AddContactForm /> }
            { false && <ModeratorPage /> }
            { false &&  <ClientPage /> }
            { true && <ResidentsList /> }
            </body>
        </div>
    </Provider>
  );
}

export default App;
