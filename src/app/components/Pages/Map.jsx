import React, { Component } from 'react'
import { NearbySpot } from 'travel_component'
import { GoogleMap, LoadScript, Marker, InfoWindow, MarkerClusterer, DistanceMatrixService } from '@react-google-maps/api'
import Checkbox from '@mui/material/Checkbox'
import Switch from '@mui/material/Switch'
import nofound from '../../img/nofound.png'
import location from '../../img/location.png'
import { GOOGLE_MAPS_API_KEY } from '../../../../api.json'

export default class Map extends Component {
  componentDidMount() {
		const { GetNearbySpotList, location } = this.props
		const lat = parseFloat(location.search.split("lat=")[1].split(",")[0])
		const lng = parseFloat(location.search.split("lat=")[1].split("lng=")[1])
		GetNearbySpotList(lat, lng, 3, "567")
	}

  constructor(props) {
		super(props)
		this.state = {
      mainCenter: { lat: parseFloat(this.props.location.search.split("lat=")[1].split(",")[0]), lng: parseFloat(this.props.location.search.split("lat=")[1].split("lng=")[1]) },
      lat: parseFloat(this.props.location.search.split("lat=")[1].split(",")[0]),
			lng: parseFloat(this.props.location.search.split("lat=")[1].split("lng=")[1]),
			openLayer: false,
			opt: "567",
			distance: 3,
			map: null,
			clickMarker: false,
			currentClick: {},
			currentClickDistance: 0,
			cleanMarkers: false,  // Marker 有增減就需要設置為 true
		}
	}

	checkChange = (e, value) => {
		const { GetNearbySpotList } = this.props
		const { opt, distance, lat, lng } = this.state
		let check = ""

		if (e.target.checked) check = opt + value
		else check = opt.replace(value, '')

		this.setState({
			opt: check,
			cleanMarkers: true,
		})
		GetNearbySpotList(lat, lng, distance, check)
	}

	handleOnLoad = (map) => {
		this.setState({ map: map })
	}

	// 地圖拖拉移動時觸發
	handleCenterChanged = () => {
		const { map, opt, distance } = this.state
		const { GetNearbySpotList } = this.props

		if (map) {
			const newlat = map.getCenter().lat()
			const newlng = map.getCenter().lng()
		
			this.setState({
				lat: newlat,
				lng: newlng,
				cleanMarkers: true,
			})
			GetNearbySpotList(newlat, newlng, distance, opt)
		}
	}

	// 地圖縮放大小時觸發
	handleZoomChanged = () => {
		const { map, opt } = this.state
		const { GetNearbySpotList } = this.props

		if (map) {
			const zl = map.getZoom()
			const km = Math.ceil((40000 / Math.pow(2, zl)) * 2)

			const newlat = map.getCenter().lat()
			const newlng = map.getCenter().lng()

			this.setState({
				lat: newlat,
				lng: newlng,
				distance: km,
				cleanMarkers: true,
			})

			GetNearbySpotList(newlat, newlng, km, opt)
		}
	}

  render() {
    const { nearbySpotList } = this.props
    const { mainCenter, lat, lng, openLayer, clickMarker, currentClick, currentClickDistance, cleanMarkers } = this.state

    let MapStyles = [
			{
				featureType: "poi",
				stylers: [
					{
						visibility: openLayer ? "on" : "off",
					},
				],
			},
		];
		
    return (
      <div>
        <LoadScript
          googleMapsApiKey={GOOGLE_MAPS_API_KEY}
        >
          <GoogleMap
            id="map-full-screen"
            center={{ lat: lat, lng: lng }}
            zoom={16}
						maxZoom={17}
            options={{
              styles: MapStyles,
              mapTypeControl: false,
            }}
						onLoad={this.handleOnLoad}
						onDragEnd={this.handleCenterChanged}
						onZoomChanged={this.handleZoomChanged}
          >
            {/* map tool */}
            <div className="nearby-map">
							<div className="nearby-map-filter">
								<div>
									<Checkbox defaultChecked color="default" size="small" onChange={(e) => this.checkChange(e, 5)} />
									<div>景點</div>
								</div>
								<div>
									<Checkbox defaultChecked color="default" size="small" onChange={(e) => this.checkChange(e, 6)} />
									<div>餐廳</div>
								</div>
								<div>
									<Checkbox defaultChecked color="default" size="small" onChange={(e) => this.checkChange(e, 7)} />
									<div>住宿</div>
								</div>
							</div>
							<div className="nearby-map-icon-switch">
								<Switch color="warning" onChange={(e) => this.setState({ openLayer: !openLayer, cleanMarkers: false })} />
								<div>Google Map 原始圖層</div>
							</div>
						</div>

						{/* 景點位置標記  */}
						<Marker position={mainCenter} />

						{/* 附近景點標記 */}
						<MarkerClusterer
							averageCenter
							enableRetinaIcons
							gridSize={50}
							maxZoom={16}
							minimumClusterSize={3}
							onClick={() => this.setState({ cleanMarkers: false })}
						>
							{
								(clusterer) => {
									cleanMarkers && clusterer.clearMarkers();
									return (
										nearbySpotList.items.map((nearby, i) => (
											<Marker
												key={i}
												position={{ lat: nearby.positionLat, lng: nearby.positionLon }}
												icon={{
													url: location,
													scaledSize: new window.google.maps.Size(40, 40),
												}}
												onClick={() => this.setState({ clickMarker: true, currentClick: nearby, lat: nearby.positionLat, lng: nearby.positionLon, cleanMarkers: false })}
												clusterer={clusterer}
												noClustererRedraw={true}
											/>
										))
									)
								}
							}
						</MarkerClusterer>

						{/* 點擊 Marker 出現的彈跳窗 */}
						{
							clickMarker &&
							<InfoWindow
								position={{ lat: currentClick.positionLat, lng: currentClick.positionLon }}
								onCloseClick={() => this.setState({ clickMarker: false, cleanMarkers: false })}
								options={{ pixelOffset: { height: -40 } }}
								zIndex={1}
							>
								<NearbySpot name={currentClick.cName} src={currentClick.pictureUrl || nofound} rating={5} des={currentClickDistance} isLink={true} link={"/spot/detail/" + currentClick.oid} />
							</InfoWindow>
						}

						{/* 距離計算  */}
						{
							clickMarker &&
							<DistanceMatrixService
							options={{
								destinations: [{ lat: currentClick.positionLat, lng: currentClick.positionLon }],
								origins: [{lat: mainCenter.lat, lng: mainCenter.lng}],
								travelMode: "DRIVING",
							}}
							callback={(response) => this.setState({ currentClickDistance: response.rows[0].elements[0].distance.text })}
							/>
						}

          </GoogleMap>
        </LoadScript>
      </div>
    )
  }
}