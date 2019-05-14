class Api::FollowsController < ApplicationController

    def create
        # @follow = Follow.new(follow_params)
        @follow = Follow.new
        @follow.followed_id = params[:followed_id]
        @follow.follower_id = current_user.id
        if @follow.save
            render :show
        else
            render json: @follow.errors.full_messages, status: 401
        end
    end


    def destroy
        @follow = Follow.where(follower_id: current_user.id).find_by(followed_id: params[:id])
        if @follow
            @follow.destroy
            render :show
        else
            render ["Could not find picture"]
        end

    end



private

    def follow_params
        params.require(:follow).permit(:follower_id, :followed_id)
    end




end
