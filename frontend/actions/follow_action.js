import * as APIUtil from "../util/follow_api_util";




export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";



const receiveFollow = (payload) => {
    return({
        type: RECEIVE_FOLLOW,
        follow: payload.follow,
    });
};


const removeFollow = (payload) => {
    debugger
    return({
        type: REMOVE_FOLLOW,
        follow: payload.follow,
    });
};


export const createFollow = (id) => (dispatch) => {
    return(
        APIUtil.createFollow(id).then( (payload) => dispatch(receiveFollow(payload)))
    );
};



export const deleteFollow = (id) => (dispatch) => {
    debugger
    return(
        APIUtil.deleteFollow(id).then( (payload) => dispatch(removeFollow(payload)))
    );
};