import React, { Component } from 'react'
import { grey } from '@material-ui/core/colors'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'
import MailIcon from '@material-ui/icons/Mail'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-nav-bar">
          <span className="footer-nav-text">關於</span>
          <span className="footer-nav-text">人才招募</span>
          <span className="footer-nav-text">Travel_Note Blog</span>
          <span className="footer-nav-text">服務條款</span>
          <span className="footer-nav-text">隱私權政策</span>
          <span className="footer-nav-text">商家合作</span>
          <span className="footer-nav-text">服務中心</span>
        </div>

        <div className="footer-info-icon-bar">
          <FacebookIcon fontSize="large" style={{ color: grey[500] }} className="footer-icon" />
          <InstagramIcon fontSize="large" style={{ color: grey[500] }} className="footer-icon" />
          <YouTubeIcon fontSize="large" style={{ color: grey[500] }} className="footer-icon" />
          <MailIcon fontSize="large" style={{ color: grey[500] }} className="footer-icon" />
        </div>
      </div>
    );
  }
}
