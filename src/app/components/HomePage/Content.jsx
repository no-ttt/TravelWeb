import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ZoomCover, Post, Article, Carousel } from 'travel_component'
import Recommend from '../../containers/HomePage/Recommend'
import Activity from '../../containers/HomePage/Activity'
import East from '../../img/East.png'
import Center from '../../img/Center.png'
import South from '../../img/South.png'
import North from '../../img/North.png'

const trip = [
	{
		name: "宜蘭行",
		day: 2,
		like: 20,
		src: "https://blog.tripbaa.com/wp-content/uploads/2020/03/81708523_481786409143494_3991961629063473818_n.jpg"
	},
	{
		name: "古蹟之旅",
		day: 3,
		like: 12,
		src: "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2022/07/21/realtime/18102607.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600"
	},
	{
		name: "那些年我們一起追的星",
		day: 4,
		like: 50,
		src: "https://www.taiwan.net.tw/att/event/e7d96932-6633-4a2c-b724-c1ad89893c19.jpg"
	},
	{
		name: "彩虹教堂",
		day: 4,
		like: 50,
		src: "https://www.bring-you.info/wp-content/uploads/2017/09/travel-in-kaohsiung-10.jpg"
	},
	{
		name: "宜蘭行",
		day: 2,
		like: 20,
		src: "https://blog.tripbaa.com/wp-content/uploads/2020/03/81708523_481786409143494_3991961629063473818_n.jpg"
	},
	{
		name: "古蹟之旅",
		day: 3,
		like: 12,
		src: "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2022/07/21/realtime/18102607.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600"
	},
	{
		name: "那些年我們一起追的星",
		day: 4,
		like: 50,
		src: "https://www.taiwan.net.tw/att/event/e7d96932-6633-4a2c-b724-c1ad89893c19.jpg"
	},
	{
		name: "彩虹教堂",
		day: 4,
		like: 50,
		src: "https://www.bring-you.info/wp-content/uploads/2017/09/travel-in-kaohsiung-10.jpg"
	},
];

const area = [
	{ title: "東部", src: East },
	{ title: "中部", src: Center },
	{ title: "南部", src: South },
	{ title: "北部", src: North },
];

const article = [
	{
		title: "金門三天兩夜~ 金門戰地知性之旅",
		des: "對我來說，旅遊的一大重點，就是要吃當地的特色美食~而金門除了軍事設施之外，還有因戰地文化而衍生出來的特色美食喔!!!因此，管他昨天完的多累~ 來到了第二天早晨，說什麼也要起了個大早，就是要來吃金門有名的廣東粥!!!...",
		src: "https://farm4.staticflickr.com/3667/19664749544_413f64416d_c.jpg",
	},
	{
		title: "台中「和平小棉堡」超仙超好拍！",
		des: "近期被攝影迷挖掘出的秘境就位在台中和平區的「棉堡小秘境」，雖然壯觀程度沒辦法與正版土耳其棉堡相比，但清澈的泉水沿著瀑布岩傾瀉而下，只要角度拿捏得宜，也能拍出專屬台灣的「棉堡仙照」，雖不及土耳其純白棉堡般壯闊，但隱身於山林間，看著清泉沿著石階一格一格留下，赤腳踏入感受冷冽泉水，在炎熱的夏天，絕對是一大享受...",
		src: "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2020/03/18/draft/7613929.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=930&nt=1",
	},
	{
		title: "金門三天兩夜~ 金門戰地知性之旅",
		des: "對我來說，旅遊的一大重點，就是要吃當地的特色美食~而金門除了軍事設施之外，還有因戰地文化而衍生出來的特色美食喔!!!因此，管他昨天完的多累~ 來到了第二天早晨，說什麼也要起了個大早，就是要來吃金門有名的廣東粥!!!...",
		src: "https://farm4.staticflickr.com/3667/19664749544_413f64416d_c.jpg",
	},
	{
		title: "台中「和平小棉堡」超仙超好拍！",
		des: "近期被攝影迷挖掘出的秘境就位在台中和平區的「棉堡小秘境」，雖然壯觀程度沒辦法與正版土耳其棉堡相比，但清澈的泉水沿著瀑布岩傾瀉而下，只要角度拿捏得宜，也能拍出專屬台灣的「棉堡仙照」，雖不及土耳其純白棉堡般壯闊，但隱身於山林間，看著清泉沿著石階一格一格留下，赤腳踏入感受冷冽泉水，在炎熱的夏天，絕對是一大享受...",
		src: "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2020/03/18/draft/7613929.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=930&nt=1",
	}
];

let TripItem = ({ data }) => {
	return (
		<div>
			<ZoomCover name={data.name} src={data.src} like={data.like} day={data.day} width={220} height={320} mode="trip" />
		</div>
	)
};

let ArticleItem = ({ data }) => {
	return (
		<div>
			<Article title={data.title} des={data.des} src={data.src} width={250} height={150} />
		</div>
	)
};

export default class Content extends Component {
	render() {
		return (
			<div className="content-layout">
				{/* 先接埔里熱門景點 */}
				<Recommend />
				<Activity />
				<div className="content-title">— 推薦行程 —</div>
				<div className="content-mustlike-sutitle-layout">
					<Carousel cols={4} gap={15} data={trip} width={250} height={300}>
						<TripItem />
					</Carousel>
				</div>
				<div className="content-title">— 熱門景點 —</div>
				<div className="content-sutitle-layout">
					{
						area.map((t, i) =>
							<Link
								to={{ pathname: "/activity/" + t.title }}
								key={i}
								target="_blank"
								className="content-area-link"
							>
								<Post name={t.title} src={t.src} fontSize={20} width={240} borderStyle="Circle" />
							</Link>
						)
					}
				</div>
				<div className="content-title">— 精彩遊記 —</div>
				{/* <div className="content-sutitle-layout">
					{
						article.map((t, i) =>
							<div key={i}>
								<Article title={t.title} des={t.des} src={t.src} width={280} height={120} />
							</div>
						)
					}
				</div> */}
				<div className="content-mustlike-sutitle-layout">
					<Carousel cols={2} gap={120} data={article} width={500} height={200}>
						<ArticleItem />
					</Carousel>
				</div>
			</div>
		)
	}
}
