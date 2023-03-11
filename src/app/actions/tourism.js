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

// 所有收藏景點
export const GET_COLLECTION_LIST = "GET_COLLECTION_LIST"
export const GetCollectionList = () => action(GET_COLLECTION_LIST, { })

export const SET_COLLECTION_LIST = "SET_COLLECTION_LIST"
export const SetCollectionList = (data) => action(SET_COLLECTION_LIST, { data })

// 景點加入收藏
export const POST_ADD_COLLECTION_LIST = "POST_ADD_COLLECTION_LIST"
export const PostCollectionList = (oid) => action(POST_ADD_COLLECTION_LIST, { oid })

export const SET_ADD_COLLECTION_LIST = "SET_ADD_COLLECTION_LIST"
export const SetPostCollectionList = (data) => action(SET_ADD_COLLECTION_LIST, { data })

// 景點取消收藏
export const DELETE_COLLECTION_LIST = "DELETE_COLLECTION_LIST"
export const DeleteCollectionList = (oid) => action(DELETE_COLLECTION_LIST, { oid })

export const SET_DELETE_COLLECTION_LIST = "SET_DELETE_COLLECTION_LIST"
export const SetDeleteCollectionList = (data) => action(SET_DELETE_COLLECTION_LIST, { data })
