import { GET_DETAIL_LIST, SET_DETAIL_LIST } from "../actions/detail"

const initState = {
	fetching: false,
	items: [],
	error: "",
	first: false,
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
				items: action.data,
				error: "",
				first: true,
			}

		default:
			return state
	}
}
