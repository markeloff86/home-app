import React from 'react'
import ReactDOM from 'react-dom'
import 'react-widgets/dist/css/react-widgets.css'

import './theme/react-widgets/styles/react-widgets.css'
import './theme/index.css'
import './theme/opensans/opensans.css'
import './theme/glyphter-font/css/Glyphter.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
