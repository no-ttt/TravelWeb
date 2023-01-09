import React, { Component } from 'react'
import { Progress, Comment } from 'travel_component'

const rating = {
	rating: 4,
	commentNum: 100,
	individualRating: [50, 20, 15, 8, 7]
};

const guide = {
	name: "旅遊小幫手",
	src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7A5w9fXNr22x_vZzJ17ubf2X2VX7ZSzBeMQ&usqp=CAU",
};

const comment = {
	src: "https://p3-tt.byteimg.com/origin/pgc-image/def93625146b46f8980a39f6e0057b2f?from=pc",
	userName: "test",
	like: 100,
	rating: 3,
	content: "適合假日走走放鬆心情！",
	img: ["https://cdn2.ettoday.net/images/4995/d4995352.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYmj3zOgrQlhp5OpzaUf_fmvwi0XbZ61_DcA&usqp=CAU"],
	since: "一個月前",
};

export default class Reviews extends Component {
	render() {
		const { spotDetail } = this.props
		return (
			<div className="reviews-layout">
				<div className="reviews-content">
					<div>
						<Progress rating={rating.rating} commentNum={rating.commentNum} individualRating={rating.individualRating} />
						<div className="reviews-write-layout">
							<div>寫些什麼 ...</div>
							<div className="review-write-block">發表評論</div>
						</div>
					</div>
					<div style={{ width: "70%" }}>
						{/* <Comment mode="guide" userName={guide.name} src={guide.src} guideDes={spotDetail} /> */}
						{/* <div className="divider" style={{ margin: "50px 0 50px 0" }} /> */}
						<Comment mode="comment" src={comment.src} userName={comment.userName} like={comment.like} rating={comment.rating} content={comment.content} img={comment.img} since={comment.since} />
					</div>
				</div>
			</div>
		)
	}
}
