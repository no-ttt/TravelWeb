import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ZoomCover, Carousel } from 'travel_component'
import HotSpotBlock from './HotSpotBlock'
import FlagCircleIcon from '@mui/icons-material/FlagCircle'
import East from '../../img/East.png'
import Center from '../../img/Center.png'
import South from '../../img/South.png'
import North from '../../img/North.png'

const slogan = [
	{
		area: "東部",
		tags: ["向海致敬", "後山不後"],
		intro: "台灣東部東臨浩瀚太平洋，西倚中央山脈，擁有臨山面海的優越地理位置，壯麗的山川美景...",
		src: East,
		explore: "https://www.taiwan.net.tw/m1.aspx?sNo=0000504",
	},
	{
		area: "中部",
		tags: ["氣溫舒適", "老少閒宜"],
		intro: "台灣中部位於心臟地帶，常年氣候舒適，四季氣溫宜人，非常適合旅行...",
		src: Center,
		explore: "https://www.taiwan.net.tw/m1.aspx?sNo=0000502",
	},
	{
		area: "南部",
		tags: ["四季如夏", "得天獨厚"],
		intro: "台灣南部散發著濃厚的歷史文化，古蹟名勝特別多，氣候四季如夏，左看太平洋右覽台灣海峽...",
		src: South,
		explore: "https://www.taiwan.net.tw/m1.aspx?sNo=0000503",
	},
	{
		area: "北部",
		tags: ["俯瞰美景", "古街風情"],
		intro: "台灣北部擁有台灣最高樓 101 大樓，俯瞰台北美景，老街帶你感受古街風情記憶...",
		src: North,
		explore: "https://www.taiwan.net.tw/m1.aspx?sNo=0000501",
	},
];

let Item = ({ data }) => {
	return (
		<Link
			to={{ pathname: "/activity/detail/" + data.oid }}
			target="_blank"
			className="main-detail-link"
		>
			<ZoomCover width={190} height={190} name={data.cName} src={data.pictureUrl} des={"~ " + data.endTime.split("T")[0]} />
		</Link>
	)
};

export default class ActivityAbout extends Component {
	componentDidMount() {
		const { GetActivityAreaList, area, GetHotSpotAreaList, GetHotResAreaList, GetHotHotelAreaList } = this.props
		GetActivityAreaList(area, 6)
		GetHotSpotAreaList(area)
		GetHotResAreaList(area)
		GetHotHotelAreaList(area)
	}

	render() {
		const { area, activityAreaList, hotSpotAreaList, hotResAreaList, hotHotelAreaList } = this.props
		let sloganUse = {}

		if (area === "東部") sloganUse = slogan[0]
		else if (area === "中部") sloganUse = slogan[1]
		else if (area === "南部") sloganUse = slogan[2]
		else sloganUse = slogan[3]

		return (
			<div className="activity-about-layout">
				<div className="activity-about-title">關於 {area}</div>
				<div className="activity-about-content">
					<div className="activity-about-content-block">
						<div className="activity-about-subtitle-layout">
							<FlagCircleIcon />
							<div className="activity-about-subtitle">最近活動</div>
						</div>
						<Carousel cols={5} gap={5} data={activityAreaList.items} width={210} height={210}>
							<Item />
						</Carousel>
					</div>
					<div className="divider" style={{ width: "100%", marginBottom: "80px" }} />
					<div className="activity-slogan-bg">
						<div style={{ padding: "30px" }}>
							<div className="activity-slogan-tag">
								<div style={{ marginRight: "10px" }}>{sloganUse.tags[0]}</div>
								<div>{sloganUse.tags[1]}</div>
							</div>
							<div className="activity-slogan-title">熱門 TOP 8</div>
							<div className="activity-slogan-des">{sloganUse.intro}</div>
							<a href={sloganUse.explore} target="blank" className="activity-explore-btn">探索更多</a>
						</div>
						<img src={sloganUse.src} className="activity-slogan-img" />
					</div>
					<HotSpotBlock subtitle="熱門景點" areaList={hotSpotAreaList.items} />
					<div className="divider" style={{ width: "100%", marginBottom: "80px" }} />
					<HotSpotBlock subtitle="熱門餐廳" areaList={hotResAreaList.items} />
					<div className="divider" style={{ width: "100%", marginBottom: "80px" }} />
					<HotSpotBlock subtitle="熱門住宿" areaList={hotHotelAreaList.items} />
				</div>
			</div>
		)
	}
}
