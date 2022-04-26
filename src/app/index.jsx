import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './containers/App'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import rootSaga from './sagas'

import './styles/main'
import './styles/homePage'
import './styles/SpotInfoPage'

const store = configureStore()
store.runSaga(rootSaga)
render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>
    , document.getElementById('root'));
