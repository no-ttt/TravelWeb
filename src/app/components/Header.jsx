import React, { Component } from "react"
import logo from "../img/logo.png"
import { SearchBox } from 'travel_component'
import { NavBar } from 'travel_component'

const feature = [
	{ icon: "dashboard", name: "地圖筆記" },
	{ icon: "schedule", name: "安排行程" },
	{ icon: "like", name: "收藏" },
	{ icon: "home", name: "首頁" },
];

export default class Header extends Component {
	render() {
		const { GetTourismList } = this.props
		let city = ["Taipei", "NewTaipei", "Taoyuan", "Taichung", "Tainan", "Kaohsiung", "Keelung", "Hsinchu", "HsinchuCounty", "MiaoliCounty", "ChanghuaCounty", "NantouCounty", "YunlinCounty", "ChiayiCounty", "Chiayi", "PingtungCounty", "YilanCounty", "HualienCounty",
			"TaitungCounty", "KinmenCounty", "PenghuCounty", "LienchiangCounty"]
		let city2 = ["台北", "新北", "桃園", "台中", "台南", "高雄", "基隆", "新竹", "新竹市", "苗栗", "彰化", "南投", "雲林", "嘉義市", "嘉義", "屏東", "宜蘭", "花蓮", "台東", "金門", "澎湖", "連江"]
		
		return (
			<div className="header-layer">
				<div className="logo-bar">
					<img src={logo} width={120} className="logo" />
					<div className="searchbar-pos">
						<SearchBox width={400} height={35} func={(text) => {
							if (city2.includes(text))
								GetTourismList(city[city2.indexOf(text)])
							}}
						/>
					</div>
				</div>
				<div className="navbar-pos">
					<NavBar feature={feature} width={300} iconSize={40} fontSize={12} />
				</div>
			</div>
		)
	}
}