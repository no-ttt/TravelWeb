import React, { Component } from "react"
import { connect } from "react-redux"
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import HomePage from "../components/HomePage"
import Main from "../containers/Main"

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
					<Route exact path="/result/:city" component={Main} />
				</Switch>
			</BrowserRouter>
		)
	}
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
