import { combineReducers } from 'redux';
import userReducer from './user_reducer'
import postReducer from './post_reducer'






const entitiesReducer = combineReducers({
    users: userReducer,
    posts: postReducer
});



export default entitiesReducer;