import React, { Component } from "react"
import { connect } from "react-redux"
import Main from "./Main"

export class App extends Component {
	render() {
		return (
			<div style={{ display: "flex", justifyContent: "space-around" }}>
				<Main></Main>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
