import action from "../lib/createAction"

export const GET_TOURISM_LIST = "GET_TOURISM_LIST"
export const GetTourismList = (city = "Taipei") => action(GET_TOURISM_LIST, { city })

export const SET_TOURISM_LIST = "SET_TOURISM_LIST"
export const SetTourismList = (data) => action(SET_TOURISM_LIST, { data })
