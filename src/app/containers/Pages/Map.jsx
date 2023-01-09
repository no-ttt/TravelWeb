import { connect } from "react-redux"
import Map from "../../components/Pages/Map"
import { GetNearbySpotList } from "../../actions/nearby"

const mapStateToProps = (state) => ({
	nearbySpotList: state.nearbySpotList,
})

const mapDispatchToProps = {
	GetNearbySpotList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
