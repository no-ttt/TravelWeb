import React, { Component } from "react"
import { GoogleMap, Marker } from '@react-google-maps/api'
import { Carousel, NearbySpot } from 'travel_component'

const nearbySpot = [
	{ title: "九蛙疊像", src: "https://lh5.googleusercontent.com/p/AF1QipPCiVSNH2ExSgiHggi-eTFuUrsOR_jFPgXRaLDV=w203-h270-k-no", rating: "4", distance: "0.8" },
	{ title: "貓囒山步道", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU4tbNpmpQnKllnQw0cZKmHCS4HuEPFQKWIw&usqp=CAU", rating: "4", distance: "0.8" },
	{ title: "鹿嵩咖啡莊園", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYolvYkJPhW3AtwfsWqma1x50qESF4Q_JxPQ&usqp=CAU", rating: "4", distance: "0.8" },
	{ title: "慈恩塔", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujj0ASWdgsvT0sSfnz1JQevIz-ybBXF9ajw&usqp=CAU", rating: "4", distance: "0.8" },
	{ title: "日月潭", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzM2mAJEVBuBWt8Du0cC0VfyGVkIz5ElrJWQ&usqp=CAU", rating: "4", distance: "0.8" },
	{ title: "龍鳳宮月老廟", src: "https://lh5.googleusercontent.com/p/AF1QipP-47yYx_Zg9bUzkuQN8FuSAoPmkD7czG__do1N=w408-h306-k-no", rating: "4", distance: "0.8" },
	{ title: "九族文化村", src: "https://lh5.googleusercontent.com/p/AF1QipMa1nEaVNZuZPhJhfnXAOEnQFr1xHxbiMuHGrHR=w408-h544-k-no", rating: "4", distance: "0.8" },
	{ title: "頭社水庫", src: "https://lh5.googleusercontent.com/p/AF1QipOMi7Q0KCOTF3Cef-RUAjYc1WPh9NTfDSntUZ3Q=w426-h240-k-no", rating: "4", distance: "0.8" },
];

const Item = ({ data, width, height }) => {
	return (
		<NearbySpot title={data.title} src={data.src} rating={data.rating} distance={data.distance} />
	)
};

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
				<div className="spot-nearby-subtitle">鄰近人氣景點</div>
				<Carousel cols={4} gap={10} data={nearbySpot} width={280} height={180}>
					<Item />
				</Carousel>
			</div>
		)
	}
}