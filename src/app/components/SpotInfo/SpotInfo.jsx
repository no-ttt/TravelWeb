import React, { Component } from "react"
import Header from "../Header"
import SpotDetail from "./SpotDetail"

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
				<div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
					<SpotDetail />
					<div className="spot-info-hr" />
					
				</div>
			</div>
		)
	}
}