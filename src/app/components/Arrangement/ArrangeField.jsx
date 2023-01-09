import React, { Component } from 'react'
import arrangefield_bg from '../../img/arrangefield_bg.jpg'

export default class ArrangeField extends Component {
	render() {
		return (
			<div className="arrangefield-layout">
				<img src={arrangefield_bg} alt="arrangefield_bg" className="arrangefield-bd" />
				<div className="arrangefield-bar-pos">
					<button className="arrangefield-create">建立行程 ＋</button>
				</div>
			</div>
		)
	}
}
