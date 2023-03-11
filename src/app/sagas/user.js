import { call, put } from "redux-saga/effects"
import * as actions from "../actions"
import api from "../lib/api"

/* 
    take:  等待一個 action 傳入
    call:  呼叫一個 function
    put :  呼叫一個 action
    select 從 store 取出資料

*/

export function* GetLoginList(action) {
	let data = yield call(api, {
        cmd: `OAuth/Me`,
	})
	yield put(actions.SetLoginList(data.body))
}

export function* PutUserList(action) {
	let data = yield call(api, {
        cmd: `Member/update`,
        method: 'PUT',
		data: {
			"cName": action.cName,
            "cDes": action.cDes,
            "email": action.email,
            "city": action.city,
            "birthday": action.birthday,
            "aid": action.aid,
            "changeAvatar": action.changeAvatar
		}
    })
	yield put(actions.SetUserList(data.body))
}
