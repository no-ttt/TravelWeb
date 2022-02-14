import React, { Component } from "react"
import { Post } from "travel_component"
import nofound from "../img/nofound.png"
import { TravelCard } from "travel_component"
export default class Main extends Component {
	componentDidMount() {
		const { GetTourismList } = this.props
		GetTourismList()
	}
	render() {
		const { tourismList, GetTourismList } = this.props
		return (
			<div>
				<div>
					<select onChange={(e) => GetTourismList(e.target.value)}>
						<option value="Taipei">Taipei</option>
						<option value="NewTaipei">NewTaipei</option>
						<option value="Taoyuan">Taoyuan</option>
						<option value="Taichung">Taichung</option>
						<option value="Tainan">Tainan</option>
						<option value="Kaohsiung">Kaohsiung</option>
						<option value="Keelung">Keelung</option>
						<option value="Hsinchu">Hsinchu</option>
						<option value="HsinchuCounty">HsinchuCounty</option>
						<option value="MiaoliCounty">MiaoliCounty</option>
						<option value="ChanghuaCounty">ChanghuaCounty</option>
						<option value="NantouCounty">NantouCounty</option>
						<option value="YunlinCounty">YunlinCounty</option>
						<option value="ChiayiCounty">ChiayiCounty</option>
						<option value="Chiayi">Chiayi</option>
						<option value="PingtungCounty">PingtungCounty</option>
						<option value="YilanCounty">YilanCounty</option>
						<option value="HualienCounty">HualienCounty</option>
						<option value="TaitungCounty">TaitungCounty</option>
						<option value="KinmenCounty">KinmenCounty</option>
						<option value="PenghuCounty">PenghuCounty</option>
						<option value="LienchiangCounty">LienchiangCounty</option>
					</select>
				</div>
				<div style={{ display: "flex", flexWrap: "wrap" }}>
					{tourismList.items.map((d) => (
						<div style={{ margin: "5px" }} key={d.ScenicSpotID}>
							<TravelCard
								title={d.ScenicSpotName}
								src={d.Picture.PictureUrl1 || nofound}
								time={d.Class1}
								addr={d.City}
								width={220}
								height={220}
								fontSize={16}
							></TravelCard>
						</div>
					))}
				</div>
			</div>
		)
	}
}
