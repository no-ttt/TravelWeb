import action from "../lib/createAction"

// 取得景點列
export const GET_TOURISM_LIST = "GET_TOURISM_LIST"
export const GetTourismList = (city, opt, currentPage) => action(GET_TOURISM_LIST, { city, opt, currentPage })

// 設置景點列
export const SET_TOURISM_LIST = "SET_TOURISM_LIST"
export const SetTourismList = (data) => action(SET_TOURISM_LIST, { data })