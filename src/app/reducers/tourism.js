import { GET_AUTO_CITY_LIST, SET_AUTO_CITY_LIST, GET_TOURISM_LIST, SET_TOURISM_LIST, GET_DETAIL_LIST, SET_DETAIL_LIST } from "../actions/tourism"
const initState = {
	fetching: false,
	items: [],
	error: "",
}

export function autoCityList(state = initState, action) {
	switch (action.type) {
		case GET_AUTO_CITY_LIST:
			return {
				...state,
				fetching: true,
				items: [],
				error: "",
			}
		case SET_AUTO_CITY_LIST:
			return {
				...state,
				fetching: false,
				items: action.data.data,
				error: "",
			}

		default:
			return state
	}
}

export function tourismList(state = initState, action) {
	switch (action.type) {
		case GET_TOURISM_LIST:
			return {
				...state,
				fetching: true,
				count: 0,
				items: [],
				error: "",
			}
		case SET_TOURISM_LIST:
			return {
				...state,
				fetching: false,
				count: Math.ceil(action.data.total / 32),
				items: action.data.data,
				error: "",
			}

		default:
			return state
	}
}

export function detailList(state = initState, action) {
	switch (action.type) {
		case GET_DETAIL_LIST:
			return {
				...state,
				fetching: true,
				items: [],
				error: "",
			}
		case SET_DETAIL_LIST:
			return {
				...state,
				fetching: false,
				items: action.data.data[0],
				error: "",
			}

		default:
			return state
	}
}