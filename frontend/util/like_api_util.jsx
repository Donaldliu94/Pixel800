


export const fetchLikes = () => {
    return(
        $.ajax({
            method: "GET",
            url: "api/likes"
        })
    );
};



export const createLike = (id) => {
    return(
        $.ajax({
            method: "POST",
            url: "api/likes",
            data: {post_id: id}
        })
    );
};



export const deleteLike = (id) => {
    debugger
    return(
        $.ajax({
            method: "DELETE",
            url: `api/likes/${id}`
        })
    );
};
