import React, { Component } from 'react'
import { Progress, Popup } from 'travel_component'
import AddComment from './AddComment'
import Comment from './Comment'
import { apiurl } from "Config"

const rating = {
	rating: 4,
	commentNum: 100,
	individualRating: [50, 20, 15, 8, 7]
};

const commentSort = ["最新", "評分最高", "評分最低"]

export default class SpotComment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sortWay: 0,
      imgs: [],
    }
  }

  componentDidMount() {
    const { GetCommentList, oid } = this.props
    GetCommentList(oid)
  }

	addSpotComment(content, rating) {
		const { oid, PostAddCommentList, fileList } = this.props
    const { imgs } = this.state
    let allImgs = []
    if (fileList.items.length !== 0) {
      allImgs = [...imgs, fileList.items]
    } 
		PostAddCommentList(Number(oid), content, rating, allImgs)
	}

  addSpotImg(file) {
    const { PostFileList, fileList } = this.props
    const { imgs } = this.state
    PostFileList(file)

    if (fileList.items.length !== 0) {
      this.setState({
        imgs: [...imgs, fileList.items]
      })
    }
      
  }

  deleteSpotComment(cid) {
    const { DeleteCommentList } = this.props
    DeleteCommentList(cid)
    setTimeout(() => location.reload(), 250)
  }

  likeComment(cid) {
    const { PutCommentLikeList } = this.props
    PutCommentLikeList(cid)
  }

	render() {
		const { spotName, spotCommentList, loginList } = this.props
    const { sortWay } = this.state
		const publishBtn = <div className="review-write-block"><div>發表評論</div></div>
    return (
			<div className="reviews-layout">
				<div className="reviews-content">
					<div>
						<Progress rating={rating.rating} commentNum={rating.commentNum} individualRating={rating.individualRating} />
						<div className="reviews-write-layout">
							<div>寫些什麼 ...</div>
							<Popup clickBtn={publishBtn} width={400} height={500} title={spotName}>
								<AddComment userName={loginList.items.cName} avatarURL={loginList.avatar} addSpotComment={(content, rating) => this.addSpotComment(content, rating)} addSpotImg={(file) => this.addSpotImg(file)} />
							</Popup>
						</div>
					</div>
					<div style={{ width: "70%" }}>
            <div style={{ margin: "25px 0" }}>
              <div>排序方式</div>
              <div style={{ display: "flex", flexDirection: "row", marginTop: 15 }}>
                {
                  commentSort.map((item, i) => (
                    <button key={i} className={i === sortWay ? "spot-comment-btn-clicked" : "spot-comment-btn"} onClick={() => this.setState({ sortWay: i })}>{item}</button>
                  ))
                }
              </div>
            </div>
            <div>
              {
                spotCommentList.items.length === 0 
                ? <div>
                    <div className="comment-divider" />
                    <div>這個景點目前沒有評論！</div>
                  </div>
                : spotCommentList.items.map((c, i) => (
                    <div key={i}>
                      <div className="comment-divider" />
                      <Comment userName={c.cName} avatarURL={c.changeAvatar === true ? apiurl+'/File/download/Avatar/'+c.avatarPath : c.avatarURL} content={c.cDes} rating={c.star5} since={c.create_date} like={c.thumbUp} clickLike={c.like} img={c.img} deleteSpotComment={() => this.deleteSpotComment(c.cid)} likeComment={() => this.likeComment(c.cid)} bDel={c.bDel} />
                    </div>
                  ))
              }
            </div>
					</div>
				</div>
			</div>
		)
	}
}
