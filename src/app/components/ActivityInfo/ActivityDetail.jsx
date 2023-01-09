import React, { Component } from 'react'
import { Tabs } from 'travel_component'

const tab = [{ title: "詳細資訊", opt: 1 }, { title: "其他", opt: 2 }]
const tabIntro = [{ title: "活動介紹", opt: 1 }]


const Item = ({ data, opt }) => {
	if (opt === 1) {
		return (
			<table className="spot-info-tb-items">
				{
					data.startTime != null &&
					<tr className="spot-info-tr">
						<td className="spot-info-td">活動時間</td>
						<td className="spot-info-text">{data.startTime.split("T")[0] + " ~ " + data.endTime.split("T")[0]}</td>
					</tr>
				}
				{
					data.organizer != null &&
					<tr className="spot-info-tr">
						<td className="spot-info-td">主辦單位</td>
						<td className="spot-info-text">{data.organizer}</td>
					</tr>
				}
				{
					data.particpation != null &&
					<tr className="spot-info-tr">
						<td className="spot-info-td">活動對象</td>
						<td className="spot-info-text">{data.particpation}</td>
					</tr>
				}
				{
					data.address != null &&
					<tr className="spot-info-tr">
						<td className="spot-info-td">地址</td>
						<td className="spot-info-text">{data.address}</td>
					</tr>
				}
				{
					data.phone != null &&
					<tr className="spot-info-tr">
						<td className="spot-info-td">電話</td>
						<td className="spot-info-text">{data.phone}</td>
					</tr>
				}
				{
					data.charge != null &&
					<tr className="spot-info-tr">
						<td className="spot-info-td">收費</td>
						<td className="spot-info-text">{data.charge}</td>
					</tr>
				}
			</table>
		)
	}
	else if (opt === 2) {
		return (
			<table className="spot-info-tb-items">
				{
					data.cycle != null &&
					<tr className="spot-info-tr">
						<td className="spot-info-td">活動週期</td>
						<td className="spot-info-text">{data.cycle}</td>
					</tr>
				}
				{
					data.remarks != null &&
					<tr className="spot-info-tr">
						<td className="spot-info-td">備注</td>
						<td className="spot-info-text">{data.remarks}</td>
					</tr>
				}
			</table>
		)
	}
}

const Intro = ({ des }) => {
	return (
		<div>{des}</div>
	)
}

export default class ActivityDetail extends Component {
	constructor(props) {
		super(props)
		this.state = { 
			select: 1 
		}
	}

	render() {
		const { detailList } =this.props
		const { select } = this.state

		return (
			<div className="activity-info-detail">
				<div className="activity-info-detail-layout">
					<div className="activity-info-detail-title">{detailList.cName}</div>
					<div className="activity-info-detail-other-info">
						<img src={detailList.pictureUrl} alt={detailList.cName} className="activity-info-detail-img" />
						<div className="activity-info-tb">
							<Tabs data={tab} tab={(data) => data.title} tabPosCenter={false} setCurrent={(data) => this.setState({ select: data.opt })}>
								<Item data={detailList} opt={select} />
							</Tabs>
							<div className="activity-pin-row">
								{
									detailList.tags !== null && detailList.tags !== undefined &&
									detailList.tags.split(',').map((tag, i) => (
										<div key={i} className="activity-pin">{tag}</div>
									))
								}
							</div>
						</div>
					</div>
				</div>
				<div className="activity-info-intro">
					<div className="activity-info-intro-title">活動介紹</div>
					<div className="activity-info-intro-des">{detailList.cDes}</div>
				</div>
			</div>
		)
	}
}
