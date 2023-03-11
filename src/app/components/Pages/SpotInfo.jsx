import React, { Component } from 'react'
import Header from '../../containers/Header'
import SpotDetail from '../../containers/SpotInfo/SpotDetail'
import SpotComment from '../../containers/SpotInfo/SpotComment'
import Nearby from '../../containers/SpotInfo/Nearby'
import RelatedTrip from '../SpotInfo/RelatedTrip'

export default class SpotInfo extends Component {
	componentDidMount() {
		const { GetDetailList, match } = this.props
		GetDetailList(match.params.id)
	}

	render() {
		const { detailList, match } = this.props
		return (
			<div style={{ marginBottom: "80px" }}>
				<Header />
				<div className="divider" />
				<SpotDetail oid={match.params.id} detailList={detailList.items} collectionResult={detailList.collectionResult} />
				<div style={{ display: "flex", justifyContent: "center", margin: "50px 0 50px 0" }}>
					<div className="divider" style={{ width: "78%" }} />
				</div>
				<SpotComment oid={match.params.id} spotName={detailList.items.cName} />
				<div style={{ display: "flex", justifyContent: "center", margin: "50px 0 50px 0" }}>
					<div className="divider" style={{ width: "78%" }} />
				</div>
				{detailList.items.positionLat && <Nearby center={{ lat: detailList.items.positionLat, lng: detailList.items.positionLon }} />}
				<div style={{ display: "flex", justifyContent: "center", margin: "50px 0 50px 0" }}>
					<div className="divider" style={{ width: "78%" }} />
				</div>
				<RelatedTrip />
			</div>
		)
	}
}
