import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS } from '../actions/user_action';
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';





const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) { 

        case RECEIVE_CURRENT_USER:
            let newState = Object.assign({}, state, {[action.currentUser.id]: action.currentUser})
            return newState;

        case RECEIVE_ALL_USERS:
            return action.users;

        case RECEIVE_ALL_POSTS:
        debugger
            return action.users;
        
        default:
            return state;
    }

};



export default usersReducer;