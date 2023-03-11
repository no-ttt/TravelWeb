import { connect } from "react-redux"
import SpotComment from "../../components/SpotInfo/SpotComment"
import { GetCommentList, PostAddCommentList, DeleteCommentList, PutCommentLikeList } from "../../actions/comment"
import { PostFileList } from "../../actions/file"

const mapStateToProps = (state) => ({
	spotCommentList:  state.spotCommentList,
	addSpotCommentList: state.addSpotCommentList,
	deleteCommentList: state.deleteCommentList,
	loginList: state.loginList,
	commentLikeList: state.commentLikeList,
	fileList: state.fileList,
})

const mapDispatchToProps = {
	GetCommentList,
	PostAddCommentList,
	DeleteCommentList,
	PutCommentLikeList,
	PostFileList,
}

export default connect(mapStateToProps, mapDispatchToProps)(SpotComment)
