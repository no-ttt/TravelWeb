import React, { Component } from "react"
import { Link } from 'react-router-dom'
import searchFieldBackground from '../img/searchFieldBackground.jpg'
import { SearchBox } from 'travel_component'

const city = ["Taipei", "NewTaipei", "Taoyuan", "Taichung", "Tainan", "Kaohsiung", "Keelung", "Hsinchu", "HsinchuCounty", "MiaoliCounty", "ChanghuaCounty", "NantouCounty", "YunlinCounty", "ChiayiCounty", "Chiayi", "PingtungCounty", "YilanCounty", "HualienCounty",
"TaitungCounty", "KinmenCounty", "PenghuCounty", "LienchiangCounty"]
const city2 = ["台北", "新北", "桃園", "台中", "台南", "高雄", "基隆", "新竹", "新竹市", "苗栗", "彰化", "南投", "雲林", "嘉義市", "嘉義", "屏東", "宜蘭", "花蓮", "台東", "金門", "澎湖", "連江"]

export default class SearchField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keyWord: "",
		}
	};
	render() {
		const { GetTourismList } = this.props
		return (
			<div className="searchfield-layout">
				<div className="searchfield-mask">
					<img src={searchFieldBackground} className="searchfield-img" />
				</div>
				<div className="searchfield-bar-pos">
					<SearchBox width={600} height={50} func={(text) => {
						if (city.includes(text)) {
							// GetTourismList(city[city2.indexOf(text)])
							this.setState({
								keyWord: text,
							})
						}	
						}}
					/>

					<Link to={{
						pathname: '/搜尋結果/' + this.state.keyWord,
						
						}}>
							<div>點我</div>
					</Link>
				</div>
			</div>
		)
	}
}