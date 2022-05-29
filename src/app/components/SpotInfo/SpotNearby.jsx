import React, { Component } from "react"
import { GoogleMap, Marker } from '@react-google-maps/api'

export default class SpotNearby extends Component {
	constructor(props) {
		super(props)
		this.state = {
			center: {
				lat: Number(this.props.lat), 
				lng: Number(this.props.lng)
			},
			zoom: 14
		}
	}

  render() {
		const { center, zoom } = this.state
		return (
			<div style={{ width: "85%" }}>
				<div className="spot-nearby-title">附近景點</div>
				<GoogleMap
					mapContainerStyle={{ height: '80vh' }}
					center={center}
					zoom={zoom}
				>
					<Marker position={center} />
				</GoogleMap>
			</div>
		)
	}
}