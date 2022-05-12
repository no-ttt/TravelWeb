import React, { Component } from "react"
import logo from "../img/logo.png"
import { Avatar, NavBar } from 'travel_component'

export default class Header extends Component {
	render() {
		const { feature } = this.props;
		return (
			<div className="header-layer">
				<img src={logo} width={120} />
				<div style={{ display: "flex", flexDirection: "row" }}>
					<NavBar feature={feature} width={75 * feature.length} featureSize={45} fontSize={12} />
					<div style={{ marginLeft: "20px" }}>
						<Avatar
							alt="蠟筆小新"
							src="https://p3-tt.byteimg.com/origin/pgc-image/def93625146b46f8980a39f6e0057b2f?from=pc"
							width={45}
						/>
					</div>
				</div>
			</div>
		)
	}
}