import { GET_NEARBY_SPOT_LIST, SET_NEARBY_SPOT_LIST, GET_PATH_NEARBY_SPOT_LIST, SET_PATH_NEARBY_SPOT_LIST } from "../actions/nearby"
const initState = {
	fetching: false,
	items: [],
	initItems: [],
	error: "",
}

let first = true
let firstFetch = []

export function nearbySpotList(state = initState, action) {
	switch (action.type) {
		case GET_NEARBY_SPOT_LIST:
			return {
				...state,
				fetching: true,
				items: [],
				error: "",
			}
		case SET_NEARBY_SPOT_LIST: {
			if (first) firstFetch = action.data.data
			first = false
			
			return {
				...state,
				fetching: false,
				items: action.data.data,
				initItems: firstFetch,
				error: "",
			}
		}

		default:
			return state
	}
}

export function pathNearbySpotList(state = initState, action) {
	switch (action.type) {
		case GET_PATH_NEARBY_SPOT_LIST:
			return {
				...state,
				fetching: true,
				items: [],
				error: "",
			}
		case SET_PATH_NEARBY_SPOT_LIST: {
			return {
				...state,
				fetching: false,
				items: action.data.data,
				error: "",
			}
		}

		default:
			return state
	}
}
