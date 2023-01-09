import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import nofound from '../../img/nofound.png'
import { Tabs, Card } from 'travel_component'
import Pagination from '@mui/material/Pagination'

const Tab = [
	{ title: "景點", type: 5 },
	{ title: "餐廳", type: 6 },
	{ title: "住宿", type: 7 },
];

let Item = ({ data }) => {
	return (
		<div className="main-tab-content">
			{
				data.items.map((d) => (
					<div key={d.oid} style={{ margin: "20px" }}>
						<Link
							to={{ pathname: "/spot/detail/" + d.oid }}
							target="_blank"
							className="main-detail-link"
						>
							<Card width={240} height={220} title={d.spotName} src={d.pictureUrl || nofound} loc={d.city + d.town} hover={true} rating={5} commentNum={0} />
						</Link>
					</div>
				))
			}
		</div>
	)
};

export default class Main extends Component {
	constructor(props) {
		super(props)
		this.state = {
			select: 5,
			page: 1
		}
	}

	componentDidMount() {
		const { GetTourismList, city } = this.props
		GetTourismList(city, 5, 1)
	}

	render() {
		const { tourismList, GetTourismList, city } = this.props
		const { select, page } = this.state
		return (
			<div className="main-layout">
				<div className="main-tab-block">
					<Tabs data={Tab} tab={(data) => data.title} setCurrent={(data) => { GetTourismList(city, data.type, 1), this.setState({ select: data.type, page: 1 }) }} tabPosCenter={true}>
						<Item data={tourismList} />
					</Tabs>
				</div>
				<Pagination count={tourismList.count} page={page} boundaryCount={2} variant="outlined" size="large" onChange={(e, page) => { GetTourismList(city, select, 1 + 32 * (page - 1)), this.setState({ page: page }) }} />
			</div>
		)
	}
}
