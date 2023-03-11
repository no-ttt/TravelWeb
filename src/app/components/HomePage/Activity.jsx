import React, { Component } from 'react'
import { ActivityList } from 'travel_component'
import nofound from '../../img/nofound.png'

export default class Activity extends Component {
	componentDidMount() {
		const { GetActivityList } = this.props
		GetActivityList(6)
	}
	
	render() {
		const { activityList } = this.props
		return (
			<div className="content-layout">
				<div className="content-title">— 熱門活動 —</div>
				{
					activityList.items.length !== 0 &&
					<ActivityList data={activityList.items} width={650} height={400}
						name={(d) => d.cName} des={(d) => d.cDes} location={(d) => (d.city + d.town)} picture={(d) => d.pictureUrl || nofound} startTime={(d) => d.startTime.split("T")[0]} endTime={(d) => d.endTime.split("T")[0]} link={(d) => "/activity/detail/" + d.oid}
					/>
				}
			</div>
		)
	}
}
