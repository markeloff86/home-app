/* eslint no-underscore-dangle: 0 */
import {createStore as createReduxStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly'
import {reducer as formReducer} from 'redux-form'

import appReducer from './__data__/reducer'

const reducers = {form: formReducer, app: appReducer}
const reducer = combineReducers(reducers)

export const createStore = () => {

    const composedEnhancer = compose(
        applyMiddleware(thunkMiddleware),
        devToolsEnhancer({
            name: 'home-app',
        })
    )

    return createReduxStore(reducer, composedEnhancer)
}

export default createStore()
