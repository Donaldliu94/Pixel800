import merge from 'lodash/merge';
import { RECEIVE_COMMENT, RECEIVE_ALL_COMMENTS, REMOVE_COMMENT } from '../actions/comment_action'
import { RECEIVE_ALL_POSTS } from '../actions/comment_action'


export default (state = {}, action) => {
    Object.freeze(state);

    const newState = merge({}, state);


    switch(action.type){
        case RECEIVE_ALL_COMMENTS:
            return action.comments
        case RECEIVE_COMMENT:
            debugger
            return merge( {}, state, {[action.comment.id]: action.comment});
        case REMOVE_COMMENT:
            delete newState[action.comment.id];
            return newState;
        default:
            return state;
    };
};