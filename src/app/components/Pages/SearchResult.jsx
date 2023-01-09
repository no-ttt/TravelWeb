import React, { Component } from 'react'
import Header from '../Header'
import HotSpot from '../../containers/SearchResult/HotSpot'
import Main from '../../containers/SearchResult/Main'

export default class SearchResult extends Component {
	render() {
		const { match } = this.props
		return (
			<div>
				<Header />
				<div className="divider" />
				<HotSpot city={match.params.city} />
				<div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
					<div className="divider" style={{ width: "80%" }} />
				</div>
				<Main city={match.params.city} />
			</div>
		)
	}
}
