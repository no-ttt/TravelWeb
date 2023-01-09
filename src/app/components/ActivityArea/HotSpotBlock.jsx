import React, { Component } from 'react'
import { Card } from 'travel_component'
import { Link } from 'react-router-dom'
import nofound from '../../img/nofound.png'
import AttractionsIcon from '@mui/icons-material/Attractions'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import BedIcon from '@mui/icons-material/Bed'

export default class HotSpotBlock extends Component {
	render() {
		const { areaList, subtitle } = this.props

		return (
			<div className="activity-about-content-block">
				<div className="activity-about-subtitle-layout">
					{
						subtitle === "熱門景點" ? <AttractionsIcon /> : subtitle === "熱門餐廳" ? <RestaurantMenuIcon /> : <BedIcon />
					}
					<div className="activity-about-subtitle">{subtitle}</div>
				</div>
				<div className="activity-tab-content">
					{
						areaList.map((a, i) => (
							<div key={i} style={{ margin: "20px" }}>
								<Link
									to={{ pathname: "/spot/detail/" + a.oid }}
									target="_blank"
									className="main-detail-link"
								>
									<Card width={240} height={220} title={a.spotName} src={a.pictureUrl || nofound} loc={a.city + a.town} hover={true} rating={5} commentNum={0} />
								</Link>
							</div>
						))
					}
				</div>
			</div>
		)
	}
}
