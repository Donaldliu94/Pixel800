import { connect } from 'react-redux';
import Comment from './comment';
import { createComment, deleteComment } from '../../actions/comment_action';




const mapStateToProps = (state, ownProps) => {
    return{
        currentUser: state.entities.users[state.session.id],
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        createComment: (comment_id) => dispatch(createComment(comment_id)),
        deleteComment: (user_id) => dispatch(deleteComment(user_id)),
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Comment);
