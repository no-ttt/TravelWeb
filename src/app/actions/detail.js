import action from "../lib/createAction"

export const GET_DETAIL_LIST = "GET_DETAIL_LIST"
export const GetDetailList = (id) => action(GET_DETAIL_LIST, { id })

export const SET_DETAIL_LIST = "SET_DETAIL_LIST"
export const SetDetailList = (data) => action(SET_DETAIL_LIST, { data })