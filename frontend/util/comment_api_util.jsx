


export const fetchComments = () => {
    return(
        $.ajax({
            method: "GET",
            url: "api/comments"
        })
    );
};



export const createComment = (comment) => {
    comment.post_id = comment.get('comment[post_id]')
    return(
        $.ajax({
            method: "POST",
            url: `api/posts/${comment.post_id}/comments`,
            data: comment,
            contentType: false,
            processData: false,
        })
    );
};


export const deleteComment = (id) => {
    return(
        $.ajax({
            method: "DELETE",
            url: `api/comments/${id}`
        })
    );
};



export const patchComment = (comment) => {
    return(
        $.ajax({
            method: "PATCH",
            url: `api/comments/${comment.id}`,
            data: comment,
        })
    );
};

