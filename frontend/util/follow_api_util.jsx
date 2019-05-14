


export const createFollow = (id) => {
    return(
        $.ajax({
            method: "POST",
            url: "api/follows",
            data: {followed_id: id}
        })
    );
};




export const deleteFollow = (id) => {
    debugger
    return(
        $.ajax({
            method: "DELETE",
            url: `api/follows/${id}`
        })
    );
};