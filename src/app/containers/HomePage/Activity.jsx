import { connect } from "react-redux"
import Activity from "../../components/HomePage/Activity"
import { GetActivityList } from "../../actions/activity"

const mapStateToProps = (state) => ({
	activityList: state.activityList,
})

const mapDispatchToProps = {
	GetActivityList
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity)
