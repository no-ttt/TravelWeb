import { connect } from "react-redux"
import SearchField from "../components/SearchField"
import { GetTourismList } from "../actions/tourism"
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
	GetTourismList
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchField))
