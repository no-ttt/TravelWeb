import { connect } from "react-redux"
import Main from "../components/Main_1"
import { GetTourismList } from "../actions/tourism"
const mapStateToProps = (state) => ({
	tourismList: state.tourismList,
})

const mapDispatchToProps = {
	GetTourismList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
