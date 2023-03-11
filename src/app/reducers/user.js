import { GET_LOGIN_LIST, SET_LOGIN_LIST, PUT_USER_LIST, SET_USER_LIST } from "../actions/user"

const initState = {
	fetching: false,
	items: [],
	error: "",
}

export function loginList(state = initState, action) {
	switch (action.type) {
		case GET_LOGIN_LIST:
			return {
				...state,
				fetching: true,
				items: [],
				error: "",
			}
		case SET_LOGIN_LIST:
			return {
				...state,
				fetching: false,
				items: action.data.data[0],
				avatar: action.data.avatarAlter === "null" ? action.data.data[0].avatarURL : action.data.avatarAlter,
				loginStaus: action.data.data !== "null" ? "login" : "logout",
				error: "",
			}

		default:
			return state
	}
}

export function userList(state = initState, action) {
	switch (action.type) {
		case PUT_USER_LIST:
			return {
				...state,
				fetching: true,
				items: [],
				error: "",
			}
		case SET_USER_LIST:
			return {
				...state,
				fetching: false,
				items: action.data.success,
				error: "",
			}

		default:
			return state
	}
}
