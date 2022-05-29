import React, { Component } from "react"
import LocationOnIcon from '@material-ui/icons/LocationOn'
import CallIcon from '@material-ui/icons/Call'
import ShareIcon from '@material-ui/icons/Share'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { red } from '@material-ui/core/colors'
import { Tabs } from 'travel_component'
import nofound from "../../img/nofound.png"

const data = [
	{ title: "詳細資訊" },
];

const Item = ({ data }) => {
	return (
		<table style={{ marginTop: "20px" }}>
			{
				data.opentime !== "" &&
				<tr className="post-info-tr">
					<td className="post-info-td">開放時間</td>
					<td className="post-info-text">{data.opentime}</td>
				</tr>
			}
			{
				data.ticket !== "" &&
				<tr className="post-info-tr">
					<td className="post-info-td">門票資訊</td>
					<td className="post-info-text">{data.ticket}</td>
				</tr>
			}
			{
				data.remarks !== "" &&
				<tr className="post-info-tr">
					<td className="post-info-td">注意事項</td>
					<td className="post-info-text">{data.remarks}</td>
				</tr>
			}
			{
				data.travelInfo !== "" &&
				<tr className="post-info-tr">
					<td className="post-info-td">交通方式</td>
					<td className="post-info-text">{data.travelInfo}</td>
				</tr>
			}
			{
				data.parking !== "" &&
				<tr className="post-info-tr">
					<td className="post-info-td">停車場</td>
					<td className="post-info-text">{data.parking}</td>
				</tr>
			}
		</table>
	)
};

export default class SpotDetail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			like: false,
			select: data[0],
		}
	}

	render() {
		const { detailList } = this.props
		return (
			<div className="post-info-layout">
				<div style={{ width: "95%" }}>
					<div className="post-info-header">
						<div className="post-info-spot-name">{detailList.name}</div>
						<div className="post-info-header-icon">
							<button><ShareIcon /></button>
							<button onClick={() => this.setState({ like: !this.state.like })}>
								{ !this.state.like
									? <FavoriteBorderIcon />
									: <FavoriteIcon style={{ color: red[500] }} />
								}
							</button>
						</div>
					</div>
					<div className="post-info-spot-des">
						<div className="post-info-spot-des-content">
							<LocationOnIcon />
							<a href="https://www.google.com.tw/maps/@22.6339397,121.4977144,15z" target="_blank" style={{ color: "black", textDecoration: "none" }}>{detailList.addr}</a>
						</div>
						<div className="post-info-spot-des-content">
							<CallIcon />
							<div>{detailList.phone}</div>
						</div>
					</div>
					<div className="post-info-detail">
						<img src={detailList.pictureUrl || nofound} alt={detailList.name} className="post-info-detail-pic" /> 
						<div className="post-info-tb">
							<Tabs data={data} getTitle={() => "詳細資訊"} clickFunc={(data) => this.setState({ select: data })} tabPosCenter={false}> 
								<Item data={detailList} />
							</Tabs>
						</div>
					</div>
				</div>
			</div>
		)
	}
}