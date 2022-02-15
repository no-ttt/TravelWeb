import React, { Component } from "react"
import { connect } from "react-redux"
import Main from "./Main"
import Main_1 from "./Main_1"
import HomePage from "./HomePage"

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
				{/*<button onClick={() => this.setState({ open: !this.state.open })}>2131</button>
				<div style={{ display: "flex", justifyContent: "space-around" }}>

					{this.state.open ? <Main></Main> : <Main_1></Main_1>}
		</div>*/}
				<HomePage />
			</div>

		)
	}
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
