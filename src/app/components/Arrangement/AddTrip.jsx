import React, { Component } from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import AddIcon from '@mui/icons-material/Add'

export default class AddTrip extends Component {
	render() {
		return (
			<div>
        <div className="add-trip-col">
          <div className="add-trip-subtitle">行程名稱</div>
          <TextField size="small" fullWidth={true} />
        </div>
        <div className="add-trip-col">
          <div className="add-trip-subtitle">旅遊日期</div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              // value={this.state.birthday}
              inputFormat="YYYY/MM/DD"
              // onChange={(newValue) => this.setState({ birthday: `${newValue.$y}/${newValue.$M + 1}/${newValue.$D}` })}
              renderInput={(params) => <TextField size="small" fullWidth={true} {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className="add-trip-col">
          <div className="add-trip-subtitle">旅遊城市</div>
          <div className="add-trip-col-path">
            <TextField size="small" />
            <div className="add-trip-col-path-dash"> - </div>
            <TextField size="small" />
          </div>
        </div>
        <div>
          <div>參與成員</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
						<label className="add-trip-member">
							<div><AddIcon sx={{ fontSize: 30, color: "gray" }} /></div>	
						</label>
					</div>
        </div>
        <div className="add-trip-col">
          <div className="add-trip-subtitle">交通方式</div>
          <TextField size="small" fullWidth={true} />
        </div>
        <div className="add-trip-col">
          <div className="add-trip-subtitle">備注</div>
          <TextField size="small" fullWidth={true} multiline rows={4} />
        </div>
        <button className="add-trip-btn" onClick={this.submit}>建立行程</button>
			</div>
		)
	}
}
