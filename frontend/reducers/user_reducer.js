import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS } from '../actions/user_action';
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_action';





const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = merge({}, state);
    
    switch (action.type) { 

        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, state, {[action.currentUser.id]: action.currentUser})
            return newState;

        case RECEIVE_ALL_USERS:
            return action.users;

        case RECEIVE_ALL_POSTS:
        // debugger
            return action.users;     //this was a big bug that I didn't figure out
            // return Object.assign({}, state, action.users);
        
        case RECEIVE_LIKE:
        // debugger
            newState[action.like.user_id] = action.user;
            return newState;
        case REMOVE_LIKE:
            delete newState[action.user.id].like_ids
            newState[action.user.id].like_ids = action.user.like_ids;
            return newState;

        default:
            return state;
    }

};



export default usersReducer;