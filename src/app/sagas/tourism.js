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
        // thirdpartyurl: `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${action.city}`,
        thirdpartyurl: `http://localhost:59089/api/Spot?type=${action.opt}&city=${action.city}&page=1&fetch=30`,
	})
	yield put(actions.SetTourismList(data.body))
}
