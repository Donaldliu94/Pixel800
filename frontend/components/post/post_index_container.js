import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../actions/post_actions'




const mapStateToProps = (state) => {
    debugger
    return {
        currentUser: state.entities.users[state.session.id],
        photos: Object.values(state.entities.posts)
    };
};


const mapDispatchToProps = (dispatch) => {
    return ({
        fetchPosts: () => dispatch(fetchPosts())
    });
};


export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);