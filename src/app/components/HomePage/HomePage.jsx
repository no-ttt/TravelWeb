import React, { Component } from "react"
import Header from "../Header"
import SearchField from '../../containers/HomePage/SearchField'
import Content from "../HomePage/Content"
import Footer from "../HomePage/Footer"

const feature = [
	{ icon: "dashboard", name: "地圖筆記" },
	{ icon: "schedule", name: "安排行程", link: "/ArrangeTravel" },
];

export default class HomePage extends Component {
	render() {
		return (
			<div>
				<Header feature={feature} />
				<SearchField />
				<Content />
				<Footer />
			</div>
		)
	}
}
