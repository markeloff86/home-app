import React from 'react';
import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from 'redux-thunk'

import appReducer from './__data__/reducer'

import styles from './App.css'
import { ClientPage, ModeratorPage, ModeratorLoginForm, AddContactForm, ResidentsList } from './pages'

const reducers = {form: formReducer, app: appReducer}
const reducer = combineReducers(reducers)

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-underscore-dangle
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ // eslint-disable-line no-underscore-dangle
            name: require('../package.json').description // eslint-disable-line global-require
        }) : compose

let store = composeEnhancers(applyMiddleware(thunkMiddleware))(createStore)(reducer, {}, null)

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
