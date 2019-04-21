import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';




const mapStateToProps = (state) => {
    // debugger
    return {
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        photos: Object.values(state.entities.posts) // by doing this you literally are paying attention to all the photos
    };
};


const mapDispatchToProps = (dispatch) => {
    return ({
        fetchPosts: () => dispatch(fetchPosts()),
        deletePost: (id) => dispatch(deletePost(id))
    });
};


export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);