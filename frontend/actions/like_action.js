import * as APIUtil from "../util/like_api_util";



export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES"
export const REMOVE_LIKE = "REMOVE_LIKE"




const receiveAllLikes = (likes) => {
    return({
        type: RECEIVE_ALL_LIKES,
        likes: likes
    })
}

const receiveLike = (like) => {
    debugger
    return({
        type: RECEIVE_LIKE,
        like: like
    })
}

const removeLike = (id) => {
    return({
        type: REMOVE_LIKE,
        likeId: id
    })
}


export const fetchLikes = () => (dispatch) => {
    return(
        APIUtil.fetchLikes().then( (likes) => dispatch(receiveAllLikes(likes)))
    )
}

export const createLike = (like) => (dispatch) => {
    debugger
    return(
        APIUtil.createLike(like).then( (like) => dispatch(receiveLike(like)))
    );
};



export const deleteLike = (id) => (dispatch) => {
    return(
        APIUtil.deleteLike(id).then( () => dispatch(removeLike(id)))
    )
}