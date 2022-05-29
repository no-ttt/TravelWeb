import React, { Component } from "react"
import { Progress, Comment, Popup, AddComment } from 'travel_component'

const rating = {
	rating: 4,
	commentNum: 100,
	individualRating: [50, 20, 15, 8, 7]
};

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
		const { des } = this.props
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
				<div style={{ width: "70%" }}>
					{ des !== null && 
						<div>
							<Comment mode="direct" directDes={des} />
							<div className="spot-comment-hr" />
						</div>
					}
					<Comment mode="comment" src={comment.src} userName={comment.userName} like={comment.like} rating={comment.rating} content={comment.content} img={comment.img} date={comment.date} />
					<div className="spot-comment-hr" />
					<Comment mode="comment" src={comment.src} userName={comment.userName} like={comment.like} rating={comment.rating} content={comment.content} img={comment.img} date={comment.date} />
				</div>
			</div>
		)
	}
}