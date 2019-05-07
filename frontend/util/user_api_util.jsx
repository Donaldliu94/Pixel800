export const fetchUser = (id) => {
    $.ajax({
        method: "GET",
        url: `api/users/${id}`
    });
};



export const fetchUsers = () => {
    return ($.ajax({
        method: "GET",
        url: 'api/users/'
    }));
};

