import action from "../lib/createAction"

// 會員登入 check
export const GET_LOGIN_LIST = "GET_LOGIN_LIST"
export const GetLoginList = () => action(GET_LOGIN_LIST, { })

export const SET_LOGIN_LIST = "SET_LOGIN_LIST"
export const SetLoginList = (data) => action(SET_LOGIN_LIST, { data })


// 更新會員資訊
export const PUT_USER_LIST = "PUT_USER_LIST"
export const PutUserList = (cName, cDes, email, city, birthday, aid, changeAvatar) => action(PUT_USER_LIST, { cName, cDes, email, city, birthday, aid, changeAvatar })

export const SET_USER_LIST = "SET_USER_LIST"
export const SetUserList = (data) => action(SET_USER_LIST, { data })


