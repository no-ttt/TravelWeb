import { takeEvery, takeLatest, all } from "redux-saga/effects"

import * as actions from "../actions"
import * as tourism from "./tourism"
import * as activity from "./activity"
import * as hotSpot from "./hotSpot"
import * as nearby from "./nearby"
import * as user from "./user"
import * as file from "./file"
import * as comment from "./comment"

export default function* () {
	yield takeLatest(actions.GET_AUTO_CITY_LIST, tourism.GetAutoCityList)
	yield takeLatest(actions.GET_TOURISM_LIST, tourism.GetTourismList)
	yield takeLatest(actions.GET_ACTIVITY_LIST, activity.GetActivityList)
	yield takeLatest(actions.GET_DETAIL_LIST, tourism.GetDetailList)
	yield takeLatest(actions.GET_HOTSPOT_LIST, hotSpot.GetHotSpotList)
	yield takeLatest(actions.GET_NEARBY_SPOT_LIST, nearby.GetNearbySpotList)
	yield takeLatest(actions.GET_ACTIVITY_AREA_LIST, activity.GetActivityAreaList)
	yield takeLatest(actions.GET_HOTSPOT_AREA_LIST, hotSpot.GetHotSpotAreaList)
	yield takeLatest(actions.GET_HOTRES_AREA_LIST, hotSpot.GetHotResAreaList)
	yield takeLatest(actions.GET_HOTHOTEL_AREA_LIST, hotSpot.GetHotHotelAreaList)
	yield takeLatest(actions.GET_ACTIVITY_DETAIL_LIST, activity.GetActivityDetailList)
	yield takeLatest(actions.GET_LOGIN_LIST, user.GetLoginList)
	yield takeLatest(actions.GET_COLLECTION_LIST, tourism.GetCollectionList)
	yield takeLatest(actions.POST_ADD_COLLECTION_LIST, tourism.PostCollectionList)
	yield takeLatest(actions.DELETE_COLLECTION_LIST, tourism.DeleteCollectionList)
	yield takeLatest(actions.PUT_USER_LIST, user.PutUserList)
	yield takeLatest(actions.POST_FILE_LIST, file.PostFileList)
	yield takeLatest(actions.GET_COMMENT_LIST, comment.GetCommentList)
	yield takeLatest(actions.POST_ADD_COMMENT_LIST, comment.PostAddCommentList)
	yield takeLatest(actions.DELETE_COMMENT_LIST, comment.DeleteCommentList)
	yield takeLatest(actions.PUT_COMMENT_LIKE_LIST, comment.PutCommentLikeList)
	yield takeLatest(actions.GET_PATH_NEARBY_SPOT_LIST, nearby.GetPathNearbySpotList)
}
