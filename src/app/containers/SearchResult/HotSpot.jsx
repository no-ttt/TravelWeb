import { connect } from "react-redux"
import HotSpot from "../../components/SearchResult/HotSpot"
import { GetHotSpotList } from "../../actions/hotSpot"

const mapStateToProps = (state) => ({
	hotSpotList: state.hotSpotList,
})

const mapDispatchToProps = {
	GetHotSpotList,
}

export default connect(mapStateToProps, mapDispatchToProps)(HotSpot)
