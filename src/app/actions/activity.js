import action from "../lib/createAction"

// 取得指定月數內所有活動資訊
export const GET_ACTIVITY_LIST = "GET_ACTIVITY_LIST"
export const GetActivityList = (month) => action(GET_ACTIVITY_LIST, { month })

export const SET_ACTIVITY_LIST = "SET_ACTIVITY_LIST"
export const SetActivityList = (data) => action(SET_ACTIVITY_LIST, { data })


// 指定區域內的活動資訊
export const GET_ACTIVITY_AREA_LIST = "GET_ACTIVITY_AREA_LIST"
export const GetActivityAreaList = (area, month) => action(GET_ACTIVITY_AREA_LIST, { area, month })

export const SET_ACTIVITY_AREA_LIST = "SET_ACTIVITY_AREA_LIST"
export const SetActivityAreaList = (data) => action(SET_ACTIVITY_AREA_LIST, { data })


// 活動詳細資訊
export const GET_ACTIVITY_DETAIL_LIST = "GET_ACTIVITY_DETAIL_LIST"
export const GetActivityDetailList = (oid) => action(GET_ACTIVITY_DETAIL_LIST, { oid })

export const SET_ACTIVITY_DETAIL_LIST = "SET_ACTIVITY_DETAIL_LIST"
export const SetActivityDetailList = (data) => action(SET_ACTIVITY_DETAIL_LIST, { data })
