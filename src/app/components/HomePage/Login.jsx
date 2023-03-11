import React, { Component } from 'react'
import google from '../../img/google.png'
import fb from '../../img/fb.png'
import line from '../../img/line.png'

export default class Login extends Component {
  googleLogin = () => {
    window.location.replace("http://localhost:3000/api/OAuth/google")
  }

  lineLogin = () => {
    window.location.replace("http://localhost:3000/api/OAuth/line")
  }
	
	render() {
		return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="header-login-title">Sign In ?</div>
        <button className="header-login-btn-option" onClick={this.googleLogin}>
          <img src={google} alt="google" style={{ width: 20, margin: "0 10px 0 15px" }} />
          <div>Sign in with Google</div>
        </button>
        <button className="header-login-btn-option">
          <img src={fb} alt="fb" style={{ width: 20, margin: "0 10px 0 15px" }} />
          <div>Sign in with Facebook</div>
        </button>
        <button className="header-login-btn-option" onClick={this.lineLogin}>
          <img src={line} alt="line" style={{ width: 20, margin: "0 10px 0 15px" }} />
          <div>Sign in with Line</div>
        </button>
      </div>
		)
	}
}
