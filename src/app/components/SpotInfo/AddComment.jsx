import React, { Component } from 'react'
import { Avatar, Rating } from 'travel_component'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'

export default class AddComment extends Component {
	constructor(props) {
		super(props)
		this.state = {
			rating: 0,
			content: "",
			img: [],    // 預覽上傳的圖片
		}
		this.fileEl = React.createRef()
	}

	onChange = (e) => {
    const file = e.target.files.item(0); // 取得選中檔案們的一個檔案
    const fileReader = new FileReader(); // FileReader 為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    fileReader.addEventListener("load", this.fileLoad);
		fileReader.readAsDataURL(file); // 讀取完檔案後，變成 URL

		this.props.addSpotImg(e.target.files)
	}

	fileLoad = (e) => {
		this.setState ({
			img: [...this.state.img, e.target.result]
		})
	}

	submit = () => {
		const { content, rating } = this.state
		const { addSpotComment } = this.props

		addSpotComment(content, rating)
		setTimeout(() => location.reload(), 250)
	}

	render() {
		const { userName, avatarURL } = this.props
		const { img } = this.state
		return (
			<div>
				<div className="add-comment-user-info">
					<Avatar alt={userName} src={avatarURL} width={45} />
					<div class="add-comment-user">{userName}</div>
				</div>
				<div className="add-comment-section">
					<Rating max={5} fixed={false} size="large" value={(n) => this.setState({ rating: n })} />
					<textarea id="comment" name="comment" rows="6" placeholder="寫些什麼？" 
						className="add-comment-textarea" onChange={e => this.setState({ content: e.target.value })} />
					<div style={{ display: "flex", flexDirection: "row" }}>
						<label className="add-comment-upload-img-frame">
							<input type="file" multiple draggable="true" onChange={this.onChange} style={{ display: "none" }} ref={this.fileEl} />
							<div><AddAPhotoIcon sx={{ fontSize: 30 }} /></div>	
						</label>
						<div className="add-comment-img-section">
							{
								img.length !== 0 &&
								img.map((src, i) => (
									<img key={i} className="add-comment-upload-img" src={src} />
								))
							}
						</div>
					</div>
					<button className="add-comment-btn" onClick={this.submit}>我要發佈</button>
				</div>
			</div>
		)
	}
}
