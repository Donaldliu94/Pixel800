



export const createComment = (id) => {
    return(
        $.ajax({
            method: "POST",
            url: "api/comments",
            data: {comment_id: id}
        })
    );
};


