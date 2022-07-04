import React, { Component } from "react"
import Header from "../Header"
import SpotDetail from "./SpotDetail"
import SpotComment from "./SpotComment"
import SpotNearby from "./SpotNearby"
import SpotRecommend from "./SpotRecommend"

const feature = [
	{ icon: "dashboard", name: "地圖筆記" },
	{ icon: "schedule", name: "安排行程", link: "/ArrangeTravel" },
];

export default class SpotInfo extends Component {
	componentDidMount() {
		const { GetDetailList, match } = this.props
		GetDetailList(match.params.id)
	}

	render() {
		const { detailList } = this.props
		return (
			<div>
				<Header feature={feature} />
				<div className="spot-info-hr" />
				{
					detailList.first
					? <div className="spot-info-content">
							<SpotDetail detailList={detailList.items} />
							<div className="spot-info-hr" style={{ marginTop: "40px", width: "95%" }} />
							<SpotComment des={detailList.items.des} />
							<div className="spot-info-hr" style={{ marginTop: "40px", width: "95%" }} />
							<SpotNearby lat={detailList.items.lat} lng={detailList.items.lon} />
							<div className="spot-info-hr" style={{ marginTop: "40px", width: "95%" }} />
							<SpotRecommend />
						</div>
					: ""
				}

			</div>
		)
	}
}