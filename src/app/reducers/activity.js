import { GET_ACTIVITY_LIST, SET_ACTIVITY_LIST, GET_ACTIVITY_AREA_LIST, SET_ACTIVITY_AREA_LIST, GET_ACTIVITY_DETAIL_LIST, SET_ACTIVITY_DETAIL_LIST } from "../actions/activity"
const initState = {
	fetching: false,
	items: [],
	error: "",
}

export function activityList(state = initState, action) {
	switch (action.type) {
		case GET_ACTIVITY_LIST:
			return {
				...state,
				fetching: true,
				items: [],
				error: "",
			}
		case SET_ACTIVITY_LIST:
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

export function activityAreaList(state = initState, action) {
	switch (action.type) {
		case GET_ACTIVITY_AREA_LIST:
			return {
				...state,
				fetching: true,
				items: [],
				error: "",
			}
		case SET_ACTIVITY_AREA_LIST:
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

export function activityDetailList(state = initState, action) {
	switch (action.type) {
		case GET_ACTIVITY_DETAIL_LIST:
			return {
				...state,
				fetching: true,
				items: [],
				error: "",
			}
		case SET_ACTIVITY_DETAIL_LIST:
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
