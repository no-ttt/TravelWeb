import React, { Component } from 'react'
import { Card } from 'travel_component'

const data = [
	{ 
		title: "熱氣球之旅", 
		src: "https://cdn2.ettoday.net/images/4995/d4995352.jpg",
		people: 8,
		des: "Aug 8 - Aug 10"
	},
	{ 
		title: "台南喝到掛", 
		src: "https://media.gq.com.tw/photos/5dbc268ecfb8d000081c005b/master/pass/2019071953952917.jpg",
		people: 4,
		des: "5 Days - 132 Likes"
	},
];

export default class RelatedTrip extends Component {

	render() {
		return (
			<div className="releated-trip-layout">
				<div style={{ width: "75%" }}>
					<div className="releated-trip-title">相關行程</div>
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
