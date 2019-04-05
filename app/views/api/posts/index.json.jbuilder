

@posts.each do |post|
    json.set! post.id do 
        json.extract! post, :id, :title, :description, :created_at
        json.photoUrl url_for(post.photo)
    end
end