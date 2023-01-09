import React, { Component } from 'react'
import { Tabs, Popup } from 'travel_component'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import IosShareIcon from '@mui/icons-material/IosShare'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'

const SpotTab = [{ title: "詳細資訊", opt: 1 }, { title: "關於交通", opt: 2 }]
const clickBtn = <div className="spot-info-btn">More</div>;

const Item = ({ data, type, opt }) => {
	if (type === 5) {
		if (opt === 1) {
			return (
				<table className="spot-info-tb-items">
					{
						data.cDes != null &&
						<tr className="spot-info-tr">
							<td className="spot-info-td">景點介紹</td>
							<td className="spot-info-text">
								<div className="spot-info-content">{data.cDes}</div>
								<Popup clickBtn={clickBtn} width={750} height={500} title="景點簡介">
									<div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
										<div style={{ lineHeight: "24px" }}>{data.cDes}</div>
									</div>
								</Popup>
							</td>
						</tr>
					}
					{
						data.opentime != null &&
						<tr className="spot-info-tr">
							<td className="spot-info-td">開放時間</td>
							<td className="spot-info-text">{data.opentime}</td>
						</tr>
					}
					{
						data.ticketInfo != null &&
						<tr className="spot-info-tr">
							<td className="spot-info-td">門票資訊</td>
							<td className="spot-info-text">{data.ticketInfo}</td>
						</tr>
					}
					{
						data.remarks != null &&
						<tr className="spot-info-tr">
							<td className="spot-info-td">注意事項</td>
							<td className="spot-info-text">{data.remarks}</td>
						</tr>
					}
				</table>
			)
		}
		else if (opt === 2) {
			return (
				<table className="spot-info-tb-items">
					{
						data.travelInfo != null &&
						<tr className="spot-info-tr">
							<td className="spot-info-td">交通方式</td>
							<td className="spot-info-text">{data.travelInfo}</td>
						</tr>
					}
					{
						data.parkingInfo != null &&
						<tr className="spot-info-tr">
							<td className="spot-info-td">停車資訊</td>
							<td className="spot-info-text">{data.parkingInfo}</td>
						</tr>
					}
				</table>
			)
		}
	}
	else if (type === 6) {
		if (opt === 1) {
			return (
				<table className="spot-info-tb-items">
					{
						data.cDes != null &&
						<tr className="spot-info-tr">
							<td className="spot-info-td">餐廳介紹</td>
							<td className="spot-info-text">
								<div className="spot-info-content">{data.cDes}</div>
								<Popup clickBtn={clickBtn} width={750} height={500} title="餐廳簡介">
									<div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
										<div style={{ lineHeight: "24px" }}>{data.cDes}</div>
									</div>
								</Popup>
							</td>
						</tr>
					}
					{
						data.opentime != null &&
						<tr className="spot-info-tr">
							<td className="spot-info-td">開放時間</td>
							<td className="spot-info-text">{data.opentime}</td>
						</tr>
					}
					{
						data.parkingInfo != null &&
						<tr className="spot-info-tr">
							<td className="spot-info-td">停車資訊</td>
							<td className="spot-info-text">{data.parkingInfo}</td>
						</tr>
					}
				</table>
			)
		}
		else if (opt === 2) {
			return (
				<table className="spot-info-tb-items">
					{
						data.parkingInfo != null &&
						<tr className="spot-info-tr">
							<td className="spot-info-td">停車資訊</td>
							<td className="spot-info-text">{data.parkingInfo}</td>
						</tr>
					}
				</table>
			)
		}
	}
	else if (type === 7) {
		if (opt === 1) {
			return (
				<table className="spot-info-tb-items">
					{
						data.cDes != null &&
						<tr className="spot-info-tr">
							<td className="spot-info-td">住宿介紹</td>
							<td className="spot-info-text">
								<div className="spot-info-content">{data.cDes}</div>
								<Popup clickBtn={clickBtn} width={750} height={500} title="住宿簡介">
									<div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
										<div style={{ lineHeight: "24px" }}>{data.cDes}</div>
									</div>
								</Popup>
							</td>
						</tr>
					}
					{
						data.serviceInfo != null &&
						<tr className="spot-info-tr">
							<td className="spot-info-td">服務設施</td>
							<td className="spot-info-text">{data.serviceInfo}</td>
						</tr>
					}
					{
						data.spec != null &&
						<tr className="spot-info-tr">
							<td className="spot-info-td">房間資訊</td>
							<td className="spot-info-text">{data.spec}</td>
						</tr>
					}
					{
						data.grade != null &&
						<tr className="spot-info-tr">
							<td className="spot-info-td">等級</td>
							<td className="spot-info-text">{data.grade}</td>
						</tr>
					}
				</table>
			)

		}
		else if (opt === 2) {
			return (
				<table className="spot-info-tb-items">
					{
						data.parkingInfo != null &&
						<tr className="spot-info-tr">
							<td className="spot-info-td">停車資訊</td>
							<td className="spot-info-text">{data.parkingInfo}</td>
						</tr>
					}
				</table>
			)
		}
	}
	else return (<div>no found</div>)
};

export default class SpotDetail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			select: 1
		}
	}
	render() {
		const { detailList } = this.props
		const { select } = this.state

		return (
			<div className="spot-detail-layout">
				<div className="spot-detail-header">
					<div className="spot-detail-title">{detailList.cName}</div>
					<div className="spot-detail-icon">
						<FavoriteBorderIcon />
						<IosShareIcon />
					</div>
				</div>
				<div className="spot-detail-info-layout">
					<div className="spot-detail-main-info">
						<div className="spot-detail-loc">
							<LocationOnIcon />
							<div>{detailList.address}</div>
						</div>
						<div className="spot-detail-tel">
							<LocalPhoneIcon />
							<div>{detailList.phone}</div>
						</div>
					</div>
					<div />
				</div>
				<div className="spot-detail-other-info">
					<img src={detailList.pictureUrl} alt={detailList.cName} className="spot-detail-img" />
					<div className="spot-info-tb">
						<Tabs data={SpotTab} tab={(data) => data.title} tabPosCenter={false} setCurrent={(data) => this.setState({ select: data.opt })}>
							<Item data={detailList} type={detailList.type} opt={select} />
						</Tabs>
						<div className="spot-pin-row">
							{
								detailList.tags !== null && detailList.tags !== undefined &&
								detailList.tags.split(',').map((tag, i) => (
									<div key={i} className="spot-pin">{tag.split('類')[0]}</div>
								))
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
