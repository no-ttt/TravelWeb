import React, { Component } from "react"
import searchFieldBackground from '../img/searchFieldBackground.jpg'
import { SearchBox } from 'travel_component'

export default class SearchField extends Component {
	render() {
		const { history } = this.props

		return (
			<div className="searchfield-layout">
				<div className="searchfield-mask">
					<img src={searchFieldBackground} className="searchfield-img" />
				</div>
				<div className="searchfield-bar-pos">
					<SearchBox width={800} height={50} func={(text) => {
						history.push("/result/" + text)
					}}/>
				</div>
			</div>
		)
	}
}