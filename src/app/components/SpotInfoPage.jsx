import React, { Component } from "react"
import Header from "../components/Header"
import LocationOnIcon from '@material-ui/icons/LocationOn'
import CallIcon from '@material-ui/icons/Call'
import ShareIcon from '@material-ui/icons/Share'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { red } from '@material-ui/core/colors'
import { Tabs } from 'travel_component';

const data = [
	{ title: "詳細資訊" },
];

const Item = () => {
	return (
		<table style={{ marginTop: "20px" }}>
			<tr className="post-info-tr">
				<td className="post-info-td">開放時間</td>
				<td className="post-info-text">全天候開放</td>
			</tr>
			<tr className="post-info-tr">
				<td className="post-info-td">門票資訊</td>
				<td className="post-info-text">免費，露營活動另計。</td>
			</tr>
			<tr className="post-info-tr">
				<td className="post-info-td">注意事項</td>
				<td className="post-info-text">
					1、紫坪上方的綠島露營區為生態保護區，禁止採集花木生物，並請維護環境整潔，讓這片美景能留與後代子孫。2、露營區目前已於2009年委由「東方之泉有限股份公司」經營， 聯絡電...
				</td>
			</tr>
			<tr className="post-info-tr">
				<td className="post-info-td">交通方式</td>
				<td className="post-info-text">
					南下：於花蓮火車站前搭乘花蓮客運，往豐濱、靜浦，或是台東方向班車，在富岡漁港站下車後步行至富岡漁港，轉乘渡船前往綠島。北上：自台東火車站前搭乘台灣好行東部海岸線或鼎東客運海線班車，在富岡漁港站下車後步行至富岡漁港，轉乘渡船前往綠島。綠島：島上設有環島公車，搭乘公車至朝日溫泉下車，往前步行約5分鐘(查詢電話：089-672510)。。
				</td>
			</tr>
			<tr className="post-info-tr">
				<td className="post-info-td">停車場</td>
				<td className="post-info-text">搭乘太平線公車旅客請將車輛停放在指示位置</td>
			</tr>
		</table>
	)
};

export default class HomePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			like: false,
			select: data[0],
		}
	}

	render() {
		return (
			<div>
				<Header />
				<div className="spot-info-hr"></div>
				<div className="post-info-layout">
					<div style={{ width: "90%" }}>
						<div className="post-info-header">
							<div className="post-info-spot-name">紫坪</div>
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
								<a href="https://www.google.com.tw/maps/@22.6339397,121.4977144,15z" target="_blank" style={{ color: "black", textDecoration: "none" }}>台東縣951綠島鄉溫泉路256號</a>
							</div>
							<div className="post-info-spot-des-content">
								<CallIcon />
								<div>886-8-9672026</div>
							</div>
						</div>
						<div className="post-info-detail">
							<img src="https://www.eastcoast-nsa.gov.tw/image/426/640x480" alt="紫坪" width={"200%"} className="post-info-img-rwd" />
							<div className="post-info-tb">
								<Tabs data={data} getTitle={(d) => d.title} clickFunc={(data) => this.setState({ select: data })}> 
									<Item />
								</Tabs>
							</div>
						</div>
					</div>
				</div>
				<div className="spot-info-hr"></div>
			</div>
		)
	}
}