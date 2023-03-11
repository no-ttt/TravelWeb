import React, { Component } from 'react'
import AddTrip from './AddTrip'
import { Popup } from 'travel_component'
import arrangefield_bg from '../../img/arrangefield_bg.jpg'

export default class ArrangeField extends Component {
	render() {
		const createBtn =<div className="arrangefield-create">建立行程 ＋</div>;
		return (
			<div className="arrangefield-layout">
				<img src={arrangefield_bg} alt="arrangefield_bg" className="arrangefield-bd" />
				<div className="arrangefield-bar-pos">
					<Popup clickBtn={createBtn} width={400} height={620} title="建立行程">
						<div style={{ padding: 20, display: "flex", justifyContent: "center" }}>
							<AddTrip />
						</div>
					</Popup>
				</div>
			</div>
		)
	}
}
