import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions'
import { closeModal } from '../../actions/modal_action'




const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        // currentUser: state.session.id

    };
};


const mapDispatchToProps = (dispatch) => {
    return ({
        createPost: (post) => dispatch(createPost(post)),
        closeModal: () => dispatch(closeModal())
    });
};


export default connect(mapStateToProps, mapDispatchToProps)(PostForm);