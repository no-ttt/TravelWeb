import React, { Component } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { GOOGLE_MAPS_API_KEY } from '../../../../api.json'

export default class Map extends Component {
	componentDidMount() {
	}

	render() {
    let MapStyles = [
			{
				featureType: "poi",
				stylers: [
					{
						visibility: "off",
					},
				],
			},
		]

		return (
			<LoadScript
        googleMapsApiKey={GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          id="map-full-screen"
          center={{ lat: 23.5, lng: 120.5 }}
          zoom={16}
          options={{
            styles: MapStyles,
            mapTypeControl: false,
            fullscreenControl: false
          }}
        >
        </GoogleMap>
      </LoadScript>
		)
	}
}
