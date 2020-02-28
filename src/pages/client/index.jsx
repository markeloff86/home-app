import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import style from './style.css'

import { default as Navigation } from './navigation'
import { default as Content } from './content'

function Component() {
    return (
        <div>
            <div className={style.container}>
                <Navigation />
                <Router>
                    <div>
                        <Switch>
                            <Route path="/news" exact>
                                <Content />
                            </Route>
                            <Route path="/communication" exact>
                                <Content />
                            </Route>
                            <Route path="/services" exact>
                                <Content />
                            </Route>
                            <Route path="/around" exact>
                                <Content />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        </div>
    )
}

export default Component;
