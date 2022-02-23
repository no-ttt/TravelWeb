import { connect } from "react-redux"
import SearchField from "../components/SearchField"
import {push } from 'react-router-redux'
import { GetTourismList } from "../actions/tourism"
import { withRouter } from 'react-router-dom'
const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
	GetTourismList,push
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchField))
