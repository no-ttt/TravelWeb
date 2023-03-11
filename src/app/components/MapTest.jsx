import React, { Component } from "react"
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoibm91c2VydXNlIiwiYSI6ImNsODR2dnJydTAxNXYzdnBzZWUwdWZkY3QifQ.TiXa2TtlGjSLY2gXNphj-w'

export default class MapTest extends Component {
	constructor(props) {
    super(props);
    this.state = {
			start: [120.9270706177, 23.9414100647],
			end: [120.663848877, 24.1512298584],
      zoom: 10,
			map: null
    };
    this.mapContainer = React.createRef()
	}

	componentDidMount() {
    const { start, end, zoom } = this.state
		const { GetPathNearbySpotList } = this.props
    const map = new mapboxgl.Map ({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: start,
      zoom: zoom
    })

		this.setState({ map: map })

		GetPathNearbySpotList(start[1], start[0], end[1], end[0], 1)

		new mapboxgl.Marker({
			color: "red",
		})
			.setLngLat(start)
			.addTo(map)

		new mapboxgl.Marker({
			color: "red",
		})
			.setLngLat(end)
			.addTo(map)

		map.on('load', () => {
			this.getRoute(map)
		})
	}

	searchPoint = () => {
		const { pathNearbySpotList } = this.props
		const { map, start, end } = this.state

		map.addSource('line', {
			'type': 'geojson',
			'data': {
				'type': 'Feature',
				'properties': {},
				'geometry': {
					'type': 'LineString',
					'coordinates': [
						start,
						end,
					]
				}
			}
		})
		map.addLayer({
			'id': 'line',
			'type': 'line',
			'source': 'line',
			'layout': {
				'line-join': 'round',
				'line-cap': 'round'
			},
			'paint': {
				'line-color': '#888',
				'line-width': 4,
				'line-opacity': 0.5
			}
		})

		pathNearbySpotList.items.map((spot) => (
			new mapboxgl.Marker()
			.setLngLat([spot.positionLon, spot.positionLat])
			.addTo(map)
		))
	}

	async getRoute(map) {
		const { start, end } = this.state
		const query = await fetch(
		`https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
			{ method: 'GET' }
		);
		const json = await query.json()
		const data = json.routes[0]
		const route = data.geometry.coordinates
		const geojson = {
			type: 'Feature',
			properties: {},
			geometry: {
				type: 'LineString',
				coordinates: route
			}
		};
		// 如果 'route' 已經存在，重設置它的 data 就好
		if (map.getSource('route')) {
			map.getSource('route').setData(geojson);
		}
		else {
			map.addLayer({
				id: 'route',
				type: 'line',
				source: {
					type: 'geojson',
					data: geojson
				},
				layout: {
					'line-join': 'round',
					'line-cap': 'round'
				},
				paint: {
					'line-color': '#3887be',
					'line-width': 4,
					'line-opacity': 0.8
				}
			})
		}
	}

	render() {
    return (
      <div>
				<button style={{ position: "absolute", zIndex: 10, fontSize: 18, border: "1px black solid", borderRadius: 10, background: "white", padding: "10px 20px", opacity: 0.9 }} onClick={this.searchPoint}>Run</button>
        <div ref={this.mapContainer} className="map-container" />
      </div>
    )
	}
}
