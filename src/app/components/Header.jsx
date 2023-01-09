import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, NavBar } from 'travel_component'
import logo from '../img/logo.png'

const feature = [
	{ icon: "like", name: "收藏", link: "/collection" },
	{ icon: "dashboard", name: "地圖筆記", link: "#" },
	{ icon: "schedule", name: "安排行程", link: "/arrangement" },
];

export default class Header extends Component {
	render() {
		return (
			<div style={{ marginBottom: "80px" }}>
				<div className="header">
					<div className="header-layout">
						<a href="/">
							<img src={logo} alt="logo" width={100} />
						</a>
						<NavBar feature={feature} width={350}>
							<Link
								to={{ pathname: "/user" }}
								className="main-detail-link"
							>
								<Avatar
									alt="蠟筆小新"
									src="https://p3-tt.byteimg.com/origin/pgc-image/def93625146b46f8980a39f6e0057b2f?from=pc"
									width={45}
									hover={true}
								/>
							</Link>
						</NavBar>
					</div>
				</div>
			</div>
		)
	}
}
