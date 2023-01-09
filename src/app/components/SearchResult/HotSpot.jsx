import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Post, Carousel } from 'travel_component'
  
let Item = ({ data, width, height }) => {
	return (
		<Link
			to={{ pathname: "/spot/detail/" + data.oid }}
			target="_blank"
			className="main-detail-link"
		>
			<Post name={data.spotName} src={data.pictureUrl} fontSize={16} width={width} height={height} borderStyle="Square" />
		</Link>
	)
};

export default class HotSpot extends Component {
	componentDidMount() {
		const { GetHotSpotList, city } = this.props
		GetHotSpotList(city)
	}

	render() {
		const { city, hotSpotList } = this.props
		return (
			<div className="hotspot-layout">
				<div className="hotspot-title">{city} 熱門景點</div>
				<Carousel cols={5} gap={15} data={hotSpotList.items} width={220} height={220}>
					<Item />
				</Carousel>
			</div>
		)
	}
}
