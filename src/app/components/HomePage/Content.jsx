import React, { Component } from "react"
import { Card, PostWall, Post } from 'travel_component'

const post = [
	{ title: "鹿野高台", src: "https://cdn2.ettoday.net/images/4995/d4995352.jpg", des: "test1" },
	{ title: "101 大樓", src: "https://yuann.tw/wp-content/uploads/2006/06/101_resize.jpg", des: "test2" },
	{ title: "屏東海生館", src: "https://www.nmmba.gov.tw/images/pic03.jpg", des: "test3" },
	{ title: "阿里山小火車", src: "https://blog.tripbaa.com/wp-content/uploads/2018/07/P1011044.jpg", des: "test4" },
];

const recommend = [
	{ title: "日月潭划船", src: "https://images.chinatimes.com/newsphoto/2021-07-17/656/20210717002224.jpg", day: "2", like: "20" },
	{ title: "古蹟之旅", src: "http://b.blog.xuite.net/b/2/d/e/12584724/blog_32120/txt/33774123/56.jpg", day: "3", like: "10" },
	{ title: "熱氣球嘉年華", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDeeaPEpQk4HgDPIAEQ3rJFRKwHo97L-07iA&usqp=CAU", day: "2", like: "50" },
	{ title: "新北耶誕城", src: "https://imgs.gvm.com.tw/upload/gallery/20201114/75871_01.jpg", day: "2", like: "12" },
	{ title: "魚你相遇", src: "https://www.viviantrip.com/wp-content/uploads/2021/03/%E6%B5%B7%E7%94%9F%E9%A4%A8-4.jpg", day: "1", like: "8" },
	{ title: "親近大自然", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR813SKMm9B_vyUViP54He3z4u92UGXC9S3PA&usqp=CAU", day: "4", like: "21" },
];

const hotSpot = [
	{title: "北部", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Ci3APaCujcQqKZmONU50uDvyC9Aqc2Ep9A&usqp=CAU"},
	{title: "中部", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJyiFtUrQcZIkuNkrvMhOulPt1j62pa-soA&usqp=CAU"},
	{title: "南部", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8QsVZltiBdiWvaPUgvIhhyG_28_9Du6ISg&usqp=CAU"},
	{title: "東部", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePq6uIyJ9bYLg_tsMnCnhkMq0IAKwuuzNqA&usqp=CAU"},
];

const Item = ({ data, postWidth, postHeight }) => {
	return (
		<div className="content-postwall-layout" >
			<div className="content-postwall-title">{data.title}</div>
			<div className="content-postwall-des-layout">
				<div className="content-postwall-des">{data.day} DAYS</div>
				<div className="content-postwall-des">{data.like} LIKES</div>
			</div>
		</div>
	)
};

export default class Content extends Component {
	render() {
		return (
			<div className="content-bg">
				<div className="content-layout">
					<div className="content-title">你可能會喜歡</div>
					<div className="content-must-like">
						{post.map((p, i) =>
							<div key={i}>
								<Card src={p.src} custom={true} height={300} picHeight={250} width={280} flip={true} flipContent={p.des}>
									<div style={{ textAlign: "center", fontWeight: "bold", width: "100%", marginTop: 10 }}>
										{p.title}
									</div>
								</Card>
							</div>
						)}
					</div>
					<div className="content-title">推薦行程</div>
					<div className="content-item">
						<PostWall data={recommend} postWidth="100%" postHeight={300} cols={3} gap={10} mask={true} text={true}>
							<Item />
						</PostWall>
					</div>
					<div className="content-title">熱門景點</div>
					<div className="content-item">
						<div className="content-hot-spot">
							{hotSpot.map((t, i) =>
								<div key={i} className="content-hot-spot-title">	
									<Post src={t.src} width={280} height={280} fontSize={20} borderStyle="Circle" />
									<div>|</div>
									<div style={{marginTop: 15}}>{t.title}</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		)
	}
}