import { POST_FILE_LIST, SET_FILE_LIST } from "../actions/file"

const initState = {
	fetching: false,
	items: [],
	error: "",
}

export function fileList(state = initState, action) {
	switch (action.type) {
		case POST_FILE_LIST:
			return {
				...state,
				fetching: true,
				items: [],
				error: "",
			}
		case SET_FILE_LIST:
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
