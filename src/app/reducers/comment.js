import { GET_COMMENT_LIST, SET_COMMENT_LIST, POST_ADD_COMMENT_LIST, SET_ADD_COMMENT_LIST, DELETE_COMMENT_LIST, SET_DELETE_COMMENT_LIST,
	PUT_COMMENT_LIKE_LIST, SET_COMMENT_LIKE_LIST } from "../actions/comment"

const initState = {
  fetching: false,
  items: [],
  error: "",
}

export function spotCommentList(state = initState, action) {
	switch (action.type) {
		case GET_COMMENT_LIST:
			return {
				...state,
				fetching: true,
				items: [],
				error: "",
			}
		case SET_COMMENT_LIST:
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

export function addSpotCommentList(state = initState, action) {
	switch (action.type) {
		case POST_ADD_COMMENT_LIST:
			return {
				...state,
				fetching: true,
				items: [],
				error: "",
			}
		case SET_ADD_COMMENT_LIST:
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

export function deleteCommentList(state = initState, action) {
	switch (action.type) {
		case DELETE_COMMENT_LIST:
			return {
				...state,
				fetching: true,
				items: [],
				error: "",
			}
		case SET_DELETE_COMMENT_LIST:
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

export function commentLikeList(state = initState, action) {
	switch (action.type) {
		case PUT_COMMENT_LIKE_LIST:
			return {
				...state,
				fetching: true,
				items: [],
				error: "",
			}
		case SET_COMMENT_LIKE_LIST:
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