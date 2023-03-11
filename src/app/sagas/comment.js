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

export function* GetCommentList(action) {
	let data = yield call(api, {
        cmd: `Comment?oid=${action.oid}`,
    })
	yield put(actions.SetCommentList(data.body))
}

export function* PostAddCommentList(action) {
	let data = yield call(api, {
        cmd: `Comment/Add`,
        method: 'POST',
        data: {
			"oid": action.oid,
            "cDes": action.cDes,
            "star5": action.star5,
            "imgs": action.imgs
		}
    })
	yield put(actions.SetAddCommentList(data.body))
}

export function* DeleteCommentList(action) {
	let data = yield call(api, {
        cmd: `Comment/Delete?cid=${action.cid}`,
        method: 'DELETE',
    })
	yield put(actions.SetDeleteCommentList(data.body))
}

export function* PutCommentLikeList(action) {
	let data = yield call(api, {
        cmd: `Comment/Like?cid=${action.cid}`,
        method: 'PUT',
    })
	yield put(actions.SetCommentLikeList(data.body))
}