import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NearbySpot } from 'travel_component'
import { GoogleMap, LoadScript, Marker, InfoWindow, DistanceMatrixService } from '@react-google-maps/api'
import Checkbox from '@mui/material/Checkbox'
import Switch from '@mui/material/Switch'
import nofound from '../img/nofound.png'
import location from '../img/location.png'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import { GOOGLE_MAPS_API_KEY } from '../../../api.json'

export default class Nearby extends Component {
	componentDidMount() {
		const { GetNearbySpotList, center } = this.props
		GetNearbySpotList(center.lat, center.lng, 3, "56")
	}

  constructor(props) {
    super(props)
    this.state = {
      center: this.props.center,
      zoom: 16,
      openLayer: false,
      clickMarker: false,
      currentClick: {},
      currentClickDistance: "",
      opt: "56",
    }
  }

  checkChange = (e, value) => {
		const { GetNearbySpotList, center } = this.props
		const { opt } = this.state
		let check = ""

		if (e.target.checked) check = opt + value
		else check = opt.replace(value, '')

		this.setState({
			opt: check
		})
		GetNearbySpotList(center.lat, center.lng, 3, check)
	}

  render() {
    const { nearbySpotList } = this.props
    const { center, openLayer, clickMarker, currentClick, currentClickDistance } = this.state
    let MapStyles = [
			{
				featureType: "poi",
				stylers: [
					{
						visibility: openLayer ? "on" : "off",
					},
				],
			},
		]

    return (
      <div className="nearby-layout">
        <div style={{ display: "flex", flexDirection: "row", width: "75%", alignItems: "center" }}>
          <div className="nearby-map-block">
            <div className="nearby-title">附近景點</div>
            <LoadScript
              googleMapsApiKey={GOOGLE_MAPS_API_KEY}
            >
              <GoogleMap
                id="map"
                center={center}
                zoom={16}
                options={{
                  styles: MapStyles,
                  mapTypeControl: false,
                  fullscreenControl: false
                }}
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
                      <Checkbox color="default" size="small" onChange={(e) => this.checkChange(e, 7)} />
                      <div>住宿</div>
                    </div>
                  </div>
                  <div className="nearby-map-icon-switch">
                    <Switch color="warning" onChange={(e) => this.setState({ openLayer: !openLayer })} />
                    <div>Google Map 原始圖層</div>
                  </div>
                </div>

                {/* 導向 Pages/Map 頁面 */}
                <Link
                  to={{ pathname: "/map", search: "?lat=" + center.lat + ",lng=" + center.lng }}
                  target="_blank"
                >
                  <button className="nearby-map-full-screen-btn"	>
                    <FullscreenIcon />
                  </button>
                </Link>
                
                {/* 景點位置標記  */}
                <Marker position={this.props.center} />

                {/* 附近景點標記 */}
                {
                  nearbySpotList.items.map((nearby, i) => (
                    <Marker
                      key={i}
                      position={{ lat: nearby.positionLat, lng: nearby.positionLon }}
                      icon={{
                        url: location,
                        scaledSize: new window.google.maps.Size(40, 40),
                      }}
                      onClick={() => this.setState({ clickMarker: true, currentClick: nearby, center: { lat: nearby.positionLat, lng: nearby.positionLon } })}
                    />
                  ))
                }
                
                {/* 點擊 Marker 出現的彈跳窗 */}
                {
                  clickMarker &&
                  <InfoWindow
                    position={{ lat: currentClick.positionLat, lng: currentClick.positionLon }}
                    onCloseClick={() => this.setState({ clickMarker: false })}
                    options={{ pixelOffset: { height: -40 } }}
                    zIndex={1}
                  >
                    <NearbySpot name={currentClick.cName} src={currentClick.pictureUrl || nofound} rating={5} des={currentClickDistance} link={"/spot/detail/" + currentClick.oid} isLink={true} />
                  </InfoWindow>
                }

                {/* 距離計算  */}
                {
                  clickMarker &&
                  <DistanceMatrixService
                  options={{
										destinations: [{ lat: currentClick.positionLat, lng: currentClick.positionLon }],
										origins: [{lat: this.props.center.lat, lng: this.props.center.lng}],
										travelMode: "DRIVING",
									}}
									callback={(response) => this.setState({ currentClickDistance: response.rows[0].elements[0].distance.text })}
                  />
                }
              </GoogleMap>
            </LoadScript>
          </div>

          <div className="nearby-subtitle-block">
            <div>
              <div className="nearby-subtitle">最佳鄰近選擇</div>
              <div className="nearby-subtitle-items">在 3 公里內 ...</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", width: "90%" }}>
              <div>
                <div className="nearby-subtitle-items">景點</div>
                <div>
                {
                  nearbySpotList.initItems.filter(value => value.type === 5).map((spot, i) => (
                    i < 3 &&
                    <div key={i} style={{ marginBottom: "20px" }} onClick={() => this.setState({ center: { lat: spot.positionLat, lng: spot.positionLon}, currentClick: spot, clickMarker: true }) }>
                      <NearbySpot name={spot.cName} src={spot.pictureUrl || nofound} rating={5} des="5 則評論" link={"/spot/detail/" + spot.oid} isLink={true} />
                    </div>
                  ))
                }
                </div>
              </div>
              <div>
                <div className="nearby-subtitle-items">餐廳</div>
                <div style={{ height: "48vh" }}>
                {
                  nearbySpotList.initItems.filter(value => value.type === 6).map((spot, i) => (
                    i < 3 &&
                    <div key={i} style={{ marginBottom: "20px" }} onClick={() => this.setState({ center: { lat: spot.positionLat, lng: spot.positionLon}, currentClick: spot, clickMarker: true }) }>
                      <NearbySpot name={spot.cName} src={spot.pictureUrl || nofound} rating={5} des="5 則評論" link={"/spot/detail/" + spot.oid} isLink={true} />
                    </div>
                  ))
                }	
                </div>
              </div>
            </div>
            <Link
              to={{ pathname: "/map", search: "?lat=" + center.lat + ",lng=" + center.lng }}
              target="_blank"
            >
              <div className="nearby-items-more">查看全部</div>
            </Link>
            
          </div>
        </div>
      </div>
    )
  }
}