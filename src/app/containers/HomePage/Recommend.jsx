import { connect } from "react-redux"
import Recommend from "../../components/HomePage/Recommend"
import { GetHotSpotList } from "../../actions/hotSpot"

const mapStateToProps = (state) => ({
	hotSpotList: state.hotSpotList,
})

const mapDispatchToProps = {
	GetHotSpotList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
