import React, { Component } from "react"
import logo from "../img/logo.png"
import { SearchBox } from 'travel_component'
import { NavBar } from 'travel_component'

const title = [
	{ icon: "dashboard", name: "地圖筆記" }, 
	{ icon: "schedule", name: "安排行程" },
	{ icon: "like", name: "收藏" },
	{ icon: "home", name: "首頁" },
];

export default class Header extends Component {
	render() {
		return (
			<div className="logo-bar">
				<img src={logo} width={120} className="logo" />
				<div className="searchbar-pos">
					<SearchBox />
				</div>
					<div style={{ display: "flex", justifyContent: "space-around" }} className="navbar-layer">
					{title.map((t) =>
					<NavBar icon={t.icon} name={t.name} />)}
					</div>
			</div>
		)
	}
}