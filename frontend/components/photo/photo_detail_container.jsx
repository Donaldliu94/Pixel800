import { connect } from 'react-redux';
import PhotoDetail from './photo_detail';
import { logout } from '../../actions/session_actions';
import {fetchPost, deletePost} from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_action';
import { fetchUsers } from '../../actions/user_action';
import { createLike, deleteLike } from '../../actions/like_action';





const mapStateToProps = (state, ownProps) => {
    // debugger
    const photo_object = state.entities.posts[ownProps.match.params.postId]
    //  || {};

    return{
        photo: photo_object,
        // prevPhoto: state.entities.posts[ownProps.match.params.postId],
        // nextPhoto: state.entities.posts[ownProps.match.params.postId]
        currentUser: state.entities.users[state.session.id],
        modalState: state.ui.modal,
        users: state.entities.users,
    };
};



const mapDispatchToProps = (dispatch) => {
    return{
        fetchPost: (id) => dispatch(fetchPost(id)),
        fetchUsers: () => dispatch(fetchUsers()),
        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal()),
        deletePost: (id) => dispatch(deletePost(id)),
        logout: () => dispatch(logout()),

        createLike: (user_id, photo_id) => dispatch(createLike(user_id, photo_id)),
        deleteLike: (user_id) => dispatch(deleteLike(user_id))
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(PhotoDetail);