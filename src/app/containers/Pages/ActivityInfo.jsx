import { connect } from "react-redux"
import ActivityInfo from "../../components/Pages/ActivityInfo"
import { GetActivityDetailList } from "../../actions/activity"

const mapStateToProps = (state) => ({
	activityDetailList: state.activityDetailList,
})

const mapDispatchToProps = {
	GetActivityDetailList,
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityInfo)
