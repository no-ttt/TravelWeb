import action from "../lib/createAction"

// 指定經緯度的附近景點 (公里)
export const GET_NEARBY_SPOT_LIST = "GET_NEARBY_SPOT_LIST"
export const GetNearbySpotList = (lat, lon, distance, opt) => action(GET_NEARBY_SPOT_LIST, { lat, lon, distance, opt })

export const SET_NEARBY_SPOT_LIST = "SET_NEARBY_SPOT_LIST"
export const SetNearbySpotList = (data) => action(SET_NEARBY_SPOT_LIST, { data })

