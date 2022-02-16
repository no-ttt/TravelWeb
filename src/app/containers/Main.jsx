import { connect } from "react-redux"
import Main from "../components/Main"
import { GetTourismList } from "../actions/tourism"

const mapStateToProps = (state) => ({
	tourismList: state.tourismList,
})

const mapDispatchToProps = {
	GetTourismList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
