import merge from 'lodash/merge';
import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions'
import { RECEIEVE_ALL_USERS } from '../actions/user_action'


export default (state = {}, action) => {
    Object.freeze(state);
    // debugger
    switch(action.type){
        case RECEIVE_ALL_POSTS:
        // debugger
            return action.posts;
        case RECEIVE_POST:
        // debugger
            // console.log("my post", action.post);
            // console.log("my state", state);
            return merge({}, state, {[action.post.id]: action.post});
        case REMOVE_POST:
        // debugger
            const newState = merge({}, state);
            delete newState[action.postId];
            return newState;
        default:
            return state;
    }

}