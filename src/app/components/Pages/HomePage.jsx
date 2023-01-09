import React, { Component } from 'react'
import Header from '../Header'
import SearchField from '../../containers/HomePage/SearchField'
import Content from '../HomePage/Content'
import Footer from '../HomePage//Footer'

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
