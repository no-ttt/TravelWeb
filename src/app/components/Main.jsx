import React, { Component } from "react"
import nofound from "../img/nofound.png"
import { TravelCard } from "travel_component"

export default class Main extends Component {
	componentDidMount() {
	
		const { GetTourismList, match } = this.props
		console.log(match.params.city)
		GetTourismList(match.params.city)
	}

	render() {
		const { tourismList, GetTourismList } = this.props
		return (
			<div style={{ marginTop: "20px" }}>
			
				<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
					{tourismList.items.map((d) => (
						<div style={{ margin: "5px" }} key={d.ScenicSpotID}>
							<TravelCard
								title={d.ScenicSpotName}
								src={d.Picture.PictureUrl1 || nofound}
								time={d.Class1}
								addr={d.City}
								width={220}
								height={220}
								fontSize={16}
							></TravelCard>
						</div>
					))}
				</div>
			</div>
		)
	}
}
