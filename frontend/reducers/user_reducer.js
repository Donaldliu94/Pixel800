import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS } from '../actions/user_action';
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_action';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_action';




const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = merge({}, state);

    switch (action.type) { 

        case RECEIVE_CURRENT_USER:
            // const currentUser = action.currentUser;
            // currentUser.followed_id = new Set(currentUser.followed_id);
            // currentUser.follower_id = new Set(currentUser.follower_id);
            // newState = Object.assign({}, state, {[action.currentUser.id]: currentUser});

            newState = Object.assign({}, state, {[action.currentUser.id]: action.currentUser})
            return newState;

        case RECEIVE_ALL_USERS:
            return action.users;

        case RECEIVE_ALL_POSTS:
            return Object.assign({},state, action.users);     //this was a big bug that I didn't figure out
            // return Object.assign({}, state, action.users);
        
        case RECEIVE_LIKE:
            newState[action.like.user_id] = action.user;
            return newState;
        case REMOVE_LIKE:
            delete newState[action.user.id].like_ids
            newState[action.user.id].like_ids = action.user.like_ids;
            return newState;

        case RECEIVE_FOLLOW:
            newState[action.follow.follower_id].followed_ids.push(action.follow.followed_id);
            return newState;
        case REMOVE_FOLLOW:
            let followedIds = newState[action.follow.follower_id].followed_ids
            
            newState[action.follow.follower_id].followed_ids = newState[action.follow.follower_id].followed_ids.filter( (id) => {
                if (id !== action.follow.followed_id){
                    return id
                }
            })
            return newState;

            // let followedIds = newState[action.follow.follower_id].followed_ids
            // followedIds.splice(followedIds.indexOf(action.follow.followed_id), 1)
            // newState[action.follow.follower_id].followed_ids = followedIds
            // return newState;
        default:
            return state;
    }

};



export default usersReducer;