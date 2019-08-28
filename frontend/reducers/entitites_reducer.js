import { combineReducers } from 'redux';
import userReducer from './user_reducer'
import postReducer from './post_reducer'
import likeReducer from './like_reducer'
import commentReducer from './comment_reducer'




const entitiesReducer = combineReducers({
    users: userReducer,
    posts: postReducer,
    likes: likeReducer,
    comments: commentReducer,
});



export default entitiesReducer;