import { call, put } from "redux-saga/effects"
import * as actions from "../actions"
import api from "../lib/api"

/* 
    take:  等待一個 action 傳入
    call:  呼叫一個 function
    put :  呼叫一個 action
    select 從 store 取出資料

*/

export function* GetNearbySpotList(action) {
	let data = yield call(api, {
	    "cmd": `LBSE/Nearby?lat=${action.lat}&lon=${action.lon}&distance=${action.distance}&type=${action.opt}`,
	})
	yield put(actions.SetNearbySpotList(data.body))
}

export function* GetPathNearbySpotList(action) {
	let data = yield call(api, {
	    "cmd": `LBSE/Test?startLat=${action.startLat}&startLon=${action.startLon}&endLat=${action.endLat}&endLon=${action.endLon}&distance=${action.distance}`,
	})
	yield put(actions.SetPathNearbySpotList(data.body))
}