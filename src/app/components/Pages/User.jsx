import React, { Component } from 'react'
import Header from '../Header'
import { Avatar, Tabs } from 'travel_component'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import DateRangeIcon from '@mui/icons-material/DateRange'
import CakeIcon from '@mui/icons-material/Cake'
import EmailIcon from '@mui/icons-material/Email'

const data = [
	{ title: "動態消息", type: "1" },
	{ title: "旅程", type: "2" },
	{ title: "貼文", type: "3" },
];
 
let Item = () => {
	return (
		<div className="user-intro-block">
			<div className="user-intro">
				<div className="user-intro-title">簡介</div>
				<div className="user-intro-content">
					<LocationOnIcon fontSize="small" style={{ color: "#545454" }} />
					<div className="user-intro-content-txt">台灣高雄</div>
				</div>
				<div className="user-intro-content">
					<DateRangeIcon fontSize="small" style={{ color: "#545454" }} />
					<div className="user-intro-content-txt">2022/12/31 加入！</div>
				</div>
				<div className="user-intro-content">
					<CakeIcon fontSize="small" style={{ color: "#545454" }} />
					<div className="user-intro-content-txt">2000/03/29</div>
				</div>
				<div className="user-intro-content">
					<EmailIcon fontSize="small" style={{ color: "#545454" }} />
					<div className="user-intro-content-txt">dear890329@gmail.com</div>
				</div>
				<div className="user-self-intro">嗨～</div>
			</div>
			<div className="user-dynamic-news">
				<div>發布第一則消息！</div>
			</div>
		</div>
	)
};

export default class User extends Component {
	constructor(props) {
		super(props)
		this.state = {
			select: 1,
		}
	}
	render() {
		return (
			<div>
				<Header />
				<div className="user-bg">
					<div className="user-info">
						<div className="user-account-block">
							<div className="user-info-account">
								<Avatar
									alt="蠟筆小新"
									src="https://p3-tt.byteimg.com/origin/pgc-image/def93625146b46f8980a39f6e0057b2f?from=pc"
									width={100}
									hover={false}
								/>
								<div className="user-info-detail">
									<div>
										<div className="user-info-txt">投稿</div>
										<div className="user-info-number">0</div>
									</div>
									<div>
										<div className="user-info-txt">粉絲</div>
										<div className="user-info-number">0</div>
									</div>
									<div>
										<div className="user-info-txt">追蹤中</div>
										<div className="user-info-number">0</div>
									</div>
								</div>
							</div>
							<button className="user-edit-file-btn">編輯個人檔案</button>
						</div>
						<Tabs data={data} tab={(data) => data.title} setCurrent={(data) => this.setState({ select: data.type })} tabPosCenter={false}> 
							<Item />
						</Tabs>
					</div>
				</div>
			</div>
		)
	}
}
