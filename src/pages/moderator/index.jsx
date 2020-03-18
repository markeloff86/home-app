import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { ModeratorLoginForm, AddContactForm, ResidentsList } from '../'


function Component() {
    return (
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
    )
}

export default Component
