import React, { Component } from 'react'
import Header from '../../containers/Header'
import ActivityDetail from '../ActivityInfo/ActivityDetail'
import Nearby from '../../containers/SpotInfo/Nearby'

export default class ActivityInfo extends Component {
	componentDidMount() {
		const { GetActivityDetailList, match } = this.props
		GetActivityDetailList(match.params.id)
	}

	render() {
		const { activityDetailList } = this.props
		return (
			<div style={{ marginBottom: "80px" }}>
				<Header />
				<div className="divider" />
				<ActivityDetail detailList={activityDetailList.items} />
				<div style={{ display: "flex", justifyContent: "center", margin: "50px 0 50px 0" }}>
					<div className="divider" style={{ width: "78%" }} />
				</div>
				{activityDetailList.items.positionLat && <Nearby center={{ lat: activityDetailList.items.positionLat, lng: activityDetailList.items.positionLon }} />}
			</div>
		)
	}
}
