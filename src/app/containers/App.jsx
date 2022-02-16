import React, { Component } from "react"
import { connect } from "react-redux"
import HomePage from "../components/HomePage"

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true
		}
	}

	render() {
		return (
			<div>
				<HomePage />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
