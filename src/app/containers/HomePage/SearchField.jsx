import { connect } from "react-redux"
import SearchField from "../../components/HomePage/SearchField"
import { GetAutoCityList } from "../../actions/tourism"

const mapStateToProps = (state) => ({
	autoCityList: state.autoCityList,
})

const mapDispatchToProps = {
	GetAutoCityList
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchField)
