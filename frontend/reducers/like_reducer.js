import merge from 'lodash/merge';
import { RECEIVE_LIKE, RECEIVE_ALL_LIKES, REMOVE_LIKE } from '../actions/like_action'
import { RECEIVE_ALL_POSTS } from '../actions/post_actions'


export default (state = {}, action) => {
    Object.freeze(state);
    // debugger

    const newState = merge({}, state);


    switch(action.type){
        case RECEIVE_ALL_LIKES:
            return action.likes;
        case RECEIVE_LIKE:
        // debugger
            return merge( {}, state, {[action.like.id]: action.like});
        case RECEIVE_ALL_POSTS:
            // debugger
            return Object.assign({}, action.likes);                         //would I need to merge state into this? // 
            // return action.likes
            // this is where my payload.likes was defined, i was returning just action.likes
        case REMOVE_LIKE:

        delete newState[action.like.id]
        return newState
        default:
            return state;
    }

}