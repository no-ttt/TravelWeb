import React, { Component } from "react"
import nofound from "../img/nofound.png"
import Header from "../components/Header"
import { Carousel, Post, Tabs, TravelCard } from "travel_component"
import { Pagination } from 'whl_component'

const data = [
	{ title: "日月潭", src: "https://images.chinatimes.com/newsphoto/2021-07-17/656/20210717002224.jpg" },
	{ title: "鹿野高台", src: "https://cdn2.ettoday.net/images/4995/d4995352.jpg" },
	{ title: "愛河", src: "https://pic.pimg.tw/anrine910070/1602321228-4026170466-g.jpg" },
	{ title: "101 大樓", src: "https://yuann.tw/wp-content/uploads/2006/06/101_resize.jpg" },
	{ title: "屏東海生館", src: "https://www.nmmba.gov.tw/images/pic03.jpg" },
	{ title: "巨城", src: "https://foncc.com/wp-content/uploads/2018/11/20181128110.jpg" },
	{ title: "阿里山小火車", src: "https://blog.tripbaa.com/wp-content/uploads/2018/07/P1011044.jpg" },
	{ title: "金門砲台", src: "https://kinmen.travel/image/723/?r=1606814446331" },
];

const Item = ({ data, width, height }) => {
	return (
		<div>
			<Post title={data.title} src={data.src} width={width} height={height} fontSize={18} borderStyle="Square" />
		</div>
	)
};

const TabData = [
	{ title: "景點", type: 1 },
	{ title: "餐廳", type: 3 },
	{ title: "住宿", type: 2 },
];

const TabItem = ({ data }) => {
	return (
		<div className="result-tab-content">
			{data.items.map((d) => (
				<div style={{ margin: "20px" }} key={d.oid}>
					<TravelCard
						title={d.name}
						src={d.pictureUrl || nofound}
						time={d.cName}
						width={220}
						height={220}
						fontSize={16}
					></TravelCard>
				</div>
			))}
		</div>
	)
};

export default class Main extends Component {
	componentDidMount() {
		const { GetTourismList, match } = this.props
		console.log(match.params.city)
		GetTourismList(match.params.city, 1, 1)
	}

	constructor(props) {
		super(props)
		this.state = {
			current: 1
		}
	}

	render() {
		const { tourismList, GetTourismList, match } = this.props
		return (
			<div>
				<Header />
				<div className="hr"></div>
				<div className="result-layout">
					<div className="result-title">{match.params.city}熱門景點</div>
					<Carousel cols={4} gap={20} data={data} width={300} height={250}>
						<Item />
					</Carousel>
					<div className="hr" style={{ marginTop: 60, width: "80%" }}></div>
					<Tabs data={TabData} getTitle={(d) => d.title} clickFunc={(data) => {GetTourismList(match.params.city, data.type, 1), this.setState = ({ current: data.type })}}>
						<TabItem data={tourismList} />
					</Tabs>
					<div style={{ marginTop: 20, marginBottom: 20 }}>
						<Pagination
							total={tourismList.count}
							withEllipsis={true}
							ellipsisRange={2}
							color={"black"}
							isFixed={true}
							onChange={({ current}) => GetTourismList(match.params.city, this.state.current, current)}
						/>
					</div>
				</div>
			</div>
		)
	}
}
