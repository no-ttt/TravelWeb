import React, { Component } from 'react'
import Header from '../Header'
import SpotDetail from '../SpotInfo/SpotDetail'
import Reviews from '../SpotInfo/Reviews'
import Nearby from '../../containers/SpotInfo/Nearby'
import RelatedTrip from '../SpotInfo/RelatedTrip'

export default class SpotInfo extends Component {
	componentDidMount() {
		const { GetDetailList, match } = this.props
		GetDetailList(match.params.id)
	}

	render() {
		const { detailList } = this.props

		return (
			<div style={{ marginBottom: "80px" }}>
				<Header />
				<div className="divider" />
				<SpotDetail detailList={detailList.items} />
				<div style={{ display: "flex", justifyContent: "center", margin: "50px 0 50px 0" }}>
					<div className="divider" style={{ width: "78%" }} />
				</div>
				<Reviews spotDetail={detailList.items.cDes} />
				<div style={{ display: "flex", justifyContent: "center", margin: "50px 0 50px 0" }}>
					<div className="divider" style={{ width: "78%" }} />
				</div>
				{ detailList.items.positionLat && <Nearby center={{lat: detailList.items.positionLat, lng: detailList.items.positionLon}} /> }
				<div style={{ display: "flex", justifyContent: "center", margin: "50px 0 50px 0" }}>
					<div className="divider" style={{ width: "78%" }} />
				</div>
				<RelatedTrip />
			</div>
		)
	}
}
