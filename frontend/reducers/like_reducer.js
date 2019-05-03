import merge from 'lodash/merge';
import { RECEIVE_LIKE, RECEIVE_ALL_LIKES } from '../actions/like_action'


export default (state = {}, action) => {
    Object.freeze(state);
    // debugger
    switch(action.type){
        case RECEIVE_ALL_LIKES:
            return action.likes;
        case RECEIVE_LIKE:
            return merge( {}, state, {[action.like.id]: action.like});
        default:
            return state;
    }

}