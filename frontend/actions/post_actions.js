import * as APIUtil from "../util/post_api_util";



export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const CLEAR_ERRORS = "CLEAR_ERRORS";




const receiveAllPosts = (posts) => {
    return({
        type: RECEIVE_ALL_POSTS,
        posts: posts
    });
};



const receivePost = (post) => {
    return({
        type: RECEIVE_POST,
        post: post
    });
};



const removePost = (post) => {
    return({
        type: REMOVE_POST,
    });
};


export const clearPostErrors = () => {
    return({
        type: CLEAR_ERRPRS
    });
};







export const fetchPosts = () => (dispatch) => {
    return(
        APIUtil.fetchPosts().then( (posts) => dispatch(receiveAllPosts(posts)))
    );
};



export const fetchPost = (id) => (dispatch) => {
    return(
        APIUtil.fetchPost(id).then( (post) => dispatch(receivePost(post)))
    );
};



export const createPost = (post) => (dispatch) => {
    return(
        APIUtil.createPost(post).then( (post) => dispatch(receivePost(post)))
    );
};



export const deletePost = (id) => (dispatch) => {
    return(
        APIUtil.deletePost(id).then( (post) => dispatch(removePost(post)))
    );
};