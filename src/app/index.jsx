import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './containers/App'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import rootSaga from './sagas'

import './styles/App'
import './styles/Header'
import './styles/HomePage'
import './styles/SearchResult'
import './styles/SpotInfo'
import './styles/Arrangement'
import './styles/ActivityArea'
import './styles/ActivityInfo'
import './styles/User'
import './styles/Collection'
import './styles/SignIn'

const store = configureStore()
store.runSaga(rootSaga)
render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>
    , document.getElementById('root'));
