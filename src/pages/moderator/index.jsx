import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { News } from './components'

import style from './style.css'
import { default as Navigation } from './navigation'
import { default as Content } from './content'

function Component() {
    return (
        <div className={style.container}>
            <Navigation />
            <Router>
                <div>
                    <Switch>
                        <Route path="/news" exact>
                            <News />
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
    )
}

export default Component;
