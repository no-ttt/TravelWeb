import { connect } from "react-redux"
import SpotInfo from "../../components/SpotInfo/SpotInfo"
import { GetDetailList } from "../../actions/detail"

const mapStateToProps = (state) => ({
	detailList: state.detailList,
})

const mapDispatchToProps = {
	GetDetailList,
}

export default connect(mapStateToProps, mapDispatchToProps)(SpotInfo)
