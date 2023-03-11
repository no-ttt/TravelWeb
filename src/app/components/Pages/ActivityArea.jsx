import React, { Component } from 'react'
import Header from '../../containers/Header'
import ActivityAbout from '../../containers/ActivityArea/ActivityAbout'

export default class ActivityArea extends Component {
	render() {
		const { match } = this.props
		return (
			<div>
				<Header />
				<div className="divider" />
				<ActivityAbout area={match.params.area} />
			</div>
		)
	}
}
