import action from "../lib/createAction"

// 搜尋景點 (Autocomplete)
export const GET_AUTO_CITY_LIST = "GET_AUTO_CITY_LIST"
export const GetAutoCityList = (city) => action(GET_AUTO_CITY_LIST, { city })

export const SET_AUTO_CITY_LIST = "SET_AUTO_CITY_LIST"
export const SetAutoCityList = (data) => action(SET_AUTO_CITY_LIST, { data })


// 取得指定 縣市/鄉鎮市區 的景點
export const GET_TOURISM_LIST = "GET_TOURISM_LIST"
export const GetTourismList = (city, opt, start) => action(GET_TOURISM_LIST, { city, opt, start })

export const SET_TOURISM_LIST = "SET_TOURISM_LIST"
export const SetTourismList = (data) => action(SET_TOURISM_LIST, { data })


// 景點詳細資訊
export const GET_DETAIL_LIST = "GET_DETAIL_LIST"
export const GetDetailList = (oid) => action(GET_DETAIL_LIST, { oid })

export const SET_DETAIL_LIST = "SET_DETAIL_LIST"
export const SetDetailList = (data) => action(SET_DETAIL_LIST, { data })
