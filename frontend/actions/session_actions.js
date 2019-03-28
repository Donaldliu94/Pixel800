import * as APIUtil from "../util/session_api_util";



export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT CURRENT USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";



const receiveCurrentUser = (currentUser) => {
    return({
        type: RECEIVE_CURRENT_USER,
        currentUser: currentUser
    });   
};


const logoutCurrentUser = () => {
    return({
        type: LOGOUT_CURRENT_USER
    });
};


const receiveErrors = (errors) => {
    // debugger
    return({
        type: RECEIVE_SESSION_ERRORS,
        errors: errors
    });
};





export const signup = (user) => (dispatch) => {
    // debugger
    return(
        APIUtil.signup(user).then( (currentUser) => dispatch(receiveCurrentUser(currentUser)), error => dispatch(receiveErrors(error.responseJSON)))
    );
};



export const login = (user) => (dispatch) => {
    // debugger
    return(
        APIUtil.login(user).then((user) => dispatch(receiveCurrentUser(user)), error => dispatch(receiveErrors(error.responseJSON)))
    );
};


export const logout = () => (dispatch) => {

    return(
        APIUtil.logout().then( (user) => dispatch(logoutCurrentUser()))    
    );
};