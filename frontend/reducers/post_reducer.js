import merge from 'lodash/merge';
import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions'



export default (state = {}, action) => {
    Object.freeze(state);
    // debugger
    switch(action.type){
        case RECEIVE_ALL_POSTS:
        // debugger
            return action.posts
        case RECEIVE_POST:
        // debugger
            return merge({}, state, {[action.post.id]: action.post})
        case REMOVE_POST:
        // debugger
            let newState = merge({}, state)
            delete newState(action.postId)
            return newState
        default:
            return state
    }

}