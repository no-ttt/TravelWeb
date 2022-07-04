import React, { Component } from "react"
import { Popup, AddTravel } from 'travel_component'
import Road from "../../img/Road.jpg"

const clickBtn = <button className="arrange-travel-create-btn">建立行程＋</button>;
const userInfo = {
	src: "https://p3-tt.byteimg.com/origin/pgc-image/def93625146b46f8980a39f6e0057b2f?from=pc",
	userName: "test",
};

export default class CreateTravel extends Component {
	submit = (travelName, date, city, member, traffic, remark) => {
		const { history } = this.props
		history.push({
			pathname: "/ArrangeSchedule",
			state: { 
				travelName: travelName ,
				date: date,
				traffic: traffic,
				remark: remark,
			}
		})
	}
	render() {
		return (
			<div className="arrange-travel-layout">
				<img src={Road} className="arrange-travel-bg" />
				<div className="arrange-travel-create">
					<Popup clickBtn={clickBtn} width={380} height={550} title="建立行程">
						<AddTravel src={userInfo.src} userName={userInfo.userName} 
							returnData={this.submit}
						/>
					</Popup>
				</div>
			</div>
		)
	}
}