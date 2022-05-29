import React, { Component } from "react"
import { Carousel, Card } from 'travel_component'

const data = [
	{ title: "南投一直吃", src: "https://i.imgur.com/zXYTibr.jpg", time: "6 個月以前", people: "3" },
	{ title: "台南喝到掛", src: "https://media.gq.com.tw/photos/5dbc268ecfb8d000081c005b/master/pass/2019071953952917.jpg", time: "3 個月以前", people: "8" },
	{ title: "日月潭好山好水", src: "https://images.chinatimes.com/newsphoto/2021-07-17/656/20210717002224.jpg", time: "3 個月以前", people: "8" },
	{ title: "熱氣球之旅", src: "https://cdn2.ettoday.net/images/4995/d4995352.jpg", time: "3 個月以前", people: "8" },
	{ title: "哇！101 大樓", src: "https://yuann.tw/wp-content/uploads/2006/06/101_resize.jpg", time: "3 個月以前", people: "8" },
	{ title: "離島歷史之旅", src: "https://kinmen.travel/image/723/?r=1606814446331", time: "3 個月以前", people: "8" },
	{ title: "阿里山小火車之旅", src: "https://blog.tripbaa.com/wp-content/uploads/2018/07/P1011044.jpg", time: "3 個月以前", people: "8" },
];

const Item = ({ data, width, height }) => {
	return (
		<div>
			<Card title={data.title} src={data.src} time={data.time} people={data.people} custom={false} />
		</div>
	)
};

export default class SpotRecommend extends Component {
	render() {
		return (
			<div style={{ width: "85%", marginBottom: "50px" }}>
				<div className="spot-recommend-title">推薦行程</div>
				<Carousel cols={6} gap={5} data={data} width={280} height={180}>
					<Item />
				</Carousel>
			</div>
		)
	}
}