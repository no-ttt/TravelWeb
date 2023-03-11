import { connect } from "react-redux"
import Collection from "../../components/Pages/Collection"
import { GetCollectionList } from "../../actions/tourism"

const mapStateToProps = (state) => ({
	collectionList: state.collectionList,
})
  
const mapDispatchToProps = {
	GetCollectionList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection)
