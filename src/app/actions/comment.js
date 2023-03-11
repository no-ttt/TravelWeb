import action from "../lib/createAction"

// 取得景點評論
export const GET_COMMENT_LIST = "GET_COMMENT_LIST"
export const GetCommentList = (oid) => action(GET_COMMENT_LIST, { oid })

export const SET_COMMENT_LIST = "SET_COMMENT_LIST"
export const SetCommentList = (data) => action(SET_COMMENT_LIST, { data })


// 添加景點評論
export const POST_ADD_COMMENT_LIST = "POST_ADD_COMMENT_LIST"
export const PostAddCommentList = (oid, cDes, star5, imgs) => action(POST_ADD_COMMENT_LIST, { oid, cDes, star5, imgs })

export const SET_ADD_COMMENT_LIST = "SET_ADD_COMMENT_LIST"
export const SetAddCommentList = (data) => action(SET_ADD_COMMENT_LIST, { data })


// 刪除景點評論
export const DELETE_COMMENT_LIST = "DELETE_COMMENT_LIST"
export const DeleteCommentList = (cid) => action(DELETE_COMMENT_LIST, { cid })

export const SET_DELETE_COMMENT_LIST = "SET_DELETE_COMMENT_LIST"
export const SetDeleteCommentList = (data) => action(SET_DELETE_COMMENT_LIST, { data })


// 對景點評論按讚
export const PUT_COMMENT_LIKE_LIST = "PUT_COMMENT_LIKE_LIST"
export const PutCommentLikeList = (cid) => action(PUT_COMMENT_LIKE_LIST, { cid })

export const SET_COMMENT_LIKE_LIST = "SET_COMMENT_LIKE_LIST"
export const SetCommentLikeList = (data) => action(SET_COMMENT_LIKE_LIST, { data })
