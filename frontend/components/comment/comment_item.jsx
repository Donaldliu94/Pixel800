import React from 'react';



const CommentItem = ({comment}) => {

   

    return(
        <>

            <div className="comment-box">
                <div className="comment-first-box">
                    <div className="comment-username">
                        {comment.commentUsername}
                    </div>

                    <div className="comment-date">
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"][comment.created_at.slice(5, 7) - 1] + " " + comment.created_at.slice(8, 10) + ", " + comment.created_at.slice(0, 4)}
                    </div>
                </div>


                <div className="comment-body">
                    {comment.body} 
                </div>
            </div>


        </>
    );


}



export default CommentItem