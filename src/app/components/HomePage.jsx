import React, { Component } from "react"
import Header from "../containers/Header"
import Main from '../containers/Main'

export default class HomePage extends Component {
	render() {
		return (
			<div>
				<Header />
				<Main />
			</div>

		)
	}
}
