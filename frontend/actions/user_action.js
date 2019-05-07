import * as APIUtil from "../util/user_api_util";


export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";



const receiveAllUsers = (payload) => {
    // debugger
    return({
        type: RECEIVE_ALL_USERS,
        users: payload.users,
        posts: payload.posts
    });
};



export const fetchUsers = () => (dispatch) => {
    // debugger
    return(
        APIUtil.fetchUsers().then( (users) => dispatch(receiveAllUsers(users)))
    );
};

