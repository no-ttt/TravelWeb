import { connect } from "react-redux"
import ActivityAbout from "../../components/ActivityArea/ActivityAbout"
import { GetActivityAreaList } from "../../actions/activity"
import { GetHotSpotAreaList, GetHotResAreaList, GetHotHotelAreaList } from "../../actions/hotSpot"

const mapStateToProps = (state) => ({
	activityAreaList: state.activityAreaList,
	hotSpotAreaList: state.hotSpotAreaList,
	hotResAreaList: state.hotResAreaList,
	hotHotelAreaList: state.hotHotelAreaList,
})

const mapDispatchToProps = {
	GetActivityAreaList,
	GetHotSpotAreaList,
	GetHotResAreaList,
	GetHotHotelAreaList
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityAbout)
