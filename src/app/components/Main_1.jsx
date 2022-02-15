import React, { Component } from "react"
import { Post } from "travel_component"
import nofound from "../img/nofound.png"
export default class Main extends Component {
	componentDidMount() {
		const { GetTourismList } = this.props
		GetTourismList()
	}
	render() {
		const { tourismList, GetTourismList } = this.props
		return (
			<div>				
				<div style={{ display: "flex", flexWrap: "wrap" }}>
					{tourismList.items.map((d) => (
						<div style={{ margin: "5px" }} key={d.ScenicSpotID}>
							<Post 
								title={d.ScenicSpotName}
								src={d.Picture.PictureUrl1 || nofound}
								time={d.Class1}
								addr={d.City}
								width={220}
								height={220}
								fontSize={16}
							></Post>
						</div>
					))}
				</div>
			</div>
		)
	}
}
