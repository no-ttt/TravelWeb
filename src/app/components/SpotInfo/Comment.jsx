import React, { Component } from 'react'
import { Avatar, Rating } from 'travel_component'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import { apiurl } from "Config"

export default class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			click: this.props.clickLike,
			clickNum: this.props.like,
      anchorEl: null,
		}
	}

  isClick = () => {
    const { click, clickNum } = this.state
    const { likeComment } = this.props

    likeComment()
    
    this.setState({
      clickNum: click === false ? clickNum + 1 : clickNum - 1,
      click: !click,
    })
	}

  handleClose = () => {
		this.setState({
			anchorEl: null,
		})
	}

	handleClick = (event) => {
    this.setState({
			anchorEl: event.currentTarget,
		})
  }

	render() {
    const { userName, avatarURL, content, rating, since, img, deleteSpotComment } = this.props
    const { clickNum, click, anchorEl } = this.state
    return (
			<div>
        <div className="comment-header">
          <div className="comment-user">
            <Avatar alt={userName} src={avatarURL} width={45} />
            <div className="comment-user-name">{userName}</div>
          </div>
          <button className="comment-button" onClick={this.handleClick}><MoreVertIcon /></button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            disableScrollLock={true}
          >
            <MenuItem dense onClick={deleteSpotComment}>
              <ListItemText>刪除評論</ListItemText>
            </MenuItem>
          </Menu>
          
        </div>
        <div className="comment-content">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Rating size="small" fixed={true} default={rating} />
            <div className="comment-date">{since}</div>
          </div>
          <div className="comment-content-txt">{content}</div>
        </div>
        {
          img !== null &&
          <div className="comment-img-section">
            {img.split(", ").map((src, i) =>
              <img key={i} src={apiurl+'/File/download/Avatar/'+src} alt={"photo-" + i} className="comment-photo" />
            )}
          </div>
        }
        <div className="comment-thumbup">
          <button className="comment-button" onClick={this.isClick}>
            {click ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
          </button>
          <div style={{ fontSize: "14px", marginLeft: "5px" }}>{clickNum}</div>
        </div>
			</div>
		)
	}
}
