import { call, put } from "redux-saga/effects"
import * as actions from "../actions"
import api from "../lib/api"

/* 
    take:  等待一個 action 傳入
    call:  呼叫一個 function
    put :  呼叫一個 action
    select 從 store 取出資料

*/

export function* GetTourismList(action) {
	let data = yield call(api, {
	"cmd": `Spot?type=${action.opt}&city=${action.city}&page=${action.currentPage}&fetch=20`,
	})
	yield put(actions.SetTourismList(data.body))
}
