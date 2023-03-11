import action from "../lib/createAction"

// 上傳檔案 (會員頭貼, 評論照片)
export const POST_FILE_LIST = "POST_FILE_LIST"
export const PostFileList = (file) => action(POST_FILE_LIST, { file })

export const SET_FILE_LIST = "SET_FILE_LIST"
export const SetFileList = (data) => action(SET_FILE_LIST, { data })