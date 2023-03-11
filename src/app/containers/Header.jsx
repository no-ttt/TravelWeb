import { connect } from "react-redux"
import Header from "../components/Header"
import { GetLoginList } from "../actions/user"

const mapStateToProps = (state) => ({
	loginList: state.loginList,
	fileList: state.fileList,
})

const mapDispatchToProps = {
	GetLoginList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
