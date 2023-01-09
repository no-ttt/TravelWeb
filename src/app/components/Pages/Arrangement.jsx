import React, { Component } from 'react'
import Header from '../Header'
import ArrangeField from '../Arrangement/ArrangeField'
import Content from '../Arrangement/Content'

export default class Arrangement extends Component {
	render() {
		return (
			<div style={{ marginBottom: "80px" }}>
				<Header />
				<ArrangeField />
				<Content />
			</div>
		)
	}
}
