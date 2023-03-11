import { connect } from "react-redux"
import SpotDetail from "../../components/SpotInfo/SpotDetail"
import { PostCollectionList, DeleteCollectionList } from "../../actions/tourism"

const mapStateToProps = (state) => ({
	addCollectionList: state.addCollectionList,
	deleteCollectionList: state.deleteCollectionList,
})

const mapDispatchToProps = {
	PostCollectionList,
	DeleteCollectionList,
}

export default connect(mapStateToProps, mapDispatchToProps)(SpotDetail)
