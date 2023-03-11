import { connect } from "react-redux"
import User from "../../components/Pages/User"
import { GetLoginList, PutUserList } from "../../actions/user"
import { PostFileList } from "../../actions/file"

const mapStateToProps = (state) => ({
	loginList: state.loginList,
	userList: state.userList,
	fileList: state.fileList,
})

const mapDispatchToProps = {
	GetLoginList,
	PutUserList,
	PostFileList,
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
