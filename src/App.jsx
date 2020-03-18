import React from 'react';
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import appReducer from './__data__/reducer'

import styles from './App.css'
import { ClientPage, ModeratorPage, ModeratorLoginForm, AddContactForm, ResidentsList } from './pages'

const reducers = {form: formReducer}
const reducer = combineReducers(reducers, appReducer)
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

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
