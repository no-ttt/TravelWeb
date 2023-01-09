import { call, put } from "redux-saga/effects"
import * as actions from "../actions"
import api from "../lib/api"

/* 
    take:  等待一個 action 傳入
    call:  呼叫一個 function
    put :  呼叫一個 action
    select 從 store 取出資料

*/

export function* GetHotSpotList(action) {
	let data = yield call(api, {
	    "cmd": `Spot/HotSpot?city=${action.city}`,
	})
	yield put(actions.SetHotSpotList(data.body))
}

export function* GetHotSpotAreaList(action) {
	let data = yield call(api, {
	    "cmd": `Spot/HotSpot?area=${action.area}&type=5&top=8`,
	})
	yield put(actions.SetHotSpotAreaList(data.body))
}

export function* GetHotResAreaList(action) {
	let data = yield call(api, {
	    "cmd": `Spot/HotSpot?area=${action.area}&type=6&top=8`,
	})
	yield put(actions.SetHotResAreaList(data.body))
}

export function* GetHotHotelAreaList(action) {
	let data = yield call(api, {
	    "cmd": `Spot/HotSpot?area=${action.area}&type=7&top=8`,
	})
	yield put(actions.SetHotHotelAreaList(data.body))
}