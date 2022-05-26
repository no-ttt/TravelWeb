import React, { Component } from "react"
import Header from "../Header"
import SpotDetail from "./SpotDetail"
import SpotComment from "./SpotComment"

const feature = [
	{ icon: "dashboard", name: "地圖筆記" },
	{ icon: "schedule", name: "安排行程" },
];

export default class SpotInfo extends Component {
	render() {
		return (
			<div>
				<Header feature={feature} />
				<div className="spot-info-hr" />
				<div className="spot-info-content">
					<SpotDetail />
					<div className="spot-info-hr" style={{ marginTop: "40px", width: "95%" }} />
					<SpotComment />
					<div className="spot-info-hr" style={{ marginTop: "40px", width: "95%" }} />
				</div>
			</div>
		)
	}
}