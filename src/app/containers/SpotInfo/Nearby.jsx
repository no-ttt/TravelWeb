import { connect } from "react-redux"
import Nearby from "../../components/Nearby"
import { GetNearbySpotList } from "../../actions/nearby"

const mapStateToProps = (state) => ({
	nearbySpotList: state.nearbySpotList,
})

const mapDispatchToProps = {
	GetNearbySpotList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Nearby)
