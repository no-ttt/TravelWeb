import { GET_TOURISM_LIST, SET_TOURISM_LIST } from "../actions/tourism"

const initState = {
	fetching: false,
	items: [],
	error: "",
}

export function tourismList(state = initState, action) {
	switch (action.type) {
		case GET_TOURISM_LIST:
			return {
				...state,
				fetching: true,
				items: [],
				error: "",
			}
		case SET_TOURISM_LIST:
			return {
				...state,
				fetching: false,
				items: action.data,
				error: "",
			}

		default:
			return state
	}
}