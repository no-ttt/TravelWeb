import React, { Component } from "react"
import Header from "../components/Header"
import SearchField from '../containers/SearchField'
import Content from "../components/Content"
import Footer from "../components/Footer"

export default class HomePage extends Component {
	render() {
		return (
			<div>
				<Header />
				<SearchField />
				<Content />
				<Footer />
			</div>

		)
	}
}
