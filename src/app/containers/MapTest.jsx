import { connect } from "react-redux"
import MapTest from '../components/MapTest'
import { GetPathNearbySpotList } from "../actions/nearby"

const mapStateToProps = (state) => ({
	pathNearbySpotList: state.pathNearbySpotList,
})

const mapDispatchToProps = {
	GetPathNearbySpotList,
}

export default connect(mapStateToProps, mapDispatchToProps)(MapTest)
