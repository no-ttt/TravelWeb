import { connect } from "react-redux"
import Header from "../components/Header"
import { GetTourismList } from "../actions/tourism"

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
	GetTourismList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
