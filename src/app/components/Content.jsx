import React, { Component } from "react"
import { Carousel } from 'travel_component'
import { PostWall } from 'travel_component'

const post = [
	{ title: "日月潭", src: "https://images.chinatimes.com/newsphoto/2021-07-17/656/20210717002224.jpg" },
	{ title: "鹿野高台", src: "https://cdn2.ettoday.net/images/4995/d4995352.jpg" },
	{ title: "愛河", src: "https://pic.pimg.tw/anrine910070/1602321228-4026170466-g.jpg" },
	{title: "101 大樓", src: "https://yuann.tw/wp-content/uploads/2006/06/101_resize.jpg"},
	{title: "屏東海生館", src: "https://www.nmmba.gov.tw/images/pic03.jpg"},
	{title: "巨城", src: "https://foncc.com/wp-content/uploads/2018/11/20181128110.jpg"},
	{title: "阿里山小火車", src: "https://blog.tripbaa.com/wp-content/uploads/2018/07/P1011044.jpg"},
	{title: "金門砲台", src: "https://kinmen.travel/image/723/?r=1606814446331"},
];

const commend = [
	{ title: "日月潭划船", src: "https://images.chinatimes.com/newsphoto/2021-07-17/656/20210717002224.jpg", day: "2", like: "20" },
	{ title: "古蹟之旅", src: "http://b.blog.xuite.net/b/2/d/e/12584724/blog_32120/txt/33774123/56.jpg", day: "3", like: "10" },
	{ title: "熱氣球嘉年華", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDeeaPEpQk4HgDPIAEQ3rJFRKwHo97L-07iA&usqp=CAU", day: "2", like: "50" },
	{ title: "新北耶誕城", src: "https://imgs.gvm.com.tw/upload/gallery/20201114/75871_01.jpg", day: "2", like: "12" },
	{ title: "魚你相遇", src: "https://www.viviantrip.com/wp-content/uploads/2021/03/%E6%B5%B7%E7%94%9F%E9%A4%A8-4.jpg", day: "1", like: "8" },
	{ title: "親近大自然", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR813SKMm9B_vyUViP54He3z4u92UGXC9S3PA&usqp=CAU", day: "4", like: "21" },
];

export default class Content extends Component {
	render() {
		return (
			<div>
				<div className="content-layout">
					<div className="content-title">你可能會喜歡 ...</div>
					<div className="content-item">
						<Carousel cols={4} gap={5} post={post} width={200} height={200} fontSize={16} />
					</div>
				</div>
				<div className="content-recommend-block">
					<div className="content-layout">
						<div className="content-title">推薦行程</div>
						<div className="content-item">
							<PostWall cols={3} gap={20} post={commend} />
						</div>
					</div>
				</div>
				<div className="content-layout">
					<div className="content-title">熱門景點</div>
					<div className="content-item">
						<Carousel cols={4} gap={5} post={post} width={200} height={200} fontSize={16} />
					</div>
				</div>
				
				
				
			</div>
		)
	}
}