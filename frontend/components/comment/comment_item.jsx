import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const CommentItem = ({comment, deleteComment}) => {

    return(
        <>

            <div className="comment-box">
                <div className="comment-top-box">
                    <div className="comment-username">
                        {comment.commentUsername}
                    </div>

                    <div className="comment-date">
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"][comment.created_at.slice(5, 7) - 1] + " " + comment.created_at.slice(8, 10) + ", " + comment.created_at.slice(0, 4)}
                    </div>
                </div>


                <div className="comment-bottom-box">
                    <div className="comment-body">
                        {comment.body} 
                    </div>

                    <div className="icon-comment-delete">
                        <span onClick={ () => deleteComment(comment.id)}><FontAwesomeIcon icon={['far', 'trash-alt']} /></span>
                    </div>
                </div>
            </div>


        </>
    );


}



export default CommentItem