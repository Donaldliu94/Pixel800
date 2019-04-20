





export const fetchPosts = () => {
    return(
        $.ajax({
            method: "GET",
            url: "api/posts"
        })
    );
};


export const fetchPost = (id) => {
    return(
        $.ajax({
            method: "GET",
            url: `api/posts/${id}`          //why is this not postId?
        })
    );
}


export const createPost = (post) => {
    return(
        $.ajax({
            method: "POST",
            url: "api/posts",
            data: post,
            contentType: false,
            processData: false
        })
    );
};



export const deletePost = (id) => {

    return(
        $.ajax({
            method: "DELETE",
            url: `api/posts/${id}`
        })
    );
};



