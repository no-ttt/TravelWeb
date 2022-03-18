import React, { Component } from "react"
import searchFieldBackground from '../img/searchFieldBackground.jpg'
import { SearchBox } from 'travel_component'

const city = ["Taipei", "NewTaipei", "Taoyuan", "Taichung", "Tainan", "Kaohsiung", "Keelung", "Hsinchu", "HsinchuCounty", "MiaoliCounty", "ChanghuaCounty", "NantouCounty", "YunlinCounty", "ChiayiCounty", "Chiayi", "PingtungCounty", "YilanCounty", "HualienCounty",
"TaitungCounty", "KinmenCounty", "PenghuCounty", "LienchiangCounty"]

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
						if (city.includes(text)) {
							history.push("/搜尋結果/" + text)
						}	
					}}/>
				</div>
			</div>
		)
	}
}