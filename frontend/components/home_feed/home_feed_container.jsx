import { connect } from 'react-redux';
import HomeFeed from './home_feed';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { createLike, deleteLike } from '../../actions/like_action'




const mapStateToProps = (state) => {
    // debugger
    return {
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        photos: Object.values(state.entities.posts), // by doing this you literally are paying attention to all the photos
        likes: state.entities.likes
    };
};


const mapDispatchToProps = (dispatch) => {
    return ({
        fetchPosts: () => dispatch(fetchPosts()),
        deletePost: (id) => dispatch(deletePost(id)),

        createLike: (user_id, photo_id) => dispatch(createLike(user_id, photo_id)),
        deleteLike: (user_id) => dispatch(deleteLike(user_id))
    });
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeFeed);