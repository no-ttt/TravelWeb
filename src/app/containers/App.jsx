import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import HomePage from '../components/Pages/HomePage'
import SignIn from '../components/Pages/SignIn'
import SearchResult from '../components/Pages/SearchResult'
import SpotInfo from '../containers/Pages/SpotInfo'
import Arrangement from '../components/Pages/Arrangement'
import Map from './Pages/Map'
import ActivityArea from '../components/Pages/ActivityArea'
import ActivityInfo from '../containers/Pages/ActivityInfo'
import User from '../containers/Pages/User'
import Collection from './Pages/Collection'
import MapTest from '../containers/MapTest'
import Schedule from '../components/Pages/Schedule'

export class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={SignIn} />
					<Route exact path="/home" component={HomePage} />
					<Route exact path="/spot/:city" component={SearchResult} />
					<Route exact path="/spot/detail/:id" component={SpotInfo} />
					<Route exact path="/map" component={Map} />
					<Route exact path="/arrangement" component={Arrangement} />
					<Route exact path="/activity/:area" component={ActivityArea} />
					<Route exact path="/activity/detail/:id" component={ActivityInfo} />
					<Route exact path="/user" component={User} />
					<Route exact path="/collection" component={Collection} />
					<Route exact path="/MapTest" component={MapTest} />
					<Route exact path="/schedule" component={Schedule} />
				</Switch>
			</BrowserRouter>
		)
	}
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
