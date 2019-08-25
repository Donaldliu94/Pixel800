import * as APIUtil from "../util/comment_api_util";


export const RECEIVE_COMMENT = "RECEIVE_COMMENT";


const receiveComment = (payload) => {
    return({
        type: RECEIVE_COMMENT,
        comment: payload.comment,
        like: payload.like,
        
    })
}