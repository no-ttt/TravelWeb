import React, { Component } from "react"
import {Link} from 'react-router-dom'
import nofound from "../../img/nofound.png"
import { Tabs, Card } from "travel_component"
// import { Pagination } from 'whl_component'

const TabData = [
	{ title: "景點", type: 1 },
	{ title: "餐廳", type: 3 },
	{ title: "住宿", type: 2 },
];

const TabItem = ({ data }) => {
	return (
		<div className="main-tab-content">
			{data.items.map((d) => (
				<div key={d.oid} style={{ margin: "20px" }}>
					<Link to={{
						pathname: '/Spot/' + d.oid,
					}} className="main-detail-link">
						<Card
							src={d.pictureUrl || nofound}
							width={250}
							height={220}
							picHeight={170}
							fontSize={16}
							custom={true}
						>
							<div style={{ display: "flex", justifyContent: "center" }}>
								<div className="main-tab-limit-text">{d.name}</div>
							</div>
						</Card>
					</Link>
				</div>
			))}
		</div>
	)
};

export default class Main extends Component {
	componentDidMount() {
		const { GetTourismList } = this.props
		GetTourismList(this.props.city, 1, 1)
	}

	constructor(props) {
		super(props)
		this.state = {
			current: 1
		}
	}

	render() {
		const { tourismList, GetTourismList, city } = this.props
		return (
			<div>
				<div className="main-layout">
					<Tabs data={TabData} getTitle={(d) => d.title} clickFunc={(data) => { GetTourismList(city, data.type, 1), this.setState = ({ current: data.type }) }}>
						<TabItem data={tourismList} />
					</Tabs>
					{/* <div style={{ marginTop: 20, marginBottom: 20 }}>
						<Pagination
							total={tourismList.count}
							withEllipsis={true}
							ellipsisRange={2}
							color="black"
							isFixed={true}
							onChange={({ current }) => GetTourismList(city, this.state.current, current)}
						/>
					</div> */}
				</div>
			</div>
		)
	}
}
