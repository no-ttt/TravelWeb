import { call, put } from "redux-saga/effects"
import * as actions from "../actions"
import api from "../lib/api"

/* 
    take:  等待一個 action 傳入
    call:  呼叫一個 function
    put :  呼叫一個 action
    select 從 store 取出資料

*/

export function* GetAutoCityList(action) {
	let data = yield call(api, {
	    cmd: `Spot/AutoComplete?city=${action.city}`,
	})
	yield put(actions.SetAutoCityList(data.body))
}

export function* GetTourismList(action) {
	let data = yield call(api, {
	    cmd: `Spot?city=${action.city}&type=${action.opt}&start=${action.start}&counts=32`,
	})
	yield put(actions.SetTourismList(data.body))
}

export function* GetDetailList(action) {
	let data = yield call(api, {
	    cmd: `Spot/Detail?oid=${action.oid}`,
	})
	yield put(actions.SetDetailList(data.body))
}

export function* GetCollectionList(action) {
	let data = yield call(api, {
	    cmd: `Spot/Favorite`,
	})
	yield put(actions.SetCollectionList(data.body))
}

export function* PostCollectionList(action) {
	let data = yield call(api, {
		cmd: `Spot/Favorite/add?oid=${action.oid}`,
		method: 'POST',
		data: {
			"oid": action.oid,
		}
	})

	yield put(actions.SetPostCollectionList(data.body))
}

export function* DeleteCollectionList(action) {
	let data = yield call(api, {
		cmd: `Spot/Favorite/delete?oid=${action.oid}`,
		method: 'DELETE',
		data: {
			"oid": action.oid,
		}
	})

	yield put(actions.SetDeleteCollectionList(data.body))
}
