import * as APIUtil from "../util/like_api_util";



export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const REMOVE_LIKE = "REMOVE_LIKE";




const receiveAllLikes = (likes) => {
    return({
        type: RECEIVE_ALL_LIKES,
        likes: likes
    });
};

const receiveLike = (payload) => {
    return({
        type: RECEIVE_LIKE,
        like: payload.like,
        post: payload.post,
        user: payload.user
    });
};

const removeLike = (payload) => {
    debugger
    return({
        type: REMOVE_LIKE,
        like: payload.like,
        post: payload.post,
        user: payload.user
    });
};


export const fetchLikes = () => (dispatch) => {
    return(
        APIUtil.fetchLikes().then( (likes) => dispatch(receiveAllLikes(likes)))
    );
};

export const createLike = (id) => (dispatch) => {

    return(
        APIUtil.createLike(id).then( (payload) => dispatch(receiveLike(payload)))
    );
};



export const deleteLike = (id) => (dispatch) => {
    debugger
    return(
        APIUtil.deleteLike(id).then( (payload) => dispatch(removeLike(payload)))                //if I didn't type anything in the payload and left it as () , empty, instead of (payload), it wouldn't show the payload 
    );
};