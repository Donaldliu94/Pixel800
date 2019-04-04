import { combineReducers } from 'redux';
import uploadReducer from './upload_reducer'


const uiReducer = combineReducers({
    upload: uploadReducer
});


export default uiReducer