import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStructuredSelector } from "reselect"
import {connect} from "react-redux"
import {compose} from "redux"

import { ModeratorLoginForm, AddContactForm, ResidentsList } from '../'
import { makeIsLoading, makeIsRequestError } from "../../__data__/selectors"

import style from './style.css'
import { Loader } from './components'

function Component({ isLoading, isRequestError }) {
    return (
        <div className={style.contentContainer}>
            {isLoading && <Loader />}
            <Router>
                <Switch>
                    <Route path="/login" exact>
                        <ModeratorLoginForm />
                    </Route>
                    <Route path="/add-contact" exact>
                        <AddContactForm />
                    </Route>
                    <Route path="/residents-list" exact>
                        <ResidentsList />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isLoading: makeIsLoading(),
    isRequestError: makeIsRequestError(),
})

const withConnect = connect(
    mapStateToProps,
)

export default compose(withConnect)(Component)
