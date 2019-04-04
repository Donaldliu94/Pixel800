json.extract! post, :id, :photographer_id, :title, :description     
json.photoUrl url_for(post.photo)