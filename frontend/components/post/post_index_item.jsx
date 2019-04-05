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
                by {currentUser.username} • {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"][photo.created_at.slice(5, 7) - 1]  + " " + photo.created_at.slice(8, 10) + ", " + photo.created_at.slice(0, 4)}
        </div>

    </div>    
    </>



);


export default PostIndexItem