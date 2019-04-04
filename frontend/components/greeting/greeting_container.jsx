import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import {createPost} from '../../actions/post_actions'
import { upload_state } from '../../actions/upload_action';



const mapStateToProps = (state) => {
    // debugger
    return {
        currentUser: state.entities.users[state.session.id],
        upload_state: state.ui.upload
    };
};


const mapDispatchToProps = (dispatch) => {
    return({
        logout: () => dispatch(logout()),
        createPost: (post) =>dispatch(createPost(post))
    });
};


export default connect(mapStateToProps, mapDispatchToProps)(Greeting);