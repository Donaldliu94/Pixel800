import { connect } from 'react-redux';
import PhotoDetail from './photo_detail';
import {fetchPost, deletePost} from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_action';





const mapStateToProps = (state, ownProps) => {
    debugger
    const photo_object = state.entities.posts[ownProps.match.params.postId]
    //  || {};

    return{
        photo: photo_object,
        // prevPhoto: state.entities.posts[ownProps.match.params.postId],
        // nextPhoto: state.entities.posts[ownProps.match.params.postId]
        currentUser: state.entities.users[state.session.id],
        modalState: state.ui.modal
    };
};



const mapDispatchToProps = (dispatch) => {
    return{
        fetchPost: (id) => dispatch(fetchPost(id)),
        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal()),
        deletePost: (id) => dispatch(deletePost(id))
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(PhotoDetail);