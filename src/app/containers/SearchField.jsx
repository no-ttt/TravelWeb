import { connect } from "react-redux"
import SearchField from "../components/SearchField"
import { GetTourismList } from "../actions/tourism"

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
	GetTourismList,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchField)
