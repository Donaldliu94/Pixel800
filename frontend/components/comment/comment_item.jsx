import React from 'react';



const CommentItem = ({comment}) => {

   

    return(
        <div className="comment-box">

            <div className="comment-body">
                {comment.body} 
            </div>

            <div className="comment-username">
                By: {comment.commentUsername}
            </div>

        </div>
    );


}



export default CommentItem