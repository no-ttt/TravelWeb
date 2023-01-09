import { connect } from 'react-redux'
import SpotInfo from '../../components/Pages/SpotInfo'
import { GetDetailList } from '../../actions/tourism'

const mapStateToProps = (state) => ({
    detailList: state.detailList,
})

const mapDispatchToProps = {
	GetDetailList
}

export default connect(mapStateToProps, mapDispatchToProps)(SpotInfo)
