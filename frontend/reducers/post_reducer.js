import merge from 'lodash/merge';
import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions'
import { RECEIVE_ALL_USERS } from '../actions/user_action'
import { RECEIVE_LIKE, RECEIVE_ALL_LIKES, REMOVE_LIKE } from '../actions/like_action'
import { RECEIVE_COMMENT } from '../actions/comment_action'

export default (state = {}, action) => {
    Object.freeze(state);
    const newState = merge({}, state);

    switch(action.type){
        case RECEIVE_ALL_POSTS:
            return action.posts;
        case RECEIVE_POST:
            debugger
            return merge({}, state, {[action.post.id]: action.post});
        case REMOVE_POST:
            delete newState[action.postId];
            return newState;


        case RECEIVE_LIKE:
            // newState[action.like.post_id].liker_ids.push({id: action.like.id, user: action.like.user_id})       //this accesses the specific post and then access the array in that post
            // debugger
            newState[action.post.id] = action.post
            return newState
        case REMOVE_LIKE:
            //is it bad practice to do this?
            delete newState[action.post.id]
            newState[action.post.id] = action.post
            return newState;

        case RECEIVE_COMMENT:
            debugger
            // newState[action.post.id] = action.post
            // return merge({}, state, {})
        default:
            return state;
    }

}