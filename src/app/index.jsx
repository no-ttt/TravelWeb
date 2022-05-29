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
import './styles/HomePage/SearchField'
import './styles/HomePage/Content'
import './styles/HomePage/Footer'
import './styles/SearchResult/SearchResult'
import './styles/SearchResult/HotSpot'
import './styles/SearchResult/Main'
import './styles/SpotInfo/SpotInfo'
import './styles/SpotInfo/SpotDetail'
import './styles/SpotInfo/SpotComment'
import './styles/SpotInfo/SpotNearby'
import './styles/SpotInfo/SpotRecommend'

const store = configureStore()
store.runSaga(rootSaga)
render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>
    , document.getElementById('root'));
