import * as APIUtil from "../util/post_api_util";



export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const PATCH_POST = "PATCH_POST";



const receiveAllPosts = (payload) => {
    // debugger
    return({
        type: RECEIVE_ALL_POSTS,
        posts: payload.posts,
        users: payload.users,
        likes: payload.likes
    });
};



const receivePost = (post) => {
    return({
        type: RECEIVE_POST,
        post: post
    });
};



const removePost = (id) => {
    return({
        type: REMOVE_POST,
        postId: id
    });
};


export const clearPostErrors = () => {
    return({
        type: CLEAR_ERRORS
    });
};


export const patchPost = (post) => {
    return({
        type: RECEIVE_POST,
        post: post
    })
}




//thunk action creators

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
        APIUtil.deletePost(id).then( () => dispatch(removePost(id)))        // i had postId in the response which wasn't an iD, it was the return of render show which was an object, and we needed a number
    );
};


export const updatePost = (id, view) => (dispatch) => {
    return(
     APIUtil.patchPost(id, view).then( (post) => dispatch(patchPost(post)))   
    )
}