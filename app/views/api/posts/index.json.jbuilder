json.array! @posts do |post|
    json.extract! post, :id, :title, :description
    json.photoUrl url_for(post.photo)
end