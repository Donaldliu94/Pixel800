import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





const PostIndexItem = ({photo, currentUser}) => (

    <>
    <div className="PostIndexItem-photo">
        <div>
            <img className="photos" src={photo.photoUrl} alt={photo.title}></img>
        </div>

        <div className="PostIndexItem-photo-attributes">
            <div className="icon-heart">
                <FontAwesomeIcon icon={['far', 'heart']} />
            </div>

            <div className="icon-comment">
                <FontAwesomeIcon icon={['far', 'comment']} />
            </div>

            <div className="icon-plus-square">
                <FontAwesomeIcon icon={['far', 'plus-square']} />
            </div>
        </div>
        <div className="PostIndexItem-photo-title">
            {photo.title}
        </div>
        <div className="PostIndexItem-photo-username">
            by {currentUser.username}
        </div>
    </div>    
    </>



);


export default PostIndexItem