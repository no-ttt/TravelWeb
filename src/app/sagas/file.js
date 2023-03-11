import { call, put } from "redux-saga/effects"
import * as actions from "../actions"
import api from "../lib/api"

/* 
    take:  等待一個 action 傳入
    call:  呼叫一個 function
    put :  呼叫一個 action
    select 從 store 取出資料

*/

export function* PostFileList(action) {
	let data = yield call(api, {
		cmd: `File/uploadImg`,
		method: 'POST',
		fileList: action.file,
    })
	yield put(actions.SetFileList(data.body))
}
