import { call, put } from "redux-saga/effects"
import * as actions from "../actions"
import api from "../lib/api"

/* 
    take:  等待一個 action 傳入
    call:  呼叫一個 function
    put :  呼叫一個 action
    select 從 store 取出資料

*/

export function* GetActivityList(action) {
	let data = yield call(api, {
		"cmd": `Activity?month=${action.month}`,
	})
	yield put(actions.SetActivityList(data.body))
}

export function* GetActivityAreaList(action) {
	let data = yield call(api, {
		"cmd": `Activity?area=${action.area}&month=${action.month}`,
	})
	yield put(actions.SetActivityAreaList(data.body))
}

export function* GetActivityDetailList(action) {
	let data = yield call(api, {
		"cmd": `Activity/Detail?oid=${action.oid}`,
	})
	yield put(actions.SetActivityDetailList(data.body))
}