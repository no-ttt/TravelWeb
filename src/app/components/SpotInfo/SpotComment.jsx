import React, { Component } from "react"
import { Progress, Comment, Popup, AddComment } from 'travel_component'

const rating = {
	rating: 4,
	commentNum: 100,
	individualRating: [50, 20, 15, 8, 7]
};

const des= "紫坪位在綠島最南方，緊鄰「綠島露營區」。從露營區旁的步道，可通往海岸邊的潟湖「紫坪」。「紫坪」是一處由珊瑚礁構成的潮池，也是綠島著名的潟湖所在地，有全綠島最完整的潟湖地形以及珊瑚礁植群，更有茂盛的植物水芫花和珍貴的陸寄居蟹。外海儘管浪濤洶湧，內湖依然波平如鏡，宛若沉睡的湖水，清淺的躺在外珊瑚礁岩與內珊瑚貝砂灘間；水芫花灌叢身影倒映於平靜無波的水面上，潔白柔細的白砂鋪陳水底。熱帶海岸旖旎風情，盡在不言中。";

const comment = {
	src: "https://p3-tt.byteimg.com/origin/pgc-image/def93625146b46f8980a39f6e0057b2f?from=pc",
	userName: "test",
	like: 100,
	rating: 3,
	content: "適合假日走走放鬆心情！",
	img: ["https://cdn2.ettoday.net/images/4995/d4995352.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYmj3zOgrQlhp5OpzaUf_fmvwi0XbZ61_DcA&usqp=CAU"],
	date: "2022年1月1日",
};

const clickBtn = 
	<div style={{ marginTop: "50px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
		<div className="spot-comment-add">寫些什麼？</div>
		<div className="spot-comment-border">發表評論...</div>
	</div>;

const userInfo = {
	src: "https://p3-tt.byteimg.com/origin/pgc-image/def93625146b46f8980a39f6e0057b2f?from=pc",
	userName: "test",
};

export default class SpotComment extends Component {
	render() {
		return (
			<div className="spot-comment">
				<div>
					<Progress rating={rating.rating} commentNum={rating.commentNum} individualRating={rating.individualRating} />
					<Popup clickBtn={clickBtn} width={400} height={480} title="日月潭">
						<AddComment 
							src={userInfo.src} userName={userInfo.userName} 
							returnComment={(rating, comment, img) => {alert("評分：" + rating + "\n評論：" + comment + "\n圖片: " + img)}} 
						/>
  				</Popup>
				</div>
				<div style={{ width: "75%" }}>
					<Comment mode="direct" directDes={des} />
					<div className="spot-comment-hr" />
					<Comment mode="comment" src={comment.src} userName={comment.userName} like={comment.like} rating={comment.rating} content={comment.content} img={comment.img} date={comment.date} />
					<div className="spot-comment-hr" />
					<Comment mode="comment" src={comment.src} userName={comment.userName} like={comment.like} rating={comment.rating} content={comment.content} img={comment.img} date={comment.date} />
				</div>
			</div>
		)
	}
}