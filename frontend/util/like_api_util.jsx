


export const fetchLikes = () => {
    return(
        $.ajax({
            method: "GET",
            url: "api/likes"
        })
    );
};



export const createLike = (id) => {
    debugger
    return(
        $.ajax({
            method: "POST",
            url: "api/likes",
            data: {post_id: id}
        })
    );
};



export const deleteLike = (id) => {
    return(
        $.ajax({
            method: "DELETE",
            url: `api/likes/${id}`
        })
    );
};
