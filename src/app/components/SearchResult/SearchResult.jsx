import React, { Component } from "react"
import Header from "../Header"
import HotSpot from "./HotSpot"
import Main from '../../containers/SearchResult/Main'

const feature = [
	{ icon: "dashboard", name: "地圖筆記" },
	{ icon: "schedule", name: "安排行程", link: "/ArrangeTravel" },
];

export default class SearchResult extends Component {
    render() {
			const { match } = this.props
			return (
				<div>
					<Header feature={feature} />
					<div className="result-hr" />
					<div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
						<HotSpot city={match.params.city} />
						<div className="result-hot-spot-hr" />
						<Main city={match.params.city} />
					</div>
				</div>
			)
    }
}