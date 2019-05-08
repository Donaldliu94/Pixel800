

    # json.like do 
    json.like do
        json.extract! @like, :id, :user_id, :post_id
    end
    # end
    json.post do
        json.extract! @post, :id, :title, :description, :created_at, :photographer_id, :like_ids
        json.photoUrl url_for(@post.photo)
        json.postUsername @post.user.username

    end

    json.user do 
        json.extract! @user, :id, :username, :like_ids
    end



# if i were to use like 3 and 5, I would have a like: { like: {user_id, post_id}}

# like: {
#     user_id: 89,
#     post_id: 76
# }

