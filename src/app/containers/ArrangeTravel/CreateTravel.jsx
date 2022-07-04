import { connect } from "react-redux"
import CreateTravel from "../../components/ArrangeTravel/CreateTravel"
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateTravel))
