import * as APIUtil from "../util/comment_api_util";


export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";



const receiveAllComments = (comments) => {
    return({
        type: RECEIVE_ALL_COMMENTS,
        comments: comments
    });
};


const receiveComment = (payload) => {
    return({
        type: RECEIVE_COMMENT,
        comment: payload.comment,
        like: payload.like,
        post: payload.post,
        user: payload.user
    });
};

const removeComment = (payload) => {
    return({
        type: REMOVE_COMMENT,
        comment: payload.comment,
        like: payload.like,
        post: payload.post,
        user: payload.user
    });
};


export const fetchComments = () => (dispatch) => {
    return(
        APIUtil.fetchComments().then( (comments) => dispatch(receiveAllComments(comments)))
    );
};


export const createComment = (comment) => (dispatch) => {
    return(
        APIUtil.createComment(comment).then( (comment) => dispatch(receiveComment(comment)))
    );
};


export const deleteComment = (id) => (dispatch) => {
    return(
        APIUtil.deleteComment(id).then( (payload) => dispatch(removeComment(payload)))
    );
};