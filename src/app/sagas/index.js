import { takeEvery, takeLatest, all } from "redux-saga/effects"

import * as actions from "../actions"
import * as tourism from "./tourism"

export default function* () {
	yield takeLatest(actions.GET_TOURISM_LIST, tourism.GetTourismList)
}
