import { takeEvery, takeLatest, all } from "redux-saga/effects"

import * as actions from "../actions"
import * as tourism from "./tourism"
import * as activity from "./activity"
import * as hotSpot from "./hotSpot"
import * as nearby from "./nearby"

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
}
