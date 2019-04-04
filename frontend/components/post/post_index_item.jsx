import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





const PostIndexItem = ({photo}) => (

    <>
    <div className="PostIndexItem-photo">
        <div>
            <img className="photos" src={photo.photoUrl} alt={photo.title}></img>
        </div>

        <div className="PostIndexItem-photo-attributes">
            <div className="PostIndexItem-photo-title">
                {photo.title}
            </div>
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
    </div>    
    </>



);


export default PostIndexItem