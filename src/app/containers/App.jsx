import React, { Component } from "react"
import { connect } from "react-redux"
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import HomePage from "../components/HomePage/HomePage"
import SearchResult from "../components/SearchResult/SearchResult"
import SpotInfo from "../components/SpotInfo/SpotInfo"

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true
		}
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/SearchResult/:city" component={SearchResult} />
					<Route exact path="/Spot/:id" component={SpotInfo} />
				</Switch>
			</BrowserRouter>
		)
	}
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
