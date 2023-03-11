import React, { Component } from 'react'
import { Avatar, NavBar, Popup } from 'travel_component'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import logo from '../img/logo.png'
import Login from './HomePage/Login'
import ConfettiExplosion from 'react-confetti-explosion'
import CelebrationIcon from '@mui/icons-material/Celebration'
import CakeIcon from '@mui/icons-material/Cake'
import FaceIcon from '@mui/icons-material/Face'
import LogoutIcon from '@mui/icons-material/Logout'
import { apiurl } from "Config"

const feature = [
	{ icon: "like", name: "收藏", link: "/collection" },
	{ icon: "dashboard", name: "地圖筆記", link: "#" },
	{ icon: "schedule", name: "安排行程", link: "/arrangement" },
];

const clickBtn = <div className="header-login-btn">Sign In</div>;

export default class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			anchorEl: null,
			show: false,
		}
	}

	componentDidMount() {
		const { GetLoginList } = this.props
		GetLoginList()
	}

	handleClick = (event) => {
		const { loginList } = this.props
    this.setState({
			anchorEl: event.currentTarget,
		})

		let today = new Date()
		if (loginList.items.birthday === null) return;
		if (loginList.items.birthday.split("/")[1] == today.getMonth() + 1 && loginList.items.birthday.split("/")[2] == today.getDate()) {
			this.setState({
				show: true
			})
		}
  }

	handleClose = () => {
		this.setState({
			anchorEl: null,
			show: false
		})
	}

	render() {
		const { loginList } = this.props
		const { anchorEl, show } = this.state
		let today = new Date()
		if (loginList.items.length !== 0) {
			return (
				<div style={{ marginBottom: "80px" }}>
					<div className="header">
						<div className="header-layout">
							<a href="/home">
								<img src={logo} alt="logo" width={100} />
							</a>
							{
								show && setTimeout(() => { document.getElementById("birth").style.display = "none" }, 2000) &&
								<div>
									<ConfettiExplosion duration={3000} />
									<div id="birth">Happy Birthday!</div>
								</div>
							}
							{
								loginList.loginStaus === "login" ?
								<NavBar feature={feature} width={320}>
									<div style={{ marginLeft: 20 }}>
										<button onClick={this.handleClick}>
											<Avatar
												alt={loginList.items.cName}
												src={loginList.avatar}
												width={50}
												hover={true}
											/>
										</button>
										<Menu
											anchorEl={anchorEl}
											open={Boolean(anchorEl)}
											onClose={this.handleClose}
											disableScrollLock={true}
										>
											<MenuItem>
												<ListItemIcon>
													{
														loginList.items.birthday !== null &&
														loginList.items.birthday.split("/")[1] == today.getMonth() + 1 && loginList.items.birthday.split("/")[2] == today.getDate()
														? <CakeIcon style={{ color: "orange" }} />
														: <CelebrationIcon style={{ color: "red" }} />
													}
												</ListItemIcon>
												<ListItemText>嗨！{loginList.items.cName}</ListItemText>
											</MenuItem>
											<Divider />
											<MenuItem onClick={() => location.replace("/user")}>
												<ListItemIcon><FaceIcon /></ListItemIcon>
												<ListItemText>個人資訊</ListItemText>
											</MenuItem>
											<MenuItem onClick={() => location.replace(`${apiurl}/OAuth/logout`)}>
												<ListItemIcon><LogoutIcon /></ListItemIcon>
												<ListItemText>登出</ListItemText>
											</MenuItem>
										</Menu>
									</div>
								</NavBar>
								: <Popup clickBtn={clickBtn} width={320} height={380} close={true}>
										<Login />
									</Popup>
							}
						</div>
					</div>
				</div>
			)
		} else return (<div></div>);
	}
}
