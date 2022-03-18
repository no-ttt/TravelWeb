import React, { Component } from "react"
import logo from "../img/logo.png"
import { NavBar } from 'travel_component'

const feature = [
	{ icon: "dashboard", name: "地圖筆記" },
	{ icon: "schedule", name: "安排行程" },
	{ icon: "like", name: "收藏" },
	{ icon: "home", name: "首頁" },
];

export default class Header extends Component {
	render() {
		return (
			<div className="header-layer">
				<div className="header-logo-bar">
					<img src={logo} width={120} className="header-logo" />
				</div>
				<div className="header-navbar-pos">
					<NavBar feature={feature} width={300} featureSize={40} fontSize={12} />
				</div>
			</div>
		)
	}
}