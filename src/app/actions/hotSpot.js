import action from "../lib/createAction"

// 熱門景點（縣市鄉鎮市區）
export const GET_HOTSPOT_LIST = "GET_HOTSPOT_LIST"
export const GetHotSpotList = (city) => action(GET_HOTSPOT_LIST, { city })

export const SET_HOTSPOT_LIST = "SET_HOTSPOT_LIST"
export const SetHotSpotList = (data) => action(SET_HOTSPOT_LIST, { data })


// 熱門景點（區域）
export const GET_HOTSPOT_AREA_LIST = "GET_HOTSPOT_AREA_LIST"
export const GetHotSpotAreaList = (area) => action(GET_HOTSPOT_AREA_LIST, { area })

export const SET_HOTSPOT_AREA_LIST = "SET_HOTSPOT_AREA_LIST"
export const SetHotSpotAreaList = (data) => action(SET_HOTSPOT_AREA_LIST, { data })


// 熱門餐廳（區域）
export const GET_HOTRES_AREA_LIST = "GET_HOTRES_AREA_LIST"
export const GetHotResAreaList = (area) => action(GET_HOTRES_AREA_LIST, { area })

export const SET_HOTRES_AREA_LIST = "SET_HOTRES_AREA_LIST"
export const SetHotResAreaList = (data) => action(SET_HOTRES_AREA_LIST, { data })


// 熱門住宿（區域）
export const GET_HOTHOTEL_AREA_LIST = "GET_HOTHOTEL_AREA_LIST"
export const GetHotHotelAreaList = (area) => action(GET_HOTHOTEL_AREA_LIST, { area })

export const SET_HOTHOTEL_AREA_LIST = "SET_HOTHOTEL_AREA_LIST"
export const SetHotHotelAreaList = (data) => action(SET_HOTHOTEL_AREA_LIST, { data })
