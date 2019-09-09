import React from 'react';



const CommentItem = ({comment}) => {

    debugger
   

    return(
        <div>
        {comment.body}    {comment.commentUsername}
        </div>

    );


}



export default CommentItem