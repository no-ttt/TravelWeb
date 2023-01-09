import React, { Component } from 'react'
import { Card } from 'travel_component'

const soon = [
	{ 
		title: "南投一直吃", 
		src: "https://viatravel.tw/wp-content/uploads/2020/03/3179_20200328.jpg",
		people: 8,
		des: "2 天後"
	},
];

const hotTrip = [
	{ 
		title: "台版夏威夷", 
		src: "https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2020/10/14/20201014-054754_U10931_M646025_d98f.jpg?itok=pr8wiJJe",
		people: 8,
		des: "Aug 8 - Aug 10"
	},
	{ 
		title: "多良多涼", 
		src: "https://cdn2.ettoday.net/images/1821/1821680.jpg",
		people: 4,
		des: "Aug 8 - Aug 10"
	},
	{ 
		title: "熱氣球之旅", 
		src: "https://cdn2.ettoday.net/images/4995/d4995352.jpg",
		people: 8,
		des: "Aug 8 - Aug 10"
	}
];

const data = [
	{ 
		title: "台南喝到掛", 
		src: "https://media.gq.com.tw/photos/5dbc268ecfb8d000081c005b/master/pass/2019071953952917.jpg",
		people: 4,
		des: "5 Days - 132 Likes"
	},
];

export default class Content extends Component {
	render() {
		return (
			<div className="content-arrange-layout">
				<div className="content-arrange-sutitle-layout">
					<div className="content-arrange-title">即將出發</div>
					<div style={{ display: "flex", justifyContent: "flex-start" }}>
						{
							soon.map((d, i) => (
								<div key={i} style={{ marginRight: "40px" }}>
									<Card mode="trip" title={d.title} src={d.src} people={d.people} des={d.des} height={220} width={240} />
								</div>
							))
						}
					</div>
				</div>
				<div className="divider" style={{ width: "70%", margin: "80px 0 40px 0" }} />
				<div className="content-arrange-sutitle-layout">
					<div className="content-arrange-title">熱門行程</div>
					<div style={{ display: "flex", justifyContent: "flex-start" }}>
						{
							hotTrip.map((d, i) => (
								<div key={i} style={{ marginRight: "40px" }}>
									<Card mode="trip" title={d.title} src={d.src} people={d.people} des={d.des} height={220} width={240} />
								</div>
							))
						}
					</div>
				</div>
				<div className="divider" style={{ width: "70%", margin: "80px 0 40px 0" }} />
				<div className="content-arrange-sutitle-layout">
					<div className="content-arrange-title">過去行程</div>
					<div style={{ display: "flex", justifyContent: "flex-start" }}>
						{
							data.map((d, i) => (
								<div key={i} style={{ marginRight: "40px" }}>
									<Card mode="trip" title={d.title} src={d.src} people={d.people} des={d.des} height={220} width={240} />
								</div>
							))
						}
					</div>
				</div>
			</div>
		)
	}
}
