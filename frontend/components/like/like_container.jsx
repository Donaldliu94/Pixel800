import Like from './like';
import PostIndexItem from '../post/post_index_item'
import { createLike } from '../../actions/like_action'




const mapStateToProps = (state) => {
    return {

    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        createLike: (like) => dispatch(createLike(like))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);