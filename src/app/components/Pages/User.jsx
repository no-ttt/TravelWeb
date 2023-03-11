import React, { Component } from 'react'
import Header from '../../containers/Header'
import { Avatar, Tabs, Popup } from 'travel_component'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import DateRangeIcon from '@mui/icons-material/DateRange'
import CakeIcon from '@mui/icons-material/Cake'
import EmailIcon from '@mui/icons-material/Email'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import AddIcon from '@mui/icons-material/Add'

const data = [
	{ title: "動態消息", type: "1" },
	{ title: "旅程", type: "2" },
	{ title: "貼文", type: "3" },
];
 
let Item = ({ userInfo }) => {
	return (
		<div className="user-intro-block">
			<div className="user-intro">
				<div className="user-intro-title">簡介</div>
				<div className="user-intro-content">
					<DateRangeIcon fontSize="small" style={{ color: "#545454" }} />
					<div className="user-intro-content-txt">{userInfo.since} 加入！</div>
				</div>
				{
					userInfo.eMail === null ?
					<div className="user-intro-content">
						<AddIcon fontSize="small" />
						<div className="user-intro-content-txt">新增信箱</div>
					</div>
					: <div className="user-intro-content">
							<EmailIcon fontSize="small" style={{ color: "#545454" }} />
							<div className="user-intro-content-txt">{userInfo.eMail}</div>
						</div>
				}
				{
					userInfo.address === null ?
					<div className="user-intro-content">
						<AddIcon fontSize="small" />
						<div className="user-intro-content-txt">新增所在城市</div>
					</div>
					: <div className="user-intro-content">
							<LocationOnIcon fontSize="small" style={{ color: "#545454" }} />
							<div className="user-intro-content-txt">{userInfo.address}</div>
						</div>
				}
				{
					userInfo.birthday === null ?
					<div className="user-intro-content">
						<AddIcon fontSize="small" />
						<div className="user-intro-content-txt">新增生日</div>
					</div> 
					: <div className="user-intro-content">
							<div className="user-intro-content">
								<CakeIcon fontSize="small" style={{ color: "#545454" }} />
								<div className="user-intro-content-txt">{userInfo.birthday}</div>
							</div>
						</div>
				}
				{
					userInfo.cDes === null ?
					<div className="user-intro-content">
						<AddIcon fontSize="small" />
						<div className="user-intro-content-txt">介紹自己～</div>
					</div>
					: <div className="user-self-intro">{userInfo.cDes}</div>
				}
			</div>
			<div className="user-dynamic-news">
				<div>發布第一則消息！</div>
			</div>
		</div>
	)
};

export default class User extends Component {
	constructor(props) {
		super(props)
		this.state = {
			select: 1,
			changeAvatar: false,
		}
		this.fileEl = React.createRef()
	}

	userInfoFill = () => {
		const { loginList } = this.props
		this.setState({
			cName: loginList.items.cName === null ? "" : loginList.items.cName,
			city: loginList.items.address === null ? "" : loginList.items.address,
			birthday: loginList.items.birthday === null ? "" : loginList.items.birthday,
			email: loginList.items.eMail === null ? "" : loginList.items.eMail,
			about: loginList.items.cDes === null ? "" : loginList.items.cDes,
			avatarUrl: loginList.avatar === null ? "" : loginList.avatar,
		})
	}

	updateUserInfo = () => {
		const { PutUserList, fileList } = this.props
		const { cName, about, email, city, birthday, changeAvatar } = this.state

		let AID = -1
		if (changeAvatar) AID = fileList.items

		PutUserList(cName, about, email, city, birthday, AID , changeAvatar)
		setTimeout(() => location.reload(), 300)
	}

	changeAvatar = (e) => {
    const file = e.target.files.item(0)
    const fileReader = new FileReader()
    fileReader.addEventListener("load", this.fileLoad)
    fileReader.readAsDataURL(file)

		const { PostFileList } = this.props
		PostFileList(e.target.files)

		this.setState({ changeAvatar: true })
  }

	fileLoad = (e) => {
		// Browse(tmp)
		this.setState({
			avatarUrl: e.target.result
		})
	}

	render() {
		const { loginList } = this.props
		const { avatarUrl } = this.state
		const editBtn = <button className="user-edit-file-btn" onClick={this.userInfoFill}>編輯個人檔案</button>;
		return (
			<div>
				<Header />
				<div className="user-bg">
					<div className="user-info">
						<div className="user-account-block">
							<div className="user-info-account">
								{
									<Avatar
										alt={loginList.items.cName}
										src={loginList.avatar}
										width={100}
										hover={false}
									/>
								}
								
								<div className="user-info-detail">
									<div>
										<div className="user-info-txt">投稿</div>
										<div className="user-info-number">0</div>
									</div>
									<div>
										<div className="user-info-txt">粉絲</div>
										<div className="user-info-number">0</div>
									</div>
									<div>
										<div className="user-info-txt">追蹤中</div>
										<div className="user-info-number">0</div>
									</div>
								</div>
							</div>
							<Popup clickBtn={editBtn} width={560} height={450} close={false} dialog={true} confirm={this.updateUserInfo}>
								<div style={{ padding: 20, display: "flex", justifyContent: "space-between" }}>
									<div className="user-avatar">
										<label className="user-avatar-update">
										<input type="file" onChange={this.changeAvatar} style={{ display: "none" }} ref={this.fileEl} />
											<div><AccountBoxIcon /></div>	
											<div style={{ marginTop: "5px" }}>變更大頭貼</div>
										</label>
										<Avatar
											alt={loginList.items.cName}
											src={avatarUrl}
											width={100}
											hover={false}
										/>
									</div>
									<div>
										<div className="user-input">
											<div className="user-input-subtitle">名稱</div>
											<TextField size="small" fullWidth={true} defaultValue={loginList.items.cName} 
												onChange={(e) => this.setState({ cName: e.target.value }) } 
											/>
										</div>
										<div className="user-input">
											<div className="user-input-subtitle">所在城市</div>
											<TextField size="small" fullWidth={true} defaultValue={loginList.items.address} 
												onChange={(e) => this.setState({ city: e.target.value }) } 
											/>
										</div>
										<div className="user-input">
											<div className="user-input-subtitle">生日</div>
											<LocalizationProvider dateAdapter={AdapterDayjs}>
												<DatePicker
													value={this.state.birthday}
													inputFormat="YYYY/MM/DD"
													onChange={(newValue) => this.setState({ birthday: `${newValue.$y}/${newValue.$M + 1}/${newValue.$D}` })}
													renderInput={(params) => <TextField size="small" fullWidth={true} {...params} />}
												/>
											</LocalizationProvider>
										</div>
										<div className="user-input">
											<div className="user-input-subtitle">EMail</div>
											<TextField size="small" fullWidth={true} defaultValue={loginList.items.eMail}
												onChange={(e) => this.setState({ email: e.target.value })} 
											/>
										</div>
										<div className="user-input">
											<div className="user-input-subtitle">關於自己</div>
											<TextField size="small" fullWidth={true} multiline rows={4} defaultValue={loginList.items.cDes}
												onChange={(e) => this.setState({ about: e.target.value })} />
										</div>
									</div>
								</div>
							</Popup>
						</div>
						<Tabs data={data} tab={(data) => data.title} setCurrent={(data) => this.setState({ select: data.type })} tabPosCenter={false}> 
							<Item userInfo={loginList.items} />
						</Tabs>
					</div>
				</div>
			</div>
		)
	}
}
