import React, { Component } from "react"
import Header from "../Header"
import CreateTravel from "../../containers/ArrangeTravel/CreateTravel"
import { Card } from 'travel_component'

const feature = [
	{ icon: "dashboard", name: "地圖筆記" },
	{ icon: "home", name: "首頁", link: "/" },
];

const data = [
	{ title: "南投一直吃", src: "https://i.imgur.com/zXYTibr.jpg", time: "6 個月以前", people: "3" },
	{ title: "台南喝到掛", src: "https://media.gq.com.tw/photos/5dbc268ecfb8d000081c005b/master/pass/2019071953952917.jpg", time: "3 個月以前", people: "8" },
];

export default class ArrangeTravel extends Component {
  render() {
		return (
			<div>
				<Header feature={feature} />
				<CreateTravel />
				
				<div className="arrange-travel-title">即將出發...</div>
				<div className="arrange-travel-content">
					{
						data.map((t) =>
							<div style={{ margin: "20px"}}>
								<Card title={t.title} src={t.src} time={t.time} people={t.people} custom={false} />
							</div>
						)
					}
				</div>
				<div className="arrange-travel-hr" />
				<div className="arrange-travel-title">你可能會喜歡</div>
				<div className="arrange-travel-content">
					{
						data.map((t) =>
							<div style={{ margin: "20px"}}>
								<Card title={t.title} src={t.src} time={t.time} people={t.people} custom={false} />
							</div>
						)
					}
				</div>
				<div className="arrange-travel-hr" />
				<div className="arrange-travel-title">過去行程</div>
				<div className="arrange-travel-content">
					{
						data.map((t) =>
							<div style={{ margin: "20px"}}>
								<Card title={t.title} src={t.src} time={t.time} people={t.people} custom={false} />
							</div>
						)
					}
				</div>
			</div>
		)
	}
}