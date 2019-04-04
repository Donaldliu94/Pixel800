import { UPLOADED_FORM } from '../actions/upload_action'

export default (state = false, action) => {
    Object.freeze(state);

    switch(action.type){
    case UPLOADED_FORM:
        return true
    default:
        return false 
    }

}