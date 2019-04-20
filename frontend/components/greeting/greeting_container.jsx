import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import {createPost} from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_action';


const mapStateToProps = (state) => {
    // debugger
    return {
        currentUser: state.entities.users[state.session.id],
        modalState: state.ui.modal
    };
};


const mapDispatchToProps = (dispatch) => {
    return({
        logout: () => dispatch(logout()),
        createPost: (post) =>dispatch(createPost(post)),
        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal())
    });
};


export default connect(mapStateToProps, mapDispatchToProps)(Greeting);