import { GET_HOTSPOT_LIST, SET_HOTSPOT_LIST, GET_HOTSPOT_AREA_LIST, SET_HOTSPOT_AREA_LIST, GET_HOTRES_AREA_LIST, SET_HOTRES_AREA_LIST, GET_HOTHOTEL_AREA_LIST, SET_HOTHOTEL_AREA_LIST } from "../actions/hotSpot"

const initState = {
	fetching: false,
	items: [],
	error: "",
}

export function hotSpotList(state = initState, action) {
	switch (action.type) {
		case GET_HOTSPOT_LIST:
			return {
				...state,
				fetching: true,
				items: [],
				error: "",
			}
		case SET_HOTSPOT_LIST:
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

export function hotSpotAreaList(state = initState, action) {
	switch (action.type) {
		case GET_HOTSPOT_AREA_LIST:
			return {
				...state,
				fetching: true,
				items: [],
				error: "",
			}
		case SET_HOTSPOT_AREA_LIST:
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

export function hotResAreaList(state = initState, action) {
	switch (action.type) {
		case GET_HOTRES_AREA_LIST:
			return {
				...state,
				fetching: true,
				items: [],
				error: "",
			}
		case SET_HOTRES_AREA_LIST:
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

export function hotHotelAreaList(state = initState, action) {
	switch (action.type) {
		case GET_HOTHOTEL_AREA_LIST:
			return {
				...state,
				fetching: true,
				items: [],
				error: "",
			}
		case SET_HOTHOTEL_AREA_LIST:
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
