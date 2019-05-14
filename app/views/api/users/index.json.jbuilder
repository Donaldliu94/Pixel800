



json.users do
    @users.each do |user|
        json.set! user.id do
            json.extract! user, :id, :username, :like_ids, :follower_ids, :followed_ids
        end
    end
end




# json.users do
#     @users.each do |user|
#         json.set! user.id do
#             json.partial! 'api/users/user', user: user
#         end
#     end
# end